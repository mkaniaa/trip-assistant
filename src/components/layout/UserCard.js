import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-materialize'

const UserCard = (props) => {
    const { cardVisible } = props;

    return( 
        <div>
            { cardVisible &&
                <Row>
                    <Col s={2} offset={'s10'}>
                        <Card 
                            actions={[
                                <Link to='/'>Edit profile</Link>,
                                <Link to='/signedout'>Log out</Link>
                            ]}
                            className="user-card" 
                            title="Marek Kania"
                        >
                            <p>mkaniaa@gmail.com</p>
                        </Card>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default UserCard;