//https://teachablemachine.withgoogle.com/models/RsW6LvkUb/
function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/I_a2XpVfi/model.json",modelready)
}
function modelready() {
    classifier.classify(got_results)
}
function got_results(error,results) {
    console.log('got-result')
}