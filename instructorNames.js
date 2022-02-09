function instructorWithLongestName(instructors) {
  let highChars = 0;
  let longestName  = ""
  for (const instructor of instructors) {
    if ((instructor.name).length > highChars) {
      highChars = (instructor.name).length;
      longestName = instructor
    }
  }
  return longestName
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));