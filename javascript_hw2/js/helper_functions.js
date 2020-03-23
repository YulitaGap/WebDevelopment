var getCurrentObject =  () => objects.find(object => object.state === 'falling');
var createPlayground = () => (new Array(10).fill().map( el => (new Array(5).fill())));


function isFilledLine(line,lineNum) {
    var areFilled = true
    for (let j = 0; j < line.length; j++){
        if (playground[lineNum][j] === undefined) {
            areFilled = false //when a cell in a line is't filled
        }
    }
    return areFilled;
}

function isPossibleDown(obj){
    playground = createPlayground()
    renderPlayground()
    var cantMove = false

    for (cell of obj.position){
        if (playground[cell[0] - 1][cell[1]] != undefined) {
            if (!obj.position.some(otherCell => otherCell[0] == cell[0] - 1 && otherCell[1] == cell[1])){
                console.log('Object is on top of another object')
                return cantMove // when cell is on topof other cell
            }
        }
        if (cell[0] <= 0){
            console.log('Object is on the last row')
            return cantMove // when cell is at the border
        }
    }
        return !cantMove;
    }

function isPossibleLeft(object) {
    var cantMove = false;
    // searching for the most left cell to check limits
    currLeftest = object.position[0][1]
    for (let i = 1; i < object.position.length; i++) {
        if (object.position[i][1] < currLeftest) {
            currLeftest = object[positioni][1]
        }
    }
    if (currLeftest - 1 <= -1) {
        console.log('Object is excessing a playground limit')
        return cantMove // when cell is at the playground border
    }
    for (cell of object.position) {
        if (playground[cell[0]][cell[1] - 1] !== undefined){
            if (!object.position.some(otherCell => otherCell[1] == cell[1] - 1 && otherCell[0] == cell[0])) {
                console.log('Object is excessing another object broder')
                return cantMove// when cell is at the border of another object
            }
        } 
    }
    return !cantMove
}
    
function isPossibleRight(object) {
    var cantMove = false
    // searching for the most right cell to check limits
    currRightest = object.position[0][1]
    for (let i = 1; i < object.position.length; i++) {
        if (object.position[i][1] > currRightest) {
            currRightest = object.position[i][1]
        }
    }
    if (currRightest + 1 >= 5 ){
        console.log('Object is excessing a playground limit')
        return cantMove; // when cell is at the playground border
    }
    for (cell of object.position) {
        if (playground[cell[0]][cell[1] + 1] !== undefined) {
            if (!object.position.some(otherCell => otherCell[1] == cell[1] + 1 && otherCell[0] == cell[0])) {
                console.log('Object is excessing another object broder')
                return cantMove // when cell is at the border of another object
            }
        }
    }
    return !cantMove
}
function isPossibleCreate(object) {
    for (cell of object.position) {
        if (playground[cell[0]][cell[1]] !== undefined) {
            return false // when place for an object cell is already taken
        }
    }
    return true
    }
