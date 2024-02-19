
let points=[[1,-3],[5,-4],[4,-3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],
[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3] ]

function setup() {
  createCanvas(windowWidth, windowHeight);
  lengthstep=30
  for(let i=0;i<points.length;i++){
    for(let j=0;j<points.length;j++){
      points[i][j]=points[i][j]*lengthstep
    }
  }
}

function draw() {
  background("#fff321");
  translate(windowWidth/2,windowHeight/2)
  stroke("#960018")
  fill("#960018")
  strokeWeight(5)
  scale(1,-1)
  for(let i=0;i<points.length-1;i++){
   line(points[i][0],points[i][1],points[i+1][0],points[i+1][1]);
   ellipse(points[i][0],points[i][1],5)
  }
  line(points[points.length-1][0],points[points.length-1][1],points[0],[0],points[0][1]);
}
