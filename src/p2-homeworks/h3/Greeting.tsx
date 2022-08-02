import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  onKeyPressHandler: (e: React.KeyboardEvent<HTMLElement>) => void;
  error: string;
  totalUsers: number;
};

const Greeting: React.FC<GreetingPropsType> = ({
  name,
  setNameCallback,
  addUser,
  error,
  totalUsers,
  onKeyPressHandler,
}) => {
  const inputClass = error ? s.error_input : s.someClass;

  return (
    <div className={s.input_container}>
      <input
        value={name}
        onChange={setNameCallback}
        className={inputClass}
        onKeyPress={onKeyPressHandler}
      />
      <div className={s.error_message}>{error}</div>
      <button
        onClick={addUser}
        disabled={error ? true : false}
        className={s.button}
      >
        add
      </button>
      <span>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
