var tabla=null;

function updateDataTable(){
	//console.log('Vamos a rehacer la tabla');

	//if ($('#resultsTableBDA tbody').length>0){
	tabla=$('#resultsTableBDA').DataTable({
		"bPaginate": false,
	});
	$('.dataTables_filter').remove();
	$('.dataTables_info').remove();
	//}
}

	// Hacer lo que corresponda una vez cargada la página
$(document).ready(function(){

	initComboMunis();
	updateListComarca();

	updateListMunicipio("L", true);
	updateListMunicipio("C", true);
	updateListMunicipio("B", true);
	updateListMunicipio("A", true);

	addNewConditionBlock('Provincia');
	addNewConditionBlock('Comarca');
	addNewConditionBlock('Municipio');

	searchAutocompleteReport("#informeAutocompleteQue",  selectedReportQue);

	/*Configuracion del acordeon */
	var accordionsMenu = $('.cd-accordion-menu');

	if( accordionsMenu.length > 0 ) {
		
		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', 'input[type="checkbox"]', function(){
				var checkbox = $(this);
				//console.log(checkbox.prop('checked'));
				( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
			});
		});
	}
	
	var config	= {
		disable_search: true
	};
	/*Configuracion de los combobox referentes al apartado cuando*/
	/*
	if ($("#cuandoDesdeMonth").length > 0){
		$("#cuandoDesdeMonth").chosen(config).chosenImage();
	}*/
	if ($("#cuandoDesdeYear").length > 0){
		$("#cuandoDesdeYear").chosen(config).chosenImage();
	}
	/*
	if ($("#cuandoHastaMonth").length > 0){
		$("#cuandoHastaMonth").chosen(config).chosenImage();
	}*/
	if ($("#cuandoHastaYear").length > 0){
		$("#cuandoHastaYear").chosen(config).chosenImage();
	}

	$("#cuandoDesdeYear").change(onChgComboCuando);
	$("#cuandoHastaYear").change(onChgComboCuando);
	
	/*Configuracion de  los combobox referentes al apartado donde*/
	if ($("#comboDeacActivateType").length > 0){
		$("#comboDeacActivateType").chosen(config).chosenImage();
	}
	if ($("#comboDeacActivateAll").length > 0){
		$("#comboDeacActivateAll").chosen(config).chosenImage();
	}
	if ($(".dondeSeleccionCondicionadaLogical").length > 0){
		$(".dondeSeleccionCondicionadaLogical").chosen({		disable_search: true	}).chosenImage();
	}

	updatePopularReports();
	updateRecentReports();

	loadMap("#mapPreviewAragon", urlJson + "T02_Aragon_4326.topojson.json", itemClickedA, getColorSelectedA, getIdA, "T02_Aragon_4326", selectedColor, 1, selectedColor, true, funTextAragon);

	initModalDialogs();

	if (window.location.href.toString().indexOf("dondeZoneModal") != -1) {
		slider_info = $('#bxslider_info').bxSlider({"controls": false});
		/*
		$("#dondeMunicipioItemsOptions_8columns_A").removeClass("oculto");
		$("#dondeMunicipioItemsOptions_8columns_B").removeClass("oculto");
		$("#dondeMunicipioItemsOptions_8columns_C").removeClass("oculto");
		slider_municipioA = $('#bxslider_municipioA').bxSlider({"controls": false});
		slider_municipioB = $('#bxslider_municipioB').bxSlider({"controls": false});
		slider_municipioC = $('#bxslider_municipioC').bxSlider({"controls": false});
		slider_municipioA.goToNextSlide();
		slider_municipioA.goToSlide(0);
		slider_municipioB.goToNextSlide();
		slider_municipioB.goToSlide(0);
		slider_municipioC.goToNextSlide();
		slider_municipioC.goToSlide(0);
		$("#dondeMunicipioItemsOptions_8columns_A").addClass("oculto");
		$("#dondeMunicipioItemsOptions_8columns_B").addClass("oculto");
		$("#dondeMunicipioItemsOptions_8columns_C").addClass("oculto");
		*/
	}

		var $form = $('<form method="POST" id="downloadForm" target="_blank">' +
							'	<input id="downloadFormQuery" name="query" type="hidden"/>' +
							' <input id="downloadFormGraph" name="default-graph-uri" type="hidden"/>' +
							' <input id="downloadFormFormat" name="format" type="hidden"/>' +
							'</form>').appendTo('body');

	$("#queOptionResumen").dotdotdot();
	$("#queOptionDetalleTexto").dotdotdot();
	$("#dondeOptionDetalleTexto").dotdotdot();

	updateDataPreview();
	$("#queOptionDetalleTexto").dotdotdot();
});

$(document).on('closed', '.remodal', function (e) {
});


var dondeModal, queModal, cuandoModal;
function initModalDialogs() {
	dondeModal = $('[data-remodal-id=dondeZoneModal]').remodal();
	queModal = $('[data-remodal-id=queZoneModal]').remodal();
	cuandoModal = $('[data-remodal-id=cuandoZoneModal]').remodal();
}

function updateRecentReports() {
	updateRecentReport(1);
	updateRecentReport(2);
	updateRecentReport(3);
}

function updateRecentReport(num) {
	if (checkCookieRecentReport(num)) {
		$('#recentReport' + num).html('<a href="javascript:selectItemDirectoryReports(\'' + getCookie("recentReportLabel" + num) + '\', \'' + getCookie("recentReportDescription" + num) + '\', \'' + getCookie("recentReportDescHierarchy" + num) + '\', \'' + getCookie("recentReportOper" + num) + '\')" title="' + getCookie("recentReportLabel" + num) + '" class="i_i">' + getCookie("recentReportLabel" + num) + '</a>\n');
	}
}
function checkCookieRecentReport(num) {
	if (getCookie("recentReportLabel" + num) == "") {
			return false;
	}
	if (getCookie("recentReportDescription" + num) == "") {
			return false;
	}
	if (getCookie("recentReportDescHierarchy" + num) == "") {
			return false;
	}
	if (getCookie("recentReportOper" + num) == "") {
			return false;
	}
	return true;
}

function updatePopularReports() {
	$.ajax({
		url: urlPopularReports,
		async: false,
		timeout: 1000,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function( data ) {
			if (data.resultado) {
				var str = "";
				var count = 0;
				$.map(data.resultado, function (item) {
					if (count < 3) {
						str +='<li class="queOpcion">\n';
						str +='  <a href="javascript:selectItemDirectoryReports(\'' + item.label + '\', \'' + item.description + '\', \'' + item.descHierarchy + '\', \'' + item.oper + '\')" title="' + item.label + '" class="i_i">' + item.label + '</a>\n';
						//str +='  <div class="clear_i"></div>';
						//str +='  <div class="ellipsis">' + item.description + '</div>';
						str +='</li>\n';
					}
					count++;
				});
			}
			if (str != "") {
				$("#popularReports").html(str);
			}
		}
	});
}
