import ENV from "./envEnum";

const environment = import.meta.env.VITE_ENVIRONMENT || VITE_ENVIRONMENT;
const baseAPI =
  environment === ENV.DEV ? "/api/" : "http://localhost:5000/api/";

const API = {
  LOGIN: "auth/signin",
  SIGNUP: "auth/signup",
  LOGOUT: "auth/signout",
  GET_CONVERSATIONS: "conversation/getConversations",
  GET_MESSAGES: "message/getAllMessages",
  SEND_MESSAGE: "message/send",
};

Object.keys(API).forEach((key) => {
  API[key] = baseAPI + API[key];
});

export default API;
