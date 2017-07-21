(function main(){
    var count=0;
    var score=0;
    var lives=3;
    var cards=[];
    var end=false;
    var numbers=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    var suits=["spades","hearts","clubs","diams"];
    var cardOutput=document.querySelector("#cards");
    var scoreOP=document.querySelector("#score");
    var btn_in=document.querySelector("#high_low");
    var start=document.querySelector("#btn_start");
    start.addEventListener('click',function (e) {
           var message=document.querySelector("#message");
           message.innerHTML="Game Started!!";
           start.style.display='none';
           btn_in.style.display='block';
           buildCards();
           shuffleCards(cards);
          cardOutput.innerHTML += showCards();

    });

   var high=document.querySelector("#btn_high");
    high.addEventListener('click', highlow);


    var low=document.querySelector("#btn_low");
    low.addEventListener('click', highlow);


    function shuffleCards(array) {
            for(var i=array.length-1;i>0;i--){
                var rand=Math.floor(Math.random() * (i+1));
                var temp=array[i];
                array[i]=array[rand];
                array[rand]=temp;
            }
            return array;
        //console.log(array);
        }


    function buildCards() {
        cards=[];
        for(s in suits){
            var suit=suits[s][0].toUpperCase();
            for(n in numbers){
                   var card={suit:suits[s],
                             num:numbers[n],
                             cardValue:parseInt(n) + 2,
                              icon:suit
                             };
                             cards.push(card);}}//console.log(cards);
         }


    function showCards(){
        var c=cards[count];
        var bgColor = (c.icon === "H" || c.icon ==="D") ? 'red':'black';
        return '<div class="icard" style="color:'+bgColor+'">' +c.num +'&'+ c.suit+ ';<div class="top"></div></div>';
    }



    function highlow(){
        var win = false;
        var oldCard = cards[count].cardValue;
        count++;
        cardOutput.innerHTML += showCards();
        var newCard = cards[count].cardValue;
        if (event.target.id == 'btn_high' && oldCard < newCard) {
            win = true;
        }
        else if (event.target.id == 'btn_low' && oldCard > newCard) {
            win = true;
        }
        if (win) {
            message.innerHTML="You are RIGHT &#128512";
            score++;
        }
        else {
            message.innerHTML="You are WRONG &#128542";
            lives--;
            if (lives < 1) {

                endPlay();
            }
        }
        scoreOP.innerHTML = "SCORE:" + score + " YOUR LIVES : " + lives;

    }


    function endPlay(){

        btn_in.style.display='none';
        message.innerHTML="Game over!!  Your Score is "+score;
       scoreOP.style.display='none';
    }



})();