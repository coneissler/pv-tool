import * as actionTypes from '../actions/actions';

const initialState = {
    col1: {
        element: 'a',
        size: 2,
        rows: [
            {
                name: "Constantin Eißler",
                age: 20,
                ressort: "IT"
            },
            {
                name: "Person 2",
                age: 23,
                ressort: "HR"
            },
            {
                name: "Person 3",
                age: 25,
                ressort: "PR"
            }
        ]
    },

    col2: {
        element: 'a',
        size: 0,
        rows: []

    },

    col3: {
        element: 'p',
        size: 1,
        rows: [
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
        ]
    },

    col4: {
        element: 's',
        size: 1,
        rows: [
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
    },
    rowAmount: 3
};

const reducer = (state = initialState, action) => {
    let newRows = null;
    switch (action.type) {
        case actionTypes.CHANGE_LEFT_BY2:
            newRows = state[action.col].rows;
            return {
                ...state,
                col1: {
                    element: action.element,
                    size: 2,
                    rows: newRows
                },
                col2: {
                    element: action.element,
                    size: 0,
                    rows: newRows
                }
            };

        case actionTypes.CHANGE_LEFT_BY1:
            newRows = state[action.col].rows;
            if (state.col2.size !== 0) {
                return {
                    ...state,
                    [action.col]: {
                        element: action.element,
                        size: 1,
                        rows: newRows

                    }
                };
            } else {
                return {
                    ...state,
                    col1: {
                        element: action.element,
                        size: 1,
                        rows: newRows
                    },
                    col2: {
                        element: 'd',
                        size: 1,
                        rows: newRows
                    }
                };
            }

        case actionTypes.CHANGE_RIGHT_BY2:
            newRows = state[action.col].rows;
            return {
                ...state,
                col3: {
                    element: action.element,
                    size: 2,
                    rows: newRows
                },
                col4: {
                    element: action.element,
                    size: 0,
                    rows: newRows
                }
            };

        case actionTypes.CHANGE_RIGHT_BY1:
            newRows = state[action.col].rows;
            if (state.col4.size !== 0) {
                return {
                    ...state,
                    [action.col]: {
                        element: action.element,
                        size: 1,
                        rows: newRows
                    }
                };
            } else {
                return {
                    ...state,
                    col3: {
                        element: action.element,
                        size: 1,
                        rows: newRows
                    },
                    col4: {
                        element: 'd',
                        size: 1,
                        rows: newRows
                    }
                }
            }

        default:
            return state
    }
};


export default reducer;