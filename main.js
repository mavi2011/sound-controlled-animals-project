function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nAqLP_qWt/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{if(error){
    console.log(error);
}else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can Hear - '+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
if (results[0].label == "barking") { 
    img.src = 'dog barking.gif';
     }
    else if (results[0].label == "background") { 
        img.src = 'sound_.jpeg';
         
      if (results[0].label == "roaring") { 
         img.src = 'roar.gif';
     }
        else if (results[0].label == "meow") {
             img.src = 'cat-meow.gif'; 

            }else if (results[0].label == "mooing"){ 
                img.src = 'cow.gif';
            }}}}

