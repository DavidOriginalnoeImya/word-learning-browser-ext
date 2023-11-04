import React, {CSSProperties, FC} from 'react';
import Form from "react-bootstrap/Form";

interface ITextArea {
    placeholder: string;
}

const TextArea: FC<ITextArea> = ({ placeholder }) => {
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
        />
    );
};

export default TextArea;