import React, {useEffect} from 'react';
import Col from 'react-bootstrap/esm/Col';
import selectedStringStore from "../stores/SelectedStringStore";
import {observer} from "mobx-react-lite";
import TextArea from "./TextArea";
import Splitter from "./Splitter";
import ControlPanel from "./ControlPanel";

const Popup = () => {

    chrome.tabs.executeScript(
        { code: "window.getSelection().toString();" },
        selection => selectedStringStore.setSelectedString(selection[0])
    )

    useEffect(() => {
        selectedStringStore.translateString();
    }, []);

    const onSaveClicked = () => {
        selectedStringStore.saveTranslation();
    }

    return (
        <>
            <ControlPanel onSaveClicked={onSaveClicked}/>
            <Col className="m-2">
                <TextArea
                    placeholder="Source text"
                    value={selectedStringStore.selectedString}
                />
                <Splitter/>
                <TextArea
                    placeholder="Translation"
                    value={selectedStringStore.translatedString}
                />
            </Col>
        </>
    );
};

export default observer(Popup);