export interface IMail {
  toAddrOrig: string;
  toAddr: string;
  text: string;
  receivedAt: string;
  rawSize: number;
  raw: string;
  id: string;
  html: string | null;
  headerSubject: string;
  headerFrom: string;
  fromAddr: string;
  downloadUrl: string;
  decodeStatus: string;
}

export type MailProps = {
  mails: IMail[];
};
