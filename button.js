let bgColorElement = document.getElementById("bgColorInput");
let fontColorElement = document.getElementById("fontColorInput");
let fotSizeElement = document.getElementById("fontSizeInput");
let fontWeightElement = document.getElementById("fontWeightInput");
let paddingElement = document.getElementById("paddingInput");
let borderRadiusElement = document.getElementById("borderRadiusInput");

function applyProperties() {
    let bgColorElementValue = bgColorElement.value;
    let fontColorElementValue = fontColorElement.value;
    let fotSizeElementValue = fotSizeElement.value;
    let fontWeightElementValue = fontWeightElement.value;
    let paddingElementValue = paddingElement.value;
    let borderRadiusElementValue = borderRadiusElement.value;
    customButton.style.backgroundColor = bgColorElementValue;
    customButton.style.color = fontColorElementValue;
    customButton.style.fontSize = fotSizeElementValue;
    customButton.style.fontWeight = fontWeightElementValue;
    customButton.style.padding = paddingElementValue;
    customButton.style.borderRadius = borderRadiusElementValue;
}