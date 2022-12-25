import styled from "styled-components";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState, useContext, createContext } from "react";
import { UserContext } from "../App";
import { subscribeGetSendObj, subscriptionGetUrl } from "./apiUrls.js"

export const NavigateContext = createContext();

export default function Subscriptions() {
    
    const navigate = useNavigate();
    const userData = useContext(UserContext);
    const [plans, setPlans] = useState([]);

    function insertNavigate(plan){
        return {plan: plan, navigate: navigate};
    }


    const request = axios.get(subscriptionGetUrl, { headers: { Authorization: `Bearer ${userData.user.token}` } });
    request.then((server) => setPlans(server.data.map(insertNavigate)));
    request.catch((error) => error.response.data);

    return (
        <NavigateContext.Provider value={navigate}>
            <Container>
                <Title>Escolha seu Plano</Title>
                <>{plans.map(RenderSubContainer)}</>
            </Container>
        </NavigateContext.Provider>
    )
}

function RenderSubContainer(obj) {
    //console.log(obj);
    const navigate = obj.navigate;
    const plan = obj.plan;
    return (
        <SubContainer onClick={() => { SelectPlan(plan, navigate)}}>
            <img class="imgD" src={plan.image} alt="imagem do plano" />
            <p>R$ {plan.price}</p>
        </SubContainer>
    )
}

function SelectPlan(plan, navigate) {
    //console.log(navigate);
    navigate(`/subscriptions/${plan.id}`)
    //console.log(plan);
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
width:142px;
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