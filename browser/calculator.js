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

function Calculator(currentDOM){
  this.dom = currentDOM
  console.log(typeof(document))
  this.evaluation = ""
  this.display = this.dom.getElementById("display")
  this.clearHTML = this.dom.getElementById("clear")
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
    switch(parseInt(last(this.evaluation))) {
      case 0:

      case 1:

      case 2:

      case 3:

      case 4:

      case 5:

      case 6:

      case 7:

      case 8:

      case 9:
        this.evaluation = this.evaluation + "+"

      default:

        break;
    }
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
    switch(parseInt(last(this.evaluation))) {
      case 0:

      case 1:

      case 2:

      case 3:

      case 4:

      case 5:

      case 6:

      case 7:

      case 8:

      case 9:
        this.evaluation = this.evaluation + "-"

      default:

        break;
    }

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
    switch(parseInt(last(this.evaluation))) {
      case 0:

      case 1:

      case 2:

      case 3:

      case 4:

      case 5:

      case 6:

      case 7:

      case 8:

      case 9:
        this.evaluation = this.evaluation + "*"

      default:

        break;
    }
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
    switch(parseInt(last(this.evaluation))) {
      case 0:

      case 1:

      case 2:

      case 3:

      case 4:

      case 5:

      case 6:

      case 7:

      case 8:

      case 9:
        this.evaluation = this.evaluation + "/"

      default:

        break;
    }
  }
}

Calculator.prototype.decimal = function() {
  this.evaluation = this.evaluation + "."
  this.displayValue = this.displayValue + "."
  this.display.innerHTML = this.displayValue
}

Calculator.prototype.percent = function() {
  switch(parseInt(last(this.evaluation))) {
    case 0:

    case 1:

    case 2:

    case 3:

    case 4:

    case 5:

    case 6:

    case 7:

    case 8:

    case 9:
      this.evaluation = this.evaluation + "/100"

    default:

      break;
  }
  this.equals()
}

Calculator.prototype.reverseSign = function(a) {
  switch(parseInt(last(this.evaluation))) {
    case 0:

    case 1:

    case 2:

    case 3:

    case 4:

    case 5:

    case 6:

    case 7:

    case 8:

    case 9:
      this.evaluation = this.evaluation + "*-1"

    default:

      break;
  }
  this.equals()
}

Calculator.prototype.equals = function() {
  if(last(this.evaluation) === ".") {
    this.evaluation = this.evaluation.slice(0,-1)
  }
  this.operationPending = false
  if(this.evaluation.length > 0){
    this.displayValue = eval(this.evaluation)
    this.evaluation = eval(this.evaluation).toString()
    this.display.innerHTML = this.displayValue
  }

}

