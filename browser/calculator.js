function last(string) {
  return string.charAt(string.length-1)
}

function pendingOperation(string) {
  if(last(string) === "+" || last(string) === "-"
  || last(string) === "*" || last(string) === "/") {
    return true
  }
  else return false
}

function shrinkFont(string) {
  if(string.length>7) {
    var resultSize = parseFloat(window.getComputedStyle(document.getElementById("display")).fontSize)*0.9
    if(resultSize > 8){
      document.getElementById("display").style.fontSize = resultSize.toString() + "px"
    }
  }
}


function Calculator(){
  this.evaluation = ""
  this.display = document.getElementById("display")
  this.clearHTML = document.getElementById("clear")
  this.displayValue = "0"
  this.arguments = 0
}

Calculator.prototype.add = function() {
  if(pendingOperation(this.evaluation)) {
    this.evaluation = this.evaluation.slice(0,-1) + "+"
  }
  else {
    this.arguments++
    if (this.arguments === 2) {
      this.equals()
      this.arguments = 1
    }
    this.evaluation = this.evaluation + "+"
  }
}

Calculator.prototype.subtract = function() {
  if(pendingOperation(this.evaluation)) {
    this.evaluation = this.evaluation.slice(0,-1) + "-"
  }
  else {
    this.arguments++
    if (this.arguments === 2) {
      this.equals()
      this.arguments = 1
    }
    this.evaluation = this.evaluation + "-"
  }
}

Calculator.prototype.multiply = function() {
  if(pendingOperation(this.evaluation)) {
    this.evaluation = this.evaluation.slice(0,-1) + "*"
  }
  else {
    this.arguments++
    if (this.arguments === 2) {
      this.equals()
      this.arguments = 1
    }
    this.evaluation = this.evaluation + "*"
  }
}

Calculator.prototype.divide = function() {
  if(pendingOperation(this.evaluation)) {
    this.evaluation = this.evaluation.slice(0,-1) + "/"
  }
  else {
    this.arguments++
    if (this.arguments === 2) {
      this.equals()
      this.arguments = 1
    }
    this.evaluation = this.evaluation + "/"
  }
}

Calculator.prototype.decimal = function() {
  this.evaluation = this.evaluation + "."
  this.displayValue = this.displayValue + "."
  this.display.innerHTML = this.displayValue
}

Calculator.prototype.percent = function() {
  this.evaluation = this.evaluation + "/100"
  this.equals()
}

Calculator.prototype.reverseSign = function(a) {
  this.evaluation = this.evaluation + "*-1"
  this.equals()
}

Calculator.prototype.equals = function() {
  if(last(this.evaluation) === ".") {
    this.evaluation = this.evaluation.slice(0,-1)
  }
  this.operationPending = false
  this.displayValue = eval(this.evaluation)
  this.evaluation = eval(this.evaluation).toString()
  this.display.innerHTML = this.displayValue
}

Calculator.prototype.clear = function() {
  this.evaluation = ""
  this.displayValue = "0"
  this.display.innerHTML = this.displayValue
  this.clearHTML.innerHTML = "AC"
  this.arguments = 0
  document.getElementById("display").style.fontSize = "40pt"
}

Calculator.prototype.zero = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "0" : this.displayValue + "0"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "0"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.one = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "1" : this.displayValue + "1"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "1"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.two = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "2" : this.displayValue + "2"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "2"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.three = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "3" : this.displayValue + "3"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "3"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.four = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "4" : this.displayValue + "4"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "4"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.five = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "5" : this.displayValue + "5"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "5"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.six = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "6" : this.displayValue + "6"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "6"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.seven = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "7" : this.displayValue + "7"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "7"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.eight = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "8" : this.displayValue + "8"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "8"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.nine = function() {
  this.displayValue = this.displayValue < "1" || pendingOperation(this.evaluation)  ? "9" : this.displayValue + "9"
  this.display.innerHTML = this.displayValue
  shrinkFont(this.displayValue)
  this.evaluation = this.evaluation + "9"
  this.clearHTML.innerHTML = "C"
}

Calculator.prototype.keyStrokeHandler = function(keyStroke) {
  var keyCode = keyStroke.keyCode
  switch (keyCode) {
    case 48:
      this.zero()
      break

    case 49:
      this.one()
      break

    case 50:
      this.two()
      break

    case 51:
      this.three()
      break

    case 52:
      this.four()
      break

    case 53:
      this.five()
      break

    case 54:
      this.six()
      break

    case 55:
      this.seven()
      break

    case 56:
      this.eight()
      break

    case 57:
      this.nine()
      break

    case 43:
      this.add()
      break

    case 45:
      this.subtract()
      break

    case 42:
      this.multiply()
      break

    case 47:
      this.divide()
      break

    case 13:
    case 61:
      this.equals()
      break

    case 46:
      this.decimal()
      break

    case 99:
      this.clear()
      break

    case 37:
      this.percent()
      break

    default:
      break
  }


}

var calculator = new Calculator
document.getElementById("zero").addEventListener("click", function() { calculator.zero() })
document.getElementById("one").addEventListener("click", function() { calculator.one() })
document.getElementById("two").addEventListener("click", function() { calculator.two() })
document.getElementById("three").addEventListener("click", function() { calculator.three() })
document.getElementById("four").addEventListener("click", function() { calculator.four() })
document.getElementById("five").addEventListener("click", function() { calculator.five() })
document.getElementById("six").addEventListener("click", function() { calculator.six() })
document.getElementById("seven").addEventListener("click", function() { calculator.seven() })
document.getElementById("eight").addEventListener("click", function() { calculator.eight() })
document.getElementById("nine").addEventListener("click", function() { calculator.nine() })
document.getElementById("add").addEventListener("click", function() { calculator.add() })
document.getElementById("subtract").addEventListener("click", function() { calculator.subtract() })
document.getElementById("multiply").addEventListener("click", function() { calculator.multiply() })
document.getElementById("divide").addEventListener("click", function() { calculator.divide() })
document.getElementById("clear").addEventListener("click", function() { calculator.clear() })
document.getElementById("percent").addEventListener("click", function() { calculator.percent() })
document.getElementById("decimal").addEventListener("click", function() { calculator.decimal() })
document.getElementById("sign").addEventListener("click", function() { calculator.reverseSign() })
document.getElementById("equals").addEventListener("click", function() { calculator.equals() })
document.addEventListener("keypress", function() { calculator.keyStrokeHandler(event) })
