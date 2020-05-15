import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-materialize'

const UserCard = (props) => {
    const { cardVisible } = props;

    return( 
        <div>
            { cardVisible &&
                <Card
                    actions={[
                        <Link to='/' key="edit-profile"><nobr>Edit profile</nobr></Link>,
                        <Link to='/signedout' key="log-out"><nobr>Log out</nobr></Link>
                    ]}
                    className="user-card hide-on-med-and-down"
                    header={ <img className="circle user-img-card" alt="" src={ require("../../img/user-icon.jpg") } /> } 
                    horizontal
                    title="Marek Kania"
                    align="center"
                >
                    <p>mkaniaa@gmail.com</p>
                </Card>
            }
        </div>
    )
}

export default UserCard;