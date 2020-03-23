var playground = createPlayground()

function renderPositions() {
  objects.forEach( object => {
    object.position.forEach( ([rowIndex, cellIndex]) => {
      playground[rowIndex][cellIndex] = TYPE_COLORS[object.type]
    })
  });
}

function moveDown(obj) {
  let currentObject = getCurrentObject()
  if (currentObject) {
    console.log('moving down')
    if (isPossibleDown(currentObject)) {
      currentObject.position.forEach(cell => (cell[0] > 0 && (cell[0] -= 1)))
      playground = createPlayground()
      renderPlayground()}
  else {
      fixCells(currentObject)
    }
  }
}

function moveRight() {
  let currentObject = getCurrentObject()
  if (currentObject) {
    console.log('moving right')
    if (isPossibleRight(currentObject)) {
      currentObject.position.forEach(cell => (cell[1] < 4 && (cell[1] += 1)))
      playground = createPlayground()
      renderPlayground()
    }
  }
}

function moveLeft() {
  let currentObject = getCurrentObject()
  if (currentObject) {
    console.log('moving left')
    if (isPossibleLeft(currentObject)) {
      currentObject.position.forEach(cell => (cell[1] > 0 && (cell[1] -= 1)))
      playground = createPlayground()
      renderPlayground()
    }
  }
}

function deleteLine(filledLine) {
  var afterDeleteObjects = JSON.parse(JSON.stringify(objects))
  for (var x = 0; x < objects.length; x++) {
    afterDeleteObjects[x].position = []
    for (var y = 0; y < objects[x].position.length; y++) {
      var currLine = objects[x].position[y][0]
      if (currLine !== filledLine) {
        afterDeleteObjects[x].position.push(objects[x].position[y])
      }
    }
  }
  return afterDeleteObjects
}

function deleteFilledLines() {
  for (let i = 0; i < playground.length;i++) {
    if (isFilledLine(playground[i], i)) {
      console.log('Found full lines')
      var updated = deleteLine(i)
      objects = updated
    }
  }
}

function fixCells(object){
      object.state = "static" // fixing falling object
      deleteFilledLines() // deleting filled lines if appeared
      createObj();
}

function createObj() {
  console.log("Creating new obj")
  var possibleTypes = Object.keys(TYPE_COLORS)
  var newType =  possibleTypes[possibleTypes.length * Math.random() << 0];
  var createdObj = { type:newType, state:'falling' }

  // defining new object cell positions
  if (newType === 'I') {
    var rndmAxix = 5 * Math.random() << 0
    createdObj.position = [[9, rndmAxix], [8, rndmAxix], [7, rndmAxix]]
  } 
  if (newType === 'L') {
    var rndmAxix = 3 * Math.random() << 0
    createdObj.position = [[9, rndmAxix], [8, rndmAxix], [8, rndmAxix + 1], [8, rndmAxix + 2]]
  } 
  if (newType === 'T') {
    var rndmAxix = 3 * Math.random() << 0
    createdObj.position = [[9, rndmAxix], [9, rndmAxix + 1], [9, rndmAxix + 2], [8, rndmAxix + 1]]
  }
  if (isPossibleCreate(createdObj)){
    objects.push(createdObj); // adding new object at random location of the x (horizontal) axis
    console.log('Updated')
    playground = createPlayground()
    renderPlayground()
  }
  else {
    console.log('No place for new object.')
    endGame()
  }
}

function pauseGame() {
  console.log('The game is on pause!')
  clearInterval(gameInterval)
}

function endGame() {
  console.log('The game is over!')
  clearInterval(gameInterval)
  objects = []
  window.location.href = 'http://127.0.0.1:8000/' // try again
}

renderPlayground()

// 2 seconds interval set
var gameInterval = setInterval(() => {
  moveDown();
}, 2000);
