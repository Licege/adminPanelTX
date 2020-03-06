import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";


const deleteModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                    <Modal.Title>Заголовок</Modal.Title>
                <Modal.Header />
                <Modal.Body>Тело </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default deleteModal;