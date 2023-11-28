const DEL = document.querySelector(".DEL")
const AC = document.querySelector(".AC")
const ANS = document.querySelector(".ANS")

const zero = document.querySelector(".zero")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")

const add = document.querySelector(".add")
const subtract = document.querySelector(".subtract")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const decimal = document.querySelector(".decimal")
const equals = document.querySelector(".equals")

let problemToBeSolved = ""
let hasDecimal = false
let hasSymbol = false
let result
function number() {
    zero.addEventListener("click", () => {
        problemToBeSolved += zero.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    one.addEventListener("click", () => {
        problemToBeSolved += one.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    two.addEventListener("click", () => {
        problemToBeSolved += two.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    three.addEventListener("click", () => {
        problemToBeSolved += three.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    four.addEventListener("click", () => {
        problemToBeSolved += four.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    five.addEventListener("click", () => {
        problemToBeSolved += five.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    six.addEventListener("click", () => {
        problemToBeSolved += six.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    seven.addEventListener("click", () => {
        problemToBeSolved += seven.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    eight.addEventListener("click", () => {
        problemToBeSolved += eight.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    nine.addEventListener("click", () => {
        problemToBeSolved += nine.value
        hasSymbol = false
        previous.innerHTML = problemToBeSolved
        console.log(problemToBeSolved)
    })

    decimal.addEventListener("click", () => {
        if (!hasDecimal) {
            hasDecimal = true
            hasSymbol = false
            problemToBeSolved += decimal.value
            previous.innerHTML = problemToBeSolved
        }
    })
}

function calculate() {
    add.addEventListener("click", () => {
        if (!hasSymbol) {
            hasDecimal = false
            hasSymbol = true
            problemToBeSolved += (" " + add.value + " ")
            previous.innerHTML = problemToBeSolved
            console.log(problemToBeSolved)
        }
    })

    subtract.addEventListener("click", () => {
        if (!hasSymbol) {
            hasDecimal = false
            hasSymbol = true
            problemToBeSolved += (" " + subtract.value + " ")
            previous.innerHTML = problemToBeSolved
            console.log(problemToBeSolved)
        }
    })

    multiply.addEventListener("click", () => {
        if (!hasSymbol) {
            hasDecimal = false
            hasSymbol = true
            problemToBeSolved += (" " + multiply.value + " ")
            previous.innerHTML = problemToBeSolved
            console.log(problemToBeSolved)
        }
    })

    divide.addEventListener("click", () => {
        if (!hasSymbol) {
            hasDecimal = false
            hasSymbol = true
            problemToBeSolved += (" " + divide.value + " ")
            previous.innerHTML = problemToBeSolved
            console.log(problemToBeSolved)
        }
    })
    
    equals.addEventListener("click", () => {
        if (!hasSymbol) {
            hasDecimal = false
            hasSymbol = true
            previous.innerHTML = problemToBeSolved
            result = format(eval(problemToBeSolved))
            answer.innerHTML = "=" + result
            problemToBeSolved = ""
            isPreviousEmpty = false
        }  
    })
}

let isPreviousEmpty = false
let ans = false
function answerButton() {
    ANS.addEventListener("click", () => {
        document.getElementById("number").disabled = true
        if (!isPreviousEmpty) {
            previous.innerHTML = ""
            isPreviousEmpty = true
            hasDecimal = false
            hasSymbol = false
            previous.innerHTML = (" " + result + " ")
            problemToBeSolved += " " + result + " "
        } else {
            if (hasSymbol) {
                previous.innerHTML += (" " + result + " ")
                problemToBeSolved += " " + result + " "
                hasSymbol = false
                hasDecimal = false        
            }
        }
    })
  
}

function allClearButton() {
    AC.addEventListener("click", () => {
        problemToBeSolved = " "
        previous.innerHTML = problemToBeSolved
        answer.innerHTML = problemToBeSolved
    })
}

function deleteButton() {
    DEL.addEventListener("click", () => {
            problemToBeSolved = problemToBeSolved.slice(0, -1)
            previous.innerHTML = problemToBeSolved
    })
}

function format(num) {
    return Number.isInteger(num) ? num : num.toFixed(10);
}

const previous = document.getElementById("previous")
const answer = document.getElementById("answer")
function main() {
    number()
    calculate()
    answerButton()
    allClearButton()
    deleteButton()
}

main()