function organizeInstructors (instructors) {
  let newObj = {
    iOS: [],
    Web: [],
    Blockchain: [] 
  }
  for (const instructor of instructors) {
    if (instructor.course === "iOS") {
      newObj.iOS.push(instructor.name);
    } else if (instructor.course === "Web") {
      newObj.Web.push(instructor.name);
    } else if (instructor.course === "Blockchain") {
      newObj.Blockchain.push(instructor.name);
    } 
  }
  for (const key in newObj) {
    if ((newObj[key]).length === 0) {
      delete newObj[key]
    }
  }
  return newObj
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));