import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import UserCard from './UserCard'
import SideNavbar from './SideNavbar'

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
                <SideNavbar className="hide-on-large-only"/>
                <div className="navbar-fixed">
                    <Navbar
                        alignLinks="right"
                        brand={<Link to='/' className="brand-logo">TripAssistant</Link>}
                        className="top-navbar blue-grey darken-2"
                        menuIcon={<div></div>}
                    >
                        <NavLink to='/customers'>Customer collection</NavLink>
                        <NavLink to='/select-trip'>Open trip</NavLink>
                        <NavItem>
                            <span className='btn btn-floating blue lighten-1 noselect' onClick={this.handleClick}>User</span>
                        </NavItem>
                    </Navbar>
                </div>
                <UserCard cardVisible={ cardVisible } />
            </div>
        )
    }
}

export default TopNavbar;