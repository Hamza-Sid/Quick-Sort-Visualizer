let values = [];
let compSubArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight); //windowWidth
  values = new Array(Math.floor(width/20)); // adjust
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
  
  noStroke();
  textSize(30);
  text(values.toString(), 10, 90);
  textSize(80);
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
  
  textSize(20);
  text("About:\n QuickSort is a sorting algorithm that repeatedly divides\n a data set/structure into halves using a pivot point.\n The algorithm rearranges the data such that only values greater\n than that at the pivot wil be on one side,\n and only values less than on the other.\n This process is repeated until the data set is sorted. \n QuickSort is called a \"divide and conqeure\" algorithm because it\n divides the problem into smaller and smaller problems until they\n are easy to overcome.\n QuickSort does nlog(n) time due to its technique of repeatedly\n dividing the data set in half.", 580, 260);
}

function mousePressed() {
  window.open("https://editor.p5js.org/Hamza_sid/present/2lRGQtr-Yl", '_blank');
}
async function swap(arr, a, b) {
  await sleep(25); // adjust
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}