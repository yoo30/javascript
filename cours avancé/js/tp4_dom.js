var conteneur = document.getElementById("output");

var form = document.createElement("form");
    form.setAttribute("enctype", "multipart/form-data");
    form.setAttribute("method", "post");
    form.setAttribute("action", "upload.php");


var fielsset = document.createElement("fieldset");
var legend = document.createElement("legend");
var legendText = document.createTextNode("Uploader une image");
legend.appendChild(legendText);

var div2 = document.createElement("div");
    div2.setAttribute("style", "text-align : center");

var label = document.createElement("label");
    label.setAttribute("for", "inputUpload");
var labelText = document.createTextNode("Image à uploader :");
label.appendChild(labelText);

var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("name", "inputUpload");
    input.setAttribute("id", "inputUpload");


conteneur.appendChild(form);
form.appendChild(fielsset);
fielsset.appendChild(legend);
legend.appendChild(div2);
div2.appendChild(label);
label.appendChild(input);
