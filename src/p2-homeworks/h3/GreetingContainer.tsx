import React, { ChangeEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void;
};

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    setError("");
  };
  const addUser = () => {
    if (name) {
      alert(`Hello ${name}!`);
      addUserCallback(name);
      setName("");
    } else {
      setError("Please write your name!");
    }
  };
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.charCode === 13) {
      if (name) {
        alert(`Hello ${name}!`);
        addUserCallback(name);
        setName("");
      } else {
        setError("Please write your name!");
      }
    }
  };
  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onKeyPressHandler={onKeyPressHandler}
      error={error}
      totalUsers={totalUsers}
    />
  );
};

export default GreetingContainer;
