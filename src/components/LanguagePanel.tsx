import React from 'react';
import Select from "./Select";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsAltH} from "@fortawesome/free-solid-svg-icons";

const LanguagePanel = () => {
    const panelStyle = {
        borderBottom: "solid",
        borderWidth: "2px",
        display: "flex"
    }

    return (
        <div style={panelStyle}>
            <Select values={["English", "Russian", "Australian"]}/>
            <FontAwesomeIcon icon={faArrowsAltH} />
            <Select values={["English", "Russian", "Australian"]}/>
        </div>
    );
};

export default LanguagePanel;