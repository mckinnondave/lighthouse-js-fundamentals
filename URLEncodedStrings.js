function urlDecode (text) {
  let result = {}
  let replace = text.replace(/%20/gi, " ");
  let split = replace.split(/[&=]/)
  for (let i = 0; i < split.length; i+=2) {
    let key = split[i];
    let value = split[i+1];
    result[key] = value;
  }
  return result
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);