$(function (){
	
	getJoke(); 
	
	$('#refreshjoke').on('click', function(){
		getJoke();	
	});
	
	function getJoke(){
		var $jokegoeshere = $('#jokegoeshere');
		$.ajax({
			type:'GET',
			url: 'http://192.168.64.2/ITAcademy/practica_api/api/apiChiste.php',
			dataType:'json',
			success: function (result) {
				if(result.type == 'success'){
					$jokegoeshere.html(result.data[0].chiste);
					$jokegoeshere.append("<br/> -> Puntuacion: "+result.data[0].puntuacion); //el ultimo "puntuacion" (que aparece sin comillas) responde al nombre de la comluna de la tabla de la BBDD
				}else{
					alert("No se encontraron chistes");
				}
			}
		});		
	}
	
});

