# Band suggester

This is a simple app that suggests a random band or artist from the list, you can see it live at: [https://tamulaitis.lt/band-suggester/](https://tamulaitis.lt/band-suggester/).

I listen to music a lot via various platforms and they usually have good suggestion algorithms these days allowing you to discover new music and re-discover something you have forgotten. However they tend to get boring and repetetive with time. I use this app in these situations to break out from suggestion bubble and re-discover something that I haven't listened to for a long time or have totally forgotten.

The app takes suggestions from two lists currently. First one is the catalogue of my old music collection that I accumulated throughout the years where you still had to buy physical or digital copies of music to be able to listen to the. Second one is the list where I add names of the band manually, so whenever I stumble upon something interesting I add it to the list so that it can pop up as a random suggestion some time in the future.

Source code is tiny and straight forward so it's really easy to see how to work with these lists in case you want to fork this and use it with your own list of artists you like.


## Installing & running locally

Install dependencies:
```
yarn
```

Run dev server:
```
yarn run dev
```


## Building production version

Build production build to be hosted under subfolder:
```
yarn run build --base=/band-suggester/
```

The repository also contains GitHub action configuration for building the app and deploying to static hosting provider via FTP.