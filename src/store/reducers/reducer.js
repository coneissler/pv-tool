import * as actionTypes from '../actions/actionTypes';
import axios from "../../axios-instance";

axios.get('http://localhost:5000/api/users/a2').then(function (response) {
    console.log(response);
    console.log(response.data);
    var usersJson = response.data;
    console.log(usersJson);
}).catch(function (error) {
    console.log(error);
});

const initialState = {

    mod: [{type:'a', size: 2}, {type:'d', size: 0}, {type:'s', size: 1}, {type:'p', size: 1}],
    rowAmount: 20,
    general2: [
        {
            memberstatus: "Interessent",
            age: 20,
            resort: "IT",
            major: 'B.Sc. Informatik',
            university: 'Humbold Universität',
            uniShort: 'HTW',
            joinDate: '11.08.2012',
            img: "https://board.cct-ev.de/wp-content/uploads/2016/10/Benedikt-Ziegert-500x500.jpg"
        },
        {
            name: "Alex Mustermann",
            age: 23,
            resort: "HR",
            memberstatus: "Interessent",
            major: 'M.Sc. Betriebswirtschaftslehre',
            university: 'Freie Universität',
            uniShort: 'HTW',
            joinDate: '01.05.2017',
            img: "https://board.cct-ev.de/wp-content/uploads/2017/06/Axel-500x331.jpg"
        },
        {

        },{
            name: "Constantin Eißler",
            age: 20,
            resort: "V",
            memberstatus: "Mitglied",
            major: 'B.Sc. Informatik',
            university: 'Humbold Universität',
            uniShort: 'HU',
            joinDate: '11.08.2012',
        },
        {
            name: "Alex Mustermann",
            age: 23,
            resort: "QM",
            memberstatus: "Interessent",
            major: 'M.Sc. Betriebswirtschaftslehre',
            university: 'Freie Universität',
            uniShort: 'FU',
            joinDate: '01.05.2017'
        },
        {
            name: "Jemand mitdrei Namen",
            age: 25,
            resort: "RM",
            memberstatus: "Anwärter",
            major: 'M.Sc. Astronomie und Luftfahrt',
            university: 'Technische Universität',
            uniShort: 'HTW',
            joinDate: '26.07.2017'
        }
            ],
    general1: [],
    project2: [
        {
            bt: 150,
            inp: 200,
            percent: 68,
            projects: [
                {
                    name: "HCC sgd Development",
                    projectTyp: "IT-Projekt",
                    client: "FU Berlin",
                    bt: "15",
                    status: 0
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },
                {}
            ]
        },
        {
            bt: 150,
            ip: 200,
            percent: 68,
            projects: [
                {
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 0
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },
            ]
        },
        {
            bt: 150,
            ip: 200,
            percent: 68,
            projects: [
                {
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 0
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },
            ]
        },{
            bt: 150,
            ip: 200,
            percent: 68,
            projects: [
                {
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 0
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: 15,
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: 100,
                },{
                    name: "HCC FrontEnd Development",
                    type: "extern",
                    projectLeader: "Maximilian Eißler",
                    bt: "15",
                    status: 1
                },
                {
                    name: "Project X",
                    type: "intern",
                    projectLeader: "That Guy",
                    bt: "100k",
                    status: 1
                },
            ]
        }

    ],
    project1: [
        {
            bt: 150,
            ip: 200,
            available: true
        },
        {
            bt: 123,
            ip: 89,
            available: true
        },
        {
            bt: 333,
            ip: 999,
            available: false
        },{
            bt: 150,
            ip: 200,
            available: true
        },
        {
            bt: 123,
            ip: 89,
            available: false
        },
        {
            bt: 333,
            ip: 999,
            available: false
        }
            ],
    seminar2: [
        {
            seminars: [{
                completed: true
            },{
                completed: true
            },{
                completed: true
            },{
                completed: false
            }]
        },{
            seminars: [{
                completed: false
            },{
                completed: true
            },{
                completed: false
            },{
                completed: true
            }]
        }
    ],
    seminar1: [
        {
            seminarName: "Finanzen und Recht",
            expieriencedIn: "WebDev",
            about: "I like Designing"
        },
        {
            seminarName: "Presentationstechniken",
            expieriencedIn: "This and that",
            about: "blabla"
        },
        {
            seminarName: "Duummmmyyy 3",
            expieriencedIn: "trains",
            about: "I like trains"
        },{
            seminarName: "Finanzen und Recht",
            expieriencedIn: "WebDev",
            about: "I like Designing"
        },
        {
            seminarName: "Presentationstechniken",
            expieriencedIn: "This and that",
            about: "blabla"
        },
        {
            seminarName: "Duummmmyyy 3",
            expieriencedIn: "trains",
            about: "I like trains"
        }
            ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DROPDOWN_CHANGED: return dropdownChanged(state, action)
        case actionTypes.SORT_DATA: return sortData(state, action)

        default:
            return state
    }
};



const dropdownChanged = (state, action) => {
    const newMod = state.mod.slice()
    if(state.mod[action.col].size === action.element.size){
        newMod.splice(action.col, 1, action.element)
        return {
            ...state,
            mod: newMod
        }
    }else {
        newMod.splice(action.col - (action.col % 2), 2, action.element,
            action.element.size === 2 ? {type: action.element.type, size: 0} : {type: 'd', size: 1})
        return {
            ...state,
            mod: newMod
        }
    }
}

const sortData = (state, action) => {
    const n = state.rowAmount
    const sortedState = state.slice()
    mergeSort(sortedState, 0, n-1, action)
    return sortedState
}


const mergeSort = (array, left, right, action) => {
    if(left < right) {
        const middle = Math.round((left+right) / 2)
        mergeSort(array, left, middle, action)
        mergeSort(array, middle+1, right, action)
        merge(array, left, middle, right, action)
    }
}
const merge = (array, left, middle, right, action) => {
    const temp = []
    let leftSide = left
    const rightSide = middle + 1
    let i = 1

    while( leftSide <= middle && rightSide <= right){
        if(compare(array[leftSide], array[rightSide], action.key, action.set)){  //  array[leftSide] <= array[rightSide]
            temp[i] = array[leftSide]
            leftSide++
        } else {
            temp[i] = array[rightSide]
        }
    }
}

const compare = () => {
    return true
}






export default reducer;