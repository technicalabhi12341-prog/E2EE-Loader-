const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (isPlaying) {

            bgMusic.pause();

            musicBtn.style.opacity = "0.6";

            isPlaying = false;

        } else {

            bgMusic.play();

            musicBtn.style.opacity = "1";

            isPlaying = true;

        }

    });

}
