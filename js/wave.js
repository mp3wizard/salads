(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "transparent",
	manifest: [
		{src:"../img/world/eff_1.png", id:"eff_1"},
		{src:"../img/world/WaterDrop0000.png", id:"WaterDrop0000"}
	]
};

// stage content:
(lib.wave2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wave_2();
	this.instance.setTransform(127.3,204.2,1,1,0,0,0,26.3,12);

	this.instance_1 = new lib.wave_1();
	this.instance_1.setTransform(212.6,230.5,1,1,0,0,0,17.6,14.9);

	this.instance_2 = new lib.wave_3();
	this.instance_2.setTransform(319,236.3,1,1,0,0,0,40,13.1);

	this.instance_3 = new lib.wave_4();
	this.instance_3.setTransform(382,194.7,1,1,0,0,0,37,10.1);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(366.5,385.7,330.1,61);


// symbols:
(lib.eff_1 = function() {
	this.initialize(img.eff_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,20);


(lib.WaterDrop0000 = function() {
	this.initialize(img.WaterDrop0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.wave_sp2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.WaterDrop0000, null, new cjs.Matrix2D(0.5,0,0,0.262,-166.4,-123.2)).s().p("AkCBNQgBgPgEgPQgJgegSAAQgHAAgJACIgLADQgFgFgKgFQAGgDgBgFQAAgGgSgLIAAhAIBJAAIAAADIJqAAIAACXg");
	this.shape.setTransform(34.6,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.2,15.6);


(lib.wave_sp1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.WaterDrop0000, null, new cjs.Matrix2D(0.5,0,0,0.262,-65.2,-120.4)).s().p("AkwBqIAAjTIHHAAIAABiICaAAIAAAdIgLACQgWAEABALQgBAHAIAEQgIAFgEALQgGANAAAPQAAAFALAGIABABg");
	this.shape.setTransform(30.6,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,21.3);


(lib.water_light_aplha90 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgQAHQgHgDAAgEQAAgDAHgDQAHgEAJAAQAKAAAGAEQAIADAAADQAAAEgIADQgGAEgKAAQgJAAgHgEg");
	this.shape.setTransform(2.5,1.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.9,2.3);


(lib.water_eff1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAhQgNgOAAgTQAAgSANgPQAPgNASAAQATAAAOANQAOAPAAASQAAATgOAOQgOAOgTAAQgSAAgPgOg");

	// Layer 1
	this.instance = new lib.eff_1();
	this.instance.setTransform(-5.4,-6.1,0.6,0.6);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.4,-6.1,11.4,12);


(lib.eff1_3_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.water_eff1();
	this.instance.setTransform(0.2,0,0.6,0.6,0,0,0,0.2,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.14,scaleY:0.14,x:0.3},12).to({regX:0.1,scaleX:0.3,scaleY:0.3},13).to({_off:true},1).wait(13).to({_off:false},0).to({regX:0.4,scaleX:0.14,scaleY:0.14},13).to({regX:0.2,regY:-0.1,scaleX:0.6,scaleY:0.6,x:0.2},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.eff1_2_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.water_light_aplha90();
	this.instance.setTransform(0.3,0,0.435,0.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.6},7).wait(5).to({scaleX:0.31,scaleY:0.31},7).to({scaleX:0.44,scaleY:0.42},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0,2.2,1);


(lib.eff1_1_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.water_eff1();
	this.instance.setTransform(0.2,-0.1,1,1,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.59,scaleY:0.59,y:0},4).to({regX:0.4,regY:0,scaleX:0.3,scaleY:0.3,x:0.3},8).to({regX:0.3,scaleX:0.46,scaleY:0.46,y:-0.1},8).to({regX:0.2,regY:-0.1,scaleX:1,scaleY:1,x:0.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-6.1,11.4,12);


(lib.mc_eff_d_ani = function() {
	this.initialize();

	// eff1_3_ani
	this.instance = new lib.eff1_3_ani();
	this.instance.setTransform(3.9,14.4);

	// eff1_3_ani
	this.instance_1 = new lib.eff1_3_ani();
	this.instance_1.setTransform(23.5,8.1);

	// eff1_2_ani
	this.instance_2 = new lib.eff1_2_ani();
	this.instance_2.setTransform(34.3,13.2,1,1,0,0,0,0.2,0);

	// eff1_2_ani
	this.instance_3 = new lib.eff1_2_ani();
	this.instance_3.setTransform(1.5,-15.3,1,1,0,0,0,0.2,0);

	// eff1_1_ani
	this.instance_4 = new lib.eff1_1_ani();
	this.instance_4.setTransform(14.6,16.8,0.2,0.2,0,0,0,0.5,-0.2);

	// eff1_1_ani
	this.instance_5 = new lib.eff1_1_ani();
	this.instance_5.setTransform(43,8,0.2,0.2,0,0,0,0.5,-0.2);

	// eff1_1_ani
	this.instance_6 = new lib.eff1_1_ani();
	this.instance_6.setTransform(18.2,-1.2,0.2,0.2,0,0,0,0.5,-0.2);

	// eff1_1_ani
	this.instance_7 = new lib.eff1_1_ani();
	this.instance_7.setTransform(-9.5,14.9,0.2,0.2,0,0,0,0.5,-0.2);

	// eff1
	this.instance_8 = new lib.water_eff1();
	this.instance_8.setTransform(6.2,-24.4,0.3,0.3,0,0,0,0.1,-0.1);

	// eff1
	this.instance_9 = new lib.water_eff1();
	this.instance_9.setTransform(39.5,2.4,0.4,0.4,0,0,0,0.2,-0.1);

	// eff1
	this.instance_10 = new lib.water_eff1();
	this.instance_10.setTransform(32.6,-19.1,0.4,0.4,0,0,0,0.2,-0.1);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.7,-26.2,54.8,44.2);


(lib.wave_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mc_eff_d_ani();
	this.instance.setTransform(41.8,-1.1,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-12},8).to({scaleX:0.68,scaleY:0.68,y:-13.8},7).to({regX:16.7,scaleX:0.7,scaleY:0.7,x:44.6,y:-11.7},10).to({_off:true},1).wait(114));

	// Layer 3
	this.instance_1 = new lib.mc_eff_d_ani();
	this.instance_1.setTransform(27.4,-0.8,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-4.2},8).to({regY:-4.1,scaleX:0.68,scaleY:0.68,y:-6.2},6).to({regX:16.7,regY:-4.2,scaleX:0.7,scaleY:0.7,x:23.7,y:-5},10).to({_off:true},1).wait(108));

	// Layer 1
	this.instance_2 = new lib.wave_sp2();
	this.instance_2.setTransform(47,10.1,1.144,1.144,0,0,0,43.4,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:43.4,y:7.8},20).to({_off:true},1).wait(113).to({_off:false,scaleX:1.33,scaleY:1.33,x:51.7,y:13.1},0).to({scaleX:1.15,scaleY:1.15,x:47.2,y:10.2},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,1.2,79.2,17.9);


(lib.wave_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mc_eff_d_ani();
	this.instance.setTransform(41.8,-1.1,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-12},9).to({scaleX:0.68,scaleY:0.68,y:-13.8},6).to({regX:16.7,scaleX:0.7,scaleY:0.7,y:-14.7},7).to({_off:true},1).wait(108));

	// Layer 3
	this.instance_1 = new lib.mc_eff_d_ani();
	this.instance_1.setTransform(27.4,-0.8,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-4.2},9).to({scaleX:0.68,scaleY:0.68,y:-6.3},5).to({regX:16.7,scaleX:0.7,scaleY:0.7,y:-7.2},8).to({_off:true},1).wait(101));

	// Layer 1
	this.instance_2 = new lib.wave_sp2();
	this.instance_2.setTransform(51.7,13.1,1.332,1.332,0,0,0,43.4,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:43.4,y:7.8},45).to({_off:true},1).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,2.7,92.1,20.8);


