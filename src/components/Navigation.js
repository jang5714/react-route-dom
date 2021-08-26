import react from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => (
    <Nav>
        <NavList>
            <NavItem><Link to="time">Time</Link></NavItem>
            <NavItem><Link to="online-profile">OnlineProfile</Link></NavItem>
            <NavItem><Link to="school">School</Link></NavItem>
            <NavItem><Link to="course-registar">CourseRegistar</Link></NavItem>
        </NavList>
    </Nav>
)

export default Navigation

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`
    
