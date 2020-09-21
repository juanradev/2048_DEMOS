function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}



function addHobbies() {

    const inputList = document.querySelectorAll('.hobbiesInput');

    if (inputList.length < 5) {

        const hobbiesList = document.getElementById('hobbiesList');
        const newLineElement = createNode('br'),
            inputElement = createNode('input');

        inputElement.setAttribute("class", "hobbiesInput");

        append(hobbiesList, newLineElement);
        append(hobbiesList, inputElement);
    }
    else {
        document.getElementById('newHobbyBtn').setAttribute("disabled", true);
        document.getElementById('newHobbyBtn').removeEventListener('click', addHobbies);
    }

}


document.addEventListener('DOMContentLoaded', function (event) { 

    document.getElementById('newHobbyBtn').addEventListener('click', addHobbies, false);

});

 