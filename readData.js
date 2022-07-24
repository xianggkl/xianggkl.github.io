var requestURL = "https://raw.githubusercontent.com/xianggkl/xianggkl.github.io/devA/map.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var squareData = request.response;
    
    showData(squareData);
}

function showData(jsonObj) {
    var squareInfo = document.createElement('article');

    var squares = jsonObj['members'];

    for (i = 0; i < squares.length; i++) {
        var squareName = document.createElement('h3');
        var squareX = document.createElement('p');
        var squareY = document.createElement('p');
        var squareColor = document.createElement('p');
        var squareProp = document.createElement('p');

        squareName.textContent = 'Index:' + squares[i].index;
        squareX.textContent = 'X:' + squares[i].x;
        squareY.textContent = 'Y:' + squares[i].y;
        squareColor.textContent = 'Color:' + squares[i].color;
        squareProp.textContent = 'Prop:' + squares[i].prop;

        squareInfo.appendChild(squareName);
        squareInfo.appendChild(squareX);
        squareInfo.appendChild(squareY);
        squareInfo.appendChild(squareColor);
        squareInfo.appendChild(squareProp);

        document.body.appendChild(squareInfo);
    }

}