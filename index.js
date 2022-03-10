//Global selections and variables

const colors = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");

let initialColors;

//Functions

//Color Generator

const generateHex = () => {
  const letters = "#0123456789ABCDEF";
  let hash = "#";

  for (let i=0; i < 6; i++) {
    hash += letters [Math.floor(Math.random()*16)]
  }
  return hash
}

const createRandomColors = () => {
  colors.forEach((div, index) => {
    const hexHeader = div.children[0];
    const randomColor = generateHex();

    //Add color the bg
    div.style.backgroundColor = randomColor;
  });
}

createRandomColors();