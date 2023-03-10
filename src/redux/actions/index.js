import axios from "axios";

export const GIFT_CARD_DATA = " GIFT_CARD_DATA";
export const USER_DATA = " USER_DATA";
export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const GET_ME = "GET_ME";
export const GET_ME_LOADING = "GET_ME_LOADING";
export const GET_ME_ERROR = "GET_ME_ERROR";
export const GET_ALL_CHAT = "GET_ALL_CHAT";
export const GET_ALL_CHAT_LOADING = "GET_ALL_CHAT_LOADING";
export const GET_ALL_CHAT_ERROR = "GET_ALL_CHAT_ERROR";
export const GET_LOGIN_ACCESSTOKEN = "GET_LOGIN_ACCESSTOKEN";
export const GET_LOGIN_ACCESSTOKEN_LOADING = "GET_LOGIN_ACCESSTOKEN_LOADING";
export const GET_LOGIN_ACCESSTOKEN_ERROR = "GET_LOGIN_ACCESSTOKEN_ERROR";

export const GET_ADMIN_LOGIN_ACCESSTOKEN = "GET_ADMIN_LOGIN_ACCESSTOKEN";
export const GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING =
  "GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING";
export const GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR =
  "GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR";

export const POST_MESSAGES = " POST_MESSAGES";
export const CREATE_CHAT = " CREATE_CHAT";
export const GET_USERS = "GET_USERS";
export const GET_ALL_CHAT_MESSAGES = "GET_ALL_CHAT_MESSAGES";
export const GET_ALL_CHAT_MESSAGES_LOADING = "GET_ALL_CHAT_MESSAGES_LOADING";
export const GET_ALL_CHAT_MESSAGES_ERROR = "GET_ALL_CHAT_MESSAGES_ERROR";
export const GET_USERS_LOADING = "GET_USERS_LOADING";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const USER_PREFERENCE_DATA = " USER_PREFERENCE_DATA";
export const NEW_TOURNAMENT_DATA = " NEW_TOURNAMENT_DATA";
export const USER_CHAT_DATA = " USER_CHAT_DATA";

export const GIFT_CARD_DATA_ERROR = " GIFT_CARD_DATA_ERROR";
export const GIFT_CARD_DATA_LOADING = " GIFT_CARD_DATA_LOADING";
export const LOG_IN_DATA = " LOG_IN_DATA";
export const LOG_IN_DATA_ERROR = " LOG_IN_DATA_ERROR";
export const LOG_IN_DATA_LOADING = " GIFT_CARD_DATA_LOADING";
export const USER_CHAT_DATA_ERROR = " USER_CHAT_DATA_ERROR";
export const USER_CHAT_DATA_LOADING = " USER_CHAT_DATA_LOADING";
export const USER_PREFERENCE_DATA_ERROR = " USER_PREFERENCE_DATA_ERROR";
export const USER_PREFERENCE_DATA_LOADING = " USER_PREFERENCE_DATA_LOADING";
export const USER_DATA_ERROR = " USER_DATA_ERROR";
export const USER_DATA_LOADING = " USER_DATA_LOADING";

