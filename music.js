/* ===================================== */
/* PREMIUM REMOTE MUSIC SYSTEM */
/* ===================================== */

console.log("music.js loaded successfully");

/* ===================================== */
/* GET ELEMENTS */
/* ===================================== */

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

/* ===================================== */
/* CHECK ELEMENTS */
/* ===================================== */

if (!musicBtn) {

    console.log("musicBtn not found");

}

if (!bgMusic) {

    console.log("bgMusic not found");

}

/* ===================================== */
/* MUSIC SETTINGS */
/* ===================================== */

let isPlaying = false;

if (bgMusic) {

    bgMusic.volume = 0.5;

    bgMusic.loop = true;

}

/* ===================================== */
/* DEFAULT BUTTON STYLE */
/* ===================================== */

if (musicBtn) {

    musicBtn.style.opacity = "0.6";

    musicBtn.style.transition = "0.3s";

}

/* ===================================== */
/* SAVE MUSIC STATE */
/* ===================================== */

function saveMusicState(state) {

    try {

        localStorage.setItem(
            "premium_music_state",
            state
        );

    } catch (e) {

        console.log("Save State Error:", e);

    }

}

/* ===================================== */
/* LOAD MUSIC STATE */
/* ===================================== */

function loadMusicState() {

    try {

        return localStorage.getItem(
            "premium_music_state"
        );

    } catch (e) {

        console.log("Load State Error:", e);

        return null;

    }

}

/* ===================================== */
/* PLAY MUSIC */
/* ===================================== */

async function playMusic() {

    try {

        if (!bgMusic) return;

        await bgMusic.play();

        isPlaying = true;

        if (musicBtn) {

            musicBtn.innerHTML = "⏸️";

            musicBtn.style.opacity = "1";

            musicBtn.style.transform =
                "scale(1.05)";

        }

        saveMusicState("playing");

        console.log("Music Started");

    } catch (err) {

        console.log(
            "Music Play Error:",
            err
        );

    }

}

/* ===================================== */
/* PAUSE MUSIC */
/* ===================================== */

function pauseMusic() {

    try {

        if (!bgMusic) return;

        bgMusic.pause();

        isPlaying = false;

        if (musicBtn) {

            musicBtn.innerHTML = "🎵";

            musicBtn.style.opacity = "0.6";

            musicBtn.style.transform =
                "scale(1)";

        }

        saveMusicState("paused");

        console.log("Music Paused");

    } catch (err) {

        console.log(
            "Music Pause Error:",
            err
        );

    }

}

/* ===================================== */
/* BUTTON CLICK */
/* ===================================== */

if (musicBtn && bgMusic) {

    musicBtn.addEventListener(
        "click",

        async () => {

            if (isPlaying) {

                pauseMusic();

            } else {

                await playMusic();

            }

        }

    );

}

/* ===================================== */
/* AUTO RESTORE STATE */
/* ===================================== */

window.addEventListener(
    "load",

    async () => {

        const savedState =
            loadMusicState();

        if (
            savedState === "playing"
        ) {

            await playMusic();

        } else {

            pauseMusic();

        }

    }

);

/* ===================================== */
/* AUTO HANDLE TAB SWITCH */
/* ===================================== */

document.addEventListener(
    "visibilitychange",

    () => {

        if (document.hidden) {

            console.log(
                "Tab Hidden"
            );

        } else {

            console.log(
                "Tab Visible"
            );

        }

    }

);

/* ===================================== */
/* EXTRA SAFETY */
/* ===================================== */

window.addEventListener(
    "error",

    function (e) {

        console.log(
            "Music System Error:",
            e.message
        );

    }

);

/* ===================================== */
/* READY */
/* ===================================== */

console.log(
    "Premium Music System Ready"
);
