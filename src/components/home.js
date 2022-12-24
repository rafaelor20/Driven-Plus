import styled from "styled-components";
import iconUser from "./assets/userIcon.png"
import whiteD from "./assets/whiteD.png";
import yellowD from "./assets/yellowD.png";
import greenD from "./assets/greenD.png";
import pinkBar from "./assets/pinkBar.png";


export default function Home() {
    return (
        <Container>
            <UserIcon src={iconUser} alt="user icon" />
            <ContainerImg>
                <ImgD src={whiteD} alt="" />
                <PinkBarHorizontal src={pinkBar} />
                <PinkBarVertical src={pinkBar} />
            </ContainerImg>
            <Content>
                <Title>Olá, fulano</Title>
                <ContainerButtons>
                    <Button><FontButton>Solicitar brindes</FontButton></Button>
                    <Button><FontButton>Materiais bônus de web</FontButton></Button>
                    <Button><FontButton>Aulas bônus de tech</FontButton></Button>
                    <Button><FontButton>Mentorias personalizadas</FontButton></Button>
                </ContainerButtons>
            </Content>
            <Footer>
                <Button><FontButton>Mudar plano</FontButton></Button>
                <RedButton><FontButton>Cancelar plano</FontButton></RedButton>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
padding: 20px 20px;
`

const UserIcon = styled.img`
width: 34px;
height: 33px;
position: absolute;
top: 20px;
right: 20px;
`

const ContainerImg = styled.div`
position: relative;
`

const ImgD = styled.img`
width: 49px;
height: 50px;
`

const PinkBarHorizontal = styled.img`
width: 5px;
height: 25px;
position: absolute;
top: 27px;
left: 55px;
`

const PinkBarVertical = styled(PinkBarHorizontal)`
transform: rotate(90deg);
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.p`
margin: 20px 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
`

const ContainerButtons = styled.div`
margin: 20px 0px 0px 0px;
`

const Button = styled.button`
margin: 5px 0px;
width: 298px;
height: 52px;
background: #FF4791;
border-radius: 8px;
display: flex;
justify-content:center;
align-items:center;
`
const RedButton = styled(Button)`
background: #FF4747;
`

const FontButton = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
`

const Footer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
left: 0px;
bottom: 0px;
margin: 15px 0px;
`