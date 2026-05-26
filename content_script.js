chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received in content script:", request);

    if (request.messages && request.speed && request.haterName !== undefined) {
        sendMessages(request.messages, request.speed, request.haterName);
    }
});

function sendMessages(messages, speed, haterName) {
    let index = 0;

    function sendNextMessage() {
        if (messages.length > 0) {

            // ✅ FIX: colon removed + safe name handling
            const messageWithHaterName =
                haterName && haterName.trim() !== ""
                    ? `${haterName} ${messages[index]}`
                    : messages[index];

            console.log("Sending message:", messageWithHaterName);

            const inputBox = document.querySelector('[contenteditable="true"]');

            if (inputBox) {
                inputBox.focus();

                document.execCommand("selectAll", false, null);
                document.execCommand("delete", false, null);
                document.execCommand("insertText", false, messageWithHaterName);

                // Send message (Enter key simulation)
                const event = new KeyboardEvent("keydown", {
                    key: "Enter",
                    code: "Enter",
                    keyCode: 13,
                    which: 13,
                    bubbles: true
                });

                inputBox.dispatchEvent(event);

                console.log("Message sent successfully:", messageWithHaterName);

                index++;

                // Loop messages
                if (index >= messages.length) {
                    index = 0;
                }

                setTimeout(sendNextMessage, speed);

            } else {
                console.log("Messenger chat input box not found.");
            }
        }
    }

    sendNextMessage();
}