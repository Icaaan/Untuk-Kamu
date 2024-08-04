let gifIndex = 0;
const gifs = [
    { src: 'gif1.gif', text: 'Kamu tau Kenapa Semut Kecil' },
    { src: 'gif2.gif', text: 'Karena yang besar itu perutku' },
    { src: 'gif3.gif', text: 'Eh maksudnya' },
    { src: 'gif4.gif', text: 'Rasa Cintaku pada mu hehe' }
];
const gifDisplay = document.getElementById('gifDisplay');
const gifText = document.getElementById('gifText');
const gifContainer = document.getElementById('gifContainer');
const mainContent = document.getElementById('mainContent');
const yesResponse = document.getElementById('yesResponse');
const startScreen = document.getElementById('startScreen');
const notification = document.getElementById('notification');

startScreen.addEventListener('click', function() {
    startScreen.classList.add('hidden');
    gifContainer.classList.remove('hidden');
    setInterval(showNextGif, 5000);
});

function showNextGif() {
    gifIndex++;
    if (gifIndex < gifs.length) {
        gifDisplay.src = gifs[gifIndex].src;
        gifText.textContent = gifs[gifIndex].text;
    } else {
        gifContainer.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }
}

document.getElementById('yesBtn').addEventListener('click', function() {
    mainContent.classList.add('hidden');
    yesResponse.classList.remove('hidden');
    notification.textContent = 'I love you!';
    notification.style.display = 'block';
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    let button = document.getElementById('noBtn');
    let container = document.querySelector('.container');

    // Menghitung posisi acak untuk tombol "No"
    let newTop = Math.random() * (mainContent.clientHeight - button.clientHeight) + 'px';
    let newLeft = Math.random() * (mainContent.clientWidth - button.clientWidth) + 'px';

    button.style.position = 'absolute';
    button.style.top = newTop;
    button.style.left = newLeft;
});
