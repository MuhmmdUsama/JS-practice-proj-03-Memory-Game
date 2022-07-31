const blockCard = document.querySelectorAll('.game-block');

// ########### Splash screen #########################
document.querySelector('.control-button span').onclick = () => {
  let myName = prompt('Enter Your Name');
  if (myName == '') {
    myName = 'Unknowen';
    document.querySelector('.name span').textContent = myName;
  } else {
    document.querySelector('.name span').textContent = myName;
  }
  document.querySelector('.control-button').remove();
};

// ########### Shuffle Function  #########################

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

// ########### Stop Clicking Function #########################

let stopClicking = () => {
  // document
  //   .querySelector('.game-block')
  //   .addEventListener('click', (e) => e.stopPropagation());
  blocksContainer.classList.add('no-clicking');
  setTimeout(() => blocksContainer.classList.remove('no-clicking'), 1000);
};

// ########### Flip Function #########################

let flipBlock = (selectedBlock) => {
  selectedBlock.classList.add('is-flipped');

  let flippedBlocks = blocks.filter((flippedBlock) =>
    flippedBlock.classList.contains('is-flipped')
  );
  if (flippedBlocks.length === 2) {
    console.log('Two Flipped');

    // Stop Clicking
    stopClicking();
  }
};

// let duration = 1000;

let blocksContainer = document.querySelector('.memory-game-container');

// Creat Array from blocks Container
let blocks = Array.from(blocksContainer.children);

// Create a range of keys according to blocks numbers
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.addEventListener('click', () => {
    flipBlock(block);
  });
});
