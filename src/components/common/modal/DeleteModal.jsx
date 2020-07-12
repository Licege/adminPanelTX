import React from 'react';
import {Button, Modal} from 'react-bootstrap';


const DeleteModal = ({show, title, onRemove, onClose}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Вы действительно хотите удалить {title}?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="danger" onClick={onRemove}>
                    Удалить
                </Button>
                <Button variant="secondary" onClick={onClose}>
                    Отменить
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default DeleteModal;
