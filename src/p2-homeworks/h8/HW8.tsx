import React, { useState } from "react";
import { homeWorkReducer } from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "./HW8.module.css";

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople);

  const finalPeople = people.map((p: UserType) => (
    <tr className={style.table_row} key={p._id}>
      <td>{p.name}</td>
      <td>{p.age}</td>
    </tr>
  ));

  const sortUp = () =>
    setPeople(homeWorkReducer(initialPeople, { type: "sort", payload: "up" }));
  const sortDown = () =>
    setPeople(
      homeWorkReducer(initialPeople, { type: "sort", payload: "down" })
    );
  const checkByAge = () =>
    setPeople(homeWorkReducer(initialPeople, { type: "check", payload: 18 }));

  return (
    <div>
      <hr />
      homeworks 8{/*should work (должно работать)*/}
      <table className={style.table}>
        <thead className={style.table_head}>
          <tr className={style.table_row}>
            <th>Name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody className={style.table_body}>{finalPeople}</tbody>
      </table>
      <div className={style.buttons}>
        <div>
          <SuperButton onClick={sortUp}>sort up</SuperButton>
        </div>
        <div>
          <SuperButton onClick={sortDown}>sort down</SuperButton>
        </div>
        <div>
          <SuperButton onClick={checkByAge}>check 18</SuperButton>
        </div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </div>
  );
}

export default HW8;
