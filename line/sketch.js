let values = [];
let compSubArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight); //windowWidth
  values = new Array(Math.floor(width)); // adjust
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    compSubArray[i] = false;
    // values[i] = noise(i/100.0)*height;
  }
  quick(values, 0, values.length - 1);
  // values.sort();
  console.log(compSubArray);
}
async function quick(arr, start, end) {
  if (start >= end) return;
  idx = await partition(arr, start, end);
  await Promise.all([quick(arr, start, idx - 1), quick(arr, idx + 1, end)]);
}
async function partition(arr, start, end) {
  //we are choosing the end of the array as the default pivot 
  for(var i = start; i < end; i++){
    compSubArray[i] = true;
  }
  var partIdx = start;
  var pivotVal = arr[end];
  for (var i = start; i < end; i++) {
    if (arr[i] < pivotVal) {
      await swap(arr, i, partIdx);
      partIdx++;
    }
  }
  await swap(arr, partIdx, end);
  
  for(var i = start; i < end; i++){
    compSubArray[i] = false;
  }
  
  return partIdx;
  
}

function draw() {
  background(255);
  for (let i = 0; i < values.length; i++) {
    if(compSubArray[i] == true){
      fill(200);
    } else {
      fill(255);
    }
    // adjust
    // rect(i * 10, height - values[i], 10, values[i]);
    line(i, height, i, height - values[i]);
    // circle(i * 10, height - values[i], 10);
  }
  // noStroke();
  fill(0);
  text("Quick", 170, 300);

  // text(values.toString(), 10, 70);

  text("Sort!", 220, 390);
  textSize(20);
  textFont('Courier New');
  fill(0);
  text("\n(click anywhere for more)", 250, 420);
  fill(0);
  // text(values.toString(), 10, 70);
  textSize(80);
  textFont('Courier New');
}

function mousePressed() {
  window.open("https://editor.p5js.org/Hamza_sid/present/oeH_D1Taa", '_blank');
}
async function swap(arr, a, b) {
  await sleep(3); // adjust
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}