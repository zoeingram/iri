



if (annyang) {
//
//   x = 150;
//   y = 150;
//   r = 100;
//
//   var commands = {
//     'start': function(){
//        s = Snap("#canvas");
//     },
//     'circle': function() {
//       console.log("circle");
//       bigCircle = s.circle(x, y, r);
//     },
//     'bigger': function() {
//         bigCircle.attr({
//           r: r +=10
//         });
//       },
//     'smaller': function() {
//       bigCircle.attr({
//         r: r -=10
//       });
//     },
//     'move left': function() {
//       bigCircle.attr({
//         cx: x -=10
//       });
//     },
//     'move right': function() {
//       bigCircle.attr({
//         cx: x +=10
//       });
//     },
//     'move up': function() {
//       bigCircle.attr({
//         cy: y -=10
//       });
//     },
//     'move down': function() {
//       bigCircle.attr({
//         cy: y -=10
//       });
//     },
//     'smaller': function() {
//       bigCircle.attr({
//         r: 50
//       });
//     },
//     'fill red': function() {
//       bigCircle.attr({
//        fill: "red",
//      });
//    },
//    'fill blue': function() {
//      bigCircle.attr({
//       fill: "blue",
//     });
//   },
//    'fill green': function() {
//      bigCircle.attr({
//       fill: "green",
//     });
//   }
//
//
//   };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening
  annyang.start();
}
