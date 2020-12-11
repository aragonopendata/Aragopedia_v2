var slider_info = null;
var slider_municipioA, slider_municipioB, slider_municipioC, slider_municipioL = null;
var conditionDondeCounter = new Array();
conditionDondeCounter['Provincia'] = 0; 
conditionDondeCounter['Comarca'] = 0; 
conditionDondeCounter['Municipio'] = 0; 
var selectedItemsType = "Aragon";
var selectedItems = new Array();

var MIN_YEAR_VALUE = -99999;
var MAX_YEAR_VALUE = 99999;
var MAX_ITEMS_PER_COLUMN = 15;

function updateCuandoInitialYears() {
	var currentYear = new Date().getFullYear();
}

function updateCuandoInterval(minYear, maxYear) {
	$('#cuandoDesdeYear')[0].options.length = 0;
	$('#cuandoHastaYear')[0].options.length = 0;
	
	for (var i = minYear; i <= maxYear; i++) {
		if (i == minYear) {
			$('#cuandoDesdeYear').append('<option value="' + i + '" selected>' + i + '</option>');
		} else {
			$('#cuandoDesdeYear').append('<option value="' + i + '">' + i + '</option>');
		}
		if (i == maxYear) {
			$('#cuandoHastaYear').append('<option value="' + i + '" selected>' + i + '</option>');
		} else {
			$('#cuandoHastaYear').append('<option value="' + i + '">' + i + '</option>');
		}
	}
	$('#cuandoDesdeYear').trigger("chosen:updated");
	$('#cuandoHastaYear').trigger("chosen:updated");

}

function updateOptionResumen(title, idItem) {
	var item = $("#" + idItem);
	item.css('visibility', 'hidden');
	item.html(title);
	item.addClass('optionOneLine');
	item.removeClass('optionTwoLines');
	item.removeClass('optionThreeLines');

	item.trigger("update");
	var isTruncated = item.triggerHandler("isTruncated");

	if (isTruncated) {
		item.removeClass('optionOneLine');
		item.addClass('optionTwoLines');

		item.trigger("update");
		isTruncated = item.triggerHandler("isTruncated");
		if (isTruncated) {
			item.removeClass('optionTwoLines');
			item.addClass('optionThreeLines');
		}
		item.trigger("update");
	}

	item.css('visibility', 'visible');
}

function updateOptionDetalle(title, idItem) {
	var item = $("#" + idItem);
	item.css('visibility', 'hidden');
	item.html(title);
	item.addClass('optionDetalleTextoOneLine');
	item.removeClass('optionDetalleTextoTwoLines');

	item.trigger("update");
	var isTruncated = item.triggerHandler("isTruncated");

	if (isTruncated) {
		item.removeClass('optionDetalleTextoOneLine');
		item.addClass('optionDetalleTextoTwoLines');

		item.trigger("update");
	}

	item.css('visibility', 'visible');
}

function selectedReportQue(item) {
	var idReport = item.desc;
	var title = item.label;
	var hierarchyAux = item.descHierarchy;
	var oper = item.oper;
	var hierarchyList = hierarchyAux.trim().split('#');
	var hierarchy = "";

	for (var jj = hierarchyList.length-1; jj >= 0; jj--) {
		if (hierarchyList[jj] != "") {
			if (hierarchy != "") {
				hierarchy += " >" + hierarchyList[jj];
			} else {
				hierarchy += hierarchyList[jj];
			}
		}
	}

	$("#idReportQue").val(idReport);
	updateOptionResumen(title, "queOptionResumen");
	$("#titleAvailableQue").html(title);

	showModalWaiting2();
	$.ajax({
		url: urlDSD + idReport + ".json?api_key=9557f4fc4e0de71125e3d1959490b28b",
		dataType: "json",
		complete: function( data ) {
								hideModalWaiting2();
		},
		success: function( data ) {
			var str = "";
			var strHidden = "";
			var strHiddenLabel = "";
			var strHiddenRange = "";
			updateOptionDetalle(hierarchy, "queOptionDetalleTexto");
			str += "<ul class='infoQue'>";
			var jj = 0;
			$.map(data.result.items, function (item) {
				if (item != "http://purl.org/linked-data/sdmx/2009/dimension#refArea") {
					if ((item._about != "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod")
								&& (item != "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod") ) {
						if (item != "http://opendata.aragon.es/def/iaest/dimension#mes-y-ano") {
							strHidden += item._about + "@";
							strHiddenLabel += item.label + "@";
							strHiddenRange += item.range + "@";
							str += "<li><input type='checkbox' checked id='queColumn" + jj + "' onclick='javascript:updateDataPreview()'> " + item.label + "</li>";
							jj++;
						}
					}
				}
			});
			str += "</ul>";
			updateTemporalAvailability(idReport);

			$("#queItems").html(str);
			$("#titlePreview").html(title);
			$("#hierarchyPreview").html(hierarchy);
			if (oper) {
				if (oper != "null") {
					if (oper != "undefined") {
						$("#informeMetodologico").attr("href", "http://aplicaciones.aragon.es/iaestmtd/gestion?idp=2&Id_Op=" + oper);
						$("#informeMetodologico").removeClass("oculto");
					} else {
						$("#informeMetodologico").addClass("oculto");
					}
				} else {
					$("#informeMetodologico").addClass("oculto");
				}
			} else {
				$("#informeMetodologico").addClass("oculto");
			}
			$("#queItemsHidden").html(strHidden);
			$("#queItemsHiddenLabel").html(strHiddenLabel);
			$("#queItemsHiddenRange").html(strHiddenRange);
			$("#queItems").removeClass("oculto");
			updateDataPreview();

			//Mandamos a la base de datos
			cargaDatos(title,  idReport, hierarchyAux, oper);
			updateRecentItems(title,  idReport, hierarchyAux, oper);
			updateRecentCookie(title,  idReport, hierarchyAux, oper);
			
			if (queModal.getState() != "closed") {
				queModal.close();
			}
		}
	});
}

