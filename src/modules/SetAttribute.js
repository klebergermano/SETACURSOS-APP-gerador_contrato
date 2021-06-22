function SetAttribute(inputName, attributeName, attributeValue ){
    let input = document.querySelector(inputName);
    input.setAttribute(attributeName, attributeValue);

}

module.exports = SetAttribute;