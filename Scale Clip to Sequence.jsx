function scaleClipToSequence(clip) {
    
    var sequence = app.project.activeSequence;
    var clipWidth = 1920;
    var clipHeight = 1080;
    var myScale = 100;
    //clip.scaleToFrameSize = true;
    var x = sequence.frameSizeHorizontal / clipWidth * 100;
    var y = sequence.frameSizeVertical / clipHeight * 100;
    
    clip.components[1].properties[3].setValue(false, true);
    clip.components[1].properties[1].setValue(y, true);
    clip.components[1].properties[2].setValue(x, true);
    }