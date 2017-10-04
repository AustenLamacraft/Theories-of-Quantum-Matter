// Simulation of Laughlin state

var particlesQ = 1024;
var slider;
var c = 500;

var beta = 10;
var step = 0.5;
var gamma = beta * step**2 / 8;

var radius = 100

var x = new Array(particlesQ);
var y = new Array(particlesQ);
var vx = new Array(particlesQ);
var vy = new Array(particlesQ);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(255, 128);

	// slider = createSlider(0, 0.000005, 0.0000025, 0);
	// slider.position(0, height - 32);
	// slider.style('width', width - 8 + 'px');

	for (var a = 0; a < c; a++) {
		x[a] = random(0,windowWidth);
		y[a] = random(0,windowHeight);
		vx[a] = 0;
		vy[a] = 0;
	}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
	// var g = slider.value();

	for (var a = 0; a < c; a++) {
		var ax = 0, ay = 0;

		for (var b = 0; b < c; b++) {
			if (a != b) {
				dx = x[b] - x[a];
				dy = y[b] - y[a];

				var d_ab = sqrt(dx*dx + dy*dy);
				//if (d < 1) d = 1;

				//var f = (d - 256) * m[b] / d;
        var f =  1 / d_ab**2

				ax += -f * dx;
				ay += -f * dy;
			}
		}

		var d = sqrt((x[a] - windowWidth / 2)**2 + (y[a] - windowHeight / 2)**2);
		if (d < 1) d = 1;
    ax +=  - (x[a] - windowWidth / 2) / radius;
    ay +=  - (y[a] - windowHeight / 2) / radius;

		vx[a] = vx[a] * exp(-gamma) + ax + step * randomGaussian();
		vy[a] = vy[a] * exp(-gamma) + ay + step * randomGaussian();
	}

	for (var a = 0; a < c; a++) {
		x[a] += vx[a];
		y[a] += vy[a];

		if ((x[a] < 0    &&    vx[a] < 0)    ||    (x[a] > width    &&    vx[a] > 0))    vx[a] = -vx[a];
		if ((y[a] < 0    &&    vy[a] < 0)    ||    (y[a] > height   &&    vy[a] > 0))    vy[a] = -vy[a];
	}

	background(32);

	for (var i = 0; i < c; i++) {
		ellipse(x[i], y[i], 10, 10);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addNewParticle() {
	if (mouseY < height - 50) {
		x[c] = mouseX;//random(0,windowWidth); //mouseX;
		y[c] = mouseY;//random(0,windowHeight); //mouseY;
		vx[c] = 0;
		vy[c] = 0;

		c++;
		c = c % particlesQ;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
	addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
	addNewParticle();
}
