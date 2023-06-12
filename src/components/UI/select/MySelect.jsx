import React, { useState } from "react";
import usePhoneCodes from "../../../hooks/usePhoneCodes";
import classes from './MySelect.module.css'

const MySelect = () => {

    const countries = usePhoneCodes();

    const [selectedCountry, setSelectedCountry] = useState();
    

    return (
        <select className={classes.select} onChange={(e) => console.log(e.target.value)}>
            {countries.map(el => 
                <option
                    className={classes.option}
                    key={el.countryCode}
                    value={el.phoneCode}
                >
                    {el.phoneCode} {el.countryName} {el.countryCode}
                </option>
            )}
      </select>
    )
}

export default MySelect;