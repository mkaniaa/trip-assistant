import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import UserCard from './UserCard'

class TopNavbar extends Component {
    
    state = {
        cardVisible: false
    }

    handleClick = () => {
        this.setState({
            cardVisible: !this.state.cardVisible
        })
    }

    render() {
        const cardVisible = this.state.cardVisible;

        return (
            <div>
                <div className="navbar-fixed">
                    <Navbar
                        alignLinks="right"
                        brand={<Link to='/' className="brand-logo">TripAssistant</Link>}
                        className="top-navbar blue-grey darken-2"
                    >
                        <NavItem>
                            <NavLink to='/customers'>Customer collection</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/select-trip'>Open trip</NavLink>
                        </NavItem>
                        <NavItem>
                            <span className='btn btn-floating blue lighten-1' onClick={this.handleClick}>User</span>
                        </NavItem>
                    </Navbar>
                </div>
                <UserCard cardVisible={ cardVisible } />
            </div>
        )
    }
}

export default TopNavbar;