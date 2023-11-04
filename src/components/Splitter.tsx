import React from 'react';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Splitter = () => {
    const lineStyle = {
        width: "100%",
        borderBottom: "solid",
        height: "0",
        marginTop: "2.5%",
        borderWidth: "2px"
    };

    return (
        <div style={lineStyle}/>
    );
};

export default Splitter;