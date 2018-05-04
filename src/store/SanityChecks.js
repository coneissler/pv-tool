import placeholder from '../assets/PlaceHolderSuit.png'

export const a1SanityCheck = (data, rowAmount) => {
  let cleanData = []
  for(let i = 0; i<rowAmount; i++) {
    let name, resort, image, active
    if(data && data[i]) {
      name = typeof data[i].name === 'string' ? data[i].name : 'Anonymous'
      resort = typeof data[i].resort === 'string' ? data[i].resort : 'No'
      image = typeof data[i].img !== 'undefined' ? data[i].img : placeholder
      active = typeof data[i].active === 'boolean' ? data[i].active : true
    } else {
      name = 'Anonymous'
      resort = 'No'
      image = placeholder
      active = true
    }
    cleanData[i] = {
      name: name,
      resort: resort,
      img: image,
      active: active
    }
  }
  return cleanData
}

export const a2SanityCheck = (data, rowAmount) => {
  let cleanData = []
  for(let i = 0; i<rowAmount; i++) {
    let image, name, resort, memberStatus, joinDate, major, university, months, uniShort, active, socials;
    if(data && data[i]) {
      image = typeof data[i].img !== 'undefined' ? data[i].img : placeholder
      resort = data[i].resort
      name = typeof data[i].name === 'string' ? data[i].name : 'Anonymous'
      memberStatus = typeof data[i].memberstatus === 'string' ? data[i].memberstatus : 'Unbekannt'
      joinDate = typeof data[i].joinDate === 'string' ? data[i].joinDate : '01.01.2017'
      major = typeof data[i].major === 'string' ? data[i].major : ''
      university = typeof data[i].university === 'string' ? data[i].university : ''
      uniShort = typeof data[i].uniShort === 'string' ? data[i].uniShort : ''
      months = calculateMonths(joinDate)
      active = data[i].active
      socials = {phone: (typeof data[i].socials !== 'undefined' && typeof data[i].socials.phone === 'string') ? data[i].socials.phone : '-',
                mail: (typeof data[i].socials !== 'undefined' && typeof data[i].socials.mail === 'string') ? data[i].socials.mail : '-',
                slack: (typeof data[i].socials !== 'undefined' && typeof data[i].socials.slack === 'string') ? data[i].socials.slack : '-',
                linkedIn: (typeof data[i].socials !== 'undefined' && typeof data[i].socials.linkedIn === 'string') ? data[i].socials.linkedIn : '-'}

    }else {
      resort = 'No'
      name = 'Anonymous'
      memberStatus = 'Unbekannt'
      joinDate = '01.01.2017'
      major = ''
      university = '-'
      uniShort = '-'
      months = '0M'
      active = true
      image = placeholder
      socials = {phone: '-', mail: '-', slack: '-', linkedIn: '-'}
    }
    cleanData[i] = {
      img: image,
      resort: resort,
      name: name,
      memberstatus: memberStatus,
      joinDate: joinDate,
      major: major,
      joinDateMonth: monthDict[joinDate.substring(3,5)] + ' ' + joinDate.substring(6),
      university: university,
      uniShort: uniShort,
      months: months,
      active: active,
      socials: socials
    }
  }
  return cleanData
}

export const p1SanityCheck = (data, rowAmount) => {
  let cleanData = []
  for(let i = 0; i<rowAmount; i++) {
    let bt, ip, available
    if(data && data[i]) {
      bt = typeof data[i].bt === 'number' ? data[i].bt : 0
      ip = typeof data[i].ip === 'number' ? data[i].ip : 0
      available = typeof data[i].available === 'string' ? data[i].available : 'Verfügbar'
    } else {
      bt = 0
      ip = 0
      available = 'Verfügbar'
    }
    cleanData[i] = {
      bt: bt,
      ip: ip,
      available: available
    }
  }
  return cleanData
}

export const p2SanityCheck = (data, rowAmount) => {
  let cleanData = []
  for(let i = 0; i<rowAmount; i++) {
    let bt, ip, projectsTotal
    let projects = []
    if(data && data[i]) {
      bt = typeof data[i].bt === 'number' ? data[i].bt : 0
      ip = typeof data[i].inp === 'number' ? data[i].inp : 0
      projectsTotal = typeof data[i].projectsTotal === 'number' ? data[i].projectsTotal : 0
      projects = data[i].projects.map(proj => {
        return {
          projectTyp: typeof proj.projectTyp === 'string' ? proj.projectTyp : 'Projekttyp',
          client: typeof proj.client === 'string' ? proj.client : 'Kunde',
          bt: typeof proj.bt === 'number' ? proj.bt : '?',
          position: typeof proj.position === 'string' ? proj.position : '',
          name: typeof proj.name === 'string' ? proj.name : 'Projekt',
          completed: typeof proj.completed === 'string' ? projectStatus(proj.completed): 'rgba(16,187,103,0.5)'
        }
      })
    } else {
      bt = 1
      ip = 1
      projectsTotal = 0
    }
    cleanData[i] = {
      bt: bt,
      ip: ip,
      projectsTotal: projectsTotal,
      projects: projects

    }
  }
  return cleanData
}

