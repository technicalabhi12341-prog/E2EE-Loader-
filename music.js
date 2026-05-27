const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

if (musicBtn && bgMusic) {

    musicBtn.style.opacity = "0.6";

    musicBtn.addEventListener("click", async () => {

        try {

            if (isPlaying) {

                bgMusic.pause();

                musicBtn.style.opacity = "0.6";

                musicBtn.innerHTML = "🎵";

                isPlaying = false;

            } else {

                await bgMusic.play();

                musicBtn.style.opacity = "1";

                musicBtn.innerHTML = "⏸️";

                isPlaying = true;

            }

        } catch (err) {

            console.log(err);

        }

    });

}
