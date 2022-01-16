
let a01zemin,a02zemin,a03sırt,a04bacak,a05ayak,a06gövde,a07kafa,a08yüz,a09saç;

function preload() {
  // a01zemin = loadImage("./awful_champs/01zemin/"+int(map(fxrand(),0,1,1,9))+".png");
  // ---------------------------------------------------------------------------------
  e11 = loadImage("./00/1/"+int(map(fxrand(),0,1,1,9))+".png");
  e21 = loadImage("./00/2/"+int(map(fxrand(),0,1,1,9))+".png");
  e31 = loadImage("./00/3/"+int(map(fxrand(),0,1,1,13))+".png");
  e41 = loadImage("./00/4/"+int(map(fxrand(),0,1,1,13))+".png");
  e51 = loadImage("./00/5/"+int(map(fxrand(),0,1,1,9))+".png");
  e61 = loadImage("./00/6/"+int(map(fxrand(),0,1,2,50))+".png");
  e71 = loadImage("./00/7/"+int(map(fxrand(),0,1,1,17))+".png");
  e81 = loadImage("./00/8/"+int(map(fxrand(),0,1,1,19))+".png");
  e91 = loadImage("./00/9/"+int(map(fxrand(),0,1,1,21))+".png");
  
  
  deck=0
  main=0
  //kartkenar
  gold=10
  silver=20
  bronz=30
  copper=40
  kRan=int(map(fxrand(),0,1,0,100))
	// print(kRan)
  if (kRan >= 0 && kRan <= 10) {
  //gold
  k11 = loadImage("./00/kart/1/2"+".png");
  deck+=1
}
  if (kRan >= 10 && kRan <= 30) {
  //silver
  k11 = loadImage("./00/kart/1/3"+".png");
  deck+=2
}
  if (kRan >= 30 && kRan <= 60) {
  //bronz
  k11 = loadImage("./00/kart/1/1"+".png");
  deck+=3
}
  if (kRan >= 60 && kRan <= 100) {
  //copper
  k11 = loadImage("./00/kart/1/4"+".png");
  deck+=4
}
  deck=0
  
    kRan=int(map(fxrand(),0,1,0,100))
	  
  if (kRan >= 0 && kRan <= 10) {
  //gold
  k12 = loadImage("./00/kart/1/2"+".png");
  deck+=1
}
  if (kRan >= 10 && kRan <= 30) {
  //silver
  k12 = loadImage("./00/kart/1/3"+".png");
  deck+=2
}
  if (kRan >= 30 && kRan <= 60) {
  //bronz
  k12 = loadImage("./00/kart/1/1"+".png");
  deck+=3
}
  if (kRan >= 60 && kRan <= 100) {
  //copper
  k12 = loadImage("./00/kart/1/4"+".png");
  deck+=4
}

  kRan=int(map(fxrand(),0,1,0,100))
	  
  if (kRan >= 0 && kRan <= 10) {
  //gold
  k13 = loadImage("./00/kart/1/2"+".png");
  deck+=1
}
  if (kRan >= 10 && kRan <= 30) {
  //silver
  k13 = loadImage("./00/kart/1/3"+".png");
  deck+=2
}
  if (kRan >= 30 && kRan <= 60) {
  //bronz
  k13 = loadImage("./00/kart/1/1"+".png");
  deck+=3
}
  if (kRan >= 60 && kRan <= 100) {
  //copper
  k13 = loadImage("./00/kart/1/4"+".png");
  deck+=4
}

  kRan=int(map(fxrand(),0,1,0,100))
	  
  if (kRan >= 0 && kRan <= 10) {
  //gold
  k14 = loadImage("./00/kart/1/2"+".png");
  deck+=1
  main+=1
}
  if (kRan >= 10 && kRan <= 30) {
  //silver
  k14 = loadImage("./00/kart/1/3"+".png");
  deck+=2
  main+=2
}
  if (kRan >= 30 && kRan <= 60) {
  //bronz
  k14 = loadImage("./00/kart/1/1"+".png");
  deck+=3
  main+=3
}
  if (kRan >= 60 && kRan <= 100) {
  //copper
  k14 = loadImage("./00/kart/1/4"+".png");
  deck+=4
  main+=4
}
  // print(deck/40)
  // print(main/10)
 
  if (main >= 1 && main <= 2) {
	  mainR="gold"
  }
  if (main >=2 && main <= 3) {
	   mainR="silver"
  }
  if (main >= 3 && main <= 4) {
	   mainR="bronze"
  }
  if (main >=4 && main <= 5) {
	   mainR="copper"
  }
  
    // if (deck/4 >= 0.5 && deck/4 <= 1.5) {
	  // deckR="gold"
  // }
  // if (deck/4 >= 1.5 && deck/4 <= 2.5) {
	   // deckR="silver"
  // }
  // if (deck/4 >= 2.5 && deck/4 <= 3.5) {
	   // deckR="bronze"
  // }
  // if (deck/4 >=3.5 && deck/4 <= 4.5) {
	   // deckR="copper"
  // }
  // print(deck,deck/4)
  print(main)
   // print("deck rarity:"+deckR)
  print("main card rarity:"+mainR)
  
  
  // k11 = loadImage("./00/kart/1/"+int(map(fxrand(),0,1,1,5))+".png");
  k21 = loadImage("./00/kart/2/"+int(map(fxrand(),0,1,1,4))+".png");
  k31 = loadImage("./00/kart/3/"+int(map(fxrand(),0,1,1,5))+".png");
  // ---------------------------------------------------------------------------------
    e12 = loadImage("./00/1/"+int(map(fxrand(),0,1,1,9))+".png");
  e22 = loadImage("./00/2/"+int(map(fxrand(),0,1,1,9))+".png");
  e32 = loadImage("./00/3/"+int(map(fxrand(),0,1,1,13))+".png");
  e42 = loadImage("./00/4/"+int(map(fxrand(),0,1,1,13))+".png");
  e52 = loadImage("./00/5/"+int(map(fxrand(),0,1,1,9))+".png");
  e62 = loadImage("./00/6/"+int(map(fxrand(),0,1,2,50))+".png");
  e72 = loadImage("./00/7/"+int(map(fxrand(),0,1,1,17))+".png");
  e82 = loadImage("./00/8/"+int(map(fxrand(),0,1,1,19))+".png");
  e92 = loadImage("./00/9/"+int(map(fxrand(),0,1,1,21))+".png");
  
  //kartkenar
  // k12 = loadImage("./00/kart/1/"+int(map(fxrand(),0,1,1,5))+".png");
  k22 = loadImage("./00/kart/2/"+int(map(fxrand(),0,1,1,4))+".png");
  k32 = loadImage("./00/kart/3/"+int(map(fxrand(),0,1,1,5))+".png");
  // ---------------------------------------------------------------------------------
    e13 = loadImage("./00/1/"+int(map(fxrand(),0,1,1,9))+".png");
  e23 = loadImage("./00/2/"+int(map(fxrand(),0,1,1,9))+".png");
  e33 = loadImage("./00/3/"+int(map(fxrand(),0,1,1,13))+".png");
  e43 = loadImage("./00/4/"+int(map(fxrand(),0,1,1,13))+".png");
  e53 = loadImage("./00/5/"+int(map(fxrand(),0,1,1,9))+".png");
  e63 = loadImage("./00/6/"+int(map(fxrand(),0,1,2,50))+".png");
  e73 = loadImage("./00/7/"+int(map(fxrand(),0,1,1,17))+".png");
  e83 = loadImage("./00/8/"+int(map(fxrand(),0,1,1,19))+".png");
  e93 = loadImage("./00/9/"+int(map(fxrand(),0,1,1,21))+".png");
  
  //kartkenar
  // k13 = loadImage("./00/kart/1/"+int(map(fxrand(),0,1,1,5))+".png");
  k23 = loadImage("./00/kart/2/"+int(map(fxrand(),0,1,1,4))+".png");
  k33 = loadImage("./00/kart/3/"+int(map(fxrand(),0,1,1,5))+".png");
  
  // ---------------------------------------------------------------------------------
    e14 = loadImage("./00/1/"+int(map(fxrand(),0,1,1,9))+".png");
  e24 = loadImage("./00/2/"+int(map(fxrand(),0,1,1,9))+".png");
  e34 = loadImage("./00/3/"+int(map(fxrand(),0,1,1,13))+".png");
  e44 = loadImage("./00/4/"+int(map(fxrand(),0,1,1,13))+".png");
  e54 = loadImage("./00/5/"+int(map(fxrand(),0,1,1,9))+".png");
  e64 = loadImage("./00/6/"+int(map(fxrand(),0,1,2,50))+".png");
  e74 = loadImage("./00/7/"+int(map(fxrand(),0,1,1,17))+".png");
  e84 = loadImage("./00/8/"+int(map(fxrand(),0,1,1,19))+".png");
  e94 = loadImage("./00/9/"+int(map(fxrand(),0,1,1,21))+".png");
  
  // kartkenar
  // k14 = loadImage("./00/kart/1/"+int(map(fxrand(),0,1,1,5))+".png");
  k24 = loadImage("./00/kart/2/"+int(map(fxrand(),0,1,1,4))+".png");
  k34 = loadImage("./00/kart/3/"+int(map(fxrand(),0,1,1,5))+".png");
  
  // ---------------------------------------------------------------------------------
  
  font = loadFont('./d2.ttf');
  // font = loadFont('./font.ttf');
  
}

