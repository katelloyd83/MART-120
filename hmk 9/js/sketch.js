function setup() 
{
    createCanvas(500, 600);

 }
 
 function draw()
{
     background(120, 45, 78);
     fill(255, 204, 0);
     circle(250,100,175)

     fill(0,255,255);
     rect(175,75,50,25);  
     
     fill(0,255,255);
     rect(275,75,50,25);
     
     fill(70,130,180);
     square(230,90,40);

     fill(75,0,130)
     ellipse(252,160,70,20);

     fill(0,0,0)
     strokeWeight(10)
     point(300, 150);
     
     fill(255,20,147)
     triangle(30, 75, 58, 20, 86, 75);
     
     fill(0,0,0)
     textSize(32);
     text('Triangles are hard!', 100, 300);

     fill(0,255,255)
     textSize(32);
     text('By Kate Lloyd', 250, 500);


}