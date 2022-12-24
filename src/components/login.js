import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import { loginPostUrl, loginPostSendObj } from './apiUrls.js'
import { UserContext } from "../App";

export default function RenderLogin() {
    const [disableInput, setDisableInput] = useState(false);
    const navigate = useNavigate();
    const [login, setLogin] = useState(loginPostSendObj);
    const loginProps = { login: login, setLogin: setLogin };
    const userData = useContext(UserContext);
    return (
        <LoginDiv>
            <Logo src={logo} />
            <InputBox data-identifier="email-input" placeholder="email" onChange={e => updateEmail(e.target.value, loginProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="password-input" placeholder="senha" onChange={e => updatePassword(e.target.value, loginProps)} disabled={disableInput}></InputBox>
            <LoginButton data-identifier="login-btn" onClick={() => { Login(loginProps, userData, navigate, setDisableInput) }} disabled={disableInput}>
                <FontButton>
                    Entrar
                </FontButton>
            </LoginButton>
            <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                <OtherPage data-identifier="signup-link">Não tem uma conta? Cadastre-se!</OtherPage>
            </Link>
        </LoginDiv>
    );
}

function Login(loginProps, userData, navigate, setDisableInput) {
    setDisableInput(true);
    const request = axios.post(loginPostUrl, loginProps.login);
    const setUser = userData.setUser;
    request.then(server => { setUser(server.data) });
    request.then(() => { navigate('/hoje') });
    request.catch((error) => error.response.data);
    request.catch((error) => { alert("Erro no login") });
    setDisableInput(false);
}

function updateEmail(email, loginProps) {
    const setLogin = loginProps.setLogin;
    const login = loginProps.login;
    setLogin(
        {
            email: email,
            password: login.password
        }
    );
}

function updatePassword(password, loginProps) {
    const setLogin = loginProps.setLogin;
    const login = loginProps.login;
    setLogin(
        {
            email: login.email,
            password: password
        }
    );
}

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const Logo = styled.img`
width: 300px;
height: 70px;
margin: 0px 0px 80px 0px;
`

const InputBox = styled.input`
box-sizing: border-box;
width: 298px;
height: 52px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 8px;
padding: 0px 10px;
margin: 10px 0px;
::placeholder{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #7E7E7E;
}
`

const LoginButton = styled.button`
margin: 10px 0px;
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

const OtherPage = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-decoration-line: underline;
color: #FFFFFF;
margin: 10px 0px;
`