Calculator.prototype.clear = function() {
  this.evaluation = ""
  this.displayValue = "0"
  this.display.innerHTML = this.displayValue
  this.clearHTML.innerHTML = "AC"
  this.arguments = 0
  this.dom.getElementById("display").style.fontSize = "40pt"
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

Calculator.prototype.shrinkFont = function(string) {
  if(string.length>7) {
    var resultSize = parseFloat(window.getComputedStyle(this.dom.getElementById("display")).fontSize)*0.9
    if(resultSize > 8) {
      this.dom.getElementById("display").style.fontSize = resultSize.toString() + "px"
    }
  }
}

Calculator.prototype.keyStrokeHandler = function(keyStroke) {
  var keyCode = keyStroke.keyCode
  switch (keyCode) {
    case 48:
      this.zero()
      this.dom.getElementById("zero").className = "button-grey-zero-flash column"
      setTimeout(function() {
        this.dom.getElementById("zero").className = "button-grey-zero column"
      }, 100)

      break

    case 49:
      this.one()
      this.dom.getElementById("one").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("one").className = "button-grey column"
      }, 100)
      break

    case 50:
      this.two()
      this.dom.getElementById("two").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("two").className = "button-grey column"
      }, 100)
      break

    case 51:
      this.three()
      this.dom.getElementById("three").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("three").className = "button-grey column"
      }, 100)
      break

    case 52:
      this.four()
      this.dom.getElementById("four").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("four").className = "button-grey column"
      }, 100)
      break

    case 53:
      this.five()
      this.dom.getElementById("five").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("five").className = "button-grey column"
      }, 100)
      break

    case 54:
      this.six()
      this.dom.getElementById("six").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("six").className = "button-grey column"
      }, 100)
      break

    case 55:
      this.seven()
      this.dom.getElementById("seven").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("seven").className = "button-grey column"
      }, 100)
      break

    case 56:
      this.eight()
      this.dom.getElementById("eight").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("eight").className = "button-grey column"
      }, 100)
      break

    case 57:
      this.nine()
      this.dom.getElementById("nine").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("nine").className = "button-grey column"
      }, 100)
      break

    case 43:
      this.add()
      this.dom.getElementById("add").className = "button-orange-flash column"
      setTimeout(function() {
        this.dom.getElementById("add").className = "button-orange column"
      }, 100)
      break

    case 45:
      this.subtract()
      this.dom.getElementById("subtract").className = "button-orange-flash column"
      setTimeout(function() {
        this.dom.getElementById("subtract").className = "button-orange column"
      }, 100)
      break

    case 42:
      this.multiply()
      this.dom.getElementById("multiply").className = "button-orange-flash column"
      setTimeout(function() {
        this.dom.getElementById("multiply").className = "button-orange column"
      }, 100)
      break

    case 47:
      this.divide()
      this.dom.getElementById("divide").className = "button-orange-flash column"
      setTimeout(function() {
        this.dom.getElementById("divide").className = "button-orange column"
      }, 100)
      break

    case 13:

    case 61:
      this.equals()
      this.dom.getElementById("equals").className = "button-orange-bottom-flash column"
      setTimeout(function() {
        this.dom.getElementById("equals").className = "button-orange-bottom column"
      }, 100)
      break

    case 46:
      this.decimal()
      this.dom.getElementById("decimal").className = "button-grey-flash column"
      setTimeout(function() {
        this.dom.getElementById("decimal").className = "button-grey column"
      }, 100)
      break

    case 99:
      this.clear()
      this.dom.getElementById("clear").className = "button-grey-top-flash column"
      setTimeout(function() {
        this.dom.getElementById("clear").className = "button-grey-top column"
      }, 100)
      break

    case 37:
      this.percent()
      this.dom.getElementById("percent").className = "button-grey-top-flash column"
      setTimeout(function() {
        this.dom.getElementById("percent").className = "button-grey-top column"
      }, 100)
      break

    default:
      break
  }


}


function getEventTarget(currentEvent) {
  currentEvent = currentEvent || window.event;
  return currentEvent.target
}

function editCell(currentEvent) {
  var target = getEventTarget(currentEvent)
  if(target.tagName.toLowerCase() === "div") {
    if(target.id === "one") calculator2.one()
  }
}

var calculators = document.getElementsByClassName("calculator")
console.log(calculators)
for(i = 0; i < calculators.length; i++) {
  new Calculator(calculators[i])
}
document.getElementById("zero").addEventListener("click", function() { calculator1.zero() })
// document.getElementById("one").addEventListener("click", function() { calculator2.one() })
document.getElementById("two").addEventListener("click", function() { calculator1.two() })
document.getElementById("three").addEventListener("click", function() { calculator1.three() })
document.getElementById("four").addEventListener("click", function() { calculator1.four() })
document.getElementById("five").addEventListener("click", function() { calculator1.five() })
document.getElementById("six").addEventListener("click", function() { calculator1.six() })
document.getElementById("seven").addEventListener("click", function() { calculator1.seven() })
document.getElementById("eight").addEventListener("click", function() { calculator1.eight() })
document.getElementById("nine").addEventListener("click", function() { calculator1.nine() })
document.getElementById("add").addEventListener("click", function() { calculator1.add() })
document.getElementById("subtract").addEventListener("click", function() { calculator1.subtract() })
document.getElementById("multiply").addEventListener("click", function() { calculator1.multiply() })
document.getElementById("divide").addEventListener("click", function() { calculator1.divide() })
document.getElementById("clear").addEventListener("click", function() { calculator1.clear() })
document.getElementById("percent").addEventListener("click", function() { calculator1.percent() })
document.getElementById("decimal").addEventListener("click", function() { calculator1.decimal() })
document.getElementById("sign").addEventListener("click", function() { calculator1.reverseSign() })
document.getElementById("equals").addEventListener("click", function() { calculator1.equals() })
document.addEventListener("keypress", function() { calculator1.keyStrokeHandler(event) })
