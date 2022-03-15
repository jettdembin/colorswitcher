//Global selections and variables

const colors = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");

let initialColors;

//Functions

//Color Generator

const generateHex = () => {
  const hexColor = chroma.random();
  return hexColor;
}

const createRandomColors = () => {
  colors.forEach((div, index) => {
    const hexHeader = div.children[0];
    const randomColor = generateHex();

    //Add color the bg
    div.style.backgroundColor = randomColor;
    hexHeader.innerText = randomColor;

    //check for contrast
    checkTextContrast(randomColor, hexHeader);
  });
}

const checkTextContrast = (color, text) => {
  const luminance = chroma(color).luminance();
  if(luminance > 0.5) {
    text.style.color="black";
  }else {
    text.style.color = "white";
  }
}

createRandomColors();