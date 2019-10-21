import React from 'react';
import './result.css';

const Result = (props) => {

    return ( 
        <div className="Result">
        <p> Result: { props.result } </p> 
        </div>
    );

}

export default Result;