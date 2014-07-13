﻿//Strange snippet that lets you name the new Adjustment Layer before it's created//CC-BY Nik Ska, 2014var newAdj = this;newAdj.makeNewAdj = function(_name){    var activeComp = app.project.activeItem;    var newName = _name || "New Adjustment Layer";    if(activeComp && activeComp instanceof CompItem){        var newAdj = activeComp.layers.addSolid([1,1,1], newName, activeComp.width, activeComp.height, activeComp.pixelAspect, activeComp.duration);        newAdj.label = 5;        newAdj.adjustmentLayer = true;        newAdj.moveToBeginning();    }}newAdj.run = function(){    this.buildGUI(this);}newAdj.buildGUI = function(thisObj){    thisObj.w = (thisObj instanceof Panel) ? thisObj : new Window("palette", "New Adjustment Layer", undefined, {resizeable:true});    thisObj.w.alignChildren = ['left', 'top']    var g = thisObj.w.add("group{orientation:'column', alignChildren: ['left', 'top']}");    g.add("staticText", undefined, "Set the name and hit Enter");    var nameEdit = g.add("editText", undefined, "");    nameEdit.size = [140, 25];    nameEdit.onEnterKey = function(){        thisObj.makeNewAdj(nameEdit.text);    }    if (thisObj.w instanceof Window){        thisObj.w.center();        thisObj.w.show();    }    else thisObj.w.layout.layout(true);}newAdj.run();