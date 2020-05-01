import React from 'react'
import { SideNavItem } from 'react-materialize'
import { Button, Icon, SideNav } from 'react-materialize'

const SideNavbar = () => {
    return (
        <SideNav
            className='side-navbar'
            options={{
                preventScrolling: true,
                edge: "right"}}
            trigger={
                <span>
                    <Button
                        flat 
                        large 
                        className="burger right white-text hide-on-large-only"
                        icon={<Icon>menu</Icon>}
                    >
                    </Button>
                </span>}
        >
            <SideNavItem 
                className="sidenav-close right"
                icon={<Icon >close</Icon>}>
            </SideNavItem>
            <div className="sidnav-user-data">
                <div className="inline">
                    <img className="circle user-img-sidenav" alt="" src={ require("../../img/user-icon.jpg") } />
                </div>
                <div className="inline user-info">
                    <h5>Marek Kania</h5>
                    <p>mkaniaa@gmail.com</p>
                </div>
            </div>
            <SideNavItem divider />
            <SideNavItem href="/customers">
                Customer collection
            </SideNavItem>
            <SideNavItem href="/select-trip">
                Open trip
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem href="/">
                Edit profile
            </SideNavItem>
            <SideNavItem href="/signedout">
                Log out
            </SideNavItem>
        </SideNav>
    )
}

export default SideNavbar;