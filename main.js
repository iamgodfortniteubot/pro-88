var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 30;
player_y = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});

canvas.add(player_object);
});
}

function new_image(get_image)

{
fabric.Image.fromURL(get_image, function (Img) {
block_image_object = Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top: player_y,
left: player_x
});

canvas.add(block_image_object);
});
window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
console.log("p and shift key pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}

if(e.shiftKey == true && keyPressed == '77'){
console.log("m and shift key pressed together");
block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}

if(keyPressed == '70')
{
new_image(');
console.log("f");
}

if(keyPressed == '66')
{
new_image('https://drive.google.com/file/d/1nI4k5m6r52xSbRUack7TbIa_U8YvzUt9/view?usp=sharing');
console.log("b");
}

if(keyPressed == '76')
{
new_image('https://drive.google.com/file/d/1PHnkIw5TK441tEvAbSwJ5NlS5ZtDCKSD/view?usp=sharing');
console.log("l");
}

if(keyPressed == '82')
{
new_image('https://drive.google.com/file/d/1JGZlMGfmfzmBiKHvoeeaYsOvJZ96LA88/view?usp=sharing');
console.log("r");
}

if(keyPressed == '72')
{
new_image('https://drive.google.com/file/d/1JGZlMGfmfzmBiKHvoeeaYsOvJZ96LA88/view?usp=sharing');
console.log("h");
}

function up(){
    if (player_y >= 0)
    {
    player_y = player_y - block_image_height;
    console.log("block image height =" + block_image_height);
    console.log("When Up arrow key is pressed , X = " + player_x + ", y =" + player_y);
    canvas.remove(player_object);
    player_update();
    }
    
    function down(){
        if (player_y <= 500)
        {
        player_y = player_y + block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When Down arrow key is pressed , X = " + player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
        }
    }
    
    function left(){
        if (player_y >= 0)
        {
        player_x = player_x - block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Left arrow key is pressed , X = " + player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
        }
    }
    
    function right(){
        if (player_y <= 850)
        {
        player_x = player_x + block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Right arrow key is pressed , X = " + player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
        }
    }
    
    }
    