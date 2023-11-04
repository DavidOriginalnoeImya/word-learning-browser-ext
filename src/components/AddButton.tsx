import React from 'react';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AddButton = () => {
    const lineStyle = {
        width: "100%",
        borderBottom: "solid",
        height: "0",
        marginTop: "2.5%",
        borderWidth: "2px"
    };

    const iconStyle = {
        marginLeft: "3%",
        marginRight: "3%",
    };

    return (
        <div className="d-flex">
            <div style={lineStyle}/>
            <FontAwesomeIcon
                icon={faPlus}
                style={iconStyle}
            />
            <div style={lineStyle}/>
        </div>
    );
};

export default AddButton;