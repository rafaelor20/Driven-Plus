import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../App";
import { subscribeGetUrl, subscriptionGetUrl, subscriptionObj } from "./apiUrls.js";
import closeX from "./assets/closeImg.png";

import clipBoard from "./assets/clipBoard.png";
import money from "./assets/money.png";
import backArrow from "./assets/backArrow.png";

export default function Subscription() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [plan, setPlan] = useState(subscriptionObj)
    const userData = useContext(UserContext);
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardSN, setCardSN] = useState("");
    const [expDate, setExpDate] = useState("");
    const [showConfirm, setShowConfirm] = useState("none");
    const cardData = { membershipId: id, cardName: cardName, cardNumber: cardNumber, securityNumber: cardSN, expirationDate: expDate };
    const request = axios.get((subscriptionGetUrl + id), { headers: { Authorization: `Bearer ${userData.user.token}` } })
    request.then((server => setPlan(server.data)));
    request.catch((error) => error.response.data);
    //console.log(plan);
    return (
        <Screen>
            <Confirm show={showConfirm}>
                <img src={closeX} alt="close" />
                <p>Tem certeza que deseja assinar o plano {plan.name}? (R$ 39,99)?</p>
                <div>
                    <CancelButton onClick={()=>{HideConfirmPlan(setShowConfirm)}}><p>Não</p></CancelButton>
                    <ConfirmButton onClick={() => { SignPlan(userData, cardData, navigate) }}><p>Sim</p></ConfirmButton>
                </div>
            </Confirm>
            <BackArrow src={backArrow} alt="voltar" />
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
            <InputBox placeholder="Nome impresso no cartão" onChange={e => updateValue(e.target.value, setCardName)} />
            <InputBox placeholder="Digitos do cartão" onChange={e => updateValue(e.target.value, setCardNumber)} />
            <ShortInputContainer>
                <ShortInputBox placeholder="Código de segurança" onChange={e => updateValue(e.target.value, setCardSN)} />
                <ShortInputBox placeholder="Validade" onChange={e => updateValue(e.target.value, setExpDate)} />
            </ShortInputContainer>
            <LoginButton onClick={() => { ConfirmPlan(userData, cardData, navigate, plan, setShowConfirm) }}>
                <FontButton>
                    Assinar
                </FontButton>
            </LoginButton>
        </Screen>
    )
}

function ConfirmPlan(userData, cardData, navigate, plan, setShowConfirm) {
    setShowConfirm("flex");
}

function HideConfirmPlan(setShonConfirm){
    setShonConfirm("none");
}

function SignPlan(userData, cardData, navigate) {
    console.log(userData);
    console.log(cardData);
    const request = axios.post(subscribeGetUrl, cardData, { headers: { Authorization: `Bearer ${userData.user.token}` } });
    request.then(() => { navigate("/home") });
    request.catch((error) => error.response.data);
    request.catch(() => alert("Erro no cadastro do plano!"));
}

function updateValue(value, setValue) {
    setValue(value);
}

function RenderPerk(perk) {
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
    color: blue;
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

const Confirm = styled.div`
display: ${props => props.show};
padding: 20px 10px;
flex-direction: column;
justify-content: space-between;
z-index: 1;
position: absolute;
width: 248px;
height: 210px;
left: 64px;
top: 229px;
background: #FFFFFF;
border-radius: 12px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
text-align: center;
color: #000000;
}
img{
position: absolute;
left: 0%;
right: 0%;
top: 6.25%;
bottom: 6.25%;
color: blue;
}
div{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
`

const CancelButton = styled.button`
margin: 0px 12px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border: none;
gap: 10px;
width: 95px;
height: 52px;
background-color: #CECECE;
border-radius: 8px;
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
}
`

const ConfirmButton = styled(CancelButton)`
background-color: #FF4791;
`