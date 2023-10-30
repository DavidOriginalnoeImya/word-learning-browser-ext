import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import {Button} from "react-bootstrap";

const Popup = () => {
    const [selectedText, setSelectedText] = useState("");

    chrome.tabs.executeScript(
        { code: "window.getSelection().toString();" },
        selection => setSelectedText(selection[0])
    )

    return (
        <Col className="m-2">
            <Form.Control
                type="text"
                placeholder="English text"
                onChange={e => setSelectedText(e.target.value)}
                value={selectedText}
                className="mb-1"
            />
            <Button> Сохранить </Button>
        </Col>
    );
};

export default Popup;