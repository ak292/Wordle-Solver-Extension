# Wordle Solver Chrome Extension

Created a Wordle solver Chrome Extension that will automatically solve your Wordle game at the press of a button (you can take your hands off the mouse & keyboard as it clicks the play button and gets past any notifications and types the word for you).

This project was done purely for fun and to get more experience with Chrome APIs (webRequest, storage) as well as content scripts and background scripts.

### How it Works

The extension is able to figure out the daily word to guess by intercepting the network requests and fetching the content from the JSON file that contains the daily word using a background script that runs on the Chrome Extension. It then passes the word to the content script which presses play and types the word for you using simple DOM manipulation.

Here is an example of it in action:

![GIF of Wordle Extension](https://imgur.com/sQlJNTi.gif)

### How to Run

This was not published to the Google Chrome store as it was meant to be just for educational purposes, but if you want to test it out, you need to:

1. Open Google Chrome and go to chrome://extensions
2. Make sure you toggle Developer mode on
3. In the upper right corner, click on "Load Unpacked" and select this folder (that you can download as a ZIP from GitHub)
