import React from "react";
import usePhoneCodes from "../../../hooks/usePhoneCodes";
import classes from './MySelect.module.css'

const MySelect = () => {

    const countries = usePhoneCodes();

    return (
        <select className={classes.select}>
            {countries.map(el => 
                <option 
                className={classes.option}
                    key={el.countryCode}
                    value={el.countryName}
                >
                    {el.phoneCode} {el.countryName} {el.countryCode}
                </option>
            )}
      </select>
    )
}

export default MySelect;