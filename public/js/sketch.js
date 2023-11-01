
var stars = [];
var n_stars = 200;
var thresh = 100;
var mouseThresh = 50;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('particles-container');
    background(255, 255, 255);
    for (var i = 0 ; i < n_stars ; i++) {
        stars[i] = new Star();
    }
}

function draw () {
    clear();
    for (var i = 0 ; i < n_stars ; i++) {
        if(stars[i].offscreen()){
            stars.splice(i, 1, new Star());
        }
        stars[i].update();
    }

    for (var i = 0 ; i < n_stars ; i++) {
        stars[i].cluster(stars);
        stars[i].show();
    }
}
