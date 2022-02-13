const PI = 3.14159 

function sphereVolume (radius) {
  let output = (4/3) * PI * (radius**3)
  return output
}

function coneVolume (radius, height) {
  let output = (1/3) * PI * (radius**2) * height;
  return output;
}

function prismVolume (height, width, depth) {
  let output = width * depth * height;
  return output;
}

function totalVolume (solids) {
  let total = 0;
  for (const solid of solids) {
    if (solid.type === "sphere") {
      total += sphereVolume(solid.radius)
    } else if (solid.type === "cone") {
      total += coneVolume (solid.radius, solid.height)
    } else if (solid.type === "prism") {
      total += prismVolume (solid.height, solid.width, solid.depth)
    }
  }
  return total
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
