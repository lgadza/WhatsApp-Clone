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
import tournaments from "../reducers/getTournaments";
import userPreference from "../reducers/userPreference";
import userData from "../reducers/userData";
import users from "../reducers/usersReducer.js";
import postTournament from "../reducers/postTournament";
import registerUser from "../reducers/registerUser";
import getMe from "../reducers/meReducer";
import adminSignInToken from "../reducers/adminLogin";
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
  tournaments: tournaments,
  preference: userPreference,
  userData: userData,
  users: users,
  tournament: postTournament,
  registerUser: registerUser,
  me: getMe,
  adminToken: adminSignInToken,
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
