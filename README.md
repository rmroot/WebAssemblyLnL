# WebAssemblyLnL

This repository was used for an Intertech Lunch and Learn as well as this (https://www.intertech.com/webassembly-what-why-and-how/) blog post.

It contains an example web assembly implementation using C++ and Emscripten. 

The .js and .wasm files are included as they were compiled for my demo.

If you want to compile them yourself, you will need to install the Emscripten SDK: https://github.com/emscripten-core/emsdk

The command I used to compile the .cpp code into .wasm is

`emcc -O3 -s EXPORT_NAME="'WasmModule'" --bind -o app/fibonacci.js cpp/fibonacci.cpp`

"app/fibonacci.js" is the folder/name I'm telling emscripten to create.

To run the application you will first have to `npm install` to get the node modules and then `npm run start` and an express server with the application will spin up.

The application will be running at `localhost:3000`
