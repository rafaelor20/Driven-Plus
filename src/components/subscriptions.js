import styled from "styled-components";
import whiteD from "./assets/whiteD.png";
import yellowD from "./assets/yellowD.png";
import greenD from "./assets/greenD.png";
import pinkBar from "./assets/pinkBar.png";

export default function subscriptions() {
    return (
        <Container>
            <Title>Escolha seu Plano</Title>
            <SubContainer>
                <PinkBarHorizontal src={pinkBar} />
                <PinkBarVertical src={pinkBar} />
                <img class="imgD" src={whiteD} alt="White D" />
                <p>R$ 39,99</p>
            </SubContainer>
            <SubContainer>
                <PinkBarHorizontal src={pinkBar} />
                <PinkBarVertical src={pinkBar} />
                <img src={yellowD} alt="Yellow D" />
                <p>R$ 69,99</p>
            </SubContainer>
            <SubContainer>
                <PinkBarHorizontal src={pinkBar} />
                <PinkBarVertical src={pinkBar} />
                <img src={greenD} alt="Green D" />
                <p>R$ 99,99</p>
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.p`
margin: 15px 0px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
`



const SubContainer = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0px;
padding: 10px 10px;
box-sizing: border-box;
width: 290px;
height: 180px;
background-color: #0E0E13;
border: 3px solid #7E7E7E;
border-radius: 12px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
};
.imgD{
width:92px;
height:95px;
}
`

const PinkBarHorizontal = styled.img`
width: 45px;
height: 10px;
position: absolute;
bottom: 55px;
left: 100px
`

const PinkBarVertical = styled(PinkBarHorizontal)`
transform: rotate(90deg);
`