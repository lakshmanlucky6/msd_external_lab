var slider = document.getElementById("RangeId");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Set the initial value of the output

var dynamicHeading = document.getElementById("dynamicHeading")
var dynamicSubHeading = document.getElementById("dynamicSubHeading")
var dynamicParagraph = document.getElementById("dynamicParagraph")
var dynamicList = document.getElementById("dynamicList")

slider.oninput = function() {
    output.innerHTML = this.value; // Update the output whenever the slider value changes
    handleUpdate();
};

function handleUpdate() {
    //buisiness logic
    var selectedOption = document.querySelector('input[name="option"]:checked').value;
    var selectedFont = document.getElementById("FontStyles").value
    var selectedColors = document.getElementById("FontColors").value
    switch(selectedOption){
        case 'Heading':
            dynamicHeading.style.fontSize=slider.value+"px";
            dynamicHeading.style.color=selectedColors;
            dynamicHeading.style.fontFamily=selectedFont;
            break;
        case 'Paragraph':
            dynamicParagraph.style.fontSize=slider.value+"px";
            dynamicParagraph.style.color=selectedColors;
            dynamicParagraph.style.fontFamily=selectedFont;
            break;
        default:
            break;
    }
}