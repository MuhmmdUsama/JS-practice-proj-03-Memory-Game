// ########### Splash screen #########################
document.querySelector('.control-button span').onclick = () => {
  let myName = prompt('Enter Your Name');
  console.log(myName);
  if (myName == '') {
    myName = 'Unknowen';
    document.querySelector('.name span').textContent = myName;
  } else {
    document.querySelector('.name span').textContent = myName;
  }
  document.querySelector('.control-button').remove();
};

// ###########  #########################

let shuffle = (arr) => {
  let currentNum = arr.length,
    temp,
    randomNum;
  while (currentNum > 0) {
    randomNum = Math.floor(Math.random() * currentNum--);

    temp = arr[currentNum];
    arr[currentNum] = arr[randomNum];
    arr[randomNum] = temp;

    // Swaping values without temp var
    //   arr[currentNum] = arr[currentNum] + arr[randomNum];
    //   arr[randomNum] = arr[currentNum] - arr[randomNum];
    //   arr[currentNum] = arr[currentNum] - arr[randomNum];
  }
  return arr;
};

let duration = 1000;

let blocksContainer = document.querySelector('.memory-game-container');

// Creat Array from game block
let blocks = Array.from(blocksContainer.children);

// Create a range of keys according to blocks numbers
let orderRange = [...Array(blocks.length).keys()];

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
});
