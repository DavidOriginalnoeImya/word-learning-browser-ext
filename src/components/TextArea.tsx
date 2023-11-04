import React, {CSSProperties, FC} from 'react';
import Form from "react-bootstrap/Form";

interface ITextArea {
    placeholder: string;
    value: string;
}

const TextArea: FC<ITextArea> = ({ placeholder, value }) => {
    const textAreaStyle: CSSProperties = {
        border: "none",
        resize: "none",
        borderRadius: "0",
        boxShadow: "none"
    };

    return (
        <Form.Control
            style={textAreaStyle}
            as="textarea"
            rows={2}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default TextArea;