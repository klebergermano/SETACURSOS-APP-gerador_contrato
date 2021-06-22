function RemoveAttribute(inputName, attributeName){
    let input = document.querySelector(inputName);
    input.removeAttribute(attributeName);

}

module.exports = RemoveAttribute;