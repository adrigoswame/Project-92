player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML=player_1_name+":";
document.getElementById("player2_name").innerHTML=player_2_name+":";

document.getElementById("player1_score").innerHTML=player_1_score+":";
document.getElementById("player2_score").innerHTML=player_2_score+":";

document.getElementById("player_question").innerHTML="Question turn="+player_1_name;
document.getElementById("player_answer").innerHTML="Answer turn="+player_2_name;


function send(){
 Number1=document.getElementById("number1").value;
 Number2=document.getElementById("number2").value;
 var answer=parseInt("number1")*parseInt("number2");
 console.log(answer);
 var question_number="<h4>"+Number1+"X"+Number2+"</h4>"; 
 input_box="<br> answer:<input type='text' id='input_check_box' >";
 check_button="<br><br> <button class='btn btn-info' onclick='check()'> check</button>";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number1").value="";
} 

Qustion_turn="player1";
  answer_turn="player2";

function check(){

  get_answer=document.getElementById("input_check_box").value;
  
  if (get_answer == answer) 
  {

      if (answer_turn=="player1"){

         player_1_score=player_1_score+1;
         document.getElementById("player1_score").innerHTML=player_1_score;
         
          }
         
          else{

        player_2_score=player_2_score+1;
         document.getElementById("player2_score").innerHTML=player_2_score;


          }

  }
 }
  
if (Qustion_turn=="player1"){

  Qustion_turn="player2";
  document.getElementById("player_question").innerHTML="Qustion_turn:"+player_2_name;

}
  else{

   Qustion_turn="player1";
   document.getElementById("player_question").innerHTML="Qustion_turn:"+player_1_name;


  }

  if (answer_turn=="player1"){

   answer_turn="player2";
   document.getElementById("player_answer").innerHTML="answer_turn:"+player_2_name;

}
   else{

     answer_turn="player1";
    document.getElementById("player_answer").innerHTML="answer_turn:"+player_1_name;


   }

   

   
  
