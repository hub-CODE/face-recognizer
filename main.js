Webcam.set({width:300,height:350,image_format:'png',png_quality:100});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap( function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelLoaded)