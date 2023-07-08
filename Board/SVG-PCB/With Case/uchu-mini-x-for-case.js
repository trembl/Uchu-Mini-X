/* 
@version: v1.0
@author: Georg Tremmel
@repository: https://github.com/trembl/Uchu-Mini-X
@title: Uchu Mini-X, Version for Case
*/

/* -- CONSTANTS -- */
const case_width = 3.80;
const case_height = 2.80;


/* -- HELPER FUNCTIONS -- */
const mm_to_inch = inch => inch/25.4

/* -- DECLARE_PCB -- */
const board = new PCB();

/* -- DECLARE_COMPONENTS -- */

/* -- Single Drill Hole -- */
const Drill_Hole = function() {
  var d = 0.100
  var d_hole = `M -${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 -${d} 0`
  return {
    hole: {"pos":[0,0],"shape":d_hole,"layers":["drill"]}
  }  
}()

/* -- 4 Pin Header -- */
const Pin_Header_4 = function() {
  var d = mm_to_inch(0.5)
  const d_pad = "M -0.15 0.04 L 0.15 0.04 L 0.15 -0.04 L -0.15 -0.04 L -0.15 0.04"
  const p1 = "M -0.04 0.04 L 0.04 0.04 L 0.04 -0.04 L -0.04 -0.04 L -0.04 0.04"
  var h = `M -${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 -${d} 0`
  d = 0.04
  var px = `M -${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 -${d} 0`
  return {
    "1": {"pos":[-0.15,0],"shape":px,"layers":["F.Cu"]},
    "2": {"pos":[-0.05,0],"shape":px,"layers":["F.Cu"]},
    "3": {"pos":[0.05,0],"shape":px,"layers":["F.Cu"]},
    "4": {"pos":[0.15,0],"shape":px,"layers":["F.Cu"]},
    p1: {"pos":[0,0],"shape":d_pad,"layers":["F.Cu"]},
    h1: {"pos":[-0.15,0],"shape":h,"layers":["drill"]},
    h2: {"pos":[-0.05,0],"shape":h,"layers":["drill"]},
    h3: {"pos":[0.05,0],"shape":h,"layers":["drill"]},
    h4: {"pos":[0.15,0],"shape":h,"layers":["drill"]}
  }  
}()

/* -- 3 Pin Header -- */
const Pin_Header_3 = function() {
  var d = mm_to_inch(0.5) // 0.5
  const d_pad = "M -0.10 0.04 L 0.10 0.04 L 0.10 -0.04 L -0.10 -0.04 L -0.10 0.04"
  const p1 = "M -0.04 0.04 L 0.04 0.04 L 0.04 -0.04 L -0.04 -0.04 L -0.04 0.04"
  var h = `M -${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 -${d} 0`
  d = 0.04; // 0.04
  var px = `M -${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 -${d} 0`
  return {
    "1": {"pos":[-0.1,0],"shape":px,"layers":["F.Cu"]},
    "2": {"pos":[-0,0],"shape":px,"layers":["F.Cu"]},
    "3": {"pos":[0.1,0],"shape":px,"layers":["F.Cu"]},
    p1: {"pos":[0,0],"shape":d_pad,"layers":["F.Cu"]},
    h1: {"pos":[-0.1,0],"shape":h,"layers":["drill"]},
    h2: {"pos":[-0,0],"shape":h,"layers":["drill"]},
    h3: {"pos":[0.1,0],"shape":h,"layers":["drill"]},
  }  
}()


