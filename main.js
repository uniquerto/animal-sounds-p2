function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1eVJgX5zg//', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}