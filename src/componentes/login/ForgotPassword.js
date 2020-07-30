import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="link" onClick={handleShow}>Esqueci minha senha</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Encontre sua conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Insira seu email para procurar sua conta.</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}