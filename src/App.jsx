import "./App.css";
import Layout from "./components/sections/Layout";
import React, { useState, useEffect, useReducer, createContext } from "react";

import * as Api from "./api";
import { loginReducer } from "./reducer";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  const isLogin = localStorage.getItem('userToken');

  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
  // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("users/isLogin");
      const currentUser = res.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });

      console.log("%c localStorage에 토큰 있음.", "color: #d93d1a;");
    } catch {
      console.log("%c localStorage에 토큰 없음.", "color: #d93d1a;");
    }
    // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    setIsFetchCompleted(true);
  };

  // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return "loading...";
  }

  return (
    <DispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userState}>
          <Layout />
        </UserStateContext.Provider>      
    </DispatchContext.Provider>
  );
}

export default App;