function onChgComboCuando() {
	var _minYear = $('#cuandoDesdeYear').val();
	var _maxYear = $('#cuandoHastaYear').val();
	if (_minYear > _maxYear) {
		alertDialogModal("El intervalo de fechas no es correcto", "Intervalo de fechas incorrecto");	
	} else {
		updateCuandoDetalle(false);
		updateDataPreview();
	}
}

function selectLastAvailableYear() {
	var selD = $('#cuandoDesdeYear')[0];
	if (selD.options.length > 0) {
		selD.selectedIndex = selD.options.length - 1;
		var selH = $('#cuandoHastaYear')[0];
		selH.selectedIndex = selH.options.length - 1;
		$('#cuandoDesdeYear').trigger("chosen:updated");
		$('#cuandoHastaYear').trigger("chosen:updated");
		updateCuandoDetalle(false);
		updateDataPreview();
		if (cuandoModal.getState() != "closed") {
			cuandoModal.close();
		}
	}
}

function selectAllAvailableYears() {
	var selD = $('#cuandoDesdeYear')[0];
	if (selD.options.length > 0) {
		selD.selectedIndex = 0; 
		var selH = $('#cuandoHastaYear')[0];
		selH.selectedIndex = selH.options.length - 1;
		$('#cuandoDesdeYear').trigger("chosen:updated");
		$('#cuandoHastaYear').trigger("chosen:updated");
		updateCuandoDetalle(false);
		updateDataPreview();
		if (cuandoModal.getState() != "closed") {
			cuandoModal.close();
		}
	}
}

function updateCuandoDetalle(updateTemporalOptionsText) {
	var minYear = $('#cuandoDesdeYear').val();
	var maxYear = $('#cuandoHastaYear').val();
	if (minYear != MAX_YEAR_VALUE) {
		if (updateTemporalOptionsText) {
			$("#cuandoLastYear").html("(" + maxYear + ")");
		}
		if (maxYear == minYear) {
			$("#cuandoOptionResumen").html(maxYear);
			if (updateTemporalOptionsText) {
				$("#cuandoAllYears").html("(" + maxYear + ")");
			}
		} else {
			$("#cuandoOptionResumen").html(minYear + " - " + maxYear);
			if (updateTemporalOptionsText) {
				$("#cuandoAllYears").html("(" + minYear + " - " + maxYear + ")");
			}
		}
	} else {
		$("#cuandoOptionResumen").html("No hay datos");
		if (updateTemporalOptionsText) {
			$("#cuandoAllYears").html("");
			$("#cuandoLastYear").html("");
		}
	}
}

var refPeriodMonth = false;

function updateTemporalAvailability(idReport) {
	var typeTerritorialUnit = getTypeTerritorialUnit(selectedItemsType);
	var query = "select distinct ?value where {\n";
	query += "{ ?obs0 qb:dataSet <http://opendata.aragon.es/recurso/iaest/dataset/" + idReport + typeTerritorialUnit + ">.\n";
	query += "?obs0 <http://purl.org/linked-data/sdmx/2009/dimension#refPeriod> ?value\n";
	query += "}}\n";
	query += "ORDER BY DESC(?value)";
	var queryUrl = urlSparqlEndpoint + "?default-graph-uri=&query="+ encodeURIComponent(query) + "&format=json";
	console.log(query);
	$.ajax({
		url: queryUrl,
		async: false,
		dataType: "json",
		success: function( data ) {
			var minYear = MAX_YEAR_VALUE;
			var maxYear = MIN_YEAR_VALUE;
			if (data.results.bindings) {
				$.map(data.results.bindings, function (item) {
					var value = item.value.value;
					var valueYear = "";
					refPeriodMonth = false;
					if (value.indexOf("http://reference.data.gov.uk/id/month/") != -1) {
						valueYear = value.replace("http://reference.data.gov.uk/id/month/", "").substring(0,4);
						refPeriodMonth = true;
					} else {
						valueYear = value.replace("http://reference.data.gov.uk/id/year/", "");
					}

					if (valueYear > maxYear) {
						maxYear = valueYear;
					}
					if (valueYear < minYear) {
						minYear = valueYear;
					}
				});
			}
			updateCuandoInterval(minYear, maxYear);
			updateCuandoDetalle(true);
		}
	});
}

var reportTreeLoaded = false;
function showDirectorioReports() {
	var str = "";

	if (! reportTreeLoaded) {
				//http://localhost:8983/solr/informesIAEST/select?q=*&group=on&group.field=DescripcionConJerarquia&rows=1000&omitHeader=true&wt=json
		showModalWaiting2();
		$.ajax({
			//url: urlSolr + "?q=*&group=on&group.field=DescripcionConJerarquia&rows=1000&omitHeader=true&wt=json",
			url: urlSolr + "?q=*&rows=2000&omitHeader=true&wt=json",
			async: false,
			complete: function( data ) {
								hideModalWaiting2();
			},
			dataType: "json",
			success: function( data ) {
				$.map(data.response.docs, function (item) {
					addDirectoryReportItem(item);
				});
				str += getDirectoryItems(directoryReportItems);
			}
		});
		$("#queReportTree").html("<ul class=\"cd-accordion-menu animated\">"+str+"</ul>");
		reportTreeLoaded = true;
	}
	$("#quePredefinedZone").fadeOut();
	$("#queReportTreeZone").fadeIn();

/*	
	"<ul class=\"cd-accordion-menu animated\">"+str+"</ul>");
	}
	$("#queItems").addClass("oculto");
	$("#queDirectorio").removeClass("oculto");*/
}

