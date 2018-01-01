import * as actionTypes from '../actions/actions';

const initialState = {
    col1: {
        element: 'a',
        size: 2,
        rows: {
            1: {
                name: "Constantin Eißler",
                age: 20,
                ressort: "IT"
            },
            2: {
                name: "Person 2",
                age: 23,
                ressort: "HR"
            },
            3: {
                name: "Person 3",
                age: 25,
                ressort: "PR"
            }
        }
    },

    col2: {
        element: 'a',
        size: 0,
        rows: {
            1: {},
            2: {},
            3: {}
        }
    },

    col3: {
        element: 'p',
        size: 1,
        rows: {
            1: {},
            2: {},
            3: {}
        }
    },

    col4: {
        element: 's',
        size: 1,
        rows: {
            1: {},
            2: {},
            3: {}
        }
    },
    rowAmount: 10
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LEFT_BY2:
            return {
                    ...state,
                    col1: {
                        element: action.element,
                        size: 2
                    },
                    col2: {
                        element: action.element,
                        size: 0
                    }
            };

        case actionTypes.CHANGE_LEFT_BY1:
            if(state.col2.size !== 0) {
                return {
                        ...state,
                        [action.col]: {
                            element: action.element,
                            size: 1
                        }
                };
            }else {
                return {
                        ...state,
                        col1: {
                            element: action.element,
                            size: 1
                        },
                        col2: {
                            element: 'd',
                            size: 1
                        }
                };
            }

        case actionTypes.CHANGE_RIGHT_BY2:
            return {
                    ...state,
                    col3: {
                        element: action.element,
                        size: 2
                    },
                    col4: {
                        element: action.element,
                        size: 0
                    }
            };

        case actionTypes.CHANGE_RIGHT_BY1:
            if(state.col4.size !== 0) {
                return {
                        ...state,
                        [action.col]: {
                            element: action.element,
                            size: 1
                        }
                };
            }else {
                return {
                        ...state,
                        col3: {
                            element: action.element,
                            size: 1
                        },
                        col4: {
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