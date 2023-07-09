import React from "react";
import classes from './MySelect.module.css'

const MySelect = ({ props, onChange, value }) => {

    return (
        <select
            className={classes.select}
            onChange={onChange}
            value={value}
        >
            {props.map((country) =>
                <option
                    className={classes.option}
                    key={country.countryName}
                    value={country.phoneCode}
                >
                    {country.phoneCode} {country.countryName} {country.countryFlag}
                </option>
            )}
        </select>
    )
}

export default MySelect;