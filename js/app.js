//CALCULATOR

function Calculator() {

  let a;
  let b;
  let x;
  let result;

  first();

  function first() {
    a = parseFloat(prompt('give me the first number'), 10);
    if (!isNaN(a)) {
      operationSymbol();
    }
    else {
      first();
    };
  };

  function operationSymbol() {
    x = prompt('what operation do you want? \n + = addition \n - = subtraction \n * = multiplication \n / = division \n ** = at the power of \n V = square root').toLowerCase();
    if (x == 'v') {
      operation();
    }
    else if (x == '+' || x == '-' || x == '*' || x == '/' || x == '**') {
      second();
    }
    else {
    operationSymbol();
  }
  };

  function second() {
    b = parseFloat(prompt('give me the second number'), 10);
    if (!isNaN(b)) {
      operation();
    }
    else {
      second();
    }
  };

  function operation() {
    switch (x) {
      case '+':
        result = a+b;
        break;
      case '-':
        result = a-b;
        break;
      case '*':
        result = a*b;
        break;
      case '/':
        result = a/b;
        break;
      case '**':
        result = a**b;
        break;
      case 'v':
        result = Math.sqrt(a);
        break;
      default:
        alert('non è un operatore');
    };
    printResult();
  };

  function printResult() {
    alert('The operation was ' + [a, x, b, ' and the result is ', result.toPrecision(15)].join(' '));
    console.log('The operation was ' + [a, x, b, ' and the result is ', result].join(' '));
    document.getElementById('resultId').value = result.toPrecision(15);
  };
};

//MORTGAGE
// Formula => M = P * { [r*(1+r)**n] / [(1+r)**n - 1] }

function Mortgage() {
  var m;
  var p;
  var n;
  var r;

  first ();

  function first() {
    p = parseInt(prompt('How much do you own to the bank?'), 10);
    if (isNaN(p)) {
      first();
    }
    else {
      second();
    }
  };

  function second() {
    n = (parseInt(prompt('For how many years will you pay?'), 10)*12);
    if (isNaN(n)) {
      second();
    }
    else {
      three();
    }
  }

  function three() {
    r = (parseInt(prompt('What is your interest rate? (e.g. 5%)'), 10) / 100) / 12;
    if (isNaN(r)) {
      three();
    }
    else {
      four();
    }
  };

  function four() {
    var nom = r*(1+r)**n;
    var den = (1+r)**n - 1;
    m = p * (nom/den);
    result();
  }

  function result() {
    alert('You will pay circa ' + Math.round(m) + ' per month');
    console.log(p, n, r);
    console.log('You will pay circa ' + Math.round(m) + ' per month');
    document.getElementById('resultId').value = m.toPrecision(15);
  };
};

function notImplemented() {
  alert('Sorry, this function is not implemented yet.\nCome back soon for updates!');
}
