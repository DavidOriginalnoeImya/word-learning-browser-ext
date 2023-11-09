import React, {CSSProperties, FC} from 'react';
import Form from "react-bootstrap/Form";

interface ITextArea {
    placeholder: string;
    value: string;
    onChange: (str: string) => void;
}

const TextArea: FC<ITextArea> = ({ placeholder, value, onChange }) => {
    const textAreaStyle: CSSProperties = {
        border: "none",
        resize: "none",
        borderRadius: "0",
        boxShadow: "none"
    };

    return (
        <Form.Control
            style={textAreaStyle}
            as="textarea" rows={2}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
};

export default TextArea;