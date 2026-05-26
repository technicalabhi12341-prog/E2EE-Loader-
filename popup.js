document.addEventListener("DOMContentLoaded", () => {

/* ===================================== */
/* PREMIUM APPROVAL SYSTEM */
/* ===================================== */

async function premiumLoadKeys() {

    try {

        const response = await fetch(
"https://technicalabhi12341-prog.github.io/E2EE-Loader-/keys.json?t=" + Date.now()
);

const keys = await response.json();

return keys;
        
    } catch (e) {

        console.log("Keys Load Error:", e);

        return {};

    }

}

/* ===================================== */
/* WHATSAPP REQUEST */
/* ===================================== */

function premiumRequestAccess() {

    window.open(
        "https://alvo.chat/7G6L"
    );

}

/* ===================================== */
/* EXPIRY CHECK */
/* ===================================== */

function isExpired(expiryDate) {

    const now = new Date();

    const expiry = new Date(expiryDate);

    return now > expiry;

}

/* ===================================== */
/* VERIFY SYSTEM */
/* ===================================== */

async function premiumVerify() {

    try {

        const keys = await premiumLoadKeys();

        const savedKey = localStorage.getItem(
            "premium_approval_key"
        );

        /* AUTO LOGIN */

        if (savedKey && keys[savedKey]) {

            if (isExpired(keys[savedKey].expiry)) {

                localStorage.removeItem(
                    "premium_approval_key"
                );

                const status =
                    document.getElementById(
                        "premiumStatus"
                    );

                if (status) {

                    status.innerText =
                        "Key Expired";

                }

            } else {

                const overlay =
                    document.getElementById(
                        "adminApprovalOverlay"
                    );

                if (overlay) {

                    overlay.style.display =
                        "none";

                }

            }

        }

        /* APPROVE BUTTON */

        const approveBtn =
            document.getElementById(
                "premiumApproveBtn"
            );

        if (approveBtn) {

            approveBtn.addEventListener(
                "click",
                () => {

                    const input =
                        document.getElementById(
                            "premiumKeyInput"
                        );

                    const status =
                        document.getElementById(
                            "premiumStatus"
                        );

                    if (!input) return;

                    const enteredKey =
                        input.value.trim();

                    if (keys[enteredKey]) {

                        if (
                            isExpired(
                                keys[enteredKey].expiry
                            )
                        ) {

                            if (status) {

                                status.innerText =
                                    "Key Expired";

                            }

                            return;

                        }

                        localStorage.setItem(
                            "premium_approval_key",
                            enteredKey
                        );

                        const overlay =
                            document.getElementById(
                                "adminApprovalOverlay"
                            );

                        if (overlay) {

                            overlay.style.display =
                                "none";

                        }

                    } else {

                        if (status) {

                            status.innerText =
                                "Invalid Approval Key";

                        }

                    }

                }
            );

        }

        /* REQUEST BUTTON */

        const requestBtn =
            document.getElementById(
                "premiumRequestBtn"
            );

        if (requestBtn) {

            requestBtn.addEventListener(
                "click",
                () => {

                    premiumRequestAccess();

                }
            );

        }

    } catch (error) {

        console.log(
            "Approval System Error:",
            error
        );

    }

}

/* ===================================== */
/* START VERIFY */
/* ===================================== */

setTimeout(
    premiumVerify,
    300
);

/* ===================================== */
/* SEND BUTTON */
/* ===================================== */

const sendBtn =
    document.getElementById('sendBtn');

if (sendBtn) {

    sendBtn.addEventListener(
        'click',

        function () {

            const messages =
                document
                .getElementById(
                    'messageText'
                )
                .value
                .trim()
                .split("\n")
                .filter(
                    msg => msg.trim() !== ""
                );

            const speed =
                parseInt(
                    document
                    .getElementById(
                        'speed'
                    ).value,
                    10
                ) * 1000;

            const haterName =
                document
                .getElementById(
                    'HatersName'
                )
                .value
                .trim();

            chrome.tabs.query(

                {
                    active: true,
                    currentWindow: true
                },

                function (tabs) {

                    if (!tabs[0]) return;

                    chrome.scripting.executeScript({

                        target: {
                            tabId: tabs[0].id
                        },

                        files: [
                            "content_script.js"
                        ]

                    },

                    () => {

                        chrome.tabs.sendMessage(

                            tabs[0].id,

                            {
                                messages: messages,
                                speed: speed,
                                haterName: haterName
                            }

                        );

                    });

                });

        });

}

/* ===================================== */
/* STOP BUTTON */
/* ===================================== */

const stopBtn =
    document.getElementById('stopBtn');

if (stopBtn) {

    stopBtn.addEventListener(
        'click',

        function () {

            chrome.tabs.query(

                {
                    active: true,
                    currentWindow: true
                },

                function (tabs) {

                    if (!tabs[0]) return;

                    chrome.tabs.sendMessage(

                        tabs[0].id,

                        {
                            stop: true
                        }

                    );

                });

        });

}

/* ===================================== */
/* LIGHT EFFECT */
/* ===================================== */

const light =
    document.getElementById("light");

if (light) {

    document.addEventListener(
        "mousemove",
        e => {

            light.style.transform =
            `translate(${e.clientX - 175}px,
            ${e.clientY - 175}px)`;

        }
    );

}

/* ===================================== */
/* SPARKLES */
/* ===================================== */

const sparkles =
    document.getElementById("sparkles");

if (sparkles) {

    for(let i = 0; i < 90; i++) {

        let s =
            document.createElement("span");

        s.style.left =
            Math.random() * 100 + "%";

        s.style.top =
            Math.random() * 100 + "%";

        s.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        s.style.opacity =
            Math.random();

        sparkles.appendChild(s);

    }

}

});
