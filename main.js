/* https://teachablemachine.withgoogle.com/models/DuSZjB07i/ */
Webcam.set({

width:350,
height:300,
image_format:"png",
png_quality:1000
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function  take_snapshot(){
Webcam.snap(function(data_uri) {
    document.getElementById("rezult").innerHTML="<img id='captureimage' src=  "+data_uri+" >";
})
}
console.log("ml5version",ml5.version);



classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DuSZjB07i/model.json",gunloaded);
function gunloaded(){console.log("THE AMO IS READY");}
