import * as actionTypes from './actionTypes'

export const dropdownChanged = (col, element) => {
  const mod = {type: element.charAt(0), size: parseInt(element.charAt(1),10)}
  return {
    type: actionTypes.CHANGE_DROPDOWN,
    col: col,
    element: mod
  }
}

// const parseData = data => {
//   let parsedData = []
//   for(let i = 1; i < data.length; i++) {
//     const date = dateToString(new Date(data[i].entry_date))
//     parsedData.push({
//       name: data[i].first_name + ' ' + data[i].last_name,
//       memberstatus: data[i].memberStatus,
//       age: 20,
//       resort: data[i].ressortAbbreviation,
//       major: data[i].majorName,
//       university: data[i].uniName,
//       uniShort: 'HTW',
//       joinDate: date,
//       img: "https://board.cct-ev.de/wp-content/uploads/2016/10/Benedikt-Ziegert-500x500.jpg"
//     })
//   }
//   console.log('data')
//   return parsedData
// }
//
// const fetchDataA2 = (col, element) => {
//     return dispatch => {
//       axios.get('http://localhost:5000/api/users/a2')
//         .then(response => {
//           console.log('RESPONSE', response.data.general2)
//           dispatch(setData('general2', parseData(response.data.general2), response.data.general2.length-1))
//           dispatch(changeDropdown(col, element))
//         })
//         .catch( error => {
//           console.log('ERROR', error)
//         })
//     }
// }
//
// export const setData = (col, data, len) => {
//   console.log('SET')
//     return {
//       type: actionTypes.SET_DATA,
//       col: col,
//       data: data,
//       length: len
//     }
// }
// export const sortData = (set, key) => {
//     return {
//         type: actionTypes.SORT_DATA,
//         set: set,
//         sortKey: key
//     }
// }
//
// const dateToString = (date) => {
//   const mm = date.getMonth() + 1
//   const dd = date.getDate()
//   return [(dd<10)?'0':'', dd, '.', (mm<10)?'0':'', mm, '.',date.getFullYear()].join('')
// }