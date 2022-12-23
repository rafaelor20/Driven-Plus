import styled from "styled-components";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import TopBar from './topBar.js'
import BottomBar from './bottomBar'
import trash from './assets/trash.png'
import { habitsListGetUrl, habitsListObj, deleteUrl, habitPostUrl, habitPostSendObj } from './apiUrls.js'



export default function Habits() {
    const userData = useContext(UserContext);
    const [enableCreate, setEnableCreate] = useState('none');
    const propsEnableCreate = {enableCreate: enableCreate, setEnableCreate: setEnableCreate};
    const [createdHabit, setCreatedHabit] = useState(habitPostSendObj)
    const propsCreatedHabit = {createdHabit: createdHabit, setCreatedHabit: setCreatedHabit};
    const [habitsLst, setHabitsLst] = useState(habitsListObj);
    const propsHabitsLst = {habitsLst: habitsLst, setHabitsLst: setHabitsLst};
    const [hasHabit, setHasHabit] = useState('none');
    const [habitName, setHabitName] = useState('');
    const propsHabitName = {habitName: habitName, setHabitName: setHabitName};
    const [daysLst, setDaysLst] = useState([]);
    const [dayColorLst, setDayColorLst] = useState(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
    useEffect(() => {
        const request = axios.get(habitsListGetUrl, { headers: { Authorization: `Bearer ${userData.user.token}` } });
        request.then((server) => { setHabitsLst(server.data) });
        request.catch((error) => error.response.data);
        if (habitsLst.length > 0) {
            setHasHabit('flex');
        }
    })

    return (
        <HabitDiv>
            <TopBar />
            <Content>
                <TopBarHabits>
                    <FontTopBarHabits>Meus hábitos</FontTopBarHabits>
                    <CreateHabit onClick={() => { renderCreateHabit(enableCreate, setEnableCreate) }} data-identifier="habit-create-btn">
                        <PlusText>+</PlusText>
                    </CreateHabit>
                </TopBarHabits>
                <AddHabitDiv render={enableCreate} data-identifier="habit-create-container">
                    <InputHabitName data-identifier="habit-name-input" placeholder="nome do hábito" onChange={e => updateHabitName(e.target.value, setHabitName)} />
                    <DaysBox>
                        <DayBox data-identifier="habit-day" color={dayColorLst[0]} onClick={()=>setDaysHabit(0, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLst0)}>
                            <p>D</p>
                        </DayBox>
                        <DayBox data-identifier="habit-day" color={dayColorLst[1]} onClick={()=>setDaysHabit(1, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLst1)}>
                            <p>S</p>
                        </DayBox>
                        <DayBox data-identifier="habit-day" color={dayColorLst[2]} onClick={()=>setDaysHabit(2, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLst2)}>
                            <p>T</p>
                        </DayBox>
                        <DayBox data-identifier="habit-day" color={dayColorLst[3]} onClick={()=>setDaysHabit(3, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLst3)}>
                            <p>Q</p>
                        </DayBox>
                        <DayBox data-identifier="habit-day" color={dayColorLst[4]} onClick={()=>setDaysHabit(4, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLst4)}>
                            <p>Q</p>
                        </DayBox>
                        <DayBox data-identifier="habit-day" color={dayColorLst[5]} onClick={()=>setDaysHabit(5, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLst5)}>
                            <p>S</p>
                        </DayBox>
                        <DayBox data-identifier="habit-day" color={dayColorLst[6]} onClick={()=>setDaysHabit(6, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLst6)}>
                            <p>S</p>
                        </DayBox>
                    </DaysBox>
                    <AddHabitButtons>
                        <AddHabitCancel data-identifier="habit-create-cancel-btn" onClick={() => { renderCreateHabit(enableCreate, setEnableCreate) }}><p>Cancelar</p></AddHabitCancel>
                        <AddHabitButton data-identifier="habit-create-save-btn" onClick={() => { createdHabitFunction(propsCreatedHabit, habitName, daysLst,habitPostUrl, userData, propsHabitsLst, propsEnableCreate) }}>
                            <p>Salvar</p>
                        </AddHabitButton>
                    </AddHabitButtons>
                </AddHabitDiv>
                <NoHabitWarning render={hasHabit}>
                    Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </NoHabitWarning>
                <>{RenderHabits(habitsLst)}</>
            </Content>
            <BottomBar />
        </HabitDiv>
    );
}

function RenderHabits(habits) {
    if (habits.length>0){
        return (
            <>{habits.map(RenderHabit)}</>
        )
    } else {
        return (<></>);
    }
    
}

function RenderHabit(habit) {
    const userData = useContext(UserContext);
    return (
        <Habit data-identifier="habit-container">
            <div class="box">
                <p data-identifier="habit-name">{habit.name}</p>
                <img src={trash} alt="Apagar" onClick={() => deleteHabit(deleteUrl, habit, userData)} data-identifier="habit-delete-btn" />
            </div>
            <DaysBox>
                <DayBox data-identifier="habit-day">
                    <p>D</p>
                </DayBox>
                <DayBox>
                    <p>S</p>
                </DayBox>
                <DayBox>
                    <p>T</p>
                </DayBox>
                <DayBox>
                    <p>Q</p>
                </DayBox>
                <DayBox>
                    <p>Q</p>
                </DayBox>
                <DayBox>
                    <p>S</p>
                </DayBox>
                <DayBox>
                    <p>S</p>
                </DayBox>
            </DaysBox>
        </Habit>
    )
}

function renderCreateHabit(enableCreate, setEnableCreate) {
    if (enableCreate === 'flex') {
        setEnableCreate('none');
    } else {
        setEnableCreate('flex');
    };
}

function createdHabitFunction(propsCreatedHabit, habitName, daysLst, habitPostUrl, userData, propsHabitsLst, propsEnableCreate) {
    const setHabitsLst = propsHabitsLst.setHabitsLst;
    const habitsLst = propsHabitsLst.habitsLst;
    const setEnableCreate = propsEnableCreate.setEnableCreate;
    const createdHabit = propsCreatedHabit.createdHabit;
    const setCreatedHabit = propsCreatedHabit.setCreatedHabit;
    setCreatedHabit({
        name: habitName,
        days: daysLst
    })
    console.log(createdHabit);
    const user = userData.user;
    const request = axios.post(habitPostUrl, createdHabit, { headers: { Authorization: `Bearer ${user.token}` } });
    request.then((server) => { setHabitsLst([...habitsLst, server.data]) });
    request.then(()=>setEnableCreate(false));
    request.catch(()=>alert("Erro ao enviar hábito"))
    request.catch((error) => error.response.data);
}

function deleteHabit(deleteUrl, habit, userData) {
    let text = "Voce deseja apagar este habito?\nClique em OK ou Cancel";
    // eslint-disable-next-line no-restricted-globals
    if (confirm(text) === true) {
        const url = deleteUrl + habit.id;
        const request = axios.delete(url, { headers: { Authorization: `Bearer ${userData.user.token}` } });
        request.then(() => { alert("Hábito apagado com sucesso") });
        request.catch((error) => error.response);
    };
}

function updateHabitName(name, setHabitName) {
    setHabitName(name);
}








function setDaysHabit(num, daysLst, setDaysLst, dayColorLst,setDayColorLst, setDayColorLstItem){
    setDayColorLstItem(daysLst, setDayColorLst);
    setDaysLst([...daysLst, num]);
    setDaysLst(daysLst.sort());
}


function setDayColorLst0 (dayColorLst, setDayColorLst){
    let newColor;
    if (dayColorLst[0] === '#CFCFCF'){
        newColor = '#FFFFFF';
    } else {
        newColor = '#CFCFCF';
    }
    setDayColorLst([newColor, dayColorLst[1], dayColorLst[2], dayColorLst[3], dayColorLst[4], dayColorLst[5], dayColorLst[6]])
}

function setDayColorLst1 (dayColorLst, setDayColorLst){
    let newColor;
    if (dayColorLst[1] === '#CFCFCF'){
        newColor = '#FFFFFF';
    } else {
        newColor = '#CFCFCF';
    }
    setDayColorLst([dayColorLst[0], newColor , dayColorLst[2], dayColorLst[3], dayColorLst[4], dayColorLst[5], dayColorLst[6]])
}

function setDayColorLst2 (dayColorLst, setDayColorLst){
    let newColor;
    if (dayColorLst[2] === '#CFCFCF'){
        newColor = '#FFFFFF';
    } else {
        newColor = '#CFCFCF';
    }
    setDayColorLst([dayColorLst[0], dayColorLst[1], newColor, dayColorLst[3], dayColorLst[4], dayColorLst[5], dayColorLst[6]])
}

function setDayColorLst3 (dayColorLst, setDayColorLst){
    let newColor;
    if (dayColorLst[3] === '#CFCFCF'){
        newColor = '#FFFFFF';
    } else {
        newColor = '#CFCFCF';
    }
    setDayColorLst([dayColorLst[0], dayColorLst[1], dayColorLst[2], newColor, dayColorLst[4], dayColorLst[5], dayColorLst[6]])
}

function setDayColorLst4 (dayColorLst, setDayColorLst){
    let newColor;
    if (dayColorLst[4] === '#CFCFCF'){
        newColor = '#FFFFFF';
    } else {
        newColor = '#CFCFCF';
    }
    setDayColorLst([dayColorLst[0], dayColorLst[1], dayColorLst[2], dayColorLst[3], newColor, dayColorLst[5], dayColorLst[6]])
}

function setDayColorLst5 (dayColorLst, setDayColorLst){
    let newColor;
    if (dayColorLst[5] === '#CFCFCF'){
        newColor = '#FFFFFF';
    } else {
        newColor = '#CFCFCF';
    }
    setDayColorLst([dayColorLst[0], dayColorLst[1], dayColorLst[2], dayColorLst[3], dayColorLst[4], newColor, dayColorLst[6]])
}

function setDayColorLst6 (dayColorLst, setDayColorLst){
    let newColor;
    if (dayColorLst[6] === '#CFCFCF'){
        newColor = '#FFFFFF';
    } else {
        newColor = '#CFCFCF';
    }
    setDayColorLst([dayColorLst[0], dayColorLst[1], dayColorLst[2], dayColorLst[3], dayColorLst[4], dayColorLst[5], newColor ])
}





const HabitDiv = styled.div`
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

const TopBarHabits = styled.div`
width: 95%;
margin: 20px 0px;
display: flex;
justify-content: space-between;
align-items: center;
`

const FontTopBarHabits = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 29px;
color: #126BA5;
`
const CreateHabit = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 5px;
display: flex;
justify-content: center;
align-items:center;
`

const PlusText = styled.p`
font-size: 27px;
color: #FFFFFF;
`

const AddHabitDiv = styled.div`
display: ${props => props.render};
justify-content:center;
flex-direction: column;
width: 95%;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
padding: 10px 10px;
`

const AddHabitButtons = styled.div`
display:flex;
justify-content:end;
`

const AddHabitCancel = styled.div`
margin: 70px 0px 0px 0px;
width: 84px;
height: 35px;
display:flex;
justify-content:center;
align-items:center;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #52B6FF;
}
`;

const AddHabitButton = styled.div`
margin: 70px 0px 0px 0px;
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 5px;
display:flex;
justify-content:center;
align-items:center;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;    
}
`


const InputHabitName = styled.input`
box-sizing: border-box;
width: 303px;
height: 50px;
background: #FFFFFF;
border: 2px solid #D5D5D5;
border-radius: 5px;
padding: 0px 10px;
::placeholder{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
color: #DBDBDB;
}
`

const Habit = styled.div`
width: 95%;
height: 91px;
padding: 10px 10px;
margin: 10px 0px;
display: flex;
flex-direction:column;
background: #FFFFFF;
border-radius: 5px;
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #666666;
};
img{
    top: 10px;
    right: 10px;
    width:15px;
    height:13px;
};
`

const DaysBox = styled.div`
width:100%;
display: flex;
flex-direction:row;
height: 32px;
margin: 10px 0px;
`

const DayBox = styled.div`
box-sizing: border-box;
width: 30px;
height: 30px;
background: ${props=>props.color};
border: 2px solid #D5D5D5;
border-radius: 5px;
margin: 6px 3px 0px 0px;
display: flex;
justify-content: center;
align-items: center;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #DBDBDB;
text-align:center;
}
`

const NoHabitWarning = styled.p`
display: ${props => props.render};
width:95%;
margin: 30px 0px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #666666;
`