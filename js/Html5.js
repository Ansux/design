(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1920,
	height: 560,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._01 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._292624106 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AE = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AI = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.DW = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.FL = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.index = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.PR = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.PS = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AhwEUIAGhYQgdgTgZgbIhVAaIgdg2IBEg8QgIggADghIhSgsIASg6IBeAGQAPgbAagYIgbhYIA1gdIA9BGQAggJAgACIAshRIA6ARIgGBbQAeARAYAbIBVgbIAeA2IhDA6QAKAjgDAkIBOAoIgRA7IhXgHQgSAggdAYIAZBTIg1AdIg5hCQgjAJgjgCIgpBOgAg4hKQghAYgFApQgEAmAYAhQARAWAXAIQAMAFAOABQAYAEAXgKQAMgEALgJQAggZAFgoQAGgngZggQgZghgogFIgNgBQgfAAgbAWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-29.4,58.8,58.8);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AhwEUIAGhYQgdgTgZgbIhVAaIgdg2IBEg8QgIggADghIhSgsIASg6IBeAGQAPgbAagYIgbhYIA1gdIA9BGQAggJAgACIAshRIA6ARIgGBbQAeARAYAbIBVgbIAeA2IhDA6QAKAjgDAkIBOAoIgRA7IhXgHQgSAggdAYIAZBTIg1AdIg5hCQgjAJgjgCIgpBOgAg4hKQghAYgFApQgEAmAYAhQARAWAXAIQAMAFAOABQAYAEAXgKQAMgEALgJQAggZAFgoQAGgngZggQgZghgogFIgNgBQgfAAgbAWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-29.4,58.8,58.8);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AAdFrQg4AEg9gPIhfB2IhbgwIAniWQgqgjgfg1IibASIgfhhICHhRQgCg0AOg6Ih7hhIAvhcICWApQAmgsAygcIgRidIBggeIBPCEQA4gHA8AQIBeh1IBcAvIgmCPQAvAnAhA3ICSgRIAgBhIh/BKQAFA8gRA+IBzBcIgvBbIiPglQgnAtg3AgIAQCUIhhAggAhGiTQg9AfgVBCQgVBAAfA9QAgA9BBAXQA/AUA+ggQA9gfAWhCQAWhAggg8Qgfg+hCgVQgbgJgbAAQgkAAgkATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.4,99.2,98.9);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AAdFrQg4AEg9gPIhfB2IhbgwIAniWQgqgjgfg1IibASIgfhhICHhRQgCg0AOg6Ih7hhIAvhcICWApQAmgsAygcIgRidIBggeIBPCEQA4gHA8AQIBeh1IBcAvIgmCPQAvAnAhA3ICSgRIAgBhIh/BKQAFA8gRA+IBzBcIgvBbIiPglQgnAtg3AgIAQCUIhhAggAhGiTQg9AfgVBCQgVBAAfA9QAgA9BBAXQA/AUA+ggQA9gfAWhCQAWhAggg8Qgfg+hCgVQgbgJgbAAQgkAAgkATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-49.4,99.2,98.9);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("Ag7HaIgbiMQg1gPgxghIh6BMIhDhHIBSh5QgagugLg4IiQghIAChgICTgcQAOgyAfguIhPh+IBGhCIB7BSQAugbA2gKIAhiQIBfACIAcCOQA2AOAxAgIB5hLIBCBHIhOB1QAeAwALA8ICIAfIgCBgIiJAaQgOA3gjAzIBJB2IhGBCIh0hOQgxAdg7ALIggCJgAgPiZQhBAJgoA0QgnA0AIA/QAJBAA0AoQA0AnA/gIQBBgKAngzQAog0gJg+QgIhBg1goQgqghgzAAQgJAAgMACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-47.7,95.6,95.5);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("Ag7HaIgbiMQg1gPgxghIh6BMIhDhHIBSh5QgagugLg4IiQghIAChgICTgcQAOgyAfguIhPh+IBGhCIB7BSQAugbA2gKIAhiQIBfACIAcCOQA2AOAxAgIB5hLIBCBHIhOB1QAeAwALA8ICIAfIgCBgIiJAaQgOA3gjAzIBJB2IhGBCIh0hOQgxAdg7ALIggCJgAgPiZQhBAJgoA0QgnA0AIA/QAJBAA0AoQA0AnA/gIQBBgKAngzQAog0gJg+QgIhBg1goQgqghgzAAQgJAAgMACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-47.7,95.6,95.5);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AiZHjIgCiXQg0gagtgsIiOA3Ig4hWIBthvQgSg1AAg9IiQg8IAVhlICfgCQAYgwApgrIg6iSIBWg4IBwBuQA2gTA5AAIA9iQIBkAVIACCaQA2AYAsAsICNg4IA4BXIhoBrQAVA5AABAICIA5IgVBlIiUAAQgZA4gvAuIA2CJIhVA4IhrhoQg4AUg/gBIg7CJgAhrh3QgzAugDBFQgDBDAuA0QAuAzBGADQBDAEAzgvQA0guADhFQAEhDgwgzQgug1hFgDIgIAAQg+AAgxAsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-50.4,101,101);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AiZHjIgCiXQg0gagtgsIiOA3Ig4hWIBthvQgSg1AAg9IiQg8IAVhlICfgCQAYgwApgrIg6iSIBWg4IBwBuQA2gTA5AAIA9iQIBkAVIACCaQA2AYAsAsICNg4IA4BXIhoBrQAVA5AABAICIA5IgVBlIiUAAQgZA4gvAuIA2CJIhVA4IhrhoQg4AUg/gBIg7CJgAhrh3QgzAugDBFQgDBDAuA0QAuAzBGADQBDAEAzgvQA0guADhFQAEhDgwgzQgug1hFgDIgIAAQg+AAgxAsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-50.4,101,101);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._01();
	this.instance.setTransform(-50,-51.3,0.196,0.196);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-51.3,100.1,100.1);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape.setTransform(-847.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_1.setTransform(-884.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_2.setTransform(-922.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_3.setTransform(-959.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_4.setTransform(-997.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_5.setTransform(-1034.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_6.setTransform(-1072.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_7.setTransform(-1109.9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_8.setTransform(-1147.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_9.setTransform(-1184.9,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_10.setTransform(-1222.4,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_11.setTransform(-1259.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_12.setTransform(-1297.4,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_13.setTransform(-1334.9,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_14.setTransform(-1372.4,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_15.setTransform(-1409.9,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_16.setTransform(-1447.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_17.setTransform(-1484.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_18.setTransform(-1522.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_19.setTransform(-1559.9,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_20.setTransform(-1597.4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_21.setTransform(-22.4,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_22.setTransform(-59.9,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_23.setTransform(-97.4,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_24.setTransform(-134.9,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_25.setTransform(-172.4,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_26.setTransform(-209.9,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_27.setTransform(-247.4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_28.setTransform(-284.9,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_29.setTransform(-322.4,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_30.setTransform(-359.9,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_31.setTransform(-397.4,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_32.setTransform(-434.9,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_33.setTransform(-472.4,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_34.setTransform(-509.9,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_35.setTransform(-547.4,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_36.setTransform(-584.9,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_37.setTransform(-622.4,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_38.setTransform(-659.9,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_39.setTransform(-697.4,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_40.setTransform(-734.9,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_41.setTransform(-772.4,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_42.setTransform(-809.9,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_43.setTransform(804.8,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_44.setTransform(765.1,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_45.setTransform(727.6,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_46.setTransform(690.1,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_47.setTransform(652.6,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_48.setTransform(615.1,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_49.setTransform(577.6,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_50.setTransform(540.1,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_51.setTransform(502.6,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_52.setTransform(465.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_53.setTransform(427.6,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_54.setTransform(390.1,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_55.setTransform(352.6,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_56.setTransform(315.1,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_57.setTransform(277.6,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_58.setTransform(240.1,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_59.setTransform(202.6,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_60.setTransform(165.1,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_61.setTransform(127.6,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_62.setTransform(90.1,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F39800").s().p("AhZDmIAAnLICyAAIAAHLg");
	this.shape_63.setTransform(52.6,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F39800").s().p("AhYDmIAAnLICyAAIAAHLg");
	this.shape_64.setTransform(15.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1606.4,-23,2420.2,46);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("Ak1SMIgVlnQiBg3hthkIlLCWIiPjGID1kUQgxh9gHiOIleiCIAnjxIF5gWQA0h5BbhoIiZlUIDGiPIEWD3QB7gzCLgKICBlaIDxAnIAWFsQCCA0BvBhIFIiTICODGIjrEJQA5CFAJCYIFJB7IgnDxIleAUQg3CGhoByICPE/IjGCOIkGjpQiEA2iYAHIh7FLgAkNkRQh0B1AACiQAAClB0B0QB0B0CjAAQCkAAB1h0QB0h0AAilQAAiih0h1Qh1h0ikAAQijAAh0B0gAieCrQhFhFAAhhQAAhgBFhFQBFhFBfAAQBiAABFBFQBFBFAABgQAABhhFBFQhFBFhiAAQhfAAhFhFg");
	this.shape.setTransform(120.4,120.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkYEYQh0h0AAikQAAijB0h0QB1h1CjABQCkgBB0B1QB1B0AACjQAACkh1B0Qh0B1ikgBQijABh1h1gAipinQhFBFAABiQAABgBFBEQBFBFBiAAQBfAABFhFQBFhEAAhgQAAhihFhFQhFhEhfAAQhiAAhFBEg");
	this.shape_1.setTransform(121.5,121.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.9,240.8);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkYEYQh0h0AAikQAAijB0h0QB1h1CjABQCkgBB0B1QB1B0AACjQAACkh1B0Qh0B1ikgBQijABh1h1gAipinQhFBFAABiQAABgBFBEQBFBFBiAAQBfAABFhFQBFhEAAhgQAAhihFhFQhFhEhfAAQhiAAhFBEg");
	this.shape.setTransform(121.5,121.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED6B1A").s().p("Ak1SMIgVlnQiBg3hthkIlLCWIiPjGID1kUQgxh9gHiOIleiCIAnjxIF5gWQA0h5BbhoIiZlUIDGiPIEWD3QB7gzCLgKICBlaIDxAnIAWFsQCCA0BvBhIFIiTICODGIjrEJQA5CFAJCYIFJB7IgnDxIleAUQg3CGhoByICPE/IjGCOIkGjpQiEA2iYAHIh7FLgAkNkRQh0B1AACiQAAClB0B0QB0B0CjAAQCkAAB1h0QB0h0AAilQAAiih0h1Qh1h0ikAAQijAAh0B0gAieCrQhFhFAAhhQAAhgBFhFQBFhFBfAAQBiAABFBFQBFBFAABgQAABhhFBFQhFBFhiAAQhfAAhFhFg");
	this.shape_1.setTransform(120.4,120.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.9,240.8);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],1), null, new cjs.Matrix2D(1.111,0,0,1.104,-1066.6,-756.3)).s().p("EiV/AR+MAAAgj7MEr+AAAMAAAAjxMhE7AAAIAAAKg");
	this.shape.setTransform(960,115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],1), null, new cjs.Matrix2D(1.111,0,0,1.111,-1805.9,-876.7)).s().p("EgicAAEIAAgHMBE4AAAIAAAHg");
	this.shape_1.setTransform(1699.3,230.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,231.1);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EiV6AR+MAAAgj7MEr0AAAMAAAAj7g");
	this.shape.setTransform(959.5,115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1919,230);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AAjGsQhCAEhJgSIhvCMIhsg4IAuixQgxgqglg/Ii3AWIglhzICghgQgCg9AQhDIiRhzIA3hsICyAvQArgzA7ghIgUi5IBzgjIBcCbQBCgIBIATIBuiKIBsA3IgsCpQA3AtAmBCICtgUIAmByIiXBYQAHBFgUBKICHBtIg3BqIiogrQgvA1hAAmIATCuIhyAmgAhTitQhIAlgYBMQgZBMAkBJQAmBHBNAaQBLAYBIgkQBIglAahOQAahMgmhHQgkhIhOgaQgggKgfAAQgrAAgrAXg");
	this.shape.setTransform(58.4,58.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.8,116.5);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件9();
	this.instance.setTransform(2.1,-2,1,1,0,0,0,120.4,120.4);

	this.instance_1 = new lib.元件9();
	this.instance_1.setTransform(1.5,-1.4,1,1,0,0,0,120.4,120.4);

	this.instance_2 = new lib.元件9();
	this.instance_2.setTransform(0.9,-0.8,1,1,0,0,0,120.4,120.4);

	this.instance_3 = new lib.元件9();
	this.instance_3.setTransform(0.3,-0.2,1,1,0,0,0,120.4,120.4);

	this.instance_4 = new lib.元件9();
	this.instance_4.setTransform(-0.3,0.4,1,1,0,0,0,120.4,120.4);

	this.instance_5 = new lib.元件9();
	this.instance_5.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_6 = new lib.元件9();
	this.instance_6.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_7 = new lib.元件9();
	this.instance_7.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_8 = new lib.元件9();
	this.instance_8.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_9 = new lib.元件9();
	this.instance_9.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_10 = new lib.元件9();
	this.instance_10.setTransform(-1.5,1.6,1,1,0,0,0,120.4,120.4);

	this.instance_11 = new lib.元件9();
	this.instance_11.setTransform(-2.1,2.2,1,1,0,0,0,120.4,120.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-122.4,245.1,245);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件9();
	this.instance.setTransform(2.1,-2,1,1,0,0,0,120.4,120.4);

	this.instance_1 = new lib.元件9();
	this.instance_1.setTransform(1.5,-1.4,1,1,0,0,0,120.4,120.4);

	this.instance_2 = new lib.元件9();
	this.instance_2.setTransform(0.9,-0.8,1,1,0,0,0,120.4,120.4);

	this.instance_3 = new lib.元件9();
	this.instance_3.setTransform(0.3,-0.2,1,1,0,0,0,120.4,120.4);

	this.instance_4 = new lib.元件9();
	this.instance_4.setTransform(-0.3,0.4,1,1,0,0,0,120.4,120.4);

	this.instance_5 = new lib.元件9();
	this.instance_5.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_6 = new lib.元件9();
	this.instance_6.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_7 = new lib.元件9();
	this.instance_7.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_8 = new lib.元件9();
	this.instance_8.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_9 = new lib.元件9();
	this.instance_9.setTransform(-0.9,1,1,1,0,0,0,120.4,120.4);

	this.instance_10 = new lib.元件9();
	this.instance_10.setTransform(-1.5,1.6,1,1,0,0,0,120.4,120.4);

	this.instance_11 = new lib.元件9();
	this.instance_11.setTransform(-2.1,2.2,1,1,0,0,0,120.4,120.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-122.4,245.1,245);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 5
	this.instance = new lib.补间17("synched",0);
	this.instance.setTransform(868.4,286);

	this.instance_1 = new lib.补间18("synched",0);
	this.instance_1.setTransform(868.4,286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},390).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-720},390).wait(1));

	// 4
	this.instance_2 = new lib.补间15("synched",0);
	this.instance_2.setTransform(785.5,333.2);

	this.instance_3 = new lib.补间16("synched",0);
	this.instance_3.setTransform(785.5,333.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},390).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,rotation:-720},390).wait(1));

	// 3
	this.instance_4 = new lib.补间13("synched",0);
	this.instance_4.setTransform(1109.4,367.8);

	this.instance_5 = new lib.补间14("synched",0);
	this.instance_5.setTransform(1109.4,367.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},390).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,rotation:-1440},390).wait(1));

	// 2
	this.instance_6 = new lib.补间11("synched",0);
	this.instance_6.setTransform(1000.5,270.4);

	this.instance_7 = new lib.补间12("synched",0);
	this.instance_7.setTransform(1000.5,270.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},218).to({state:[{t:this.instance_7}]},172).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-1525},218).to({_off:true,rotation:-1440},172).wait(1));

	// 1
	this.instance_8 = new lib.元件8();
	this.instance_8.setTransform(949.4,436.7,1,1,0,0,0,120.4,120.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:720},390).wait(1));

	// 1 复制
	this.instance_9 = new lib.补间9("synched",0);
	this.instance_9.setTransform(952.1,434);

	this.instance_10 = new lib.补间10("synched",0);
	this.instance_10.setTransform(952.1,434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},390).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,rotation:720},390).wait(1));

	// -1
	this.instance_11 = new lib.元件3();
	this.instance_11.setTransform(853.8,350.5,1.107,1.107,-30,0,0,58.4,58.1);
	this.instance_11.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:690},390).wait(1));

	// -2
	this.instance_12 = new lib.元件3();
	this.instance_12.setTransform(1025.8,345.1,0.885,0.885,-30,0,0,58.5,58.3);
	this.instance_12.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:690},390).wait(1));

	// 右2 复制
	this.instance_13 = new lib.补间3("synched",0);
	this.instance_13.setTransform(1345.3,-133.5,1,1,0,0,180);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(146).to({_off:false},0).to({y:116.1},13,cjs.Ease.get(-0.01)).to({x:1342.3,y:65.1},9,cjs.Ease.get(0.02)).to({y:67.6},2).to({x:1333.8,y:116.1},7,cjs.Ease.get(-0.01)).to({x:1143.2},57).wait(1).to({regX:-0.4,regY:19.7,skewX:-12,skewY:168,x:1133,y:135.8},0).wait(1).to({regX:0,regY:20.7,skewX:-15,skewY:165,x:1122.2,y:139.6},0).wait(2).to({regX:-0.1,skewX:-30,skewY:150,x:1107.5,y:151.5},0).wait(2).to({regX:0.1,skewX:-45,skewY:135,x:1098.8,y:166.5},0).wait(2).to({regX:0,skewX:-60,skewY:120,x:1092.7,y:186.2},0).wait(2).to({skewX:-75,skewY:105,x:1083.9,y:216.4},0).to({regX:-0.1,regY:20.8,skewX:-90,skewY:90,x:1076.8,y:263.4,alpha:0},6,cjs.Ease.get(-0.03)).to({_off:true},101).wait(40));

	// 右1
	this.instance_14 = new lib.补间3("synched",0);
	this.instance_14.setTransform(1820.9,-133.5,1,1,0,0,180);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(97).to({_off:false},0).to({y:116.1},13,cjs.Ease.get(-0.01)).to({x:1817.9,y:65.1},9,cjs.Ease.get(0.02)).to({y:67.6},2).to({x:1809.4,y:116.1},7,cjs.Ease.get(-0.01)).to({x:1377.6},140).to({x:1144.5},77).wait(1).to({regX:-0.4,regY:19.7,skewX:-12,skewY:168,x:1134.3,y:135.8},0).wait(1).to({regX:0,regY:20.7,skewX:-15,skewY:165,x:1123.5,y:139.6},0).wait(2).to({regX:-0.1,skewX:-30,skewY:150,x:1108.8,y:151.5},0).wait(2).to({regX:0.1,skewX:-45,skewY:135,x:1100,y:166.5},0).wait(2).to({regX:0,skewX:-60,skewY:120,x:1093.9,y:186.2},0).wait(2).to({skewX:-75,skewY:105,x:1085.2,y:216.4},0).to({regX:-0.1,regY:20.8,skewX:-90,skewY:90,x:1078,y:263.4,alpha:0},6,cjs.Ease.get(-0.03)).to({_off:true},1).wait(29));

	// zuo
	this.instance_15 = new lib.补间3("synched",0);
	this.instance_15.setTransform(1345.3,-133.5,1,1,0,0,180);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(211).to({_off:false},0).to({y:116.1},13,cjs.Ease.get(-0.01)).to({x:1342.3,y:65.1},9,cjs.Ease.get(0.02)).to({y:67.6},2).to({x:1333.8,y:116.1},7,cjs.Ease.get(-0.01)).to({x:1143.2},57).wait(1).to({regX:-0.4,regY:19.7,skewX:-12,skewY:168,x:1133,y:135.8},0).wait(1).to({regX:0,regY:20.7,skewX:-15,skewY:165,x:1122.2,y:139.6},0).wait(2).to({regX:-0.1,skewX:-30,skewY:150,x:1107.5,y:151.5},0).wait(2).to({regX:0.1,skewX:-45,skewY:135,x:1098.8,y:166.5},0).wait(2).to({regX:0,skewX:-60,skewY:120,x:1092.7,y:186.2},0).wait(2).to({skewX:-75,skewY:105,x:1083.9,y:216.4},0).to({regX:-0.1,regY:20.8,skewX:-90,skewY:90,x:1076.8,y:263.4,alpha:0},6,cjs.Ease.get(-0.03)).to({_off:true},1).wait(75));

	// 右2
	this.instance_16 = new lib.补间3("synched",0);
	this.instance_16.setTransform(1345.3,-133.5,1,1,0,0,180);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(62).to({_off:false},0).to({y:116.1},13,cjs.Ease.get(-0.01)).to({x:1342.3,y:65.1},9,cjs.Ease.get(0.02)).to({y:67.6},2).to({x:1333.8,y:116.1},7,cjs.Ease.get(-0.01)).to({x:1149},57).wait(1).to({regX:-0.4,regY:19.7,skewX:-12,skewY:168,x:1138.8,y:135.8},0).wait(1).to({regX:0,regY:20.7,skewX:-15,skewY:165,x:1128,y:139.6},0).wait(2).to({regX:-0.1,skewX:-30,skewY:150,x:1113.3,y:151.5},0).wait(2).to({regX:0.1,skewX:-45,skewY:135,x:1104.6,y:166.5},0).wait(2).to({regX:0,skewX:-60,skewY:120,x:1098.5,y:186.2},0).wait(2).to({skewX:-75,skewY:105,x:1089.7,y:216.4},0).to({regX:-0.1,regY:20.8,skewX:-90,skewY:90,x:1082.6,y:263.4,alpha:0},6,cjs.Ease.get(-0.03)).to({_off:true},100).wait(125));

	// 左2 复制
	this.instance_17 = new lib.补间3("synched",0);
	this.instance_17.setTransform(417.6,-133.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(213).to({_off:false},0).to({y:116.1},13,cjs.Ease.get(-0.01)).to({x:420.6,y:65.1},9,cjs.Ease.get(0.02)).to({y:67.6},2).to({x:429.1,y:116.1},7,cjs.Ease.get(-0.01)).to({x:771.9},130).wait(1).to({regX:-0.4,regY:19.7,rotation:12,x:782.1,y:135.8},0).wait(1).to({regX:0,regY:20.7,rotation:15,x:792.9,y:139.6},0).wait(2).to({regX:-0.1,rotation:30,x:807.6,y:151.5},0).wait(2).to({regX:0.1,rotation:45,x:816.4,y:166.5},0).wait(2).to({regX:0,rotation:60,x:822.5,y:186.2},0).wait(2).to({rotation:75,x:831.2,y:216.4},0).to({regX:-0.1,regY:20.8,rotation:90,x:838.4,y:263.4,alpha:0},6,cjs.Ease.get(-0.03)).wait(1));

	// 左2
	this.instance_18 = new lib.补间3("synched",0);
	this.instance_18.setTransform(417.6,-133.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(119).to({_off:false},0).to({y:116.1},13,cjs.Ease.get(-0.01)).to({x:420.6,y:65.1},9,cjs.Ease.get(0.02)).to({y:67.6},2).to({x:429.1,y:116.1},7,cjs.Ease.get(-0.01)).to({x:771.9},130).wait(1).to({regX:-0.4,regY:19.7,rotation:12,x:782.1,y:135.8},0).wait(1).to({regX:0,regY:20.7,rotation:15,x:792.9,y:139.6},0).wait(2).to({regX:-0.1,rotation:30,x:807.6,y:151.5},0).wait(2).to({regX:0.1,rotation:45,x:816.4,y:166.5},0).wait(2).to({regX:0,rotation:60,x:822.5,y:186.2},0).wait(2).to({rotation:75,x:831.2,y:216.4},0).to({regX:-0.1,regY:20.8,rotation:90,x:838.4,y:263.4,alpha:0},6,cjs.Ease.get(-0.03)).to({_off:true},39).wait(56));

	// 左1
	this.instance_19 = new lib.补间3("synched",0);
	this.instance_19.setTransform(417.6,-133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({y:116.1},13,cjs.Ease.get(-0.01)).to({x:420.6,y:65.1},9,cjs.Ease.get(0.02)).to({y:67.6},2).to({x:429.1,y:116.1},7,cjs.Ease.get(-0.01)).to({x:511.6},31).to({x:773.4},99).wait(1).to({regX:-0.4,regY:19.7,rotation:12,x:783.6,y:135.8},0).wait(1).to({regX:0,regY:20.7,rotation:15,x:794.4,y:139.6},0).wait(2).to({regX:-0.1,rotation:30,x:809.1,y:151.5},0).wait(2).to({regX:0.1,rotation:45,x:817.8,y:166.5},0).wait(2).to({regX:0,rotation:60,x:823.9,y:186.2},0).wait(2).to({rotation:75,x:832.7,y:216.4},0).to({regX:-0.1,regY:20.8,rotation:90,x:839.8,y:263.4,alpha:0},6,cjs.Ease.get(-0.03)).to({_off:true},89).wait(125));

	// 静止
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6B1A").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgPgPg");
	this.shape.setTransform(1914.9,207.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED6B1A").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_1.setTransform(1861.6,207.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED6B1A").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_2.setTransform(1808.3,207.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgQgPg");
	this.shape_3.setTransform(1755,207.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgQgPg");
	this.shape_4.setTransform(1168.6,207.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgQgPg");
	this.shape_5.setTransform(1222,207.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgQgPg");
	this.shape_6.setTransform(1275.3,207.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgQgPg");
	this.shape_7.setTransform(1328.6,207.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED6B1A").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgPgPg");
	this.shape_8.setTransform(1381.9,207.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgQgPg");
	this.shape_9.setTransform(1435.2,207.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgQgPg");
	this.shape_10.setTransform(1488.5,207.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgQgPg");
	this.shape_11.setTransform(1541.8,207.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED6B1A").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAQAQQAPAPAAAUQAAAVgPAQQgQAPgVAAQgUAAgPgPg");
	this.shape_12.setTransform(1595.1,207.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED6B1A").s().p("AgjAlQgQgQAAgVQAAgUAQgPQAPgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgPgPg");
	this.shape_13.setTransform(1648.4,207.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED6B1A").s().p("AgkAlQgPgQAAgVQAAgUAPgPQAQgQAUAAQAVAAAPAQQAQAPAAAUQAAAVgQAQQgPAPgVAAQgUAAgQgPg");
	this.shape_14.setTransform(1701.7,207.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB6gBQgBgxgjgjQgkgjgyAAQgxAAgjAjQgjAjgBAxQAAABAAAAQAAAyAkAkQAFAFAFAFQAhAaApAAQArAAAggaQAGgFAFgFQAkgkAAgyQAAAAAAgBg");
	this.shape_15.setTransform(1168.6,207.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gBQAAABAAAAQAAAyAkAkQAGAFAFAFQAhAaApAAQAqAAAhgaQAFgFAGgFQAkgkAAgyQAAAAAAgBQgCgxgigjQgkgjgyAAQgxAAgkAjQgjAjgBAxg");
	this.shape_16.setTransform(1222,207.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gBQAAABAAAAQAAAyAlAkQAFAFAFAFQAhAaApAAQAqAAAhgaQAFgFAGgFQAkgkAAgyQAAAAAAgBQgCgxgigjQgkgjgyAAQgxAAgjAjQgjAjgCAxg");
	this.shape_17.setTransform(1275.3,207.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB3gaQgIghgZgaQgkgjgyAAQgxAAgjAjQgjAjgCAxQAAABAAAAQAAAyAlAkQAFAFAFAFQAhAaApAAQAqAAAhgaQAGgFAFgFQAkgkAAgyQAAAAAAgB");
	this.shape_18.setTransform(1328.6,207.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB3gaQgIghgZgaQgkgjgyAAQgxAAgjAjQgjAjgBAxQAAABAAAAQAAAyAkAkQAFAFAFAFQAhAaApAAQArAAAggaQAGgFAFgFQAkgkAAgyQAAAAAAgB");
	this.shape_19.setTransform(1381.9,207.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB2gaQgHghgZgaQgkgjgyAAQgxAAgkAjQgjAjgBAxQAAABAAAAQAAAyAkAkQAGAFAFAFQAgAaAqAAQAqAAAhgaQAFgFAGgFQAjgkAAgyQAAAAAAgB");
	this.shape_20.setTransform(1435.2,207.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gBQAAABAAAAQAAAyAkAkQAGAFAFAFQAhAaApAAQAqAAAhgaQAFgFAGgFQAkgkAAgyQAAAAAAgBQgCgxgigjQgkgjgyAAQgxAAgkAjQgjAjgBAxg");
	this.shape_21.setTransform(1488.5,207.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gBQAAABAAAAQAAAyAlAkQAFAFAFAFQAhAaApAAQAqAAAhgaQAFgFAGgFQAkgkAAgyQAAAAAAgBQgCgxgigjQgkgjgyAAQgxAAgjAjQgjAjgCAxg");
	this.shape_22.setTransform(1541.8,207.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gBQAAABAAAAQAAAyAlAkQAjAkAxAAQAyAAAkgkQAkgkAAgyQAAAAAAgBQgBgxgjgjQgkgjgyAAQgxAAgjAjQgjAjgCAxg");
	this.shape_23.setTransform(1595.1,207.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah4gBQAAABAAAAQAAAyAkAkQAjAkAxAAQAyAAAkgkQAkgkAAgyQAAAAAAgBQgBgxgjgjQgkgjgyAAQgxAAgjAjQgjAjgBAxg");
	this.shape_24.setTransform(1648.4,207.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gBQAAABAAAAQAAAyAkAkQAkAkAxAAQAyAAAkgkQAjgkAAgyQAAAAAAgBQgBgxgigjQgkgjgyAAQgxAAgkAjQgjAjgBAxg");
	this.shape_25.setTransform(1701.7,207.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB2gaQgGghgagaQgkgjgyAAQgxAAgkAjQgjAjgBAxQAAABAAAAQAAAyAkAkQAkAkAxAAQAyAAAkgkQAkgkAAgyQAAAAAAgB");
	this.shape_26.setTransform(1755,207.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB3gaQgHghgagaQgkgjgyAAQgxAAgjAjQgjAjgCAxQAAABAAAAQAAAyAlAkQAjAkAxAAQAyAAAkgkQAkgkAAgyQAAAAAAgB");
	this.shape_27.setTransform(1808.3,207.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gBQAAABAAAAQAAAyAlAkQAjAkAxAAQAyAAAkgkQAkgkAAgyQAAAAAAgBAB3gaQgHghgagaQgkgjgyAAQgxAAgjAjQgbAagHAi");
	this.shape_28.setTransform(1861.6,207.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB6gBQgBgSgEgPQgBgCgBgDQgIgZgVgVQgkgjgyAAQgxAAgjAjQgjAjgBAxQAAABAAAAQAAAyAkAkQAjAkAxAAQAyAAAkgkQAkgkAAgyQAAAAAAgBg");
	this.shape_29.setTransform(1914.9,207.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#ED6B1A").ss(5,1,1).p("EAo9AFSIkhAAQAAgNgDgMIADifEAgoAFSIkhAAAYTFSIkhAAEA9bAFSICpAAIAAqjMh9OAADQh8gDgqAyQgOARgFAWIAAHJEA5nAFSIkhAAQAAgLgCgLQAAAAAAgBQAAgBgBgBIADieEAxVACbIAACfQAAABgBACQgCAKAAALIkhAAQAAgLgCgKQAAgCgBgCIAEifAYTCaIgDCfAT1CaIgDCfAP+CaIgDCfAcKCaIgDCfEAgoACaIgDCfEAo9ACaIgCCfEA9YACPIAACdEA5qACPIAACdAo/FSIkhAAQAAgNgDgMIADifAxUFSIkhAAQAAgNgDgMIADifA5pFSIkhAAQAAgNgDgMIADifAHpFSIkhAAAgqFSIkhAAA5mCaIgDCfEgh7ACaIgDCfAxRCaIgDCfAgnCaIgDCfAo8CaIgDCfAlICaIgDCfADLCaIgDCfAHsCaIgDCfALgCaIgDCfAP+FSIkhAAEA/zAB7Mh89AAAQh8gDgqAyQgBABAAAAQgNAQgFAWEgqTAFSIkhAAEgyoAFSIkhAAEg69AFSIiNAAQjHAFAOiGEgylACaIgDCfEg3GACaIgDCfEg66ACaIgDCfEgmcACaIgDCfEgqQACaIgDCfEguxACaIgDCfEgh+AFSIkhAA");
	this.shape_30.setTransform(1533.9,173.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EA49ABVQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAVAUAIAaIACAFQAEAPABARIAAACQAAAygkAjQgkAkgyAAQgzAAgjgkgEAwoABVQgkgjAAgyIAAgCQAAgKACgLIAAgCQAIgiAagaQAjgkAzAAQAyAAAkAkQAaAaAHAhIAAACIAAABQADALAAAKIAAACQAAAygkAjQgkAkgyAAQgzAAgjgkgEAoTABVQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAaAaAHAhIABAEQACAKAAAKIAAACQAAAygkAjQgkAkgyAAQgzAAgjgkgAf+BVQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAaAZAHAiQACALABANIAAACQAAAygkAjQgkAkgyAAQgzAAgjgkgAXpBVQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAjAjABAwIAAACQAAAygkAjQgkAkgyAAQgzAAgjgkgAPUBVQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAjAjABAwIAAACQAAAygkAjQgkAkgyAAQgzAAgjgkgAG/BVQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAjAjABAwIAAACQAAAygkAjQgkAkgyAAQgzAAgjgkgAhJBfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAjgkAxAAQAyAAAkAkQAjAjABAwIAAACQAAAygkAjIgLAKQggAagrAAQgpAAgggagApeBfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAjAjABAwIAAACQAAAygkAjIgLAKQggAagrAAQgrAAgggagAxzBfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAZAZAIAiQACALABANIAAACQAAAygkAjIgLAKQggAagrAAQgrAAgggagA6IBfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAZAZAIAiQACALABANIAAACQAAAygkAjIgLAKQggAagrAAQgrAAgggagEgidABfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAZAZAIAiQACALABANIAAACQAAAygkAjIgLAKQggAagrAAQgrAAgggagEgqyABfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAjAjABAwIAAACQAAAygkAjIgLAKQggAagrAAQgrAAgggagEgzHABfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAjgkAzAAQAyAAAkAkQAjAjABAwIAAACQAAAygkAjIgLAKQggAagrAAQgrAAgggagEg7dABfIgLgKQgkgjAAgyIAAgCQABgwAjgjQAkgkAyAAQAzAAAkAkQAiAjABAwIAAACQAAAygjAjIgMAKQggAagrAAQgrAAgggag");
	this.shape_31.setTransform(1541.7,207.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgPgQg");
	this.shape_32.setTransform(0.9,209.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ED6B1A").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_33.setTransform(54.2,209.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ED6B1A").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgQgQg");
	this.shape_34.setTransform(107.5,209.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_35.setTransform(160.8,209.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_36.setTransform(747.2,209.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_37.setTransform(693.8,209.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_38.setTransform(640.5,209.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ED6B1A").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgQgQg");
	this.shape_39.setTransform(587.2,209.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ED6B1A").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_40.setTransform(533.9,209.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgPgQg");
	this.shape_41.setTransform(480.6,209.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_42.setTransform(427.3,209.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#ED6B1A").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgQgQg");
	this.shape_43.setTransform(374,209.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ED6B1A").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_44.setTransform(320.7,209.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ED6B1A").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_45.setTransform(267.4,209.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ED6B1A").s().p("AgjAkQgQgPAAgVQAAgUAQgQQAPgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAPQgQAQgVAAQgUAAgPgQg");
	this.shape_46.setTransform(214.1,209.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gCQABgwAjgjQAkgkAxAAQAyAAAjAkQAjAjABAwQAAACAAAAQAAAygkAjQgFAGgGAEQggAagqAAQgqAAgggaQgGgEgFgGQgkgjAAgyQAAAAAAgCg");
	this.shape_47.setTransform(747.2,209.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB6gCQAAACAAAAQAAAygkAjQgGAGgFAEQggAagrAAQgpAAghgaQgFgEgGgGQgjgjAAgyQAAAAAAgCQABgwAigjQAkgkAxAAQAyAAAkAkQAjAjABAwg");
	this.shape_48.setTransform(693.8,209.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB6gCQAAACAAAAQAAAygkAjQgGAGgFAEQghAagqAAQgpAAghgaQgGgEgFgGQgkgjAAgyQAAAAAAgCQABgwAjgjQAkgkAxAAQAyAAAkAkQAjAjABAwg");
	this.shape_49.setTransform(640.5,209.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah2gbQAIghAZgZQAkgkAxAAQAyAAAjAkQAjAjABAwQAAACAAAAQAAAygkAjQgFAGgFAEQghAagqAAQgqAAgggaQgGgEgFgGQgkgjAAgyQAAAAAAgC");
	this.shape_50.setTransform(587.2,209.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah2gbQAIghAZgZQAkgkAxAAQAyAAAjAkQAjAjABAwQAAACAAAAQAAAygkAjQgFAGgGAEQggAagqAAQgqAAgggaQgGgEgFgGQgkgjAAgyQAAAAAAgC");
	this.shape_51.setTransform(533.9,209.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah2gbQAIghAZgZQAkgkAxAAQAyAAAjAkQAjAjABAwQAAACAAAAQAAAygkAjQgFAGgFAEQghAagqAAQgqAAgggaQgGgEgFgGQgkgjAAgyQAAAAAAgC");
	this.shape_52.setTransform(480.6,209.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB5gCQAAACAAAAQAAAygkAjQgFAGgFAEQggAagrAAQgqAAgggaQgGgEgFgGQgjgjAAgyQAAAAAAgCQAAgwAjgjQAkgkAxAAQAyAAAjAkQAjAjABAwg");
	this.shape_53.setTransform(427.3,209.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB5gCQAAACAAAAQAAAygjAjQgGAGgFAEQggAagrAAQgqAAgggaQgGgEgFgGQgjgjAAgyQAAAAAAgCQAAgwAjgjQAkgkAxAAQAyAAAkAkQAjAjAAAwg");
	this.shape_54.setTransform(374,209.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB5gCQAAACAAAAQAAAygjAjQgkAkgyAAQgxAAgkgkQgjgjAAgyQAAAAAAgCQABgwAigjQAkgkAxAAQAyAAAkAkQAjAjAAAwg");
	this.shape_55.setTransform(320.7,209.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB6gCQAAACAAAAQAAAygkAjQgkAkgyAAQgxAAgkgkQgjgjAAgyQAAAAAAgCQABgwAigjQAkgkAxAAQAyAAAkAkQAjAjABAwg");
	this.shape_56.setTransform(267.4,209.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB5gCQAAACAAAAQAAAygkAjQgjAkgyAAQgxAAgkgkQgkgjAAgyQAAAAAAgCQABgwAjgjQAkgkAxAAQAyAAAjAkQAjAjABAwg");
	this.shape_57.setTransform(214.1,209.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah2gbQAHghAagZQAkgkAxAAQAyAAAjAkQAjAjABAwQAAACAAAAQAAAygkAjQgjAkgyAAQgxAAgkgkQgkgjAAgyQAAAAAAgC");
	this.shape_58.setTransform(160.8,209.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah2gaQAHgiAagZQAkgkAxAAQAyAAAjAkQAjAjACAwQAAACAAAAQAAAyglAjQgjAkgyAAQgxAAgkgkQgkgjAAgyQAAAAAAgC");
	this.shape_59.setTransform(107.5,209.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#ED6B1A").ss(5,1,1).p("AB6gCQAAACAAAAQAAAyglAjQgjAkgyAAQgxAAgkgkQgkgjAAgyQAAAAAAgCAh2gaQAHghAagaQAkgkAxAAQAyAAAjAkQAbAaAHAi");
	this.shape_60.setTransform(54.2,209.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#ED6B1A").ss(5,1,1).p("Ah5gCQABgRAEgQQABgCABgCQAIgaAVgUQAkgkAxAAQAyAAAkAkQAjAjABAwQAAACAAAAQAAAygkAjQgkAkgyAAQgxAAgkgkQgkgjAAgyQAAAAAAgCg");
	this.shape_61.setTransform(0.9,209.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#ED6B1A").ss(5,1,1).p("Eg9aAFSIipAAIAAqjMB9OAADQB8gDAqAyQAOARAFAWIAAHJEg/yAB7MB89AAAQB8gDAqAyQABABAAAAQANAQAFAWEA6+AFSICNAAQDHAFgOiGEAqUAFSIEhAAEAypAFSIEhAAEAqRACaIADCfEAymACaIADCfEAuyACaIADCfEA3HACaIADCfEA67ACaIADCfAJAFSIEhAAQAAgNADgMIgDifAnoFSIEhAAAArFSIEhAAAZqFSIEhAAQAAgNADgMIgDifEAh/AFSIEhAAARVFSIEhAAQAAgNADgMIgDifAAoCaIADCfAjKCaIADCfAnrCaIADCfAI9CaIADCfAFJCaIADCfARSCaIADCfAZnCaIADCfEAmdACaIADCfEAh8ACaIADCfEgo8AFSIEhAAQAAgNADgMIgDifEgxUACbIAACfQAAABABACQACAKAAALIEhAAQAAgLACgKQAAgCABgCIgEifEg5mAFSIEhAAQAAgLACgLQAAAAAAgBQAAgBABgBIgDieAv9FSIEhAAEggnAFSIEhAAA4SFSIEhAAEg5pACPIAACdEgo8ACaIACCfA4SCaIADCfA8JCaIADCfEggnACaIADCfAz0CaIADCfArfCaIADCfAv9CaIADCfEg9XACPIAACd");
	this.shape_62.setTransform(381.9,175.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("EA5IABfIgMgJQgjgkAAgyIAAgCQABgwAigjQAkgjAzAAQAyAAAkAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgrAAQgrAAgggbgEAwyABfIgLgJQgkgkAAgyIAAgCQABgwAjgjQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgrAAQgrAAgggbgEAodABfIgLgJQgkgkAAgyIAAgCQABgwAjgjQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgrAAQgrAAgggbgEAgIABfIgLgJQgkgkAAgyIAAgCQABgNACgMQAIggAZgaQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgrAAQgrAAgggbgAXzBfIgLgJQgkgkAAgyIAAgCQABgNACgMQAIggAZgaQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgrAAQgrAAgggbgAPeBfIgLgJQgkgkAAgyIAAgCQABgNACgMQAIggAZgaQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgrAAQgrAAgggbgAHJBfIgLgJQgkgkAAgyIAAgCQABgwAjgjQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgrAAQgrAAgggbgAhKBfIgLgJQgkgkAAgyIAAgCQABgwAjgjQAkgjAxAAQAyAAAjAjQAjAjABAwIAAACQAAAygkAkIgLAJQggAbgqAAQgqAAgggbgApqBWQgkgkAAgyIAAgCQABgwAjgjQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkQgjAkgzAAQgyAAgkgkgAx/BWQgkgkAAgyIAAgCQABgwAjgjQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkQgjAkgzAAQgyAAgkgkgA6UBWQgkgkAAgyIAAgCQABgwAjgjQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkQgjAkgzAAQgyAAgkgkgEgipABWQgkgkAAgyIAAgCQABgNACgMQAHggAagaQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkQgjAkgzAAQgyAAgkgkgEgq+ABWQgkgkAAgyIAAgCQAAgKACgKIABgEQAHgiAagZQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkQgjAkgzAAQgyAAgkgkgEgzTABWQgkgkAAgyIAAgCQAAgLADgKIAAgCIAAgBQAHghAagaQAkgjAyAAQAzAAAjAjQAaAaAIAiIAAADQACAJAAALIAAACQAAAygkAkQgjAkgzAAQgyAAgkgkgEg7oABWQgkgkAAgyIAAgCQABgRAEgQIACgEQAIgaAVgUQAkgjAyAAQAzAAAjAjQAjAjABAwIAAACQAAAygkAkQgjAkgzAAQgyAAgkgkg");
	this.shape_63.setTransform(374,209.6);

	this.instance_20 = new lib.元件3();
	this.instance_20.setTransform(1025.8,345.1,0.885,0.885,-30,0,0,58.5,58.3);
	this.instance_20.alpha = 0.199;

	this.instance_21 = new lib.元件3();
	this.instance_21.setTransform(853.8,350.5,1.107,1.107,-30,0,0,58.4,58.1);
	this.instance_21.alpha = 0.25;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#ED6B1A").ss(5,1,1).p("EAo9AFSIkhAAQAAgNgDgMIADifEAgoAFSIkhAAAYTFSIkhAAEA9bAFSICpAAIAAqjMh9OAADQh8gDgqAyQgOARgFAWIAAHJEA5nAFSIkhAAQAAgLgCgLQAAAAAAgBQAAgBgBgBIADieEAxVACbIAACfQAAABgBACQgCAKAAALIkhAAQAAgLgCgKQAAgCgBgCIAEifAYTCaIgDCfAP+CaIgDCfAT1CaIgDCfEAgoACaIgDCfAcKCaIgDCfEAo9ACaIgCCfEA9YACPIAACdEA5qACPIAACdAo/FSIkhAAQAAgNgDgMIADifAxUFSIkhAAQAAgNgDgMIADifA5pFSIkhAAQAAgNgDgMIADifAHpFSIkhAAAgqFSIkhAAA5mCaIgDCfEgh7ACaIgDCfAxRCaIgDCfAgnCaIgDCfAlICaIgDCfAo8CaIgDCfAHsCaIgDCfADLCaIgDCfALgCaIgDCfAP+FSIkhAAEA/zAB7Mh89AAAQh8gDgqAyQgBABAAAAQgNAQgFAWEgqTAFSIkhAAEgyoAFSIkhAAEg69AFSIiNAAQjHAFAOiGEgylACaIgDCfEg66ACaIgDCfEg3GACaIgDCfEgmcACaIgDCfEguxACaIgDCfEgqQACaIgDCfEgh+AFSIkhAA");
	this.shape_64.setTransform(1533.9,173.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#ED6B1A").ss(5,1,1).p("Eg9aAFSIipAAIAAqjMB9OAADQB8gDAqAyQAOARAFAWIAAHJEg/yAB7MB89AAAQB8gDAqAyQABABAAAAQANAQAFAWEA6+AFSICNAAQDHAFgOiGEAqUAFSIEhAAEAypAFSIEhAAEAuyACaIADCfEAymACaIADCfEAqRACaIADCfEA67ACaIADCfEA3HACaIADCfAJAFSIEhAAQAAgNADgMIgDifAnoFSIEhAAAArFSIEhAAAZqFSIEhAAQAAgNADgMIgDifEAh/AFSIEhAAARVFSIEhAAQAAgNADgMIgDifAnrCaIADCfAjKCaIADCfAAoCaIADCfAFJCaIADCfAI9CaIADCfAZnCaIADCfARSCaIADCfEAh8ACaIADCfEAmdACaIADCfEgo8AFSIEhAAQAAgNADgMIgDifEgxUACbIAACfQAAABABACQACAKAAALIEhAAQAAgLACgKQAAgCABgCIgEifEg5mAFSIEhAAQAAgLACgLQAAAAAAgBQAAgBABgBIgDieAv9FSIEhAAEggnAFSIEhAAA4SFSIEhAAEg5pACPIAACdEgo8ACaIACCfEggnACaIADCfA8JCaIADCfA4SCaIADCfAv9CaIADCfArfCaIADCfAz0CaIADCfEg9XACPIAACd");
	this.shape_65.setTransform(381.9,175.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#ED6B1A").s().p("Ak1SMIgVlnQiBg3hthkIlLCWIiPjGID1kUQgxh9gHiOIleiCIAnjxIF5gWQA0h5BbhoIiZlUIDGiPIEWD3QB7gzCLgKICBlaIDxAnIAWFsQCCA0BvBhIFIiTICODGIjrEJQA5CFAJCYIFJB7IgnDxIleAUQg3CGhoByICPE/IjGCOIkGjpQiEA2iYAHIh7FLgAkNkRQh0B1AACiQAAClB0B0QB0B0CjAAQCkAAB1h0QB0h0AAilQAAiih0h1Qh1h0ikAAQijAAh0B0gAieCrQhFhFAAhhQAAhgBFhFQBFhFBfAAQBiAABFBFQBFBFAABgQAABhhFBFQhFBFhiAAQhfAAhFhFg");
	this.shape_66.setTransform(949.4,436.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#ED6B1A").s().p("Ag7HaIgbiLQg1gQgxghIh6BMIhDhHIBSh5QgagugLg4IiQghIAChfICTgdQAOgyAfguIhPh+IBGhCIB7BTQAugcA2gKIAhiQIBfADIAcCOQA2ANAxAhIB5hMIBCBGIhOB1QAeAxALA8ICIAgIgCBfIiJAZQgOA5gjAyIBJB2IhGBDIh0hPQgxAdg7AKIggCKgAgPiZQhBAJgoA0QgnAzAIA/QAJBBA0AoQA0AoA/gKQBBgIAng0QAog0gJg+QgIhCg1gnQgqghgzAAQgJAAgMACg");
	this.shape_67.setTransform(1103.7,367.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#ED6B1A").s().p("AiZHjIgCiXQg0gagtgsIiOA3Ig4hWIBthvQgSg1gBg9IiPg8IAVhlICfgCQAYgwApgrIg6iSIBWg4IBwBuQA1gTA6AAIA9iQIBkAVIADCaQA1AYAsAsICNg4IA4BXIhoBrQAVA5AABAICIA5IgVBlIiUAAQgZA4gvAuIA2CJIhVA4IhrhoQg4AUg/gBIg7CJgAhrh3QgzAugEBFQgCBDAuA0QAuAzBGADQBCAEA0gvQA0guADhFQAEhDgwgzQgug1hFgDIgIAAQg+AAgxAsg");
	this.shape_68.setTransform(1000.5,270.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ED6B1A").s().p("AhwETIAHhXQgegTgZgbIhVAZIgdg1IBFg8QgJggADgiIhSgrIASg6IBeAHQAPgcAagYIgbhYIA1gdIA9BGQAggJAgACIAshRIA5ARIgFBbQAeAQAZAcIBUgaIAeA1IhDA6QAKAjgDAjIBOAqIgRA5IhXgGQgSAggdAYIAZBTIg1AdIg5hCQgjAJgjgCIgpBNgAg5hLQggAZgFApQgFAmAZAhQARAVAXAJQAMAFAOACQAYADAXgKQAMgEAMgJQAfgZAFgpQAGgmgZggQgZghgogFIgNgBQgfAAgcAVg");
	this.shape_69.setTransform(868.4,286);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#ED6B1A").s().p("AAdFsQg4ADg9gPIhfB2IhbgwIAniVQgqglgfg0IibASIgfhhICHhRQgCg0AOg5Ih7hiIAvhbICWAoQAmgsAygdIgRibIBggfIBPCEQA4gHA8AQIBeh1IBcAuIgmCQQAvAmAhA4ICSgQIAgBgIh/BLQAFA6gRA/IBzBdIgvBaIiPglQgnAtg3AgIAQCUIhhAggAhGiTQg9AggVBBQgVBAAfA+QAgA8BBAXQA/AUA+gfQA9ggAWhCQAWhAggg8Qgfg9hCgWQgbgJgbAAQgkAAgkATg");
	this.shape_70.setTransform(785.5,333.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_63},{t:this.shape_65},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_64},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_21},{t:this.instance_20}]},390).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhADgC5QAFgWAOgRQApgyB9ADMB9OAAAIAAHJMh9OAAAQh9gDgpAyIgBABQgNAQgFAWg");
	var mask_graphics_390 = new cjs.Graphics().p("EhADgC5QAFgWAOgRQApgyB9ADMB9OAAAIAAHJMh9OAAAQh9gDgpAyIgBABQgNAQgFAWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1533.8,y:417.8}).wait(390).to({graphics:mask_graphics_390,x:1533.8,y:417.8}).wait(1));

	// 传送带 复制
	this.instance_22 = new lib.补间1("synched",0);
	this.instance_22.setTransform(2741.8,162.8);

	this.instance_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({x:1439.8},390).wait(1));

	// 遮罩 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EA/yADqIgBgBQgpgyh9ADMh9OAAAIAAnJMB9OAAAQB9gDApAyQAOARAFAWIAAHJQgFgVgNgRg");
	var mask_1_graphics_390 = new cjs.Graphics().p("EA/yADqIgBgBQgpgyh9ADMh9OAAAIAAnJMB9OAAAQB9gDApAyQAOARAFAWIAAHJQgFgVgNgRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:381.9,y:419.9}).wait(390).to({graphics:mask_1_graphics_390,x:381.9,y:419.9}).wait(1));

	// 传送带
	this.instance_23 = new lib.补间1("synched",0);
	this.instance_23.setTransform(-31.5,164.6);

	this.instance_23.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({x:1037.5},390).wait(1));

	// 透明度
	this.instance_24 = new lib.元件5();
	this.instance_24.setTransform(960,323.7,1.001,1,0,0,0,959.5,115);
	this.instance_24.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(391));

	// 软件图标
	this.instance_25 = new lib.index();
	this.instance_25.setTransform(1295.9,233.3,0.069,0.069);

	this.instance_26 = new lib.PS();
	this.instance_26.setTransform(413.5,233.3,0.167,0.167);

	this.instance_27 = new lib.PR();
	this.instance_27.setTransform(1720,336.2,0.106,0.106);

	this.instance_28 = new lib.FL();
	this.instance_28.setTransform(1462.3,240.3,0.14,0.14);

	this.instance_29 = new lib.DW();
	this.instance_29.setTransform(637.2,321.9,0.084,0.084);

	this.instance_30 = new lib.AI();
	this.instance_30.setTransform(119.9,308.1,0.147,0.147);

	this.instance_31 = new lib.AE();
	this.instance_31.setTransform(1207.8,319.8,0.143,0.143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(391));

	// 图片
	this.instance_32 = new lib.元件7();
	this.instance_32.setTransform(960,323.8,1,1,0,0,0,960,115.6);
	this.instance_32.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_32.cache(-2,-2,1924,235);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(391));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(929.3,95.2,1977.2,741.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;