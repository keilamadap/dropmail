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
import { IMail } from "./types/mailType";
import NotificationButton from "./components/notification/NotificationButton";

type SessionData = {
  id: string;
  addresses: { address: string }[];
  expiresAt: string;
};

function App() {
  const mobile = useMedia("(max-width: 1000px)");
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [mails, setMails] = useState<IMail[]>([]);
  const [lastReceivedMailId, setLastReceivedMailId] = useState<string | null>(
    null
  );

  const storageAvailable = localStorageAvailable();

  const handleCreateSession = async () => {
    try {
      const response = await api.post("/", { query: GRAPHQL_MUTATION });
      const data = response.data.data.introduceSession;
      localStorage.setItem("sessionData", JSON.stringify(data));
      setSessionData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleExpiredData = () => {
    const storedData = storageAvailable
      ? localStorage.getItem("sessionData")
      : null;
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const expiresAt = new Date(parsedData.expiresAt);
      if (expiresAt >= new Date()) {
        setSessionData(parsedData);
      } else {
        localStorage.removeItem("sessionData");
      }
    }
  };

  const handleIncomingMail = async () => {
    try {
      let graphqlQuery;
      const queryOptions = {
        sessionId: sessionData?.id,
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

  useEffect(() => {
    handleExpiredData();
    handleCreateSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.MainContainer $ismobile={mobile ? true : undefined}>
      <S.StyledStack>
        <NotificationButton lastReceivedMailId={lastReceivedMailId} />
      </S.StyledStack>
      <TemporaryMail
        randomEmail={sessionData ? sessionData.addresses[0].address : "-"}
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
