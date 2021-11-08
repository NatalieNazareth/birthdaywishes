
var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
block_Image_width=30;
block_Image_height=38;
function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
bolck_Image_object=Img;
bolck_Image_object.scaleToWidth(100);
bolck_Image_object.scaleToHeight(510);
bolck_Image_object.set({
    top:10,left:10
});
canvas.add(bolck_Image_object);
});	
	
}

function playSound(){
x.play();	
}