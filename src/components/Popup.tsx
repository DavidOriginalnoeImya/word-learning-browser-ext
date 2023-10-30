import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import {Button} from "react-bootstrap";
import selectedStringStore from "../stores/SelectedStringStore";
import {observer} from "mobx-react-lite";

const Popup = () => {
    const [selectedText, setSelectedText] = useState("");

    const { translatedString, translateString } = selectedStringStore;

    chrome.tabs.executeScript(
        { code: "window.getSelection().toString();" },
        selection => setSelectedText(selection[0])
    )

    const onTranslateBtnClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        translateString(selectedText);
    }

    return (
        <Col className="m-2">
            <Form.Control
                type="text"
                placeholder="Source test"
                onChange={e => setSelectedText(e.target.value)}
                value={selectedText}
                className="mb-1"
            />
            <Form.Control
                type="text"
                placeholder="Translated text"
                value={translatedString}
                className="mb-1"
            />
            <Button
                onClick={onTranslateBtnClicked}
                className="w-100"
            >
                Translate
            </Button>
        </Col>
    );
};

export default observer(Popup);