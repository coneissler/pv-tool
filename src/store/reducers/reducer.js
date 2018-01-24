import * as actionTypes from '../actions/actionTypes';

const initialState = {

    mod: [{type:'a', size: 2}, {type:'a', size: 0}, {type:'p', size: 1}, {type:'s', size: 1}],
    rowAmount: 3,
    general2: [
            {
                name: "Constantin Eißler",
                age: 20,
                resort: "IT"
            },
            {
                name: "Person 2",
                age: 23,
                resort: "HR"
            },
            {
                name: "Person 3",
                age: 25,
                resort: "PR"
            }
        ],

    project1: [
            {
                project: "PV-Tool",
                bt: 150,
                projectLeader: "Constantin Eissler"
            },
            {
                project: "Imagetrailer",
                bt: 102,
                projectLeader: "Johannes"
            },
            {
                project: "Audi",
                bt: 50,
                projectLeader: "Person XY"
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
            }
        ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DROPDOWN_CHANGED:
            const prevSize = state.mod[action.col].size
            if(prevSize === action.element.size){
                const newMod = state.mod
                newMod[action.col] = action.element
                return {
                    ...state,
                    mod: newMod
                }
            }else {
                const newMod = state.mod
                const target = action.col - (action.col % 2)
                newMod[target] = action.element
                newMod[target+1] = action.element.size === 2 ? {type: action.element.type, size: 0} : {type: 'd', size: 1}
                return {
                    ...state,
                    mod: newMod
                }
            }
        default:
            return state
    }
};


export default reducer;