/* --- Conntection Header -- */
const Conn_Header = function() {
  var d = mm_to_inch(0.5)
  const d_pad = "M -0.15 0.04 L 0.15 0.04 L 0.15 -0.04 L -0.15 -0.04 L -0.15 0.04"
  const p1 = "M -0.04 0.04 L 0.04 0.04 L 0.04 -0.04 L -0.04 -0.04 L -0.04 0.04"
  var h = `M -${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 -${d} 0`
  d = 0.04
  var px = `M -${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 ${d} 0 A ${d} ${d} 90 0 0 -${d} 0`
  return {
    "1": {"pos":[-0.20,0],"shape":px,"layers":["F.Cu"]},
    "2": {"pos":[-0.10,0],"shape":px,"layers":["F.Cu"]},
    "3": {"pos":[0.00,0],"shape":px,"layers":["F.Cu"]},
    "4": {"pos":[0.10,0],"shape":px,"layers":["F.Cu"]},
    "5": {"pos":[0.20,0],"shape":px,"layers":["F.Cu"]},
    h1: {"pos":[-0.20,0],"shape":h,"layers":["drill"]},
    h2: {"pos":[-0.10,0],"shape":h,"layers":["drill"]},
    h3: {"pos":[0.00,0],"shape":h,"layers":["drill"]},
    h4: {"pos":[0.10,0],"shape":h,"layers":["drill"]},
    h5: {"pos":[0.20,0],"shape":h,"layers":["drill"]}
   }  
}()

/* -- ADD_COMPONENTS -- */

var addPinHeaders = function() {
  var x_spacer = 0.4
  var x_start = -1.6
  var y_spacer = 0.3
  var y_start = -0.75
  // 9x6
  for (var i=0; i<9; i++) {
    for (var j=0; j<6; j++) {
      var translate = pt(x_start+i*x_spacer, y_start+j*y_spacer)
      board.add(Pin_Header_4, {translate})
    }
  }
  // top rows
  board.add(Pin_Header_4, {translate:pt(-1.6, 1.05)})
  board.add(Pin_Header_4, {translate:pt(-1.2, 1.05)})
  board.add(Pin_Header_4, {translate:pt(1.6, 1.05)})
  board.add(Pin_Header_4, {translate:pt(1.2, 1.05)})
  // vertical
  var k_start = -0.55
  var k_spacer = 0.100
  for (var k=0; k<12; k++) {
    board.add(Pin_Header_4, {translate:pt(k_start+k*k_spacer, 1.10), rotate:90})
  }
}()

const conn1 = board.add(Conn_Header, {translate:pt(-0.85, -1.05), rotate:0})

const p2_n = board.add(Pin_Header_3, {translate:pt(-0.55, -1.15), rotate:90})
const p2_s = board.add(Pin_Header_3, {translate:pt(-0.55+0.1, -1.15), rotate:90})
const p2_h = board.add(Pin_Header_3, {translate:pt(-0.55+0.2, -1.15), rotate:90})
const plus = board.add(Pin_Header_3, {translate:pt(-0.55+0.3, -1.15), rotate:90})
const minus = board.add(Pin_Header_3, {translate:pt(-0.55+0.4, -1.15), rotate:90})

board.add(Pin_Header_4, {translate:pt(-0.55+0.5, -1.10), rotate:90})
board.add(Pin_Header_4, {translate:pt(-0.55+0.6, -1.10), rotate:90})

const p1_n = board.add(Pin_Header_3, {translate:pt(-0.55+0.7, -1.15), rotate:90})
const p1_s = board.add(Pin_Header_3, {translate:pt(-0.55+0.8, -1.15), rotate:90})
const p1_h = board.add(Pin_Header_3, {translate:pt(-0.55+0.9, -1.15), rotate:90})
const speaker1 = board.add(Pin_Header_3, {translate:pt(-0.55+1.0, -1.15), rotate:90})
const speaker2 = board.add(Pin_Header_3, {translate:pt(-0.55+1.1, -1.15), rotate:90})

const conn2 = board.add(Conn_Header, {translate:pt(0.85, -1.05), rotate:0})




/* -- Mounting Holes -- */
var addMountingHoles = function() {
  const a = 0.4;
  const b = 0.5;
  board.add(Drill_Hole, {translate:pt(0, 0)})
  board.add(Drill_Hole, {translate:pt(-case_width/2+a, case_height/2-b)})
  board.add(Drill_Hole, {translate:pt(case_width/2-a, case_height/2-b)})
  board.add(Drill_Hole, {translate:pt(-case_width/2+a, -case_height/2+b)})
  board.add(Drill_Hole, {translate:pt(case_width/2-a, -case_height/2+b)})
}()



/* -- ADD_WIRES -- */

