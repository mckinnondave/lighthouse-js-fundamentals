function talkingCalendar (date) {
  let year = date.slice(0,4)
  let month = date.slice(5,7)
  let day = date.slice(8,10)
  let prefix;

  switch(month) {
    case "01": month = "January"; break;
    case "02": month = "February"; break;
    case "03": month ="March"; break;
    case "04": month ="April"; break;
    case "05": month ="May"; break;
    case "06": month ="June"; break;
    case "07": month ="July"; break;
    case "08": month ="August"; break;
    case "09": month ="September"; break;
    case "10": month ="October"; break;
    case "11": month ="November"; break;
    case "12": month ="December"; break;
  }

  switch(day) {
    case "01": prefix ="st"; break;
    case "02": prefix ="nd"; break;
    case "03": prefix ="rd"; break;
    case "21": prefix ="st"; break;
    case "22": prefix ="nd"; break;
    case "23": prefix ="rd"; break;
    case "31": prefix ="st"; break;
    default: prefix = "th"; break;
  }
  if (day.charAt(0) === "0"){
    day = day.slice(1)
  }
  return `${month} ${day}${prefix}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));