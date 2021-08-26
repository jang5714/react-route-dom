import react from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header =()=>(
    <Container>
        <Element>
            <ShortCut><Link to="login">로그인 </Link><Link to="join">회원가입</Link></ShortCut>
            <Logo>
                <img
                width="100%"
                height="100%"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160520_158%2Fjsml17_146369220907507gVU_JPEG%2FattachImage_924426020.jpeg&type=sc960_832"
                alt="logo"/>
                </Logo>
            <Search><h1>Jarvis</h1></Search>
        </Element>
    </Container>
)

export default Header

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #a8ff78;
`

const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 80px;
`

const Search = styled.div`
    order: 3;
    width: 880px;
    background-color: #78ffd6;
    text-align: center;
`