function setup() {
	
       screen = [windowWidth, windowHeight]
     Adcanvas = sort(screen, 0);
    print(Adcanvas[0]);
    canvas = 1000
	orjCanvas=canvas
	
    createCanvas(canvas, canvas,WEBGL);
	// createCanvas(windowWidth, windowHeight,WEBGL);
	canvas = 1000
	// cnv=canvas/800
	cr= createGraphics(canvas,canvas)
	bg= createGraphics(canvas+999,canvas+999)
	// tx= createGraphics(400,430)
	fin=createGraphics(canvas+999,canvas+999)
	cnv3d=createGraphics(canvas+999,canvas+999,WEBGL)
	cardTemp=createGraphics(canvas+999,canvas+999)
	reSize=createGraphics(canvas+999,canvas+999)
	
	for (var i = 1; i < 5; i++) {
   this["bg"+i] = createGraphics(canvas+999,canvas+999)
}
// background(62,186,207)

  
 for(layer=1;layer<5;layer++){
d=eval("bg"+layer)
d.scale(2,2)

  d.textFont(font);
  name1Ran=int(map(fxrand(),0,1,0,19))
  name1=["UNCAPABLE","SUPER ULTRA MEGA","UNEDUCATED","ROUGH","ACCIDENTLY","BAD MANNERED","FALSE","UNCERTAIN","WAIFU LOVER","DELIRIOUS","KAMIKAZE","VEGAN","OTAKU","UNLUCKY","ULTRA TILT","BEGINNER","DEFINITLY","ALPHA","AMATEU"]
  name2Ran=int(map(fxrand(),0,1,0,20))
  name2=["MASTER","TOUGH","SEX SLAVE","MF","TOTAL IDIOT","NON DEFINITIVE","TRADABLE","UNNECESARRY","EVOLUTION DENIER","MASTURBATION ADDICT","TIME WASTE","BAMBOOZLED","ONLYFANS USER","TRYHARD","HORSE THIEF","SPECIAL","NOOB","CHOOSEN","CHAMPION","MEDIOCRE"]
  name3Ran=int(map(fxrand(),0,1,0,15))
  name3=["BOI","DUDE","GUY","BAE","PERSON","HUMAN","BEING","CITIZEN","PLEB","GOD","HUSBAND","MAN","GENTLEMAN","LOLITA","PRIMAT"]
  descRan=int(map(fxrand(),0,1,0,23))
  desc=["I'm pretty sure he had a rough childhood.",
"You know what they say, expect the worse so nothing can hurt you.",
"Take it easy champ, you don't want anyone to get hurt do you? ",
"He is good at one thing at least... ",
"At least he was not rude to his mother. ",
"He is perfect, in his mothers eyes.",
"FINALLY! MY FOOD HAS ARRIVED! ",
"It will take more than a punch to beat him. Two punches to be precise.",
"No one believed he could survive the pit. He didn't though, this is someone else. ",
"Being imperfectionist is not his thing. ",
"The Devil made an arrengment with this guy. Don't ask why. ",
"Life was not equal to everyone as it seems.",
"Never forget being mercifull is a choice.",
"Legend says he is still practicing when he is dreaming.",
"Gods will frightened of what they created. I meant the texture.",
'"With great power comes great responsibility." It says everything.',
"Do you bleed? Than you have a lot in common.",
"I don't know what is he doing here. Maybe he got a friend inside.",
"He is 10 out of a 10 guy. Or maybe 10 out of a 100, could never be sure.",
"Choose your words wisely, he might be hearing.",
"He is not chasing the dreams he can't achive.",
'If there was a monster out there called "party", he would tottally kill it.',
"He is giving his own fights inside."]
 




// a01zemin,a02zemin,a03sırt,a04bacak,a05ayak,a06gövde,a07kafa,a08yüz,a09saç
cr.background(0,0,0,0)
//360*460
d.push()
// d.scale(0.95*cnv,0.95*cnv)
d.image(eval("k1"+layer),0,0)
d.image(eval("k2"+layer),0,0)
d.pop()
// bg.image(k3,0,0)

//160*180
cr.image(eval("e1"+layer),0,0)
cr.image(eval("e2"+layer),0,0)
cr.image(eval("e3"+layer),0,0)
cr.image(eval("e4"+layer),0,0)
cr.image(eval("e5"+layer),0,0)
cr.image(eval("e6"+layer),0,0)
cr.image(eval("e7"+layer),0,0)
cr.image(eval("e8"+layer),0,0)
cr.image(eval("e9"+layer),0,0)



if(int(map(fxrand(),0,1,0,2))==0){
d.push()
d.translate(220, 0);
d.scale(-1,1)
d.image(cr,30,40)
d.pop()
}else{
	
	d.image(cr,30,40)
}

d.push()
// d.drawingContext.shadowBlur = 10
			// d.drawingContext.shadowOffsetY = 0.5;
			// d.drawingContext.shadowColor = color(0)
// cr.scale(3,3)
background(100)
// tx.rectMode(CENTER);
 d.textSize(12);
 d.textAlign(CENTER);
 d.text("HP:"+int(map(fxrand(),0,1,1,101)), 10, 298,110);
 d.text("MP:"+int(map(fxrand(),0,1,1,101)), 105, 298,110);
 d.text("ATK:" +int(map(fxrand(),0,1,1,101)), 10, 334,110);
 d.text("DEF:" +int(map(fxrand(),0,1,1,101)), 105, 334,110);
 
 d.textSize(11);
 d.textAlign(CENTER,CENTER);
 d.text(name1[name1Ran]+" "+name2[name2Ran]+" "+name3[name3Ran], 35, 14, 150);
 // tx.text(name1[name1Ran]+" "+name2[name2Ran]+" "+name3[name3Ran], 95*cnv, 20*cnv);

 d.textSize(12);
 d.textAlign(CENTER,CENTER);
d.text(desc[descRan], 25, 239,175);

d.pop()

// scale(2*cnv,2*cnv)
// push()
// bg.translate(188*cnv, 0);
// bg.scale(-1,1)
// bg.image(cr,26*cnv,34*cnv)
// pop()
d.image(eval("k2"+layer),0,0)
d.image(eval("k3"+layer),0,0)
// d.image(tx,0,0)
}
// image(bg,50*cnv,50*cnv)


// fill(50);

	// for(x=0;x<katmanSayısı;x++){
	// image(eval("drawingLayer"+x),-20*cnv,0)
	// }
	
	
	fin.drawingContext.shadowBlur = 30
			fin.drawingContext.shadowOffsetY = 0.5
			fin.drawingContext.shadowColor = color(0)

// fin.translate(600*cnv,100*cnv)
fin.push()
// fin.scale(1,1)
fin.image(bg1,500,+300)
// fin.image(bg,canvas/2-470*cnv,canvas/2-560*cnv)
fin.pop()

fin.push()
// fin.scale(1,1)
// fin.translate(135,-10)
// fin.rotate(PI/8)
fin.image(bg2,200,+300)
fin.pop()


fin.push()
// fin.scale(1,1)
// fin.translate(295,-120)
// fin.rotate(PI/4)
fin.image(bg3,300,+300)
fin.pop()

	// cardTemp.translate(-canvas/2,-canvas/2)
	cardTemp.translate(-canvas/2,-canvas/2)
	cardTemp.scale(0.7,0.7)
	cardTemp.translate(800,800)
	cardTemp.image(fin,0,0)
	// cardTemp.image(cnv3d,0,-0)

}