(lib.wave_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.mc_eff_d_ani();
	this.instance.setTransform(41.8,-1.1,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-17.3},9).to({scaleX:0.68,scaleY:0.68,x:41.9,y:-15.7},5).to({regX:16.7,scaleX:0.7,scaleY:0.7,x:41.8,y:-14.7},12).to({_off:true},1).wait(133));

	// Layer 3
	this.instance_1 = new lib.mc_eff_d_ani();
	this.instance_1.setTransform(27.4,-0.8,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-9.5},8).to({scaleX:0.68,scaleY:0.68,x:27.5,y:-8.1},6).to({regX:16.7,scaleX:0.7,scaleY:0.7,x:27.4,y:-7.2},10).to({_off:true},1).wait(128));

	// Layer 2
	this.instance_2 = new lib.wave_sp1();
	this.instance_2.setTransform(26.3,12.1,1.172,1.172,0,0,0,30.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:30.4,regY:10.8,scaleX:1.11,scaleY:1.11,x:27.9,y:11.6},5).to({regX:30.6,regY:10.6,scaleX:1,scaleY:1,x:30.6,y:10.6},4).to({_off:true},1).wait(110).to({_off:false,scaleX:1.52,scaleY:1.52,x:17.7,y:14.9},0).to({regX:30.5,regY:10.7,scaleX:1.38,scaleY:1.38,x:21.1,y:13.8},25).to({scaleX:1.23,scaleY:1.23,x:25,y:12.5},14).to({regY:10.8,scaleX:1.19,scaleY:1.19,x:25.9,y:12.3},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-0.4,71.7,24.9);


(lib.wave_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.mc_eff_d_ani();
	this.instance.setTransform(41.8,-1.1,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-17.3},8).to({scaleX:0.68,scaleY:0.68,y:-15.5},6).to({regX:16.7,scaleX:0.7,scaleY:0.7,y:-14.7},7).to({_off:true},1).wait(229));

	// Layer 3
	this.instance_1 = new lib.mc_eff_d_ani();
	this.instance_1.setTransform(27.4,-0.8,0.5,0.5,0,0,0,16.6,-4.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({regY:-4.2,scaleX:0.64,scaleY:0.64,y:-9.5},8).to({regY:-4.1,scaleX:0.68,scaleY:0.68,y:-7.8},5).to({regX:16.7,regY:-4.2,scaleX:0.7,scaleY:0.7,y:-7.2},8).to({_off:true},1).wait(115));

	// Layer 2
	this.instance_2 = new lib.wave_sp1();
	this.instance_2.setTransform(17.7,14.9,1.524,1.524,0,0,0,30.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:30.5,regY:10.7,scaleX:1.38,scaleY:1.38,x:21.1,y:13.8},25).to({scaleX:1.23,scaleY:1.23,x:25,y:12.5},14).to({regX:30.4,regY:10.8,scaleX:1.11,scaleY:1.11,x:27.9,y:11.6},9).to({regX:30.6,regY:10.6,scaleX:1,scaleY:1,x:30.6,y:10.6},4).to({_off:true},1).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-1.3,93.1,32.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;