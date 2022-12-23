import styled from "styled-components";
import { Link } from 'react-router-dom'
import today from './assets/today.png'

export default function BottomBar() {
    return (
        <BottomBarDiv data-identifier="menu">
            <Link data-identifier="habit-link" to='/habitos' style={{ textDecoration: 'none' }}>
                <FontBottom >Hábitos</FontBottom>
            </Link>
            <Link data-identifier="today-link" to='/hoje'>
                <TodayDiv>
                    <Today src={today} alt='hoje' />
                </TodayDiv>
            </Link>
            <Link data-identifier="history-link" to='/historico' style={{ textDecoration: 'none' }}>
                <FontBottom>Histórico</FontBottom>
            </Link>
        </BottomBarDiv>
    );
}

const BottomBarDiv = styled.div`
box-sizing: border-box;
position: sticky;
left: 0px;
bottom: 0px;
width: 100%;
height: 70px;
background: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;
`

const TodayDiv = styled.div`
position: sticky;
display: flex;
justify-content: center;
align-items:center;
`

const Today = styled.img`
position: sticky;
width: 91px;
height: 91px;
left: 142px;
top: 0px;
`

const FontBottom = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #52B6FF;
`


