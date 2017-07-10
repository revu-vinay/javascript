
(function GetLooser() {
 this.applicants = [];
  this.init=function(){
   addApplicants();
   getRandom();
   runAgain();
   startAgain();
  };



    function addApplicants(){
     function addTo(input){
         var value=input.value.toLowerCase();
         if(valid(value)){
             applicants.push(value);
             input.value=''; // clear name
             showList();
           }
           else{alert("Duplicate and Null values are not allowed");input.value='';
         }
     }

    function showList(){
        var id=document.querySelector('.names_list');
        var temp='';
        for(var i=0;i<applicants.length;i++){
            temp += '<span class="span_list" data-id="'+ i +'">' + applicants[i] + '</span>';
        }
        id.innerText='';
        id.insertAdjacentHTML('afterbegin',temp);
        deleteOne();

    }

     var addBtn=document.querySelector('#add');
     addBtn.addEventListener('click',function(){
         var input=document.querySelector('#enter_name');
       addTo(input);
     });
};
    function valid(value) {
          if(applicants.indexOf(value) < 0 && value!= '' ){
              return true;}
          else{return false;}

   };
    function deleteOne(){
    var del=document.querySelectorAll('.span_list');

        function removeIt(index){
        var attr = parseInt(index.getAttribute('data-id'));
        applicants.splice(attr,1);
        showList();
        //console.log(applicants);
    };
        for(var i=0;i<del.length;i++){
       del[i].addEventListener('click',function(){
           removeIt(this);
       });
    }
    }
    function getRandom(){
           var looser=document.querySelector('#show');
            function showLooser(){

                var resultContainer=document.querySelector('.result_container');
                var applicantContainer=document.querySelector('.first');

                applicantContainer.className = 'first hidden';
                resultContainer.className = 'result_container';
                showRandomUser();
            }

            looser.addEventListener('click',function(){
             if(applicants.length>1){
                 showLooser();
             }
            });
    };
    function showRandomUser(){
             var container =document.querySelector('.result');
             var rand=applicants[Math.floor(Math.random() * applicants.length)];
             container.innerHTML='';
             container.insertAdjacentHTML('afterbegin','<h2>' +rand +'</h2>');}  //Just inside the element, before its first child
    function runAgain() {
        var runagain=document.querySelector('.run');
        runagain.addEventListener('click',function () {
            showRandomUser();
        });

    };


    function startAgain() {
        var startagain=document.querySelector('.start');
        startagain.addEventListener('click',function () {

            var resultContainer=document.querySelector('.result_container');
            var applicantContainer=document.querySelector('.first');
            var applicantList=document.querySelector('.names_list');

            applicantContainer.className = 'first';
            resultContainer.className = 'result_container hidden';
           // console.log("aftercalls");
            applicantList.innerHTML = '';
            applicants = [];
           // console.log("afternull");

        })

    };




   this.init();
})();