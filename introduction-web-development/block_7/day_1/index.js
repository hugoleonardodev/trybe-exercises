let clickCount = 0;
    let textToDisplay = document.getElementById('text');
    document.querySelector('#button').addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1);