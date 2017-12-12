import * as actionTypes from '../actions/actions';

const initialState = {
    row1: {
        element: 'a',
        size: 2
    },
    row2: {
        element: 'a',
        size: 0
    },
    row3: {
        element: 'p',
        size: 1
    },
    row4: {
        element: 's',
        size: 1
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LEFT_BY2:
            return {
                    ...state,
                    row1: {
                        element: action.element,
                        size: 2
                    },
                    row2: {
                        element: action.element,
                        size: 0
                    }
            };

        case actionTypes.CHANGE_LEFT_BY1:
            if(state.row2.size !== 0) {
                return {
                        ...state,
                        [action.row]: {
                            element: action.element,
                            size: 1
                        }
                };
            }else {
                return {
                        ...state,
                        row1: {
                            element: action.element,
                            size: 1
                        },
                        row2: {
                            element: 'd',
                            size: 1
                        }
                };
            }

        case actionTypes.CHANGE_RIGHT_BY2:
            return {
                    ...state,
                    row3: {
                        element: action.element,
                        size: 2
                    },
                    row4: {
                        element: action.element,
                        size: 0
                    }
            };

        case actionTypes.CHANGE_RIGHT_BY1:
            if(state.row4.size !== 0) {
                return {
                        ...state,
                        [action.row]: {
                            element: action.element,
                            size: 1
                        }
                };
            }else {
                return {
                        ...state,
                        row3: {
                            element: action.element,
                            size: 1
                        },
                        row4: {
                            element: 'd',
                            size: 1
                        }
                }
            }

        default:
            return state
    }
};



export default reducer;