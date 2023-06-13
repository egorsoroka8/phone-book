import React from "react";
import classes from './MySelect.module.css'

const MySelect = ({ props, onChange, value }) => {

    return (
        <select
            className={classes.select}
            onChange={onChange}
            value={value}
        >
            {props.map((el, index) =>
                <option
                    className={classes.option}
                    key={el.countryCode}
                    value={el.phoneCode}
                    defaultValue={index === 0}
                >
                    {el.phoneCode} {el.countryName} {el.countryCode}
                </option>
            )}
        </select>
    )
}

export default MySelect;