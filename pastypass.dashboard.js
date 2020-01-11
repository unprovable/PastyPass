window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

function PastyPass() {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { command: "enablePaste" }, (response) => {
            if (response == "DONE") {
                // TODO - do something here? put a big green tick? 
                // answers on a postcard...
                // This is an alert for debugging purposes...
                //alert("Success! Paste should be enabled...");
            }
        });
    });
    return true;
};