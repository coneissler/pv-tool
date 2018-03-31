import placeholder from '../assets/PlaceHolderSuit.png'

export const a1SanityCheck = (data, rowAmount) => {
  let cleanData = []
  for(let i = 0; i<rowAmount; i++) {
    let name, resort, image, active
    if(data && data[i]) {
      name = typeof data[i].name === 'string' ? data[i].name : 'Anonymous'
      resort = typeof data[i].resort === 'string' ? data[i].resort : 'No'
      image = typeof data[i].img !== 'undefined' ? data[i].img : placeholder
      active = typeof data[i].active !== 'boolean' ? data[i].active : true
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
    let image, name, resort, memberStatus, joinDate, major, university, months, uniShort, active;
    if(data && data[i]) {
      image = typeof data[i].img !== 'undefined' ? data[i].img : placeholder
      resort = data[i].resort
      name = typeof data[i].name === 'string' ? data[i].name : 'Anonymous'
      memberStatus = typeof data[i].memberstatus === 'string' ? data[i].memberstatus : 'Unbekannt'
      joinDate = typeof data[i].joinDate === 'string' ? data[i].joinDate : '01.01.2017'
      major = typeof data[i].major === 'string' ? data[i].major : 'B.Sc. Spaßstudent'
      university = typeof data[i].university === 'string' ? data[i].university : 'Unbekannt'
      uniShort = typeof data[i].uniShort === 'string' ? data[i].uniShort : '-'
      months = calculateMonths(joinDate)
      active = data[i].active
    }else {
      resort = 'No'
      name = 'Anonymous'
      memberStatus = 'Unbekannt'
      joinDate = '01.01.2017'
      major = 'B.Sc. Spaßstudent'
      university = '-'
      uniShort = '-'
      months = '0M'
      active = true
      image = placeholder
    }
    cleanData[i] = {
      img: image,
      resort: resort,
      name: name,
      memberstatus: memberStatus,
      joinDate: joinDate,
      major: major,
      university: university,
      uniShort: uniShort,
      months: months,
      active: active
    }
  }
  return cleanData
}

export const p1SanityCheck = (data, rowAmount) => {
  let cleanData = []
  for(let i = 0; i<rowAmount; i++) {
    let bt, ip, available
    if(data && data[i]) {
      bt = typeof data[i].bt === 'number' ? data[i].bt : 1
      ip = typeof data[i].ip === 'number' ? data[i].ip : 1
      available = typeof data[i].available === 'boolean' ? data[i].available : true
    } else {
      bt = 1
      ip = 1
      available = true
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
    let bt, ip
    let projects = []
    if(data && data[i]) {
      bt = typeof data[i].bt === 'number' ? data[i].bt : 1
      ip = typeof data[i].ip === 'number' ? data[i].ip : 1
      projects = data[i].projects.map(proj => {
        return {
          projectTyp: typeof proj.projectTyp === 'string' ? proj.projectTyp : 'Projekttyp',
          client: typeof proj.client === 'string' ? proj.client : 'Kunde',
          bt: typeof proj.bt === 'number' ? proj.bt : '?',
          position: typeof proj.position === 'string' ? proj.position : '',
          name: typeof proj.name === 'string' ? proj.name : 'Projekt'
        }
      })
    } else {
      bt = 1
      ip = 1
    }
    cleanData[i] = {
      bt: bt,
      ip: ip,
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
      timesPl = typeof data[i].amountPl === 'number' ? data[i].amountPl : 0
      timesPc = typeof data[i].amountPc === 'number' ? data[i].amountPc : 0
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
  let expieriencedIn, pastProjects, skill1, skill2
  for(let i = 0; i<rowAmount; i++) {
    const seminars = []
    if(data && data[i]) {
      expieriencedIn = typeof data[i].expieriencedIn === 'string' ? data[i].expieriencedIn : ''
      pastProjects = typeof data[i].pastProjects === 'string' ? data[i].pastProjects : ''
      skill1 = typeof data[i].skill1 === 'string' ? data[i].skill1 : ''
      skill2 = typeof data[i].skill2 === 'string' ? data[i].skill2 : ''
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
      expieriencedIn =  ''
      pastProjects = ''
      skill1 = ''
      skill2 = ''
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
      pastProjects: pastProjects,
      skill1: skill1,
      skill2: skill2,
      seminars: seminars
    }
  }
  return cleanData
}

const legitSeminarStrings = ['Angebotserstellung', 'Corporate Design', 'Finanzen und Recht', 'Internes, QM und BDSU',
  'Präsentationstechniken', 'Projektmanagement']

const calculateMonths = (joinDate) => {
  const today = new Date()
  return today.getMonth() + 1+today.getFullYear()*12-
    parseInt(joinDate.substring(4,7), 10)-
    parseInt(joinDate.substring(6), 10)*12 + 'M'
}
