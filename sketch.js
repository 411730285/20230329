let points = [[3,3],[5,-1],[6,-2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]]

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 4;
      }
    }
    translate(width/2, height/2);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#22223b");
      let c2 = color("#8e9aaf");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(4)
      line(points[i][0]+mouseX/100, points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(630, 303);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#22223b");
      let c2 = color("#8e9aaf");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(5)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(620, 278);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#22223b");
      let c2 = color("#8e9aaf");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(6)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(608, 250);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#22223b");
      let c2 = color("#8e9aaf");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(7)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()
  push()
    for (let i = 0; i < points.length; i++) {
      for (let j = 0; j < points[i].length; j++) {
          points[i][j] = points[i][j] * 1.1;
      }
    }
    translate(595, 217);
    scale(1, -1);
    for (let i = 0; i < points.length-1; i++) {
      let c1 = color("#22223b");
      let c2 = color("#8e9aaf");
      let gradientColor = lerpColor(c1, c2, i/(points.length-2));
      stroke(gradientColor);
      strokeWeight(8)
      line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
    }
  pop()  
  textFont("Gaegu")
  textSize(50)
  text("BAT",560,450)
  textSize(35)
  text("411730285 陳亮頤",480,500)
  strokeWeight(2)
  line(400,433,555,433)
  line(660,433,800,433)
  line(400,100,400,433)
  line(800,100,800,433)
  line(400,100,800,100)
}
