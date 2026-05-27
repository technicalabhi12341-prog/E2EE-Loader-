const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if (musicBtn && bgMusic) {

    let isPlaying = false;

    bgMusic.src = "https://files.catbox.moe/a8s852.mp3";

    bgMusic.loop = true;

    bgMusic.volume = 0.5;

    musicBtn.addEventListener("click", () => {

        if (isPlaying) {

            bgMusic.pause();

            musicBtn.style.opacity = "0.6";

            musicBtn.innerHTML = "🎵";

            isPlaying = false;

        } else {

            bgMusic.play();

            musicBtn.style.opacity = "1";

            musicBtn.innerHTML = "⏸";

            isPlaying = true;

        }

    });

}
