import ENV from "./envEnum";

const environment = import.meta.env.VITE_ENVIRONMENT || VITE_ENVIRONMENT;
const baseAPI =
  environment === ENV.DEV
    ? "/api/"
    : "https://public-chat-app-be.onrender.com/api/";

const API = {
  LOGIN: "auth/signin",
  SIGNUP: "auth/signup",
  LOGOUT: "auth/signout",
  GET_CONVERSATIONS: "conversation/getConversations",
  GET_MESSAGES: "message/getAllMessages",
  SEND_MESSAGE: "message/send",
  SEARCH_CONVERSATIONS: "conversation/searchConversations",
  QUERY_TWO_USERS_CONVERSATION: "conversation/findConversation",
  CREATE_SINGLE_CONVERSATION: "conversation/createConversation",
};

Object.keys(API).forEach((key) => {
  API[key] = baseAPI + API[key];
});

export default API;
