
var slider = document.getElementById("myRange"); 
var output = document.getElementById("demo"); 
output.innerHTML = slider.value;
var dynamicHeading = document.getElementById("dynamicHeading"); 
var dynamicSubHeading = document.getElementById("dynamicSubHeading"); 
var dynamicParagraph = document.getElementById("dynamicParagraph"); 
var dynamicList = document.getElementById("dynamicList"); 
slider.oninput = function () { 
    output.innerHTML = this.value; 
    updateContent(); 
}   

function updateContent() { 
    var selectedElement = document.querySelector('input[name="option"]:checked').value; 
    var selectedFont = document.getElementById("Fonts").value; 
    var selectedColor = document.getElementById("fontColor").value; 
    switch (selectedElement) { 
        case 'Heading': 
            dynamicHeading.style.fontSize = slider.value + "px"; 
            dynamicHeading.style.color = selectedColor; 
            dynamicHeading.style.fontFamily = selectedFont; 
            break; 
        case 'Paragraph': 
            dynamicParagraph.style.fontSize = slider.value + "px"; 
            dynamicParagraph.style.color = selectedColor; 
            dynamicParagraph.style.fontFamily = selectedFont; 
            break; 
        case 'Points': 
            dynamicList.style.fontSize = slider.value + "px"; 
            dynamicList.style.color = selectedColor; 
            dynamicList.style.fontFamily = selectedFont; 
            break; 
        case 'h3': 
            dynamicSubHeading.style.fontSize = slider.value + "px"; 
            dynamicSubHeading.style.color = selectedColor; 
            dynamicSubHeading.style.fontFamily = selectedFont; 
            break; 
        default: 
            break; 
    } 
} 

