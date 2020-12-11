<!DOCTYPE html>
<html lang="es">
<head>

	<title>ARAGÓN OPEN DATA</title>

	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
  	<meta name="robots" content="index, follow" />
  	<meta name="description" content="Aragón Open Data" />
  	<meta name="keywords" content="default, keywords, here" />
  	<meta name="author" content="Idearium Consultores SL e Ismael Blasco (AMS)" />
  	<meta name="google-site-verification" content="cr3MWGC2O0Hl9d6yV4lJDSwnDXtiVQ19MuC3h6OWa-k" />

	<link rel="stylesheet" href="/static/public/jquery/jquery-ui_1_10_3_smoothness.css">
  	<script type="text/javascript" src="/static/public/jquery/jquery-3.2.1.min.js"></script>
  	<script type="text/javascript" src="/static/public/jquery-ui-1.12.1/jquery-ui.min.js"></script>

	
  	<!--<script type="text/javascript" src="/static/public/jquery/jquery.min.js"></script>
  	<script type="text/javascript" src="/static/public/jquery/jquery-ui_1_10_3.js"></script>-->

  	<!--<script type="text/javascript" src="/static/public/aragopedia/js/aod_funcs_editor.js"></script>-->
  	<script type="text/javascript" src="/static/public/aragopedia/js/select2.min.js"></script>

	<link rel="stylesheet" href="/static/public/aragopedia/css/aragopedia_home.css" media="screen" type="text/css" />
	<link rel="stylesheet" type="text/css" href="/static/public/footer/footer.css">  
	<link rel="stylesheet" type="text/css" href="/static/public/header/header.css">
  	<link rel="stylesheet" type="text/css" href="/static/public/homeV3/prueba.css">
	<link rel="stylesheet" href="/static/public/themes/aod/style.css" media="screen" type="text/css" />


  	<link rel="stylesheet" href="/static/public/aragopedia/css/datos.css" media="screen" type="text/css" />
	
	<link rel="stylesheet" href="/static/public/themes/aod/tipografia.css" media="screen" type="text/css" />

	<link rel="stylesheet" href="/static/public/aragopedia/css/remodal.css" />
	<link rel="stylesheet" href="/static/public/aragopedia/css/remodal-default-theme.css" />

	<link rel="stylesheet" href="/static/public/aragopedia/css/jquery.bxslider.css" />
	<link rel="stylesheet" href="/static/public/aragopedia/css/accordion.css"> <!-- Resource style -->
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" rel="stylesheet" />

	<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" 	crossorigin="anonymous">-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

	<!-- nuevos Banco de datos-->
	<script src="/static/public/aragopedia/js/jquery.bxslider.min.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/config/configDatos.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/dataCache/infoDonde.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/dataCache/infoTerritorialDonde.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/cookiesUse.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/sparqlQueries.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/territorialFuncs.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/datos.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/jquery.dotdotdot.min.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/remodal.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/d3.v3.min.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/topojson.v1.min.js"></script>
	<script type="text/javascript" src="/static/public/aragopedia/js/map.js"></script>

	<script type="text/javascript" src="/static/public/aragopedia/temaOrganizacion/js/jquery.dataTables.min.js"></script>
	<script src="/static/public/aragopedia/js/modernizr.js"></script> <!-- Modernizr -->
	<!-- JS multi level -->
	<script src="/static/public/aragopedia/js/main.js"></script> <!-- Resource jQuery -->

	<!-- fin nuevos BDD -->


	<!-- CHOSEN-IMAGE -->
	<script src="/static/public/aragopedia/chosen/chosen.jquery.js" type="text/javascript"></script>
	<script src="/static/public/aragopedia/chosen/chosenImage.jquery.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/static/public/aragopedia/chosen/chosen.css" type="text/css" />
	<link rel="stylesheet" href="/static/public/aragopedia/chosen/chosenImage.css" type="text/css" />

	<script type="text/javascript">
		var currentUrl = "/apps/aragopedia/datos";
	</script>



	<!-- Goo Analytics -->
	<!--<script type="text/javascript">
  		var _gaq = _gaq || [];
  		_gaq.push(['_setAccount', 'UA-36118896-2']);
  		_gaq.push(['_setDomainName', 'aragon.es']);
  		_gaq.push(['_setAllowLinker', true]);
  		_gaq.push(['_trackPageview']);
  		(function() {
    		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    		ga.src = ('https:' == document.location.protocol ? 'https:/'+'/' : 'http:/'+'/') + 'stats.g.doubleclick.net/dc.js';
    		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  		})();
	</script>-->


	<script>

		function hoverButtonMenu() {
			if($('#nav').attr('class') == 'navbar navbar-toggleable-md navbar-light'){
				$('#menu').attr('src', '/static/public/header/images/Boton-Menu-Responsive-ON.jpg');
			}else{
				if($('#nav').attr('class') == 'navbar navbar-toggleable-md bg-light'){
					$('#menu').attr('src', '/static/public/header/images/Boton-Menu-Responsive-ON.jpg');
				}else{
					$('#menu').attr('src', '/static/public/header/images/Boton-Salir-Menu-Responsive-ON.png');
				}
			}
		}
		function outButtonMenu() {
			if($('#nav').attr('class') == 'navbar navbar-toggleable-md navbar-light'){
				$('#menu').attr('src', '/static/public/header/images/Boton-Menu-Responsive-OFF.png');
			}else{
				if($('#nav').attr('class') == 'navbar navbar-toggleable-md bg-light'){
					$('#menu').attr('src', '/static/public/header/images/Boton-Menu-Responsive-OFF.png');
				}else{
					$('#menu').attr('src', '/static/public/header/images/Boton-Salir-Menu-Responsive-OFF.png');
				}
			}
		}
		
	</script>
	<script>
		function hoverButtonLogin() {
			if($('#nav').attr('class') == 'navbar navbar-toggleable-md navbar-light'){
				$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-ON.png');
			}else{
				if($('#nav').attr('class') == 'navbar navbar-toggleable-md bg-light'){
					$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-ON.png');
				}else{
					$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-blanco.png');
				}
			}
		}
		function outButtonLogin() {
			if($('#nav').attr('class') == 'navbar navbar-toggleable-md navbar-light'){
				$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-OFF.png');
			}else{
				if($('#nav').attr('class') == 'navbar navbar-toggleable-md bg-light'){
					$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-OFF.png');
				}else{
					$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-gris.png');
				}
			}
		}
	</script>
	<script>
		function openNav() {
			var height_overlay = $('.overlay').height();
			if(height_overlay == 0){
				$('.overlay').css('top', $('#header1').height());
				$('#myNav').height($(window).height() - $('#header1').height());
				$('#logo').attr('src', '/static/public/header/images/AOD-Logo-Responsive.png');
				$('#nav').attr('class', 'navbar navbar-toggleable-md bg-inverse');
				$('#nav').css('background-color', 'rgba(0,0,0, 0.82)');
				$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-gris.png');
				$('#menu').attr('src', '/static/public/header/images/Boton-Salir-Menu-Responsive-OFF.png');
			} else {
				$('body,html').css('overflow-y', 'auto');
				$('#myNav').height('0%');
				$('#nav').attr('class', 'navbar navbar-toggleable-md bg-light');
				$('#logo').attr('src', '/static/public/header/images/AOD-Logo.png');
				$('#login').attr('src', '/static/public/header/images/Boton-Acceso-Usuarios-OFF.png');
				$('#menu').attr('src', '/static/public/header/images/Boton-Menu-Responsive-OFF.png');
				$('#resultsList').css('visibility', 'hidden');
				$('#buscador_header').val('');
			}
		}
	</script>

	<script>
		function buscaCkan(){
			text = document.getElementById("buscador_header").value;
			openNav();
    		window.location.href = "/datos/catalogo?texto=" + text;
    		return false;
		}
	</script>
	<script>
		$(document).ready(function(){
			console.API;
			if (typeof console._commandLineAPI !== 'undefined') {
				console.API = console._commandLineAPI; //chrome
			} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
				console.API = console._inspectorCommandLineAPI; //Safari
			} else if (typeof console.clear !== 'undefined') {
				console.API = console;
			}
			console.API.clear();
    		$(window).resize(function(){
				$('.overlay').css('top', $('#header1').height());
				if($('.overlay').height() != 0){
					$('#myNav').height($(window).height() - $('#header1').height()); 
				}
			});
		});
	</script>
	<script>
		function autocompleteRequest() {
			if($('#buscador_header').val().length >= 3){
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						var json = JSON.parse(JSON.parse(this.responseText));
						if(json.result.length > 0){
							$('#resultsList').css('visibility', 'visible');
							for (i = 0; i < json.result.length; i++) { 
								document.getElementById('searchResult'+(i+1)).innerHTML = json['result'][i].title;
								document.getElementById('searchResult'+(i+1)).href = '/datos/catalogo/dataset/' + json['result'][i].name;
							}
						}else{
							$('#resultsList').css('visibility', 'hidden');
						}
					}
				};
				xhttp.open("GET", "/aod/services/web/datasets/autocomplete?text="
									+$('#buscador_header').val()+"&limit=4", true);
				xhttp.send();
			}else{
				$('#resultsList').css('visibility', 'hidden');
			}
		}
	</script>
	<script>
		window.onerror = function (errorMsg, url, lineNumber) {
			//TODO: Arreglar error, explicado en la linea siguiente, salta error por consola al borrar el return true.
			//console.log('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
			return true;
		}
	</script>
	<script> 
		$(function(){
			$.get("/static/public/header/header.html", function(data){
				$("#header").html(data);
			});
			$.get("/static/public/footer/footer.html", function(data){
				$("#footer").html(data);
			});
		});
	</script>
</head>

<!-- fin nuevos -->

<body>
	<div id="header"></div>