function returnPredefinedQue() {
	$("#queReportTreeZone").fadeOut();
	$("#quePredefinedZone").fadeIn();
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

//Funcion que dado un name devuel
function fromNameToID(name){
	devolver=name.toLowerCase();
	devolver=replaceAll(devolver,'.','');
	devolver=replaceAll(devolver,',','');
	devolver=replaceAll(devolver,';','');
	devolver=replaceAll(devolver,':','');
	devolver=replaceAll(devolver,'ñ','');
	devolver=replaceAll(devolver,'á','a');
	devolver=replaceAll(devolver,'é','e');
	devolver=replaceAll(devolver,'í','i');
	devolver=replaceAll(devolver,'ó','o');
	devolver=replaceAll(devolver,'ú','u');
	devolver=replaceAll(devolver,'@','');
	devolver=replaceAll(devolver,'$','');
	devolver=replaceAll(devolver,'%','');
	devolver=replaceAll(devolver,'&','');
	devolver=replaceAll(devolver,' ','-');
	devolver=replaceAll(devolver,'_','-');
	return devolver;

}

function getDirectoryItems(arr) {
	var str = "";
	if (arr['count'] > 0) {
		//str += "<ul style='list-style:disc; padding-left: 20px;text-align:left;'>";
		for (i in arr) {
			if ((i != "count")
			   && (i != "desc")
			   && (i != "descHierarchy")
			   && (i != "oper")
			   && (i != "value")
			   && (i != "label"))
			{
				if (arr[i]['count'] > 0) {
					idDeI=fromNameToID(i)
					str += '<li class="has-children">	<input type="checkbox" name ="'+idDeI+'" id="'+idDeI+'" ><label for="'+idDeI+'">'+i+'</label><ul>';

					//str += "<li>" + i + "</li>";
					str += getDirectoryItems(arr[i]);
				} else {
					str += "<li><a href='javascript:selectItemDirectoryReports(\"" + arr[i]['label'] + "\", \"" + arr[i]['desc'] + "\", \"" + arr[i]['descHierarchy'] + "\", \"" + arr[i]['oper'] + "\")'>" + i + "</a></li>";
				}
			}
		}
		str += "</ul>";
	}
	return str;
}

function selectItemDirectoryReports(label, desc, descHierarchy, oper) {
	var item = {label: label,
							desc: desc,
							descHierarchy: descHierarchy,
							oper: oper
						}
	$("#queDirectorio").addClass("oculto");
	selectedReportQue(item);
	//dialogQueDirectorio.dialog("close");
}

var directoryReportItems = new Array();
directoryReportItems['count'] = 0;
function addDirectoryReportItem(item) {
	var hierarchyAux = item.DescripcionConJerarquia;
	var hierarchyList = hierarchyAux.trim().split('#');
	var hierarchy = "";

	var directoryItemsArray = directoryReportItems;
	for (var jj = hierarchyList.length-1; jj >= 0; jj--) {
		var currentItem = hierarchyList[jj].trim();
		if (currentItem != "") {
			if (! directoryItemsArray[currentItem]) {
				directoryItemsArray[currentItem] = new Array();
				//directoryItemsArray[currentItem]['_txt'] = currentItem;
				directoryItemsArray[currentItem]['count'] = 0;
				directoryItemsArray['count'] = directoryItemsArray['count']+1;
				directoryItemsArray[currentItem]['desc'] = getSolrPath(item.RutaSinTipo);
				directoryItemsArray[currentItem]['descHierarchy'] = item.DescripcionConJerarquia;
				directoryItemsArray[currentItem]['value'] = item.DescripcionMejorada;
				directoryItemsArray[currentItem]['label'] = item.DescripcionMejorada;
				directoryItemsArray[currentItem]['oper'] = item.Operacion;
				directoryItemsArray = directoryItemsArray[currentItem];
			} else {
				directoryItemsArray = directoryItemsArray[currentItem];
			}
		}
	}

}

function activateOption(id) {
				/*
	if (! $("#" + id + "Option").hasClass("optionSelected")) {
		$("#dondeOption").removeClass("optionSelected");
		$("#queOption").removeClass("optionSelected");
		$("#cuandoOption").removeClass("optionSelected");
		$("#dondePie").removeClass("optionSelected");
		$("#quePie").removeClass("optionSelected");
		$("#cuandoPie").removeClass("optionSelected");
		
		$("#dondeZone").addClass("oculto");
		$("#queZone").addClass("oculto");
		$("#cuandoZone").addClass("oculto");
		$("#dondeZone").slideUp();
		$("#queZone").slideUp();
		$("#cuandoZone").slideUp();
		$("#" + id + "Option").addClass("optionSelected");
		$("#" + id + "Pie").addClass("optionSelected");
		//$("#" + id + "Zone").removeClass("oculto");
		$("#" + id + "Zone").slideDown();
	} else {
		// no op => already selected
	}
	*/

	eval(id + "Modal").open();
	if (id=="donde") {
		if (slider_info == null) {
			slider_info = $('#bxslider_info').bxSlider({"controls": false});
		}

	}
}

/*
function toggleDirectorio() {
	if ($("#directoryShowFilter").hasClass("oculto")) {
		$("#toggleDirectorioImg").attr("src","/public/i/ico_acordeon_up.png");
		$("#directoryShowFilter").removeClass("oculto");
		$("#dondeMunicipioItemsOptions").removeClass("oculto");
		$("#directorioMunicipiosList").removeClass("oculto");
	} else {
		$("#toggleDirectorioImg").attr("src", "/public/i/ico_acordeon_down.png");
		$("#directoryShowFilter").addClass("oculto");
		$("#dondeMunicipioItemsOptions").addClass("oculto");
		$("#directorioMunicipiosList").addClass("oculto");
	}
}
*/
function addNewConditionBlock(territorialType) {
	addNewThemeBlock("condition" + territorialType, conditionDondeCounter[territorialType], territorialType);
	conditionDondeCounter[territorialType] = conditionDondeCounter[territorialType] + 1;
}

function removeNewConditionBlock(territorialType, idx) {
	$("#condition" + territorialType + idx).remove();
	for (var i = (idx+1); i < conditionDondeCounter[territorialType]; i++) {
		updateConditionBlock("condition" + territorialType, i, i - 1);
	}
	conditionDondeCounter[territorialType] = conditionDondeCounter[territorialType] - 1;
	if (conditionDondeCounter[territorialType] == 0) {
		addNewConditionBlock(territorialType);
	}
}

function updateConditionBlock(id, oldIdx, newIdx) {
	if (newIdx == 0) {
		$("#" + id + oldIdx).addClass("themeBlockFirst");
	}
	$("#" + id + oldIdx).attr("id", id + newIdx); 
	$("#dimensionsSearch" + id + oldIdx).attr("id", "dimensionsSearch" + id + newIdx); 
	$("#informeAutocomplete" + id + oldIdx).attr("id", "informeAutocomplete" + id + newIdx); 
	$("#dimensions" + id + oldIdx).attr("id", "dimensions" + id + newIdx); 
	$("#idReport" + id + oldIdx).attr("id", "idReport" + id + newIdx); 
// TODO: update removeCondition button	
	var f = function(foo) {
		selectedReport(newIdx, foo, id);
	}
	searchAutocompleteReport("#informeAutocomplete" + id + newIdx, f);
}

function addNewThemeBlock(id, conditionCounter, territorialType) {
	var str = "<div id='" + id + conditionCounter + "' class='themeBlock";
	if (conditionCounter == 0) {
		str += " themeBlockFirst ";
	}
	str += "'>";
	str += "<div id='remove" + id + conditionCounter + "' class='removeCondition' onclick='javascript:removeNewConditionBlock(\"" + territorialType +"\", " + conditionCounter + ");'>X";
	str += "</div>";
	str += "<div id='dimensionsSearch" + id + conditionCounter + "'>";
	str += "<input type='text' id='informeAutocomplete" + id + conditionCounter + "' class='informeAutocomplete' placeholder='Buscar datos sobre'>";
	str += "</div>";

	str += "<div class='oculto' id='dimensions" + id + conditionCounter + "'>";
	str += "</div>";
	str += "</div>";

	$("#" + id + "Zone").append(str);

	var f = function(foo) {
		selectedReport(conditionCounter, foo, id);
	}
	searchAutocompleteReport("#informeAutocomplete" + id + conditionCounter,  f);
}

function activateSeleccionCondicionada(type) {
	$("#directorio" + type).fadeOut();
	$("#dondeSeleccionCondicionada" + type).fadeIn();
}

function deactivateSeleccionCondicionada(type) {
	$("#dondeSeleccionCondicionada" + type).fadeOut();
	$("#dondeActivateDeactivateZone" + type).fadeOut();
	$("#directorio" + type).fadeIn();
}

function showActivateDeactivate(type) {
	$("#directorio" + type).fadeOut();
	$("#dondeActivateDeactivateZone" + type).fadeIn();
}

function searchAutocompleteReport(id, funSelected) {
	$(id).autocomplete({
		source: function (request, response) {
			$.ajax({
				url: urlSolr,
				data: {
					q: request.term + " " + request.term + "*",
					fq: getSolrFQ(selectedItemsType),
					wt: 'json',
				},
				jsonp: 'json.wrf',
				dataType: "jsonp",
				success: function( data ) {
					response($.map(data.response.docs, function (item) {
						return {
							//label: item.DESCRIPCION,
							//value: item.DIRWEB
							label: item.DescripcionMejorada,
							value: item.DescripcionMejorada,
							descHierarchy: item.DescripcionConJerarquia,
							desc: getSolrPath(item.RutaSinTipo),
							oper: item.Operacion
						};
					}));
				}
			});
		},
		select: function(e, ui) {
			funSelected(ui.item);
				// clear input text
			$(this).val('');
			var inst = $('[data-remodal-id=queZoneModal]').remodal();
			if (inst.getState() != "closed") {
				inst.close();
			}
			return false;
		},
		minLength: 1
	});
}

function getSolrFQ(type) {
	if (type == "Provincia") {
		return "Tipo:TP";
	} else if (type == "Comarca") {
		return "Tipo:TC";
	} else if (type == "Municipio") {
		return "Tipo:TM";
	} else {
		return "Tipo:A";
	}
}
function getSolrPath(path) {
	return path.toUpperCase().replace(/Estadistica Local\//gi,'').replace(/\//g,'-');
}

function clearPreviousSelection() {
	selectedItems = new Array();
	$(".type" + selectedItemsType).removeClass("selected");
	if (svg["#mapPreview" + selectedItemsType]) {
		svg["#mapPreview" + selectedItemsType].selectAll("path").style("fill", unselectedColor);
	}
}

function genericSelection(type, item, arrayNames, updateDataPrev) {
	updateNewTypeSelected(type);

	if (item) {
		if (isValIntoSelectedItems(item)) {
			$(".item" + type + item).removeClass("selected");
			var idx = selectedItems.indexOf(item);
			if (idx != -1) {
				selectedItems.splice(idx, 1);
			} else {
				debugger;
			}

			if (svg["#mapPreview" + type]) {
				svg["#mapPreview" + type].select("#"+item).style("fill", unselectedColor);
				if (item == "M22028") {
					if (isValIntoSelectedItems("M22106")) {
						svg["#mapPreview" + type].select("#M22028").style("fill", selectedColor);
					}
				}
				if (item == "M22106") {
					if (! isValIntoSelectedItems("M22028")) {
						svg["#mapPreview" + type].select("#M22028").style("fill", unselectedColor);
					}
				}
			}
		} else {
			$(".item" + type + item).addClass("selected");
			selectedItems.push(item);
			if (svg["#mapPreview" + type]) {
				svg["#mapPreview" + type].select("#"+item).style("fill", selectedColor);
				if (item == "M22106") {
					svg["#mapPreview" + type].select("#M22028").style("fill", selectedColor);
				}
			}
		}
		if (updateDataPrev) {
			updateSummaryDonde(arrayNames);
			updateDataPreview();
		}
	} else {
		if (type == "Aragon") {
			updateSummaryDonde(null);
			updateDataPreview();
		}
	}
}

// Funcion para redondear un numero decimal a d decimales
function RoundDecimal(num,d) {
	var m = Math.pow(10,d);
	var num2 = num * m;
	return (Math.round(num2) / m) ;
}

function updateSummaryDonde(arrayNames) {
	if (selectedItemsType == "Aragon") {
		$("#dondeOptionResumen").html("Aragón");
		$("#titleAvailableDonde").html("Aragón");
		$("#dondeOptionDetalle").addClass("oculto");
		updateOptionDetalle("", "dondeOptionDetalleTexto");
		$(".infoAboutSelectionSummary").html("Seleccionado Aragón");
		$(".infoAboutSelectionDetail").html("");
		$(".infoAboutSelectionDetail").addClass("oculto");
	} else {
		var pobArray = eval("pob" + selectedItemsType + "List");
		var supArray = eval("sup" + selectedItemsType + "List");
		if (selectedItems.length > 1) {
			str = arrayNames[selectedItems[0]];
			strLista = "<ul><li onclick='javascript:deactivate" + selectedItemsType + "(\"" + selectedItems[0] + "\", true)'>" + arrayNames[selectedItems[0]] + "<p class='d_d'>X</p></li>";
			var pobAcumulada = pobArray[selectedItems[0]];
			var supAcumulada = supArray[selectedItems[0]];
			for (var i = 1; i < selectedItems.length; i++) {
				str += ", " + arrayNames[selectedItems[i]];
				strLista += "<li onclick='javascript:deactivate" + selectedItemsType + "(\"" + selectedItems[i] + "\", true)'>" + arrayNames[selectedItems[i]] + "<p class='d_d'>X</p></li>";
				pobAcumulada += pobArray[selectedItems[i]];
				supAcumulada += supArray[selectedItems[i]];
			}
			str += ".";
			strLista += "</ul>";
			$("#dondeOptionResumen").html(selectedItemsType + " (x" + selectedItems.length + ")");
			$("#titleAvailableDonde").html(selectedItemsType + " (x" + selectedItems.length + ")");
			$("#dondeOptionDetalle").removeClass("oculto");
			updateOptionDetalle(str, "dondeOptionDetalleTexto");
			var genero = "a";
			if (selectedItemsType == "Municipio") {
				genero = "o";
			}
			var strPobSup = "<div class='detail'>La población seleccionada es " + pobAcumulada + " hab que representa un " + RoundDecimal((pobAcumulada / pobAragon)*100, 2) + "% del total.</div>";
			strPobSup += "<div class='detail'>La superficie seleccionada es " + RoundDecimal(supAcumulada,2) + " km&sup2; que representa un " + RoundDecimal((supAcumulada / supAragon)*100, 2) + "% del total.</div>";
			strPobSup += "<div class='nota'>Nota: Valores obtenidos del Nomenclátor 2014</div>";
			$(".infoAboutSelectionSummary").html("Seleccionad" + genero + "s " + selectedItems.length + " " + selectedItemsType + "s" + strPobSup);
			$(".infoAboutSelectionDetail").html(strLista);
			$(".infoAboutSelectionDetail").removeClass("oculto");
		} else if (selectedItems.length == 1) {
			var pobAcumulada = pobArray[selectedItems[0]];
			var supAcumulada = supArray[selectedItems[0]];
			var strPobSup = "<div class='detail'>La población seleccionada es " + pobAcumulada + " hab que representa un " + RoundDecimal((pobAcumulada / pobAragon)*100, 2) + "% del total.</div>";
			strPobSup += "<div class='detail'>La superficie seleccionada es " + RoundDecimal(supAcumulada,2) + " km&sup2; que representa un " + RoundDecimal((supAcumulada / supAragon)*100, 2) + "% del total.</div>";
			strPobSup += "<div class='nota'>Nota: Valores obtenidos del Nomenclátor 2014</div>";
			str = arrayNames[selectedItems[0]];
			$("#dondeOptionResumen").html(str);
			$("#titleAvailableDonde").html(str);
			$("#dondeOptionDetalle").addClass("oculto");
			updateOptionDetalle("", "dondeOptionDetalleTexto");
			$(".infoAboutSelectionSummary").html(selectedItemsType + " " + str + strPobSup);
			$(".infoAboutSelectionDetail").html("");
			$(".infoAboutSelectionDetail").addClass("oculto");
		} else {
			$("#dondeOptionResumen").html("Sin selección");
			$("#titleAvailableDonde").html("Sin selección");
			$("#dondeOptionDetalle").addClass("oculto");
			updateOptionDetalle("", "dondeOptionDetalleTexto");
			$(".infoAboutSelectionSummary").html("Sin selección");
			$(".infoAboutSelectionDetail").html("");
			$(".infoAboutSelectionDetail").addClass("oculto");
		}
	}
}

function toggleOneZoneDonde(type) {
	var id = "#donde" + type;
	$("#dondeAragonItems").addClass("oculto");
	$("#dondeProvinciaItems").addClass("oculto");
	$("#dondeComarcaItems").addClass("oculto");
	$("#dondeMunicipioItems").addClass("oculto");
	$(id+"Items").removeClass("oculto");

	$("#dondeAragon").removeClass("selected");
	$("#dondeProvincia").removeClass("selected");
	$("#dondeComarca").removeClass("selected");
	$("#dondeMunicipio").removeClass("selected");
	$(id).addClass("selected");

	$("#mapPreviewAragon").addClass("oculto");
	$("#mapPreviewProvincia").addClass("oculto");
	$("#mapPreviewComarca").addClass("oculto");
	$("#mapPreviewMunicipio").addClass("oculto");
	$("#mapPreview" + type).removeClass("oculto");

	updateNewTypeSelected(type);
}

function showAragon() {
	selAragon();
	toggleOneZoneDonde("Aragon");
}

function showProvincia() {
	if (! alreadyLoadedP) {
		loadMap("#mapPreviewProvincia", urlJson + "T02_Provincias_4326.topojson.json", itemClickedP, getColorSelectedP, getIdP, "T02_Provincias_4326", "#CCC", 0.2, highlightFillColor, true, funTextProvincia);
		alreadyLoadedP = true;
	}
	toggleOneZoneDonde("Provincia");
}

function showComarca() {
	if (! alreadyLoadedC) {
		loadMap("#mapPreviewComarca", urlJson + "T02_Comarcas_4326.topojson.json", itemClickedC, getColorSelectedC, getIdC, "T02_Comarcas_4326", "#CCC", 0.2, highlightFillColor, true, funTextComarca);
		alreadyLoadedC = true;
	}
	toggleOneZoneDonde("Comarca");
}

function showMunicipio() {
	if (! alreadyLoadedM) {
		loadMap("#mapPreviewMunicipio", urlJson + "T02_Municipios_4326.topojson.json", itemClickedM, getColorSelectedM, getIdM, "collection", "#CCC", 0.2, highlightFillColor, true, funTextMunicipio);
		alreadyLoadedM = true;
	}


	toggleOneZoneDonde("Municipio");

	createSliderDirectorioMunicipio();
	updateDirectorioMunicipio();
	updateListMunicipio(previousFirstLetterSelected, false);
}

function createSliderDirectorioMunicipio() {
	if (slider_municipioA == null) {
		$("#dondeMunicipioItemsOptions_8columns_A").removeClass("oculto");
		slider_municipioA = $('#bxslider_municipioA').bxSlider({"controls": false});
		$("#dondeMunicipioItemsOptions_8columns_A").addClass("oculto");
	}
	if (slider_municipioB == null) {
		$("#dondeMunicipioItemsOptions_8columns_B").removeClass("oculto");
		slider_municipioB = $('#bxslider_municipioB').bxSlider({"controls": false});
		$("#dondeMunicipioItemsOptions_8columns_B").addClass("oculto");
	}
	if (slider_municipioC == null) {
		$("#dondeMunicipioItemsOptions_8columns_C").removeClass("oculto");
		slider_municipioC = $('#bxslider_municipioC').bxSlider({"controls": false});
		$("#dondeMunicipioItemsOptions_8columns_C").addClass("oculto");
	}
	if (slider_municipioL == null) {
		$("#dondeMunicipioItemsOptions_8columns_L").removeClass("oculto");
		slider_municipioL = $('#bxslider_municipioL').bxSlider({"controls": false});
		$("#dondeMunicipioItemsOptions_8columns_L").addClass("oculto");
	}
}


/*
	var columnNumber = 1;
	var itemCount = 0;
*/
function updateListComarca() {
	var str = "";
	var columnNumber = 1;
	var itemCount = 0;
	for (var i in dComList) {
		var item = dComList[i];
		str += '<li id="itemComarca' + i + '" class="elipsis typeMunicipio';
		if (isValIntoSelectedItems(i)) {
			str += ' selected ';
		}
		str += '" onclick="javascript:selComarca(\'' + i + '\', true)">'+item+'</li>';
		itemCount++;
		if (itemCount == 17) {
			itemCount = 0;
			$("#dondeComarcaType" + columnNumber).html(str);
			str = "";
			columnNumber++;
		}
	}
	if (itemCount != 0) {
		$("#dondeComarcaType" + columnNumber).html(str);
	}
}

/*
function activateAllItems() {
	var territorialUnit = $("#comboActivateAll").val();
}
*/

function updateDirectorioMunicipio() {
	var str = "";
	//var territorialUnit = $("#comboFiltroUnidadTerritorial").val();
	var territorialUnit = "A";
	for (var i = 65; i <= 90; i++) {
		var item = String.fromCharCode(i);
		if (dMuniListFirstLetter[territorialUnit][item]) {
			str += '<li id="directorioLetra' + item + '" class="letra" onclick="javascript:updateListMunicipio(\'' + item + '\', false)">' + item + '</li>';
		} else {
			str += '<li class="letra">-</li>';
		}
	}
	$("#directorioMunicipiosList").html(str);
	$("#directorioLetra" + previousFirstLetterSelected).addClass("selected");
}

function genericActivate(item, type, updateDataPrev) {
	var funSel = eval("sel" + type);
	if (item) {
		if (! isValIntoSelectedItems(item)) {
			funSel(item, updateDataPrev);
		} else {
			// do nothing
		}
	}
}

function genericDeactivate(item, type, updateDataPrev) {
	var funSel = eval("sel" + type);
	if (item) {
		if (isValIntoSelectedItems(item)) {
			funSel(item, updateDataPrev);
		} else {
			// do nothing
		}
	}
}
function activateProvincia(item, updateDataPrev) { genericActivate(item, "Provincia", updateDataPrev); }
function deactivateProvincia(item, updateDataPrev) { genericDeactivate(item, "Provincia", updateDataPrev); }
function activateComarca(item, updateDataPrev) { genericActivate(item, "Comarca", updateDataPrev); }
function deactivateComarca(item, updateDataPrev) { genericDeactivate(item, "Comarca", updateDataPrev); }
function activateMunicipio(item, updateDataPrev) { genericActivate(item, "Municipio", updateDataPrev); }
function deactivateMunicipio(item, updateDataPrev) { genericDeactivate(item, "Municipio", updateDataPrev); }

function updateNewTypeSelected(newType) {
	if (selectedItemsType != newType) {
		clearPreviousSelection();
		selectedItemsType = newType;
		updateTemporalAvailability($("#idReportQue").val());
	}

	if ($("#mapPreview" + newType).hasClass("oculto")) {
		$("#mapPreviewAragon").addClass("oculto");
		$("#mapPreviewProvincia").addClass("oculto");
		$("#mapPreviewComarca").addClass("oculto");
		$("#mapPreviewMunicipio").addClass("oculto");
		$("#mapPreview" + newType).removeClass("oculto");
	}
}

function applyDeacActivateAll() {
	var territorialUnitCode = $("#comboDeacActivateAll").val();
	applyDeacActivate(territorialUnitCode);
}

function applyDeacActivate(territorialUnitCode) {
	var activateType = $("#comboDeacActivateType").val();
	showModalWaiting2();
	updateNewTypeSelected("Municipio");

	var fun = "";
	if (activateType == "activate") {
		fun = activateMunicipio;
	} else if (activateType == "deactivate") {
		fun = deactivateMunicipio;
	} else {
			// No debería ocurrir
		debugger;
		return false;
	}

	for (var i = 65; i <= 90; i++) {
		var firstLetter = String.fromCharCode(i);
		if (dMuniListFirstLetter[territorialUnitCode][firstLetter]) {
			for (var j in dMuniListFirstLetter[territorialUnitCode][firstLetter]) {
				var item = dMuniListFirstLetter[territorialUnitCode][firstLetter][j];
				var cmuniItem = cMuniList[normalizaCadena(item).toUpperCase()];
				fun(cmuniItem, false);
			}
		}
	}
	updateSummaryDonde(dMuniList);
	updateDataPreview();
	hideModalWaiting2();
}

function clearDondeMunicipioType() {
	for (var columnNumber = 1; columnNumber <= 4; columnNumber++) {
		$("#dondeMunicipioType" + columnNumber).html("");
	}
}

function isValIntoSelectedItems(val) {
	for (var idx = 0; idx < selectedItems.length; idx++) {
		if (val == selectedItems[idx]) {
			return true;
		}
	}
	return false;
}

var previousFirstLetterSelected = "A";
function updateListMunicipio(newFirstLetter, isInitializing) {
	var str = "";
	//var territorialUnit = $("#comboFiltroUnidadTerritorial").val();
	var territorialUnit = "A";
	var territorialUnitType = territorialUnit.charAt(0);

	$("#directorioLetra" + previousFirstLetterSelected).removeClass("selected");
	$("#directorioLetra" + newFirstLetter).addClass("selected");

	clearDondeMunicipioType();

	if (is8ColumnLetter(newFirstLetter)) {
		$(".dondeMunicipioItemsOptions_4columns").addClass("oculto");
		$(".dondeMunicipioItemsOptions_8columns").addClass("oculto");
		$("#dondeMunicipioItemsOptions_8columns_" + newFirstLetter).removeClass("oculto");
	} else {
		$(".dondeMunicipioItemsOptions_8columns").addClass("oculto");
		$(".dondeMunicipioItemsOptions_4columns").removeClass("oculto");
	}

	var mustUpdate = true;
	var numberOfColumns = "4";
	if (is8ColumnLetter(newFirstLetter)) {
		numberOfColumns = "8" + newFirstLetter;
		if (isInitializing) {
			mustUpdate = true;
		}
	}
	
	if (mustUpdate) {
		var columnNumber = 1;
		var itemCount = 0;
		for (var i in dMuniListFirstLetter[territorialUnit][newFirstLetter]) {
			var item = dMuniListFirstLetter[territorialUnit][newFirstLetter][i];
			var cmuniItem = cMuniList[normalizaCadena(item).toUpperCase()];
			str += '<li id="itemMunicipio' + cmuniItem + '" class="itemMunicipio' + cmuniItem + ' elipsis typeMunicipio';
			if (isValIntoSelectedItems(cmuniItem)) {
				str += ' selected ';
			}
			str += '" onclick="javascript:selMunicipio(\'' + cmuniItem + '\', true)">'+item+'</li>';
			itemCount++;
			if (itemCount == MAX_ITEMS_PER_COLUMN) {
				itemCount = 0;
				$("#dondeMunicipioType" + numberOfColumns + "_" + columnNumber).html(str);
				str = "";
				columnNumber++;
			}
		}
		if (itemCount != 0) {
			$("#dondeMunicipioType" + numberOfColumns + "_" + columnNumber).html(str);
			columnNumber++;
		}

			// empty following columns
		for (j = columnNumber; j <= 4; j++) {
			$("#dondeMunicipioType" + numberOfColumns + "_" + j).html("");
		}

		/*
		if (is8ColumnLetter(newFirstLetter)) {
			aux = $('#bxslider_municipio').bxSlider({"controls": false});
			eval("slider_municipio" + newFirstLetter + " = aux;"); 
		}
		*/
	}

	previousFirstLetterSelected = newFirstLetter;
}

function is8ColumnLetter(character) {
	if (character == "A") {
		return true;
	}
	if (character == "B") {
		return true;
	}
	if (character == "C") {
		return true;
	}
	if (character == "L") {
		return true;
	}
	return false;
}

function alertDialogModal(txt, title) {
				/*
	dialogLog = $('<div></div>')
		.html(txt)
		.dialog({
			autoOpen: true,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			},
			closeOnEscape: false,
			open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
			title: title,
			modal: true,
			width: "300"
		});*/

				alert(txt)
}

dialogWait2 = $('<div>xx</div>')
	.html("Cargando... Espere por favor...")
	.dialog({
		autoOpen: false,
		closeOnEscape: false,
		open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
		title: "Cargando... Espere por favor...",
		modal: true,
		width: "100%",
		height: "100%"
	});

function showModalWaiting2() {
	//dialogWait2.dialog("open");
}

function hideModalWaiting2() {
	//dialogWait2.dialog("close");
}

function updateRecentItems(etiqueta,  descripcion, descHierarchy, oper){
		// check if it is different from previous
	if (etiqueta != getCookie("recentReportLabel1")) {
		if (etiqueta != getCookie("recentReportLabel2")) {
			$('#recentReport3').html($('#recentReport2').html());
			$('#recentReport2').html($('#recentReport1').html());
			$('#recentReport1').html('<a href="javascript:selectItemDirectoryReports(\'' + etiqueta + '\', \'' + descripcion + '\', \'' + descHierarchy + '\', \'' + oper + '\')" title="' + etiqueta + '" class="i_i">' + etiqueta + '</a>\n');
		}
	}
}

function updateRecentCookie(etiqueta,  descripcion, descHierarchy, oper){
		// check if it is different from previous
	if (etiqueta != getCookie("recentReportLabel1")) {
		if (etiqueta != getCookie("recentReportLabel2")) {
			setCookie("recentReportLabel3", getCookie("recentReportLabel2"));
			setCookie("recentReportLabel2", getCookie("recentReportLabel1"));
			setCookie("recentReportLabel1", etiqueta);

			setCookie("recentReportDescription3", getCookie("recentReportDescription2"));
			setCookie("recentReportDescription2", getCookie("recentReportDescription1"));
			setCookie("recentReportDescription1", descripcion);

			setCookie("recentReportDescHierarchy3", getCookie("recentReportDescHierarchy2"));
			setCookie("recentReportDescHierarchy2", getCookie("recentReportDescHierarchy1"));
			setCookie("recentReportDescHierarchy1", descHierarchy);

			setCookie("recentReportOper3", getCookie("recentReportOper2"));
			setCookie("recentReportOper2", getCookie("recentReportOper1"));
			setCookie("recentReportOper1", oper);
		}
	}
}

//Funcion que añade a la base de datosel que se ha visitado, para poder hacer estadísticas
function cargaDatos(etiqueta,  descripcion, descHierachy, oper){
	//Obtenemos la info del cliente

	var datos;
	$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
		datos = data
		var ip_info = datos;
		var ip= ip_info.geobytesipaddress;
		var lat = ip_info.geobyteslatitude;
		var lon = ip_info.geobyteslongitude;
		var ciudad = ip_info.geobytescity;
		var region = ip_info.geobytesregion;
		var pais = ip_info.geobytescountry;
		descHierachy=replaceAll(descHierachy,'#','>');
		var parametros='label='+ etiqueta +'&description=' + descripcion + '&descHierachy=' + descHierachy + '&ip=' + ip + '&latitud=' + lat + '&longitud=' + lon +'&ciudad=' + ciudad +'&region=' +region + '&pais=' + pais + '&oper=' + oper;
		var url_completa = URL_insert_API+parametros;
		var respuesta;
		$.getJSON(URL_insert_API+parametros, function(data) {
			respuesta = data;
			if (respuesta.response == "OK"){
				console.log('Se ha metido los datos en la base de datos');
			}
			else {
				console.log('Hay error en '+respuesta.error+'.');
			}
		});
	});
}
