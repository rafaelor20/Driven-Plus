import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../App";
import {subscribeGetUrl, subscriptionGetUrl, subscriptionObj} from "./apiUrls.js";
import whiteD from "./assets/whiteD.png";
import yellowD from "./assets/yellowD.png";
import greenD from "./assets/greenD.png";
import pinkBar from "./assets/pinkBar.png";
import clipBoard from "./assets/clipBoard.png";
import money from "./assets/money.png";
import backArrow from "./assets/backArrow.png";

export default function Subscription() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [plan, setPlan] = useState(subscriptionObj)
    const userData = useContext(UserContext);
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardSN, setCardSN] = useState("");
    const [expDate, setExpDate] = useState("");
    const cardData = {membershipId: id, cardName: cardName, cardNumber: cardNumber, securityNumber: cardSN, expirationDate: expDate};
    const request = axios.get((subscriptionGetUrl+id), { headers: { Authorization: `Bearer ${userData.user.token}` } })
    request.then((server=>setPlan(server.data)));
    request.catch((error) => error.response.data);
    //console.log(plan);
    return (
        <Screen>
            <BackArrow src={backArrow} alt="voltar"/>
            <Logo>
                <ImgD src={plan.image} />
            </Logo>
            <Title>{plan.name}</Title>
            <InfoContainer>
                <div>
                    <img src={clipBoard} alt="" />
                    <p>  Benefícios:</p>
                </div>
                <>{plan.perks.map(RenderPerk)}</>
            </InfoContainer>
            <InfoContainer>
                <div>
                    <img src={money} alt="" />
                    <p>Preço:</p>
                </div>
                <p>R$ {plan.price} cobrados mensalmente</p>
            </InfoContainer>
            <InputBox placeholder="Nome impresso no cartão" onChange={e => updateValue(e.target.value, setCardName)}/>
            <InputBox placeholder="Digitos do cartão" onChange={e => updateValue(e.target.value, setCardNumber)}/>
            <ShortInputContainer>
                <ShortInputBox placeholder="Código de segurança" onChange={e => updateValue(e.target.value, setCardSN)}/>
                <ShortInputBox placeholder="Validade" onChange={e => updateValue(e.target.value, setExpDate)}/>
            </ShortInputContainer>
            <LoginButton onClick={()=>{SignPlan(userData, cardData, navigate)}}>
                <FontButton>
                    Assinar
                </FontButton>
            </LoginButton>
        </Screen>
    )
}

function SignPlan(userData, cardData, navigate){
    console.log(userData);
    console.log(cardData);
    const request = axios.post(subscribeGetUrl, cardData, { headers: { Authorization: `Bearer ${userData.user.token}` } });
    request.then(()=>{navigate("/home")});
    request.catch((error) => error.response.data);
}

function updateValue(value, setValue){
    setValue(value);
}

function RenderPerk(perk){
    //console.log(perk)
    return (<p>{perk.title}</p>)
}

const Screen = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 10px 10px;
`

const BackArrow = styled.img`
position: absolute;
top: 30px;
left: 30px;
color: #FFFFFF;
transform: matrix(1, 0, 0, -1, 0, 0);
`

const Logo = styled.div`
position: relative;
height: 92px;
width: 150px;
margin: 50px 0px 0px 0px;
`

const ImgD = styled.img`
width: 95px;
height: 92px;
`

const PinkBarHorizontal = styled.img`
width: 47px;
height: 10px;
position: absolute;
bottom: 15px;
left: 90px;
`

const PinkBarVertical = styled(PinkBarHorizontal)`
transform: rotate(90deg);
`

const Title = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin: 30px 0px 0px 0px;
`

const InfoContainer = styled.div`
width: 299px;
margin: 20px 0px;
div{
    display:flex;
    margin: 7px 0px;
}
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
}
img{
    height: 16px;
    width: 12px;
    margin: 0px 8px 0px 0px;
}
`

const InputBox = styled.input`
box-sizing: border-box;
width: 298px;
height: 52px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 8px;
padding: 0px 10px;
margin: 5px 0px;
::placeholder{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: black;
//color: #7E7E7E;
}
`

const ShortInputContainer = styled.div`
width: 299px;
display: flex;
justify-content: space-between;
`

const ShortInputBox = styled(InputBox)`
width: 145px;
padding: 0px 3px; 
`

const LoginButton = styled.button`
margin: 5px 0px;
width: 298px;
height: 52px;
background: #FF4791;
border-radius: 8px;
display: flex;
justify-content:center;
align-items:center;
`
const FontButton = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
`