export const registerUser = (userData) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;
    try {
      let response = await fetch(`${URL}/users/register`, options);
      if (response.ok) {
        const userData = await response.json();
        dispatch({
          type: REGISTER_USER,
          payload: userData,
        });
        setTimeout(() => {
          dispatch({
            type: REGISTER_USER_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: REGISTER_USER_LOADING,
          payload: false,
        });
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: REGISTER_USER_LOADING,
        payload: false,
      });

      dispatch({
        type: REGISTER_USER_ERROR,
        payload: true,
      });
    }
  };
};
export const postMessage = (data, accessToken, chatId) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;
    try {
      const response = await fetch(
        `${URL}/messages/${chatId}/message`,
        options
      );
      if (response.ok) {
        const message = await response.json();
        getUsers(`${URL}/users?limit=10`);

        dispatch({
          type: POST_MESSAGES,
          payload: message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const createChat = (data, accessToken) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ receiver: [data] }),
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;
    try {
      const response = await fetch(`${URL}/chats/me/chats`, options);
      if (response.ok) {
        const chat = await response.json();
        console.log(chat);

        dispatch({
          type: CREATE_CHAT,
          payload: chat,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const editChat = (data, chatId) => {
  return async (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/chats/me/${chatId}`, options);
      if (response.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const signIn = (data) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;
    try {
      const response = await fetch(`${URL}/users/login`, options);
      if (response.ok) {
        const accessToken = await response.json();
        dispatch({
          type: GET_LOGIN_ACCESSTOKEN,
          payload: accessToken,
        });
        setTimeout(() => {
          dispatch({
            type: GET_LOGIN_ACCESSTOKEN_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_LOGIN_ACCESSTOKEN_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_LOGIN_ACCESSTOKEN_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_LOGIN_ACCESSTOKEN_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_LOGIN_ACCESSTOKEN_ERROR,
        payload: true,
      });
    }
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LOGIN_ACCESSTOKEN,
      payload: "",
    });
    setTimeout(() => {
      dispatch({
        type: GET_LOGIN_ACCESSTOKEN_LOADING,
        payload: false,
      });
    }, 100);
  };
};
export const adminSignIn = (data) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(`${URL}/users/admin/login`, options);
      if (response.ok) {
        const accessToken = await response.json();
        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN,
          payload: accessToken,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ADMIN_LOGIN_ACCESSTOKEN_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ADMIN_LOGIN_ACCESSTOKEN_ERROR,
        payload: true,
      });
    }
  };
};

export const registerTournament = (data, tournamentId) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const URL = process.env.REACT_APP_BE_PROD_URL;
    try {
      const response = await fetch(
        `${URL}/tournaments/${tournamentId}/participants`,
        options
      );
      if (response.ok) {
        // const tournament = await response.json();
        // getUsers(`${URL}/users?limit=10`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteUser = (id, accessToken) => {
  return async () => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;
    try {
      const response = await fetch(`${URL}/users/${id}`, options);
      console.log(response.ok);
      if (response.ok || response === 204) {
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteMessage = (chatId, id, accessToken) => {
  return async () => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;
    try {
      const response = await fetch(
        `${URL}/messages/${chatId}/message/${id}`,
        options
      );
      console.log(response.ok);
      if (response.ok || response === 204) {
        getAllMessagesChat(chatId, accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAllMessagesChat = (chatId, accessToken) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;
    try {
      let response = await fetch(`${URL}/messages/${chatId}`, options);
      if (response.ok) {
        const messages = await response.json();
        dispatch({
          type: GET_ALL_CHAT_MESSAGES,
          payload: messages,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ALL_CHAT_MESSAGES_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_ALL_CHAT_MESSAGES_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ALL_CHAT_MESSAGES_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_ALL_CHAT_MESSAGES_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ALL_CHAT_MESSAGES_ERROR,
        payload: true,
      });
    }
  };
};

export const getUsers = (accessToken) => {
  return async (dispatch) => {
    // const URL = process.env.REACT_APP_BE_PROD_URL;
    const URL = process.env.REACT_APP_BE_DEV_URL;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      let response = await fetch(`${URL}/users`, options);
      if (response.ok) {
        const users = await response.json();
        dispatch({
          type: GET_USERS,
          payload: users,
        });
        setTimeout(() => {
          dispatch({
            type: GET_USERS_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_USERS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_USERS_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_USERS_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_USERS_ERROR,
        payload: true,
      });
    }
  };
};
export const getAllChats = (accessToken) => {
  return async (dispatch) => {
    // const URL = process.env.REACT_APP_BE_PROD_URL;
    const URL = process.env.REACT_APP_BE_DEV_URL;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      let response = await fetch(`${URL}/chats/me/chats`, options);
      if (response.ok) {
        const allChats = await response.json();
        dispatch({
          type: GET_ALL_CHAT,
          payload: allChats,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ALL_CHAT_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_ALL_CHAT_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ALL_CHAT_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_ALL_CHAT_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ALL_CHAT_ERROR,
        payload: true,
      });
    }
  };
};

export const getMe = (accessToken) => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + `${accessToken}`,
      },
    };
    const URL = process.env.REACT_APP_BE_DEV_URL;

    try {
      let response = await fetch(`${URL}/users/me`, options);
      if (response.ok) {
        const me = await response.json();
        dispatch({
          type: GET_ME,
          payload: me,
        });
        setTimeout(() => {
          dispatch({
            type: GET_ME_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_ME_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_ME_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_ME_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_ME_ERROR,
        payload: true,
      });
    }
  };
};
