echo(version=version());

include <roundedcube.scad>

$fn = 25;
// simple 2D -> 3D extrusion of a rectangle

// base


// OuterBox

unit = 2.54;

h = 13;             // pin header = 12mm + 1mm spacer
pin_h = 8;          // plastic encased part of pin header
case_radius = 1;

wall = unit * 2;

part_per_row = 9;
part_length = 4 * unit;
part_width = unit;
row_length = part_length * 9;

a = unit + row_length + unit;
b = part_length * 7;



    
difference() {
  color("Blue")
  
  // Main Case
  roundedcube([a, b, h], true, case_radius, "z");
  
  // Bottom Diff
  translate([0, 0, -pin_h]) { 
    cube([a-wall, b-wall, h], true);
  }
  
  // Long Rows x9
  for ( i = [0:1:2]) { // loop 
    y = unit + unit/2 + unit*3*i;
    translate([0, y, 0]) { 
      cube([row_length, unit, h+1], true);
    }
    translate([0, -y, 0]) { 
      cube([row_length, unit, h+1], true);
    }
  }
  
  // Top Short Rows, x2
  translate([-part_length*3.5, unit*10.5, 0]) { 
    cube([part_length*2, unit, h+1], true);
  }
  translate([part_length*3.5, unit*10.5, 0]) { 
    cube([part_length*2, unit, h+1], true);
  }

  // Vertical Connecting Pins
  dist = unit*11;
  translate([0, dist, 0]) { 
    cube([part_width*12, part_length, h+1], true);
  }
  translate([0, -dist, 0]) { 
    cube([part_width*12, part_length, h+1], true);
  }
  
  
  c(a/2, unit*9);
  c(a/2, -unit*9);
  
  mirror([1,0,0]) c(a/2, unit*9);
  
  mirror([1,0,0]) c(a/2, -unit*9);
  
  rotate([0,0,90]) c(b/2, b/2);
  
  rotate([0,0,90]) c(b/2, -b/2);
  
  rotate([0,0,90]) mirror([1,0,0]) c(b/2, b/2);
  
  rotate([0,0,90]) mirror([1,0,0]) c(b/2, -b/2);

}

 
 
  



module c(x, y) {
  translate([x, y, -pin_h]) {
    translate([-unit/2, 0, 0]) { 
      cube([unit, unit/2, h], true);
      translate([-unit/4, 0, 0]) { 
        cube([unit, unit*2, h], true);
      }
    }
  }
}





// Board Connectors










