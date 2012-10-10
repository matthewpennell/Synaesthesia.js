Synaesthesia.js
===============

Simple and silly JavaScript to turn words into colours. See it in action here: http://matthewpennell.github.com/Synaesthesia.js/

***

Ever found yourself struggling to choose a colour scheme for a new project? Maybe you browse sites like [Adobe's Kuler](http://kuler.adobe.com/) or [COLOURlovers](http://www.colourlovers.com/); perhaps you find photographs that capture the mood of the site you're trying to design; or maybe you click aimlessly on Photoshop's colour-wheel until inspiration strikes.

Well, fear not - here's another pointless and entirely arbitrary way to select those all-important tints and shades.

## How it works

This script converts whatever you type (discarding non-alpha characters) into shiny hex colour codes, and shows you the result. The results update as you type, so you can try out creative new ways to spell.

### How it actually works

* Letters are matched to a hex code: A becomes 0, B becomes 1, C becomes 2, and so on through to Z (9, in case you were wondering).
* From the resulting string of hex, each substring of six characters is used to create a colour block.
* The colour blocks are appended to the target element, together with the hex code for easy copy-pasting into Photoshop or your text editor.

And that's all there is to it! Have fun...
