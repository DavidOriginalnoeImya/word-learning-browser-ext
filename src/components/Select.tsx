import React, {FC, useState} from 'react';
import {Form, ListGroup, ListGroupItem} from 'react-bootstrap';

interface ISelect {
    values: string[];
}

const Select: FC<ISelect> = ({ values }) => {
    const getInitValue = () => {
        return values.length > 0 ? values[0] : "";
    }

    const [value, setValue] = useState(getInitValue());

    const [isValuesOpen, setIsValuesOpen] = useState(false);

    const onCurrentValueClicked = () => {
        setIsValuesOpen(!isValuesOpen);
    }

    const onNewValueClicked = (newValue: string) => {
        setValue(newValue);
        setIsValuesOpen(false);
    }

    const getValueStyle = (index: number) => {
        if (values.length - 1 === index) {
            return "";
        }
        return "border-bottom-0";
    }

    return (
        <>
            <Form.Label onClick={onCurrentValueClicked} className="w-100">
                {value}
            </Form.Label>
            {
                isValuesOpen &&
                <ListGroup className="position-absolute rounded-0">
                    {
                        values.map((value, index) =>
                            <ListGroupItem
                                key={index}
                                onClick={() => onNewValueClicked(value)}
                                className={getValueStyle(index)}
                            >
                                {value}
                            </ListGroupItem>
                        )
                    }
                </ListGroup>
            }
        </>
    );
};

export default Select;