(function(){
  angular
  .module('getting-started')
  .factory('vexflow' , ['$document', function(docLite){
    return function(){

      var VF = Vex.Flow;
      // Create an SVG renderer and attach it to the DIV element named "boo".

      var doc = docLite[0];
      var div = doc.getElementById('boo');
      var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

      // Configure the rendering context.
      renderer.resize(500, 500);
      var context = renderer.getContext();
      context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

      // Create a stave of width 400 at position 10, 40 on the canvas.
      var stave = new VF.Stave(10, 40, 400);

      // Add a clef and time signature.
      stave.addClef('treble').addTimeSignature('4/4');

      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();

      var notes = [
        new VF.StaveNote({ keys: ["e##/5"], duration: "8d" }).
            addAccidental(0, new VF.Accidental("##")).addDotToAll(),
        new VF.StaveNote({ keys: ["b/4"], duration: "16" }).
          addAccidental(0, new VF.Accidental("b")),
        new VF.StaveNote({ keys: ["c/4"], duration: "8" }),
        new VF.StaveNote({ keys: ["d/4"], duration: "16" }),
        new VF.StaveNote({ keys: ["d/4"], duration: "16" }),
        new VF.StaveNote({ keys: ["d/4"], duration: "q" }),
        new VF.StaveNote({ keys: ["d/4"], duration: "q" })
      ];

      var beams = VF.Beam.generateBeams(notes);
      VF.Formatter.FormatAndDraw(context, stave, notes);
      beams.forEach(function(b) {b.setContext(context).draw()})

      var ties = [
        new VF.StaveTie({
          first_note: notes[4],
          last_note: notes[5],
          first_indices: [0],
          last_indices: [0]
        }),
        new VF.StaveTie({
          first_note: notes[5],
          last_note: notes[6],
          first_indices: [0],
          last_indices: [0]
        })
      ];
      ties.forEach(function(t) {t.setContext(context).draw()})
    }
  }]);

})();
