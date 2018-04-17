var deli = [];
var number = 1;

function dayAtTheDeli(number) {
  var emptyArray = [];
  emptyArray.push(number++);
  return `Currently serving ${emptyArray.shift()}.`;
}



var katzDeli = [];

function takeANumber(katzDeliLine, newName) {

  katzDeliLine.push(`${newName}`);

  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {

  if (1 > katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {

  if (1 > katzDeliLine.length) {
    return "The line is currently empty."
  }
    var lineInformation = [];
    for (let i = 0; 1 < katzDeliLine.length; i++) {
      lineInformation.push(`${i + 1}. ${katzDeliLine[i]}`)

    return `The line is currently: ${lineInformation.join(' , ')}`
  }
}
