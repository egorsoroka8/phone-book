import React from "react";
import classes from './MySelect.module.css'

const MySelect = ({ props, onChange, value }) => {

    return (
        <select
            className={classes.select}
            onChange={onChange}
            value={value}
        >
            {props.map((el) =>
                <option
                    className={classes.option}
                    key={el.countryFlag}
                    value={el.phoneCode}
                >
                    {el.phoneCode} {el.countryName} {el.countryFlag}
                </option>
            )}
        </select>
    )
}

export default MySelect;