function draw() {
	
	 // var ctx = (a canvas context);
  // ctx.canvas.width  = window.innerWidth;
  // ctx.canvas.height = window.innerHeight;
background(120)
// translate(-canvas/2,-canvas/2)
// scale(Adcanvas[0]/1000)

// translate(0,0)



push()
// translate(-canvas/2,-canvas/2)
// scale(1.0*cnv,1.0*cnv)

// image(fin,2*cnv,2*cnv)
// rotateX(850 / 1000*cnv);
// translate(-canvas/2,-canvas/2)
// scale(0.5*cnv,0.5*cnv)
translate(0,700)
// translate(200,+60,-200)
rotateX(1450 / 1000);
image(cardTemp,-100,-1200)
// rotateX(650 / 1000);
// image(fin,0,0)

pop()

translate(-canvas/2,-canvas/2)
scale(1.3,1.3)


// translate(150,150)
// angleMode(DEGREES)

deg=mouseX
if(deg<0){
	deg=0
}
if(deg>800){
	deg=800
}
rotateY(deg / 1000);
// rectMode(CENTER)
// translate(canvas/2-510*cnv,canvas/2-390*cnv)
// image(bg4,10*cnv,15*cnv)
// translate(30,0)
image(bg4,100,25)


document.getElementById("defaultCanvas0").style.width = Adcanvas[0]+"px";
document.getElementById("defaultCanvas0").style.height = Adcanvas[0]+"px";

  // noLoop()
}

