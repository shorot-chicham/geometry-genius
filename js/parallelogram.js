function parallelogramAreaCalculate (){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    const area = base * height;

    setInnerTextById('parallelogram-area', area);
    setElementById('calculate-area', area);
}


function getInputValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function setElementById(elementId, area){
    const element = document.getElementById(elementId);
    const h2 = document.createElement('h2');
    h2.innerText = area;
    element.appendChild(h2);
}