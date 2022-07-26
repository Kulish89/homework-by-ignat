import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const stop = () => {
    setDisabled(false);
    clearTimeout(timerId);
  };
  const start = () => {
    setDisabled(true);
    const id: number = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = `${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  }`;
  const stringDate = `${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }.${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }.${date.getFullYear()}`;

  return (
    <div>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {stringTime}
      </div>

      {show && <div>{stringDate}</div>}

      <SuperButton onClick={start} disabled={disabled}>
        start
      </SuperButton>
      <SuperButton onClick={stop} disabled={!disabled}>
        stop
      </SuperButton>
    </div>
  );
}

export default Clock;
