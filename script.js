window.onload = function () {
    let button = document.getElementById('add-element');
    let boxContainer = document.getElementById('box-container');

    button.addEventListener('click', function () {
        let nowyElement = document.createElement('div');
        let nowyElement2 = document.createElement('div');
        nowyElement.classList.add('subItem2');
        nowyElement2.classList.add('subSubItem1');
        boxContainer.appendChild(nowyElement);
    });
};