type IncomingMail = {
  sessionId: string;
  lastReceivedMailId?: string | null;
};

export const GRAPHQL_MUTATION = `
  mutation {
    introduceSession {
      id
      expiresAt
      addresses {
        address
      }
    }
  }
`;

export const GRAPHQL_INCOMINGMAIL = ({
  sessionId,
  lastReceivedMailId,
}: IncomingMail) => {
  if (lastReceivedMailId) {
    return `
      query {
        session(id: "${sessionId}") {
          mailsAfterId(mailId: "${lastReceivedMailId}") {
            rawSize
            fromAddr
            toAddr
            downloadUrl
            text
            headerSubject
          }
        }
      }
    `;
  } else {
    return `
      query {
        session(id: "${sessionId}") {
          mails {
            rawSize
            fromAddr
            toAddr
            downloadUrl
            text
            headerSubject
          }
        }
      }
    `;
  }
};
