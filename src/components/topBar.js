import styled from "styled-components"
import { useContext } from "react";
import { UserContext } from "../App";


export default function TopBar() {
    const userData = useContext(UserContext);
    const user = userData.user;
    return (
        <TopBarElem data-identifier="header">
            <FontTopBar>TrackIt</FontTopBar>
            <ImgTopBar src={user.image} />
        </TopBarElem>
    )
}

const TopBarElem = styled.div`
box-sizing: border-box;
width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content:space-between;
align-items:center;
padding: 0px 15px;
`

const FontTopBar = styled.p`
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 39px;
line-height: 49px;
color: #FFFFFF;
margin: 0px 18px;
`

const ImgTopBar = styled.img`
width: 51px;
height: 51px;
border-radius: 98px;
margin: 0px 18px;
`