document.getElementById('yesButton').addEventListener('click', function() {
    var cuteImage = document.getElementById('cuteImage');
    cuteImage.style.display = 'block'; // Show the image
    cuteImage.style.width = '600px'; // Set width to twice the initial size
    cuteImage.style.height = 'auto'; // Keep the aspect ratio

    document.getElementById('response').innerText = "Thank you. I love you so much, Shivalika";
    document.getElementById('question').style.display = 'none'; // Hide the question
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('resetButton').style.display = 'block';
});

document.getElementById('noButton').addEventListener('mouseover', function(event) {
    var noButton = event.target;
    var maxX = window.innerWidth - noButton.offsetWidth;
    var maxY = window.innerHeight - noButton.offsetHeight;

    var newX = Math.random() * maxX;
    var newY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';

    var yesButton = document.getElementById('yesButton');
    var currentSize = yesButton.offsetWidth;
    var newSize = currentSize + 10;

    yesButton.style.width = newSize + 'px';
    yesButton.style.height = newSize + 'px';
    yesButton.style.fontSize = (1.2 + newSize / 100) + 'em'; // Increase font size
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('response').innerText = "";
    document.getElementById('cuteImage').style.display = 'none'; // Hide the image
    document.getElementById('question').style.display = 'block'; // Show the question again
    document.getElementById('yesButton').style.display = 'block';
    document.getElementById('noButton').style.display = 'block';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('yesButton').style.width = '';
    document.getElementById('yesButton').style.height = '';
    document.getElementById('yesButton').style.fontSize = '1.2em';
    document.getElementById('noButton').style.position = '';
    document.getElementById('noButton').style.left = '';
    document.getElementById('noButton').style.top = '';
});
