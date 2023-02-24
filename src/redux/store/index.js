import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import giftData from "../reducers/giftCard";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import signInToken from "../reducers/login.js";
import userChat from "../reducers/userChat";
import messages from "../reducers/getAllChatMessages";
import userPreference from "../reducers/userPreference";
import userData from "../reducers/userData";
import users from "../reducers/usersReducer.js";
import postMessages from "../reducers/postMessage";
import registerUser from "../reducers/registerUser";
import getMe from "../reducers/meReducer";
import adminSignInToken from "../reducers/adminLogin";
import createChat from "../reducers/createChat";
import getAllChats from "../reducers/getALLChats";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "E1a2g3le",
    }),
  ],
};
const bigReducer = combineReducers({
  giftData: giftData,
  accessToken: signInToken,
  userChat: userChat,
  messages: messages,
  preference: userPreference,
  userData: userData,
  users: users,
  message: postMessages,
  registerUser: registerUser,
  me: getMe,
  adminToken: adminSignInToken,
  createdChat: createChat,
  allChats: getAllChats,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);
