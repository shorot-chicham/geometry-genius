function calculateTriangleArea (){
    const triangleBaseInput = document.getElementById('triangle-base');
    // get triangle base value 
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // display triangle area 

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    triangleHeightInput.value = '';
    triangleBaseInput.value = '';

}