import React, { useState } from 'react'
import { Tabs, Tab, Container, Row, Col} from 'react-bootstrap'

import Background  from '../componentes/login/Background'
import BoxFormLogin from '../componentes/login/BoxFormLogin'
import Logo from '../componentes/login/LogoLogin'
import FormLogin from '../componentes/login/FormLogin'
import FormRegister from '../componentes/login/FormRegister'


export default () => {
    const [key, setKey] = useState('login');
    return (
        <React.Fragment>
            <Background>
                <BoxFormLogin>
                    <Logo />
                    <Container style={{backgroundColor: "#fff", borderRadius: "10px"}}>
                        <Row>
                            <Col className='my-3'>
                                <Tabs activeKey={key}  onSelect={(k) => setKey(k)} >
                                    <Tab eventKey="login" title="Login" >
                                        <FormLogin/>
                                    </Tab>
                                    <Tab eventKey="register" title="Register" >
                                        <FormRegister/>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </BoxFormLogin>
            </Background>
        </React.Fragment>
    )
}