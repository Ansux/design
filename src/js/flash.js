var canvas, stage, exportRoot;
function init() {
   // --- write your JS code here ---

   canvas = document.getElementById("canvas");
   images = images||{};
   ss = ss||{};

   var loader = new createjs.LoadQueue(false);
   loader.addEventListener("fileload", handleFileLoad);
   loader.addEventListener("complete", handleComplete);
   loader.loadFile({src:"images/index_atlas_.json", type:"spritesheet", id:"index_atlas_"}, true);
   loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
   if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
   var queue = evt.target;
   ss["index_atlas_"] = queue.getResult("index_atlas_");
   exportRoot = new lib.index();

   stage = new createjs.Stage(canvas);
   stage.addChild(exportRoot);
   stage.update();

   createjs.Ticker.setFPS(lib.properties.fps);
   createjs.Ticker.addEventListener("tick", stage);
}