import React, { useState } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'

import ForgotPassowrd from './ForgotPassword'


export default () => {
    return (
        <Container>
            <Row>
                <Col className='mt-2 px-0'>
                    <Form>
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
                                <Button variant="primary" type="submit" block>Login</Button>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mt-3">
                            <Col xs lg="6" className='text-center'>
                                <ForgotPassowrd />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}