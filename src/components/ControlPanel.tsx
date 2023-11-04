import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

interface IControlPanel {
    onSaveClicked: () => void;
}

const ControlPanel: FC<IControlPanel> = ({ onSaveClicked }) => {
    return (
        <div style={{backgroundColor: "black"}}>
            <FontAwesomeIcon
                icon={faPlus}
                style={{color: "white", marginLeft: "0.5rem"}}
                onClick={onSaveClicked}
                title="Save translation"
            />
        </div>
    );
};

export default ControlPanel;