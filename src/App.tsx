import useMedia from "./hooks/useMedia";
import { useState, useEffect } from "react";
import localStorageAvailable from "./utils/localStorageAvailable";
import api from "./services/axios/axios";
import {
  GRAPHQL_INCOMINGMAIL,
  GRAPHQL_MUTATION,
} from "./services/queries/queries";
import TemporaryMail from "./components/TemporaryMail/TemporaryMail";
import MailList from "./components/Inbox/List/MailList";
import MailContent from "./components/Inbox/MailContent/MailContent";
import * as S from "./styles/mainStyle";
import { Mail } from "./types/mailType";

function App() {
  const mobile = useMedia("(max-width: 1000px)");
  const [sessionId, setSessionId] = useState<string>("");
  const [randomEmail, setRandomEmail] = useState<string>("");
  const [mails, setMails] = useState<Mail[]>([]);
  const [lastReceivedMailId, setLastReceivedMailId] = useState<string | null>(
    null
  );

  const storageAvailable = localStorageAvailable();

  const handleCreateSession = async () => {
    try {
      const response = await api.post("/", { query: GRAPHQL_MUTATION });
      const data = response.data.data.introduceSession;
      localStorage.setItem("sessionId", JSON.stringify(data.id));
      localStorage.setItem(
        "randomEmail",
        JSON.stringify(data.addresses[0].address)
      );
      localStorage.setItem("sessionData", JSON.stringify(data));

      setSessionId(data.id);
      setRandomEmail(data.addresses[0].address);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleExpiredData = () => {
    const storedId = storageAvailable ? localStorage.getItem("sessionId") : "";
    if (storedId) {
      const response = storageAvailable
        ? localStorage.getItem("sessionData")
        : "";
      if (response) {
        const parsedResponse = JSON.parse(response);
        const expiresAt = new Date(parsedResponse.expiresAt);
        if (expiresAt <= new Date()) {
          localStorage.removeItem("sessionId");
          localStorage.removeItem("sessionData");
          setSessionId("");
          setRandomEmail("");
        }
      }
    }
  };

  const handleIncomingMail = async () => {
    try {
      let graphqlQuery;
      const queryOptions = {
        sessionId,
        lastReceivedMailId,
      };

      graphqlQuery = GRAPHQL_INCOMINGMAIL(queryOptions);

      const response = await api.post("/", { query: graphqlQuery });
      const newMails = response?.data?.session?.mails;
      if (newMails && newMails.length > 0) {
        setLastReceivedMailId(newMails[newMails.length - 1].id);
        setMails(newMails);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const checkIncomingMailPeriodically = () => {
    setInterval(async () => {
      await handleIncomingMail();
    }, 15000);
  };

  checkIncomingMailPeriodically();

  useEffect(() => {
    const storedId = storageAvailable
      ? localStorage.getItem("sessionId")
      : null;
    if (storedId) {
      setSessionId(JSON.parse(storedId));
    }
    const storedRandomEmail = storageAvailable
      ? localStorage.getItem("randomEmail")
      : null;
    if (storedRandomEmail) {
      setRandomEmail(JSON.parse(storedRandomEmail));
    }
  }, []);

  useEffect(() => {
    handleExpiredData();
    handleCreateSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.MainContainer $ismobile={mobile ? true : undefined}>
      <TemporaryMail
        randomEmail={randomEmail}
        handleIncomingMail={handleIncomingMail}
      />
      <S.StyledDiv $ismobile={mobile ? true : undefined}>
        <MailList mails={mails} />
        <MailContent mails={mails} />
      </S.StyledDiv>
    </S.MainContainer>
  );
}

export default App;
