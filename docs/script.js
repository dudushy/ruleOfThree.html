const TITLE = "ruleOfThree.html";
console.log(`[${TITLE}] init`);

calculate();

function calculate() {
    const value1 = document.getElementById("value1").value;
    console.log(`[${TITLE}#calculate] value1`, value1);

    const result1 = document.getElementById("result1").value;
    console.log(`[${TITLE}#calculate] result1`, result1);

    const value2 = document.getElementById("value2").value;
    console.log(`[${TITLE}#calculate] value2`, value2);

    const output = (result1 * value2) / value1;
    console.log(`[${TITLE}#calculate] output { (${result1} * ${value2}) / ${value1} }`, output);

    document.getElementById("calcs").innerText = `(${result1} * ${value2}) / ${value1} = ${output}`;
    document.getElementById("result2").value = output;
}
