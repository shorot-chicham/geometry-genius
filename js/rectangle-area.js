function calculateRectangleArea (){
    // rectangle area length 
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(length);
    

    // rectangle area width

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleLengthInput.value;
    const width = parseFloat(rectangleLengthText);
    // console.log(typeof width);

    // calculate rectangle area 

    const area = length * width;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

    rectangleLengthInput.value = '';
    rectangleWidthInput.value = '';
}