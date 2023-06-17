import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "./UI/button/MyButton";

const PhoneList = () => {
  const dispatch = useDispatch();
  const { phones }= useSelector((state) => state);

//   const getPhones = () => {
//     dispatch({ type: "GET_PHONES" });
//     console.log(phones);
//   };

  return (
    <div>
      {phones.map((phone, index) => (
        <div key={index}>{phone}</div>
      ))}
      {/* <MyButton onClick={getPhones}>Submit</MyButton> */}
    </div>
  );
};

export default PhoneList;
