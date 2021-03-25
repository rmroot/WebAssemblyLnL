
function addTableRow(value, javascriptResult, javascriptTime, wasmResult, wasmTime) {
    let tableBody = document.getElementById("tableBody");

    let newRow = tableBody.insertRow(-1);
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(value);
    newCell.appendChild(newText);


    newCell = newRow.insertCell();
    newText = document.createTextNode(javascriptResult);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(Number(javascriptTime.toFixed(5)));
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(wasmResult);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(Number(wasmTime.toFixed(5)));
    newCell.appendChild(newText);

    let percentDiff = ((javascriptTime - wasmTime) / javascriptTime) * 100;
    newCell = newRow.insertCell();
    newText = document.createTextNode(Number(percentDiff.toFixed(2)) + ' %');
    newCell.appendChild(newText);

}

function jsFibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return jsFibonacci(n - 1) + jsFibonacci(n - 2);
    }
}

function runTest() {
    console.log('run test');
    let totalWasmTime = 0;
    let totalJavascriptTime = 0;
    for (let i = 10; i < 34; i++) {
        console.log(i)
        
        let t1 = performance.now();

        //CALCULATE FIBONACCI USING JAVASCRIPT
        let javascriptResult = jsFibonacci(i);
        
        let t2 = performance.now();
        let javascriptTime = t2 - t1;
        console.log('jsFibTime: ' + javascriptTime);

        let t3 = performance.now();

        //CALCULATE FIBONACCI USING WASM FUNCTION           
        let wasmResult = WasmModule.cppFibonacci(i);
        
        let t4 = performance.now();
        let wasmTime = t4 - t3;
        console.log('wasmTime: ' + wasmTime);

        addTableRow(i, javascriptResult, javascriptTime, wasmResult, wasmTime);

        totalWasmTime = totalWasmTime + wasmTime;
        totalJavascriptTime = totalJavascriptTime + javascriptTime;
    }
    addTableRow('Total', '', totalJavascriptTime, '', totalWasmTime);
}


runTest();