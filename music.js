/* ===================================== */
/* REMOTE MUSIC SYSTEM */
/* ===================================== */

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

/* BUTTON EXIST CHECK */

if (musicBtn && bgMusic) {

    /* DEFAULT STYLE */

    musicBtn.style.opacity = "0.6";

    /* CLICK EVENT */

    musicBtn.addEventListener("click", async () => {

        try {

            if (isPlaying) {

                /* PAUSE MUSIC */

                bgMusic.pause();

                musicBtn.style.opacity = "0.6";

                musicBtn.innerHTML = "🎵";

                isPlaying = false;

            } else {

                /* PLAY MUSIC */

                await bgMusic.play();

                musicBtn.style.opacity = "1";

                musicBtn.innerHTML = "⏸️";

                isPlaying = true;

            }

        } catch (err) {

            console.log("Music Error:", err);

        }

    });

}

/* ===================================== */
/* AUTO LOAD CHECK */
/* ===================================== */

console.log("Remote music.js loaded successfully");