const wire = 0.023;

const type = "chamfer"; // or "fillet", "chamfer"
const r = 0.24;

board.wire(path(
  p2_n.pad("2"),
  pt(p2_n.padX("2"), conn1.padY("5")),
  conn1.pad("5"),
), wire)

board.wire(path(
  speaker2.pad("2"),
  pt(speaker2.padX("2"), conn2.padY("1")),
  conn2.pad("1"),
), wire)


var o = 0.070;
board.wire(path(
  p2_s.pad("3"),
  [type, r, pt(p2_s.padX("3"), p2_s.padY("3")+o)],
  [type, r, pt(conn1.padX("4"), p2_s.padY("3")+o)],
  conn1.pad("4"),
), wire)

board.wire(path(
  speaker1.pad("3"),
  [type, r, pt(speaker1.padX("3"), speaker1.padY("3")+o)],
  [type, r, pt(conn2.padX("2"), speaker1.padY("3")+o)],
  conn2.pad("2"),
), wire)


o = 0.120
board.wire(path(
  p2_h.pad("3"),
  [type, r, pt(p2_h.padX("3"), p2_h.padY("3")+o)],
  [type, r, pt(conn1.padX("3"), p2_h.padY("3")+o)],
  conn1.pad("3"),
), wire)

board.wire(path(
  p1_h.pad("3"),
  [type, r, pt(p1_h.padX("3"), p1_h.padY("3")+o)],
  [type, r, pt(conn2.padX("3"), p1_h.padY("3")+o)],
  conn2.pad("3"),
), wire)



o = 0.170
board.wire(path(
  plus.pad("3"),
  [type, r, pt(plus.padX("3"), plus.padY("3")+o)],
  [type, r, pt(conn1.padX("2"), plus.padY("3")+o)],
  conn1.pad("2"),
), wire)

board.wire(path(
  p1_s.pad("3"),
  [type, r, pt(p1_s.padX("3"), p1_s.padY("3")+o)],
  [type, r, pt(conn2.padX("4"), p1_s.padY("3")+o)],
  conn2.pad("4"),
), wire)


o = 0.220;
board.wire(path(
  minus.pad("3"),
  [type, r, pt(minus.padX("3"), minus.padY("3")+o)],
  [type, r, pt(conn1.padX("1"), minus.padY("3")+o)],
  conn1.pad("1"),
), wire)

board.wire(path(
  p1_n.pad("3"),
  [type, r, pt(p1_n.padX("3"), p1_n.padY("3")+o)],
  [type, r, pt(conn2.padX("5"), p1_n.padY("3")+o)],
  conn2.pad("5"),
), wire)

/* -- RENDER_PCB -- */

const limit0 = pt(-case_width/2, -case_height/2);
const limit1 = pt(case_width/2, case_height/2);
const xMin = Math.min(limit0[0], limit1[0]);
const xMax = Math.max(limit0[0], limit1[0]);
const yMin = Math.min(limit0[1], limit1[1]);
const yMax = Math.max(limit0[1], limit1[1]);

const addInterior = function(b) {
  var fillet_size = mm_to_inch(2.0)
  var pad = 0.1 + 0.010;
  var p = pt(xMin+pad, yMin+(yMax-yMin)/2)
  let interior = path(
    p,
    ["fillet", fillet_size, pt(xMin+pad, yMax-pad)],
    ["fillet", fillet_size, pt(xMax-pad, yMax-pad)],
    ["fillet", fillet_size, pt(xMax-pad, yMin+pad)],
    ["fillet", fillet_size, pt(xMin+pad, yMin+pad)],
    p,
  )
  b.addShape("interior", interior);
}
addInterior(board)

renderPCB({
  pcb: board,
  layerColors: {
    "interior": "#ff40ffc9",
    //"B.Cu": "#0433ffff",
    "F.Cu": "#5e30ebff",
    "drill": "#fffb00bf",
    //"padLabels": "#ffff99e5",
    //"componentLabels": "#00e5e5e5",
  },
  limits: {
    x: [xMin, xMax],
    y: [yMin, yMax]
  },
  mm_per_unit: 25.4
});

