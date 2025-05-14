const messages = [
  "Hey, this might be random but...",
  "I just wanted to tell you you're a truly special person.",
  "You have the kind of presence that people don’t forget.",
  "Someday, I believe you’ll be a director — you're that powerful.",
  "This little thing was made by someone who loves tech, design… and maybe you a little.",
  "That’s all — hope this made you smile, even just a bit."
];

const images = [
  "images/gf1.jpg",
  "images/gf2.jpg",
  "images/gf3.jpg",
  "images/gf4.jpg",
  "images/gf5.jpg"
];

let current = 0;

function startWishes() {
  document.getElementById('giftBox').classList.add('hidden');
  document.getElementById('wishes').classList.remove('hidden');
  document.getElementById('message').innerText = messages[current];
  document.querySelector('.gf-img').src = images[current];
  document.getElementById("bgMusic").play(); // play music on first click
}

function nextMessage() {
  current++;
  if (current < messages.length) {
    document.getElementById('message').innerText = messages[current];
    if (current < images.length) {
      document.querySelector('.gf-img').src = images[current];
    }
  } else {
    document.getElementById('message').innerText = "From someone who believes in you.";
    document.getElementById('nextBtn').style.display = 'none';
  }
}

function toggleMusic() {
  const bgMusic = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');

  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerText = "Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.innerText = "Play Music";
  }
}
