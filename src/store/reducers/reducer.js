import * as actionTypes from '../actions/actions';

const initialState = {
    checkSum: 3,
    a: {
        1: false,
        2: true
    },

    s: {
        1: false,
        2: false
    },

    p: {
        1: true,
        2: false
    }
};

const reducer = (state = initialState, action) => {
    let newSum = 0;
    switch(action.type){

        // enables and updates the checksum
        case(actionTypes.ENABLE_ELEMENT):
            newSum = state.checkSum + action.size;
            if(newSum > 4 || state[action.element][action.size]) return state;
            return{
                ...state,
                checkSum: newSum,
                [action.element]: {
                    ...state[action.element],
                    [action.size]: true
                }
            };

        // disables an element and updates the checksum
        case(actionTypes.DISABLE_ELEMENT):
            newSum = state.checkSum - action.size;
            if(!state[action.element][action.size]) return state;
            return{
                ...state,
                checkSum: newSum,
                [action.element]: {
                    ...state[action.element],
                    [action.size]: false
                }
            };
        // assuming if (checksum = 4)=>expand button is disabled
        // also assuming that 1,2 can never be active at the same time
        // Toggle expand, collapse
        case(actionTypes.TOGGLE_ELEMENT):
            const updatedElement = {
                1: !state[action.element][1],
                2: !state[action.element][2]
            };
            newSum = state.checkSum - 1;
            if(state[action.element][1]) newSum += 2;
            return{
                ...state,
                checkSum: newSum,
                [action.element]: updatedElement

            };

        default: return state;
    }
};

export default reducer;