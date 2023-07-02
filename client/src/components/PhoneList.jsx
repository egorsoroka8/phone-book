import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";

const PhoneList = () => {
    const dispatch = useDispatch();
    const { phones } = useSelector((state) => state);
    const isPhonesAdded = phones.length ? "Added phones" : "No added phones";

    return (
        <div className="PhoneList">
            <h4 style={{ marginBottom: 20 }}>{isPhonesAdded}</h4>
            {phones.map((phone, index) => (
                <div key={index}>
                    {index + 1} {phone}
                </div>
            ))}
        </div>
    );
};

export default PhoneList;
