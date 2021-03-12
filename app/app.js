function jsFibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return jsFibonacci(n - 1) + jsFibonacci(n - 2);
    }
}

function addTableRow(value, javascriptResult, javascriptTime, wasmResult, wasmTime) {
    console.log('add row');
    let tableBody = document.getElementById("tableBody");

    let newRow = tableBody.insertRow(-1);
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(value);
    newCell.appendChild(newText);


    newCell = newRow.insertCell();
    newText = document.createTextNode(javascriptResult);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(javascriptTime);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(wasmResult);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(wasmTime);
    newCell.appendChild(newText);
}


function runTest() {
    console.log('run test');
    for (let i = 18; i < 33; i++) {
        console.log(i)
        let t1 = performance.now();
        let javascriptResult = jsFibonacci(i);
        let t2 = performance.now();
        let javascriptTime = t2 - t1;
        console.log('jsFibTime: ' +javascriptTime);
        let t3 = performance.now();
        // let wasmResult = Module.fibonacci(i);
        // let t4 = performance.now();
        // let wasmTime = t4 - t3;
        // console.log('wasmTime: ' + wasmTime);



        let t3 = performance.now();
        let wasmFibInstance = new Module.Fibonacci(i);
        let wasmResult = wasmFibInstance.calculate();
        wasmFibInstance.delete();
        let t4 = performance.now();
        let wasmTime = t4 - t3;
        console.log('wasmTime: ' + wasmTime);


        addTableRow(i, javascriptResult, javascriptTime, wasmResult, wasmTime);
        // i = i + 10;
        // wasmResult.delete();
    }
}


runTest();