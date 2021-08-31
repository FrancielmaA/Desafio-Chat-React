import { useState, useMemo } from "react";
import { CallInfoShortInterface } from "data/@types/CallInfoShortInterface";

export default function callInfo() {
  const [callId, setCallId] = useState(""),
    [media, setMedia] = useState(""),
    [startDate, setStartDate] = useState(),
    [service, setService] = useState(""),
    [caller, setCaller] = useState("");
  /*[maxNumber, setMaxNumber] = useState();
    [newCall, setNewCall] = useState([] as CallInfoShortInterface[]);
  
    async function buscarNewCall(maxNumber){
      try {
        const {data} = await ApiService.get<{
          newCall: CallInfoShortInterface[];
        }>( maxNumber);
        setNewCall(data.nextCall);
      } catch(){}
    }
*/

  return {
    callId,
    media,
    startDate,
    service,
    caller,
  };
}
