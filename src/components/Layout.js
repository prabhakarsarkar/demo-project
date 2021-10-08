import React from 'react'
import FooterComponent from './Footer'
import HeaderComponent from './Header'
import RightSidebar from './RightSidebar'
import Sidebar from './Sidebar'

const Layout = (props) => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <br />
            <br />
            <br />
            <Sidebar />
            {props.children}


        </React.Fragment>
    )
}

export default Layout
// <FooterComponent />