import styled from "styled-components";
import TopBar from './topBar.js'
import BottomBar from './bottomBar'


export default function Records() {
    return (
        <RecordsDiv>
            <TopBar />
            <Content>
                <Title>Histórico</Title>
                <Text>
                    Em breve você poderá ver o histórico
                    dos seus hábitos aqui!
                </Text>
            </Content>


            <BottomBar />
        </RecordsDiv>
    );
}

const RecordsDiv = styled.div`
box-sizing: border-box;
`

const Content = styled.div`
box-sizing: border-box;
background-color: #E5E5E5;
display:flex;
flex-direction:column;
align-items: center;
min-height: 560px;
padding: 15px 15px;
`

const Title = styled.p`
margin: 20px 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 29px;
color: #126BA5;`

const Text = styled.p`
margin: 2px 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
`