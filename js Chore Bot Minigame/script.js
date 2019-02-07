const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById('start-button');
const currentStreak = document.getElementById('current-streak');
let currentStreakCount = 0;
const maxStreak = document.getElementById('max-streak');
let maxStreakCount = 0;
let lastGameWon = false;
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';
let numClosedDoors = 3;
let currentlyPlaying = true;

const playDoor = (door) =>{
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  } else if (isBot(door)){
    gameOver();
  }
}

const isBot = (door) =>{
  if(door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

const isClicked = door =>{
  if (door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}

const streakCounter = (status) =>{
  if(status === 'win'){
    currentStreakCount++;
    currentStreak.innerHTML = currentStreakCount;
    if(maxStreakCount < currentStreakCount){
      maxStreakCount = currentStreakCount;
      maxStreak.innerHTML = maxStreakCount;
    } 
  } else {
    currentStreakCount = 0;
    currentStreak.innerHTML = currentStreakCount;
  }
}

let doorImage1 = document.getElementById('door1');
doorImage1.onclick = function(){
  if(!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

let doorImage2 = document.getElementById('door2');
doorImage2.onclick = function(){
  if(!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
let doorImage3 = document.getElementById('door3');
doorImage3.onclick = function(){
  if(!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = function() {
  if(currentlyPlaying === false){
    startRound();
  }
}

const startRound = () =>{
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) =>{
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
    streakCounter('win');
  } else {
    startButton.innerHTML = 'Game over! Play again?';
    streakCounter();
  }
  currentlyPlaying = false;
}

const randomChoreDoorGenerator = () =>{
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if(choreDoor === 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;    
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;       
  }
}

startRound();