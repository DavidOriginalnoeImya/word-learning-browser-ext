import React, {useEffect} from 'react';
import Col from 'react-bootstrap/esm/Col';
import selectedStringStore from "../stores/SelectedStringStore";
import {observer} from "mobx-react-lite";
import TextArea from "./TextArea";
import Splitter from "./Splitter";
import ControlPanel from "./ControlPanel";
import onTextSelectChrome from "../utils/onTextSelectChrome";

const Popup = () => {

    useEffect(() => {
        onTextSelectChrome(selectedStringStore.setSelectedString);
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            selectedStringStore.translateString();
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [selectedStringStore.selectedString])

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
                    onChange={selectedStringStore.setSelectedString}
                />
                <Splitter/>
                <TextArea
                    placeholder="Translation"
                    value={selectedStringStore.translatedString}
                    onChange={selectedStringStore.setTranslatedString}
                />
            </Col>
        </>
    );
};

export default observer(Popup);