# Navbar

## Description
- Component is built here
- Webpack compiles component to one bundle.js file
- bundle.js file is served from aws and can be loaded into Proxy-Main

## Structure
- .webpack.config.js - Webpack config file
- .babelrc - Used by webpack for compiling
- Navbar/dist/ - Distribution folder
- Navbar/dist/bundle.js - Output of webpack, this file will be hosted from an AWS S3 bucket
- Navbar/dist/index.html - For testing rendering component

## How to use
- Run webpack live server with:
    - npm start


