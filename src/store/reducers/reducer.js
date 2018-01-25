import * as actionTypes from '../actions/actionTypes';

const initialState = {

    mod: [{type:'a', size: 2}, {type:'a', size: 0}, {type:'p', size: 1}, {type:'s', size: 1}],
    rowAmount: 5,
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
    general1: [],
    project2: [],
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
    seminar2: [],
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
        const target = action.col - (action.col % 2)
        newMod.splice(target, 2, action.element,
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