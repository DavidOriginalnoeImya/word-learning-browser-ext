import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import {Button} from "react-bootstrap";
import selectedStringStore from "../stores/SelectedStringStore";
import {observer} from "mobx-react-lite";
import Select from "./Select";
import {faArrowsAltH, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TextArea from "./TextArea";
import AddButton from "./AddButton";
import LanguagePanel from "./LanguagePanel";

const Popup = () => {


    const onTranslateBtnClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        selectedStringStore.translateString();
    }

    const onSaveBtnClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        selectedStringStore.saveTranslation();
    }

    return (
        <Col className="m-2">
            <LanguagePanel/>
            <TextArea placeholder="Source text" />
            <AddButton/>
            <TextArea placeholder="Translation" />
            {/*<Form.Control*/}
            {/*    type="text"*/}
            {/*    placeholder="Source test"*/}
            {/*    onChange={e => selectedStringStore.setSelectedString(e.target.value)}*/}
            {/*    value={selectedStringStore.selectedString}*/}
            {/*    className="mb-1"*/}
            {/*/>*/}
            {/*<Form.Control*/}
            {/*    type="text"*/}
            {/*    placeholder="Translated text"*/}
            {/*    onChange={e => selectedStringStore.setTranslatedString(e.target.value)}*/}
            {/*    value={selectedStringStore.translatedString}*/}
            {/*    className="mb-1"*/}
            {/*/>*/}
            {/*<div className="d-flex">*/}
            {/*    <Button*/}
            {/*        onClick={onTranslateBtnClicked}*/}
            {/*        variant="dark"*/}
            {/*        className="w-100"*/}
            {/*    >*/}
            {/*        Translate*/}
            {/*    </Button>*/}
            {/*    <Button*/}
            {/*        onClick={onSaveBtnClicked}*/}
            {/*        variant="dark"*/}
            {/*        className="w-100 ms-1"*/}
            {/*    >*/}
            {/*        Save*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </Col>
    );
};

export default observer(Popup);