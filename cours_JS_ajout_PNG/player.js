var setupEvents = function() {
	var appendButton = document.getElementById("appendButton");
	appendButton.addEventListener("click", appendImage);

	var insertButton = document.getElementById("insertButton");
	insertButton.addEventListener("click", insertImage);

	var removeButton = document.getElementById("removeButton");
	removeButton.addEventListener("click", removeImage);

	var replaceButton = document.getElementById("replaceButton");
	replaceButton.addEventListener("click", replaceImage);

	var images = document.getElementsByTagName("img");
	for (var index = 0; index < images.length; index++) {
	  images[index].addEventListener("click", selection);
	}
} //fin event

var selectedImage = null;

var selection = function() {
if (selectedImage == this) {
  selectedImage = null;
  this.id = "";
} else {
  if (selectedImage && selectedImage !=this) {
    selectedImage.id = "";
  }
  selectedImage = this;
  this.id = "selected";
}
}

window.addEventListener("load", setupEvents);
var tabSrc = ["images_png/image1.png", "images_png/image2.png", "images_png/image3.png", "images_png/image4.png", "images_png/image5.png", "images_png/image6.png", "images_png/image7.png", "images_png/image8.png", "images_png/image9.png", "images_png/image10.png"];

var createImage = function() {
var imgNode = document.createElement("img");
imgNode.src = tabSrc[Math.floor(Math.random()*tabSrc.length)];
return imgNode;
}

var appendImage = function() {
var parent = document.getElementById("images");
var newImage =createImage();
newImage.addEventListener("click", selection);
parent.appendChild(newImage);
}

var insertImage = function() {
if(selectedImage){
	var parent = selectedImage.parentNode;
	var newImage = createImage();
	newImage.addEventListener("click", selection);
	parent.insertBefore(newImage, selectedImage);
}else{
	window.alert("Selectionnez d'abord une image !");
}
}

var removeImage = function() {
if(selectedImage){
	var parent = selectedImage.parentNode;
	
	parent.removeChild(selectedImage);
	selectedImage = null;
}else{
	window.alert("Selectionnez d'abord une image !");
}
}

var replaceImage = function() {
if(selectedImage){
	var newImage = createImage();
	var parent = selectedImage.parentNode;
	parent.replaceChild(newImage, selectedImage);
	newImage.id = "selected";
	newImage.addEventListener("click",selection);
	selectedImage = newImage;
}else{
	window.alert("Selectionnez d'abord une image !");
}

}