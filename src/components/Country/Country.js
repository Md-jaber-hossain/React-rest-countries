import React from 'react';
import './Country.css';

const Country = (props) => {
    const { common } = props.country.name;

    return (
        <div className="country bg-success">
            <h4 className="text-warning">Country: {common}</h4>
            <img src={props.country.flags[0]} alt="" />
            <p><small>Region: {props.country.region}</small></p>
            <p>Capital: {props?.country?.capital?.[0]}</p>
        </div>
    );
};

export default Country;