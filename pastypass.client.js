
// Generic browser handler code from here:
// https://www.smashingmagazine.com/2017/04/browser-extension-edge-chrome-firefox-opera-brave-vivaldi/
window.browser = (function () {
  return window.msBrowser ||
    window.browser ||
    window.chrome;
})();

console.log("[i] Starting PastyPass...");

// this may not be needed...
function pasteMe(e) { this.value = e.clipboardData.getData('text/plain'); };


browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command == "enablePaste") {
      var inputFields = document.getElementsByTagName('input');
      for (var i = 0; i < inputFields.length; i++) {
          var field = inputFields[i];
          if (field.type == "password") {
              field.onpaste = function(e) { this.value = e.clipboardData.getData('text/plain'); };
              console.log("[!] pasting should be enabled for field with id: "+field.id);
          }
        // debug thing...
        // console.log("[i] done with item "+i);
      }
      sendResponse("DONE");
  }
});