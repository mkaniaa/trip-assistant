import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Row, Col, Tabs, Tab } from 'react-materialize'
import M from 'materialize-css'

const SignedOut = () => {

    M.Tabs.init()

    return(
        <Row>
            <Col s={6} offset={'s3'} className="signedout-card">
                <Tabs className="z-depth-1 tabs-fixed-width">
                    <Tab title="Sign up" className="tab-title"><SignUp /></Tab>
                    <Tab title="Sign in" className="tab-title"><SignIn /></Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default SignedOut;