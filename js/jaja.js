(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 313,
	height: 379,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"../img/world/ballon.png", id:"ballon"},
		{src:"../img/world/sddd.png", id:"sddd"},
		{src:"../img/world/sss.png", id:"sss"},
		{src:"../img/world/www.png", id:"www"}
	]
};

// stage content:
(lib.jaja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.jaja_1();
	this.instance.setTransform(152.5,196.4,1,1,0,0,0,-4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.5,197.3,301,377);


// symbols:
(lib.ballon = function() {
	this.initialize(img.ballon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,170);


(lib.sddd = function() {
	this.initialize(img.sddd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,32);


(lib.sss = function() {
	this.initialize(img.sss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,28);


(lib.www = function() {
	this.initialize(img.www);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,248);


(lib.hand = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sddd();
	this.instance.setTransform(-7,-21.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-21.5,44,32);


(lib.eye = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkcB5QgDAAgCgCQgCgDAAgDQAAgDADgCQACgCADAAQBNAIAmhBQABgDADgBQADgBADACQACABABADQABADgBADQgmBChJAAIgSgBgACkguQgDgBgCgCQgCgDAAgDQABgDACgCQADgCADABQBTALAdhDQABgDADgBQADgBADABQADACABADQABACgBADQgdBDhJAAQgNAAgNgCg");
	this.shape.setTransform(0.9,1.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.3,-10.9,58.5,24.6);


(lib.eye_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkNB0QgNgOAEgVQAEgUATgPQAUgOAWAAQAXAAANAOQANAPgEAUQgEAVgTAOQgUAQgWAAQgXAAgNgQgAC3guQgPgOACgVQABgUATgPQASgPAWAAQAXAAAOAPQAOAPgBAUQgCAVgSAOQgSAPgWAAQgXAAgOgPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-13.2,56.1,26.4);


(lib.baloom = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ballon();
	this.instance.setTransform(-106,-85);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-85,212,170);


(lib.ballon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.baloom();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4},8).to({y:-2.5},8).to({y:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-85,212,170);


(lib.jaja_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.hand();
	this.instance.setTransform(79.7,139.2,1,1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-19.9},8).to({rotation:0.5},14).wait(3));

	// eye
	this.instance_1 = new lib.eye_1();
	this.instance_1.setTransform(35.2,74.6);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(35.2,74.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_1}]},4).wait(10));

	// www.png
	this.instance_3 = new lib.www();
	this.instance_3.setTransform(-154.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// ballon.png
	this.instance_4 = new lib.ballon_1();
	this.instance_4.setTransform(26.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-182,301,377);

})(lib2 = lib2||{}, images2 = images2||{}, createjs = createjs||{});
var lib2, images2, createjs;