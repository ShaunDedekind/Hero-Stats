$(document).ready(function(){

  $('#term').focus(function(){
    var full = $("#poster").has("img").length ? true : false;
    if(full == false){
      $('#poster').empty();
    }
  });
  
  var getHero = function(){
        
        var film = $('#term').val();
      
      if(film == ''){
      
        $('#poster').html("<h2 class='loading'>Ha, we didn't forget form validation! Enter something please.</h2>");
        
      } else {
    
        $('#poster').html("<h2 class='loading'>Your hero is on its way!</h2>");
      
        $.getJSON("http://dotaheroes.herokuapp.com/heroes/" + film, function(json) {
          if (json.Name != null){
              //Image
              $('#image').html('<img src="http://media.steampowered.com/apps/dota2/images/heroes/' 
                + json.Name.toLowerCase() + '_full.png">');
              //Stats
              $('#poster').html('<h2 class="loading">Your heroes name is: ' + json.Name + ' </h2>' +
              '<h2 class="loading">Movespeed: ' + json.Movespeed + ' </h2>' +
              '<h2 class="loading">ProjectileSpeed: ' + json.ProjectileSpeed + ' </h2>' +
              '<h2 class="loading">BaseStr: ' + json.BaseStr + ' </h2>' +
              '<h2 class="loading">BaseAgi: ' + json.BaseAgi + ' </h2>' +
              '<h2 class="loading">BaseInt: ' + json.BaseInt + ' </h2>' +
              '<h2 class="loading">PrimaryStat: ' + json.PrimaryStat + ' </h2>' +
              '<h2 class="loading">Base Attack Time: ' + json.BaseAttackTime + ' </h2>' +
              '<h2 class="loading">Armor: ' + json.Armor + ' </h2>');
              
          } else {
              $('#poster').html('<h2 class="loading">Nothing, sorry...</h2>');
            
            }
        });
        
      }

        return false;
  }
  
  $('#search').click(getHero);
  $('#term').keyup(function(event){
      if(event.keyCode == 13){
          getHero();
      }
  });
  
});