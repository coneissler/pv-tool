import * as actionTypes from './actionTypes'

export const dropdownChanged = (col, element) => {
    const mod = {type: element.charAt(0), size: parseInt(element.charAt(1),10)}
    return {
        type: actionTypes.DROPDOWN_CHANGED,
        col: col,
        element: mod
    }
}

const fetchDataA1 = () => {
    return {
        type: actionTypes.FETCH_DATA_A1,
    }
}

export const sortData = (set, key) => {
    return {
        type: actionTypes.SORT_DATA,
        set: set,
        sortKey: key
    }
}