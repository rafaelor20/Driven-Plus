import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../App";
import TopBar from './topBar.js'
import BottomBar from './bottomBar'
import { habitsTodayUrl, habitsTodayReceive } from './apiUrls.js'
import checked from './assets/checked.png'


export default function Today() {

    const userData = useContext(UserContext);
    const [habitsToday, setHabitsToday] = useState(habitsTodayReceive);
    const request = axios.get(habitsTodayUrl, { headers: { Authorization: `Bearer ${userData.user.token}` } });
    request.then((server) => { setHabitsToday(server.data) });
    request.catch((error) => error.response.data);
    console.log(habitsToday);
    return (
        <TodayStyle>
            <TopBar />
            <Content>
                <TodayTitle data-identifier="today">
                    domingo, 1/02
                </TodayTitle>
                <HabitsDone data-identifier="today-counter">
                    Nenhum hábito concluído ainda
                </HabitsDone>
                
                <>{RenderHabit(habitsTodayReceive)}</>
            </Content>

            <BottomBar />
        </TodayStyle>
    );
}
//<>{Habits(habitsToday)}</>
function Habits(lst) {
    return (
        <>{lst.map(RenderHabit)}</>
    )
}

function RenderHabit(habit) {
    const [habitDone, setHabitDone] = useState(habit.done)
    return (
        <Habit data-identifier="today-habit-container">
            <p class="title" data-identifier="today-habit-name">{habit.name}</p>
            <p class="item" data-identifier="today-habit-sequence">Sequência atual:<span class="answer"> {habit.currentSequence}</span></p>
            <p class="item" data-identifier="today-habit-record">Seu recorde:<span class="answer"> {habit.highestSequence}</span></p>
            <img data-identifier="today-habit-check-btn" src={checked} alt="" bool={habitDone} onClick={() => markHabitDone(habitDone, setHabitDone)} />
        </Habit>
    );
}

function markHabitDone(habitDone, setHabitDone) {
    if (habitDone) {
        setHabitDone(false);
    } else {
        setHabitDone(true);
    }
}

const TodayStyle = styled.div`
box-sizing: border-box;
`

const Content = styled.div`
box-sizing: border-box;
background-color: #E5E5E5;
display:flex;
flex-direction:column;
min-height: 560px;
padding: 15px 15px;
`

const TodayTitle = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 29px;
color: #126BA5;
margin: 30px 0px 5px 10px;
`

const HabitsDone = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #BABABA;
margin: 0px 0px 30px 10px;
`

const Habit = styled.div`
width: 95%;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
align-items: center
margin: 30px 10px;
padding: 10px 10px;
position: relative;
.title{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color: #666666;
}

.item{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #666666;
}

.answer{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #666666;
}

img{
background: ${(props) => (props.bool) === true ? '#8FC549' : '#EBEBEB'};
border: 1px solid #E7E7E7;
border-radius: 5px;
width: 69px;
height: 69px;
position: absolute;
top: 10px;
right: 10px;
}
`

