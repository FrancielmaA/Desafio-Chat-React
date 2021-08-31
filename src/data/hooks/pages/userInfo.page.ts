import { useState, useMemo } from "react";
import { UserInfoShortInterface } from "data/@types/UserInfoShortInterface";

export default function userInfo() {
  const [maxCalls, setMaxCalls] = useState(""),
    [username, setUsername] = useState(""),
    [USER_CONNECT, setUserConnect] = useState(""),
    [USER_DISCONNECT, setUserDisconnect] = useState(""),
    [erro, setErro] = useState("");

  return {
    maxCalls,
    setMaxCalls,
    username,
    setUsername,
    erro,
    setErro,
    USER_CONNECT,
    USER_DISCONNECT,
    setUserConnect,
    setUserDisconnect,
  };
}
