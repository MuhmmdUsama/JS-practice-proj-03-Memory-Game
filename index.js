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

// ########### Matching Function #########################

let matchBlocks = (firstblock, secondBlock) => {
  let wrongTries = document.querySelector('.tries span');

  if (firstblock.dataset.tech === secondBlock.dataset.tech) {
    firstblock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstblock.classList.add('is-matched');
    secondBlock.classList.add('is-matched');
  } else {
    wrongTries.innerHTML = parseInt(wrongTries.innerHTML)+1;
    // wrongTries.innerHTML +=1;
    setTimeout(() => {
      firstblock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
    }, 1000);
  }
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
    // Matching function
    matchBlocks(flippedBlocks[0], flippedBlocks[1]);
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
