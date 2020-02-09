const xSpeed = 3
const ySpeed = 3 

let x
let y

let dvdLogo

let red
let green
let blue

function preload () {
  dvdLogo = loadImage(
    'https://raw.githubusercontent.com/CodingTrain/website/master/CodingChallenges/CC_131_BouncingDVDLogo/P5/dvd_logo.png'
  )
}

function pickColor () {
  red = randomColor()
  green = randomColor()
  blue = randomColor()
}

function randomColor () {
  return random(100, 256)
}

function setup () {
  createCanvas(windowWidth, windowHeight)

  x = random(width)
  y = random(height)

  pickColor()
}

function draw () {
  setColors()
  setDvdLogoPosition()
  xCheck()
  yCheck()
}

function setColors () {
  background(0)
  image(dvdLogo, x, y)
  tint(red, green, blue)
}

function setDvdLogoPosition () {
  x += xSpeed
  y += ySpeed
}

function xCheck () {
  if (x + dvdLogo.width >= width) {
    xSpeed = -xSpeed
    x = width - dvdLogo.width
    pickColor()
  } else if (x <= 0) {
    xSpeed = -xSpeed
    x = 0
    pickColor()
  }
}

function yCheck () {
  if (y + dvdLogo.height >= height) {
    ySpeed = -ySpeed
    y = height - dvdLogo.height
    pickColor()
  } else if (y <= 0) {
    ySpeed = -ySpeed
    y = 0
    pickColor()
  }
}
