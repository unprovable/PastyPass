# PastyPass - browser agnostic extension to enable password pasting!

So, first off **DISCLAIMER**: This is experimental code and is under development. If you want to use it, you'll have to install it as a developer extension (or sim.). 

## How does it work?

When you click the extension button, it essentially goes through your webpage, finds all the `<input` fields with `type="password"` (by just parsing the `document.getElementsByTagName` list) and then assigns them a new onpaste handler as follows:
```
      var inputFields = document.getElementsByTagName('input');
      for (var i = 0; i < inputFields.length; i++) {
          var field = inputFields[i];
          if (field.type == "password") {
              field.onpaste = function(e) { this.value = e.clipboardData.getData('text/plain'); };
          }
      }
```

## But how does it work across browsers?

Much of the magic I have taken from this blog post: https://www.smashingmagazine.com/2017/04/browser-extension-edge-chrome-firefox-opera-brave-vivaldi/ 

# How to Install...

This package should be agnostic across several different browsers and extension formats as they are _mostly_ homogenous. It almost certainly won't work on Safari, but I'm sure someone will fix that.

## Mozilla Firefox (or sim)

1. Go to `about:debugging`
1. click 'Load Temporary Add-on'
1. The extension is now enabled

The only problem with this is that you'll have to reload it every time you restart the browser. This will, ofc, change if and when it gets sent up to any platform.

## Google Chrome/Opera/Vivaldi

1. Go to `chrome://extensions`
1. Enable the slider for 'Developer mode' (top right, usually)
1. Click on 'Load Unpacked Extension'
1. Navigate to the folder where the code is (it won't show the contents, normally)
1. The extension should now be loaded.

## Microsoft Edge

1. Go to `about:flags`
1. Check "Enable Developer Features"
1. click on '...'
1. 'Load Extension' and navigate to the code folder...
1. Confirm 'Show button next to address bar'

## Brave Browser

This is some magic I doth not know... Sorry peeps... I think the blog post above explains how to do it, but I haven't tried it. YMMV.

# License

It's under MIT license, because this makes the most sense. :-)
