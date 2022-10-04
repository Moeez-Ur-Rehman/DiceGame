function shuffle(class1){
  var num=Math.random();
  num=num*6;
  num=Math.ceil(num);
  console.log(num);
  var doc=document.querySelector(class1);
  if(num==1){
    doc.src="images/dice1.png";
  }
  if(num==2){
    doc.src="images/dice2.png";
  }
  if(num==3){
    doc.src="images/dice3.png";
  }
  if(num==4){
    doc.src="images/dice4.png";
  }
  if(num==5){
    doc.src="images/dice5.png";
  }
  if(num==6){
    doc.src="images/dice6.png";
  }
}
class1=".img1";
shuffle(class1);
class1=".img2";
shuffle(class1);
