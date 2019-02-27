# Description

I provide for you [gulp](https://gulpjs.com/) configuration which helps you to save time for development. You can use this gulp template for markup your project. Each have ability to extend this config will use [gulp plugins](https://gulpjs.com/plugins/).

# How to use

You can run command in terminal `npm run gulp`. This command define in `package.json` as `"scripts": {..., "gulp": "node node_modules/gulp/bin/gulp.js"}`. After it browser will open in new tab. You can setup or exchange `scripts`.

# How it work

### Gulp directory 

This directory consist with tasks and `route` file. There are located tasks such as `html`, `scripts`, `styles`, `server` and `watch`. Each task perform particular action. `Route` object using for tasks and indicate `src` and `dest` for them.

### Src directory

| Directory  | File type |
| ---------- |:---------:|
| js         |   .js     |
| pages      |   .pug    |
| styles     |   .scss   |