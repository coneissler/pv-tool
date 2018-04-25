import * as actionTypes from './actions/actionTypes'
import {a1SanityCheck, a2SanityCheck, p1SanityCheck, p2SanityCheck, s1SanityCheck, s2SanityCheck} from "./SanityChecks"

const initialState = {

    mod: [{type:'a', size: 2}, {type:'d', size: 0}, {type:'s', size: 2}, {type:'p', size: 0}],
    rowAmount: 10,
    general2: [
        {
            name: "Benedikt Ziegert",
            memberstatus: "Mitglied",
            age: 20,
            resort: "IN",
            major: 'B.Sc. Wirtschaftsingenieurwesen',
            university: 'Technische Universität',
            uniShort: 'TU',
            img: "https://board.cct-ev.de/wp-content/uploads/2016/10/Benedikt-Ziegert-500x500.jpg",
            active: true
        },
        {
            name: "Axel-Bernhard Walter",
            age: 23,
            resort: "IT",
            memberstatus: "Interessent",
            major: 'M.Sc. Betriebswirtschaftslehre',
            university: 'Technische Universität',
            uniShort: 'TU',
            img: "https://board.cct-ev.de/wp-content/uploads/2017/06/Axel-500x331.jpg",
            active: false
        },{
            active: true
        },{
            name: "Constantin Eißler",
            age: 20,
            resort: "V",
            memberstatus: "Mitglied",
            major: 'B.Sc. Informatik',
            university: 'Humbold Universität',
            uniShort: 'HU',
            active: true
        },
        {
            name: "Alex Mustermann",
            age: 23,
            resort: "QM",
            memberstatus: "Interessent",
            major: 'M.Sc. Betriebswirtschaftslehre',
            university: 'Freie Universität',
            uniShort: 'FU',
        },
        {
            name: "Jemand mitdrei Namen",
            age: 25,
            resort: "RM",
            memberstatus: "Anwärter",
            major: 'M.Sc. Astronomie und Luftfahrt',
            university: 'Technische Universität',
            uniShort: 'HTW',
        }
            ],
    general1: [{
      name: "Benedikt Ziegert",
      memberstatus: "Mitglied",
      age: 20,
      resort: "IN",
      major: 'B.Sc. Wirtschaftsingenieurwesen',
      university: 'Technische Universität',
      uniShort: 'TU',
      img: "https://board.cct-ev.de/wp-content/uploads/2016/10/Benedikt-Ziegert-500x500.jpg",
      active: true
    },
      {
        name: "Axel-Bernhard Walter",
        age: 23,
        resort: "IT",
        memberstatus: "Interessent",
        major: 'M.Sc. Betriebswirtschaftslehre',
        university: 'Technische Universität',
        uniShort: 'TU',
        img: "https://board.cct-ev.de/wp-content/uploads/2017/06/Axel-500x331.jpg",
        active: false
      }],
    project2: [
        {
            bt: 150,
            inp: 200,
            percent: 68,
            projects: [
                {
                    name: "HCC sgd Development",
                    projectTyp: "IT-Projekt IT-Projekt",
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
  // ['Angebotserstellung', 'Corporate Design', 'Finanzen und Recht', 'Internes, QM und BDSU', 'Präsentationstechniken', 'Projektmanagement']
    seminar2: [
        {
        seminars: [{
          name: 'Angebotserstellung',
          completed: true
        },{
          name: 'Finanzen und Recht',
          completed: true
        },{
          name: 'Internes, QM und BDSU',
          completed: true
        },{
          name: 'Präsentationstechniken',
          completed: true
        },{
          name: 'Projektmanagement',
          completed: true
        },{
          name: 'Corporate Design',
          completed: true
        }],
          seminarName: "Duummmmyyy 3",
          expieriencedIn: "trains",
          about: "I like trains",
          completedSeminars: 6,
          skills: ['Web Development', 'Präsentationstechniken', 'Design', 'Mathematik', 'Verhandlungsskills', 'Aquiseskills','Skill 1', 'Skill 2 der ewjfnj', 'Skillqwefq 1', 'Skidll 1', 'Skidd', 'Skillad']
        },{
        skills: ['Skill 1', 'Skill 2 der ewjfnj', 'Skillqwefq 1', 'Skidll 1', 'Skidd', 'Skilld'],
            seminars: [{
                name: 'Corporate Design',
                completed: true
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
          completedSeminars: 6,
          bestType: 'IT-Projekte',
          amountPl: 4,
          amountPc: 1,
          bestTypeAmount: 2,
          projectsTotal: 9
        },
        {
          completedSeminars: 3,
          bestType: 'Strategieprojekte',
          amountPl: 1,
          amountPc: 3,
          bestTypeAmount: 4,
          projectsTotal: 7
        },
        {
          completedSeminars: 6,
          bestType: 'IT-Projekte',
          amountPl: 2,
          amountPc: 1,
          bestTypeAmount: 4,
          projectsTotal: 1
        },{
        completedSeminars: 6
        },
        {
            seminarName: "Presentationstechniken",
            expieriencedIn: "This and that",
            about: "blabla",
          completedSeminars: 6
        },
        {
            seminarName: "Duummmmyyy 3",
            expieriencedIn: "trains",
            about: "I like trains",
          completedSeminars: 6
        }
            ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DROPDOWN: return changeDropdown(state, action)
        case actionTypes.SORT_DATA: return sortData(state, action)
        case actionTypes.SET_DATA: return setData(state, action)
      default:
        return testRunSanity(state)
    }
}

const testRunSanity = state => {
  const ra = state.rowAmount
  return {
    ...state,
    general1: a1SanityCheck(state.general1, ra),
    general2: a2SanityCheck(state.general2, ra),
    project1: p1SanityCheck(state.project1, ra),
    project2: p2SanityCheck(state.project2, ra),
    seminar1: s1SanityCheck(state.seminar1, ra),
    seminar2: s2SanityCheck(state.seminar2, ra)
  }
}

const changeDropdown = (state, action) => {
  const newMod = state.mod.slice()
  if(state.mod[action.col].size === action.element.size){
    newMod.splice(action.col, 1, action.element)
  }else {
    newMod.splice(action.col - (action.col % 2), 2, action.element,
      action.element.size === 2 ? {type: action.element.type, size: 0} : {type: 'd', size: 1})
  }return {
    ...state,
    mod: newMod
  }
}

const setData = (state, action) => {
    return {
      ...state,
      rowAmount: action.length,
      [action.col]: action.data
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