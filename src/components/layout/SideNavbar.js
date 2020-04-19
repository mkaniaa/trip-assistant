import React from 'react'
import { SideNavItem } from 'react-materialize'
import { Button, Icon, SideNav } from 'react-materialize'

const SideNavbar = () => {
    return (
        <SideNav
            options={{
                preventScrolling: true,
                edge: "right"}}
            trigger={
                <Button 
                    flat 
                    large 
                    className="burger right white-text hide-on-large-only"
                    icon={<Icon>menu</Icon>}
                >
                </Button>
            }
        >
            <SideNavItem>
                <img className="circle user-img-sidenav" alt="" src={ require("../../img/user-icon.jpg") } />
            </SideNavItem>
        </SideNav>
    )
}

export default SideNavbar;