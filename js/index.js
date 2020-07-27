// First

function factorialize(number) {

    var result = number;
    if (number === 0 || number === 1)
        return 1;
    while (number > 1) {
        number--;
        result *= number;
    }
    return result;
}

function firstFunction() {
    var number = document.getElementById("oper1").value;
    var mainAns = factorialize(number);

    document.getElementById("resul").innerHTML = ("The Anwer is " + " : " + mainAns);
}

// second

function leapYear(years) {
    if (years % 4 === 0) {
        if (years % 100 === 0) {
            if (years % 400 === 0) {
                return "Its leap years"
            } else {
                return "Not a leap year"
            }
        } else {
            return "Its leap year";
        }

    } else {
        return "Not a leap year";
    }
}

function secondFunction() {
    var years = document.getElementById("oper2").value;
    var leapYearAns = leapYear(years);

    document.getElementById("resul-1").innerHTML = ("The Anwer is " + " : " + leapYearAns);
}

//  third


function fibonacci(n) {
    var output = [];
    if (n === 1) {
        output[0];
    } else if (n === 2) {
        output[0, 1];
    } else {
        output = [0, 1, 1, 2];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

function thirdFunction() {
    var n = document.getElementById("oper3").value;
    var thirdMainAns = fibonacci(n);

    document.getElementById("resul-2").innerHTML = ("The Anwer is " + " : " + thirdMainAns);
}


//  fourth



function fourthFunction() {
    var w;
    var x = document.getElementById("oper4").value;
    var y = document.getElementById("operx").value;
    var z = document.getElementById("oper5").value;
    document.getElementById("resul-3").innerHTML = ("The Anwer is " + " : " + w);

    switch (y) {
        case '0':
            w = x + z;
            document.getElementById("resul-3").innerHTML = ("The Anwer is " + " : " + w);
            break;
        case '1':
            w = x - z;
            document.getElementById("resul-3").innerHTML = ("The Anwer is " + " : " + w);
            break;
        case '2':
            w = x * z;
            document.getElementById("resul-3").innerHTML = ("The Anwer is " + " : " + w);
            break;
        case '3':
            w = Math.round(x / z);
            document.getElementById("resul-3").innerHTML = ("The Anwer is " + " : " + w);
            break;
        default:
            w = "Put Proper Input";
    }

};