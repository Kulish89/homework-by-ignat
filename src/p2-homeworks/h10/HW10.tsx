import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import loadingGif from "../../assets/loading.gif";
import s from "./HW10.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadingAC } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";

function HW10() {
  const loading = useSelector((state: AppStoreType) => state.loading.loading);
  const dispatch = useDispatch();
  const setLoading = () => {
    dispatch(loadingAC(true));

    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 3000);
    console.log("loading...");
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {loading ? (
        <div className={s.loading_block}>
          <img src={loadingGif} alt="Loading"></img>
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
