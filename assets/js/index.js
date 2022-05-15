function inputHandler(val) {
  console.log(val);
  if (val == 'AC') {
    document.getElementById('calculatorInput').value = '';
  } else if (val == '+-') {
    var str = document.getElementById('calculatorInput').value;
    var res = eval(str);
    document.getElementById('calculatorInput').value = res;
    document.getElementById('calculatorInput').value =
      document.getElementById('calculatorInput').value * -1;
  } else if (val == 'C') {
    var str = document.getElementById('calculatorInput').value;

    const editedstr = str.slice(0, -1);
    document.getElementById('calculatorInput').value = editedstr;
  } else {
    document.getElementById('calculatorInput').value =
      document.getElementById('calculatorInput').value + val;
  }
}
function calculateHandler() {
  var str = document.getElementById('calculatorInput').value;
  var res = eval(str);
  document.getElementById('calculatorInput').value = res;
}
