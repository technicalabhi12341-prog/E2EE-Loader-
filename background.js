async function checkUpdate() {

    try {

        const response = await fetch(
            "https://technicalabhi1234i-prog.github.io/E2EE-Loader/version.json?t=" + Date.now()
        );

        const data = await response.json();

        const currentVersion =
            chrome.runtime.getManifest().version;

        if (data.version !== currentVersion) {

            chrome.notifications.create({
                type: "basic",
                iconUrl: "icon9.png",
                title: "New Update Available",
                message: "Click to update extension"
            });

            chrome.tabs.create({
                url: data.update_url
            });
        }

    } catch (e) {
        console.log("Update Error:", e);
    }
}

checkUpdate();

setInterval(checkUpdate, 300000);
