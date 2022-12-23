export const registerPostUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
export const registerPostObj = {
	email: "",
	name: "",
	image: "",
	password: ""
};


export const loginPostUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
export const loginPostSendObj = {
	email: "...",
	password: "..."
};
export const loginPostReceiveObj =
{
	id: 0,
	name: "",
	image: "",
	email: "",
	password: "",
	token: ""
};


export const habitPostUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
export const habitPostSendObj = {
	name: "",
	days: [] // segunda, quarta e sexta
};
// config = { headers: { Authorization: `Bearer ${token}` } };


export const habitPostReceiveObj = {
	id: 0,
	name: "",
	days: []
};


export const habitsListGetUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
export const habitsListObj = [
	{
		id: 0,
		name: "",
		days: []
	}
];

export const deleteUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";//com id do habito concatenado no final
// config = { headers: { Authorization: `Bearer ${token}` } };


export const habitsTodayUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
// config = { headers: { Authorization: `Bearer ${token}` } };
export const habitsTodayReceive = [
	{
		"id": 0,
		"name": "",
		"done": false,
		"currentSequence": 0,
		"highestSequence": 0
	}
];

export const habitDonePostUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check"
// config = { headers: { Authorization: `Bearer ${token}` } };

export const habitUndonePostUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/uncheck"
// config = { headers: { Authorization: `Bearer ${token}` } };

export const historicGetUrl = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
// config = { headers: { Authorization: `Bearer ${token}` } };