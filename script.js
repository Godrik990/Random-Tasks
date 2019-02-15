var a = ['vider le lave vaisselle +5 !', 'ranger et nettoyer les deux tables +5 !', 'vider la poubelle + changer les sacs +5 !', 'passer l aspirateur dans le salon + 10 !', 'passer l aspirateur dans la cuisine + 5 !', 'nettoyer la cuisine(plan de travail ect) +15 !', 'passer la serpiere dans la cuisine + 5 !', 'passer la serpiere dans le salon +10', 'nettoyer la sdb, passer l aspi dans le couloire et sdb +10'];
var randomValue = a[Math.floor(a.length * Math.random())];

$( document ).ready(function() {
  $('#continue').on('click', () => {
  	$('#title').hide();
  	$('#continue').hide();
  	$('#buttonTask').show();
  	$('#engrenages').show();
  })

  $('#buttonTask').on('click', () =>{
  	$('#engrenages').addClass('rotate');
  	$('#engrenages').fadeOut(4000);
  	$('#buttonTask').hide();
  	$('#content').fadeIn(1000).text(randomValue);	
})

});
