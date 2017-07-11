(function MusicDb(){
    function init(){
        search();

    }
function search() {
        var form = document.querySelector("#form");
        form.addEventListener('submit',function(e){
            e.preventDefault();
            var value=document.querySelector("#search_text").value;
            form.reset();
            getData(value.split(' ').join("+"));             //remove space into arrays then replace space with +

        });
}

function getData(value){

         http=new XMLHttpRequest();
         http.open("GET","https://itunes.apple.com/search?term="+ value +"&entity=album");

    var container=document.querySelector('#results_page');
    container.innerHTML = '';

        http.onreadystatechange = function(){

            if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
                //console.log("true");
              showResults(JSON.parse(http.response));
             }
             else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200){
                 console.log("Error in finding");
             }
        };http.send();
}

function showResults(obj){
    var container=document.querySelector('#results_page');
    var temp='';

    if(obj.results.length > 0){

        document.querySelector('#not_match').style.display ='none';

        for(var i = 0 ; i < obj.results.length; i++){
            temp  += '<div class="col-sm-3 album_item">';
            temp +=  '<div class="item_thumb" style="background:url('+ obj.results[i].artworkUrl100 + ')"></div>';
            temp  +=  '<div class="item_name">' + obj.results[i].collectionName + '</div>';
            temp  +=   '<div class="item_price"><span>Price: </span>' + obj.results[i].collectionPrice + 'USD </div>';
            temp +=   '<a href="'+ obj.results[i].collectionViewUrl +'" target="_blank">Buy now</a>';
            temp += '</div>';
        }

        container.innerHTML ='';
        container.insertAdjacentHTML('afterbegin', temp);
    } else{
        document.querySelector('#not_match').style.display ='block';
    }
}




    init();
})();
