import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default () => {
    return (
        <Container> 
            <Row>
                <Col className='mt-2 px-0'>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control as="select">
                                <option>Garçom</option>
                                <option>Cozinha</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="email" placeholder="Nome" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <Button variant="primary" type="submit" block>Cadastrar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}