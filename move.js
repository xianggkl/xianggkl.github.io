// var requestURL = "https://raw.githubusercontent.com/xianggkl/xianggkl.github.io/devA/map.json";
// var request = new XMLHttpRequest();

// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function () {
//     var squareData = request.response;
    
//     // showData(squareData);
// }

const minValue = 1;
const maxValue = 6;

function randomNumber(minValue, maxValue) {
    var choices = maxValue - minValue;
    return Math.floor(Math.random() * choices + minValue);
}

var num = randomNumber(minValue, maxValue);
console.log(num);