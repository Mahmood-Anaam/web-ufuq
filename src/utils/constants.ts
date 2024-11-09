export const APP_NAME: string = "UFUQ";

const PRODUCTION_DOMAIN: string = "https://web-ufuq.vercel.app";
const DEVELOPMENT_DOMAIN: string = "http://localhost:3000";

export const DOMAIN: string =
  process.env.NODE_ENV === "production"
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;
