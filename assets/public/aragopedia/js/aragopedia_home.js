	// Hacer lo que corresponda una vez cargada la página
$(document).ready(function(){
	initAutocompleteSearchText()
	loadMaps();
	//initSlider();
});

function initAutocompleteSearchText() {
	$("#searchInput").autocomplete({
		source: function (request, response) {
			$.ajax({
				url: urlAutocompleteAragopedia
					+ "?search=" + request.term.replace(/ /g, '_')
					+ "&namespace=0"
					+ "&suggest="
					+ "&format=json"
					+ "&action=opensearch",
				dataType: "json",
				success: function( data ) {
					response($.map(data[1], function (item) {
						return {
							//label: item.DESCRIPCION,
							//value: item.DIRWEB
							label: item,
							value: item,
						};
					}));
				}
			});
		},
		select: function(e, ui) {
			window.location = ("/apps/aragopedia/index.php?search=" + ui.item.label + "&title=Especial%3ABuscar");
			$(this).val(ui.item.label);
			return false;
		},
		minLength: 1
	});
}


function loadMaps() {
	loadMap("#mapPreviewComarca", urlJson + "T02_Comarcas_4326.topojson.json", itemClickedC, getColorSelectedC, getIdC, "T02_Comarcas_4326", "#CCC", 0.2, highlightFillColor, true, funTextComarca);
}

function isValIntoSelectedItems() {
	return false;
}

function genericSelection(type, item, arrayNames, updateDataPrev) {
	var txt = arrayNames[item].replace(" / ", "/");
	if (txt == "Tarazona y El Moncayo") {
		txt = "Tarazona y el Moncayo";
	}
	if (txt == "Bajo Aragón-Caspe/Baix Aragó-Casp") {
		txt = "Bajo Aragón-Caspe/ Baix Aragó-Casp";
	}
	window.location = encodeURI("/apps/aragopedia/index.php?search=" + txt + "&title=Especial%3ABuscar");
}