export const s1SanityCheck = (data, rowAmount) => {
  let cleanData = []
  for(let i = 0; i<rowAmount; i++) {
    let completedSeminars, projectsTotal, bestType, bestTypeAmount, timesPl, timesPc;
    if(data && data[i]) {
      completedSeminars = typeof data[i].completedSeminars === 'number' ? data[i].completedSeminars : 0
      projectsTotal = typeof data[i].projectsTotal === 'number' ? data[i].projectsTotal : 0
      bestType = typeof data[i].bestType === 'string' ? data[i].bestType : '-'
      bestTypeAmount = typeof data[i].bestTypeAmount === 'number' ? data[i].bestTypeAmount : 0
      timesPl = typeof data[i].timesPl === 'number' ? data[i].timesPl : 0
      timesPc = typeof data[i].timesPc === 'number' ? data[i].timesPc : 0
    }
    else {
      completedSeminars = 0
      projectsTotal = 0
      bestType = '-'
      bestTypeAmount = 0
      timesPl = 0
      timesPc = 0
    }
    cleanData[i] = {
      completedSeminars: completedSeminars,
      projectsTotal: projectsTotal,
      bestType: bestType,
      bestTypeAmount: bestTypeAmount,
      timesPl: timesPl,
      timesPc: timesPc
    }
  }
  return cleanData
}

export const s2SanityCheck = (data, rowAmount) => {
  let cleanData = []
  let expieriencedIn, pastProjects, completedSeminars
  for(let i = 0; i<rowAmount; i++) {
    const seminars = []
    let skillSet1 = [], skillSet2 = []
    if(data && data[i]) {
      if(data[i].skills && data[i].skills.length > 0){
          const conSorted = conSort(data[i].skills)
          skillSet1 = conSorted[0]
          skillSet2 = conSorted[1]
      }
      expieriencedIn = typeof data[i].expieriencedIn === 'string' ? data[i].expieriencedIn : '-'
      pastProjects = typeof data[i].pastProjects === 'string' ? data[i].pastProjects : ''
      completedSeminars = typeof data[i].completedSeminars === 'number' ? data[i].completedSeminars : 0
      data[i].seminars.map(sem => {
        if(typeof sem.name === 'string' && typeof sem.completed === 'boolean') {
          seminars.push({
            name: sem.name,
            completed: sem.completed
          })
        }
      return null})
    }
    else {
      expieriencedIn =  '-'
      pastProjects = ''
      completedSeminars = 0
      skillSet1 = []
      skillSet2 = []
    }
    legitSeminarStrings.map(legit => {
      if(!seminars.some(e => {
        return e.name === legit
        })) {
        seminars.push({
          name: legit,
          completed: false
        })
      }
    return null})
    cleanData[i] = {
      expieriencedIn: expieriencedIn,
      completedSeminars: completedSeminars,
      pastProjects: pastProjects,
      skillSet1: skillSet1,
      skillSet2: skillSet2,
      seminars: seminars
    }
  }
  return cleanData
}

const monthDict = {
  '01': 'Januar', '02': 'Februar','03': 'März','04': 'April','05': 'Mai','06': 'Juni','07': 'Juli',
  '08': 'August','09': 'September','10': 'Oktober','11': 'November','12': 'Dezember'
}

const projectStatus = (status) => {
  switch(status){
    case 'laufend':
      return 'rgba(238, 189, 21, 0.5)'
    case 'abgelehnt':
      return 'rgba(171,45,25,0.5)'
    default:
      return 'rgba(16,187,103,0.5)'
  }
}

const legitSeminarStrings = ['Angebotserstellung', 'Corporate Design', 'Finanzen und Recht', 'Internes, QM und BDSU',
  'Präsentationstechniken', 'Projektmanagement']

const calculateMonths = (joinDate) => {
  const today = new Date()
  return today.getMonth() + 1+today.getFullYear()*12-
    parseInt(joinDate.substring(4,7), 10)-
    parseInt(joinDate.substring(6), 10)*12 + 'M'
}

const conSort = (array) => {
  const output1 = [], output2 = []
  let length1 = 0, length2 = 0
  const countedArray = array.map(word => {
    return {
      skill: word,
      length: word.length
    }
  })
  countedArray.sort(compare)
  length2 += countedArray[countedArray.length-1].length
  output2.push(countedArray[countedArray.length-1].skill)
  countedArray.splice(countedArray.length-1, 1)
  for(let i = countedArray.length-1; i>=0; i--) {
    if(length2 >= length1) {
      length1 += countedArray[i].length
      output1.push(countedArray[i].skill)
    } else {
      length2 += countedArray[i].length
      output2.push(countedArray[i].skill)
    }
  }
  return [output1.shuffle(), output2.shuffle()]
}

const compare = (a, b) => {
  if (a.length<b.length) {
    return -1;
  }
  if (a.length>b.length) {
    return 1;
  }
  return 0;
}
// Achtung nicht-deterministisch!
Array.prototype.shuffle = function () {
  let m = this.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);
    [this[m], this[i]] = [this[i], this[m]];
  }
  return this;
}
