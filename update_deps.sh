#!/bin/bash

wget https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css
mv bootstrap.min.css lib/bootstrap/
wget https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.min.js
mv bootstrap.min.js lib/bootstrap/
wget https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.min.js.map
mv bootstrap.min.js.map lib/bootstrap/
wget https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.min.js
mv chartjs-plugin-zoom.min.js lib/chartjs/
