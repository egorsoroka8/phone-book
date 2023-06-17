import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "./UI/button/MyButton";
import './styles/App.css'

const PhoneList = () => {
  const dispatch = useDispatch();
  const { phones }= useSelector((state) => state);

//   const getPhones = () => {
//     dispatch({ type: "GET_PHONES" });
//     console.log(phones);
//   };

  return (
    <div className="PhoneList">
      {phones.map((phone, index) => (
        <div key={index}>{index + 1} {phone}</div>
      ))}
      {/* <MyButton onClick={getPhones}>Submit</MyButton> */}
    </div>
  );
};

export default PhoneList;
