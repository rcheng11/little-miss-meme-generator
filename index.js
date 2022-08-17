var c = document.getElementById("myCanvas")
var input = document.getElementById("topInput")
var colorInput = document.getElementById("colorInput")
var textColorInput = document.getElementById("textColorInput")
var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");

var ctx = c.getContext("2d");
var currentImg = "images/miss-1.png";
var currentImgNum = 1;
var imgSize = 250;


topInput.addEventListener("keyup", updateCanvas)
colorInput.addEventListener("input", updateCanvas)
textColorInput.addEventListener("input", updateCanvas)
leftButton.addEventListener("click", function(){
  updateImage(-1)
})
rightButton.addEventListener("click", function(){
  updateImage(1)
})

// initialize canvas
updateCanvas()

function updateImage(num){
  if(currentImgNum + num <= 1){
    currentImgNum = 19
    currentImg = `images/miss-${currentImgNum}.png`;
    updateCanvas()
  }
  else if(currentImgNum + num >= 19){
    currentImgNum = 1
    currentImg = `images/miss-${currentImgNum}.png`;
    updateCanvas()
  }
  else{
    currentImgNum += num
    currentImg = `images/miss-${currentImgNum}.png`;
    updateCanvas()
  }
}

function updateCanvas(){
  // Clear
  ctx.clearRect(0, 0, c.width, c.height)
  ctx.fillStyle = colorInput.value;
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.fillStyle = textColorInput.value;
  // Write Text
  ctx.font = "45px Arial";
  ctx.textAlign = 'center';
  ctx.fillText("Little Miss", c.width/2, 80);
  ctx.font = "20px Arial";
  ctx.fillText(input.value, c.width/2, 115);
  // draw image
  var img = new Image()
  img.src = currentImg
  img.onload = function(){
    ctx.drawImage(img, c.width/2-imgSize/2,c.height/3,
      imgSize, imgSize)
  }
}
