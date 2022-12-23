import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { registerPostUrl, registerPostObj } from "./apiUrls.js";
import logo from "./assets/logo.png"

export default function SignUp() {
    const [disableInput, setDisableInput] = useState(false);
    const [user, setUser] = useState(registerPostObj);
    const userProps = { user: user, setUser: setUser }
    const navigate = useNavigate();

    return (
        <RegisterDiv>
            <InputBox data-identifier="email-input" placeholder="email" onChange={e => updateEmail(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="password-input" placeholder="senha" onChange={e => updatePassword(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="user-name-input" placeholder="nome" onChange={e => updateName(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <InputBox data-identifier="user-image-input" placeholder="foto" onChange={e => updateImage(e.target.value, userProps)} disabled={disableInput}></InputBox>
            <LoginButton data-identifier="signup-btn" onClick={() => Register(userProps, navigate, setDisableInput)} disable={disableInput}>
                <FontButton>
                    Cadastrar
                </FontButton>
            </LoginButton>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <OtherPage data-identifier="login-link">Já tem uma conta? Faça login!</OtherPage>
            </Link>
        </RegisterDiv>
    );
}

function Register(userProps, navigate, setDisableInput) {
    setDisableInput(true);
    const request = axios.post(registerPostUrl, userProps.user);
    request.then(() => { navigate('/') });
    request.catch((error) => error.response.data);
    request.catch((error) => { alert("Erro no cadastro") });
    setDisableInput(false);
}

function updateEmail(email, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: email,
            name: user.name,
            image: user.image,
            password: user.password
        }
    );
}

function updatePassword(password, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: user.name,
            image: user.image,
            password: password
        }
    );
}

function updateName(name, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: name,
            image: user.image,
            password: user.password
        }
    );
}

function updateImage(image, userProps) {
    const setUser = userProps.setUser;
    const user = userProps.user;
    setUser(
        {
            email: user.email,
            name: user.name,
            image: image,
            password: user.password
        }
    );
}

const RegisterDiv = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
`

const Logo = styled.img`
width: 300px;
height: 70px;
margin: 68px 0px 0px 0px;
`

const InputBox = styled.input`
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding: 0px 10px;
margin: 5px 0px;
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
margin: 20px 0px;
`