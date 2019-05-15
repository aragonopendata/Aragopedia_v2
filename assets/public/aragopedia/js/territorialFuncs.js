var alreadyLoadedP = false;
var alreadyLoadedC = false;
var alreadyLoadedM = false;

var selectedColor = "rgb(82,119,128)"; //"#77A1BA";
var unselectedColor = "rgb(118,161,184)"; //"#76a1b8";
//var highlightFillColor = "#b9270b";
var highlightFillColor = "#666359";

var selectedColorLabel = "#000";

function funTextAragon() {
	return "Aragón";
}

function funTextProvincia(dprop) {
	if (dProvList[dprop.CPROV]) {
		return dProvList[dprop.CPROV];
	}
	return "";
}

function funTextComarca(dprop) {
	if (dComList[dprop.C_COMARCA]) {
		return dComList[dprop.C_COMARCA];
	}
	return "";
}

function funTextMunicipio(dprop) {
	if (dMuniList[dprop.CMUNINE]) {
		return dMuniList[dprop.CMUNINE];
	}
	return "";
}

var itemClickedA = function (d) {
	genericSelection("Aragon", null, null, true);
}

var itemClickedP = function (d) {
	genericSelection("Provincia", d.properties.CPROV, dProvList, true);
}

var itemClickedC = function (d) {
	genericSelection("Comarca", d.properties.C_COMARCA, dComList, true);
}

var itemClickedM = function (d) {
	genericSelection("Municipio", d.properties.CMUNINE, dMuniList, true);
		// tratar Ansó y Fago => solo está en d3 Ansó, pero se muestran conjuntamente
	if (d.properties.CMUNINE == "M22028") {
		if (isValIntoSelectedItems("M22028")) {
			if (! isValIntoSelectedItems("M22106")) {
					// Activó Ansó y Fago no estaba activado => activar Fago
				genericSelection("Municipio", "M22106", dMuniList, true);
			}
		} else {
			if (isValIntoSelectedItems("M22106")) {
					// Desactivó Ansó y Fago estaba activado => desactivar Fago
				genericSelection("Municipio", "M22106", dMuniList, true);
			}
		}
	}
}

var getColorSelectedA = function (item) {
	return selectedColor;
}

var getColorSelectedP = function (item) {
	return genericGetColorSelected(item.properties.CPROV);
}

var getColorSelectedC = function (item) {
	return genericGetColorSelected(item.properties.C_COMARCA);
}

var getColorSelectedM = function (item) {
	return genericGetColorSelected(item.properties.CMUNINE);
}

var getIdA = function (item) {
	return  item.properties.CPROV;
}

var getIdP = function (item) {
	return item.properties.CPROV;
}

var getIdC = function (item) {
	return item.properties.C_COMARCA;
}

var getIdM = function (item) {
	return item.properties.CMUNINE;
}

function genericGetColorSelected(val) {
	if (isValIntoSelectedItems(val)) {
		return selectedColor;
	} else {
		if (val == "M22028") {
			if (isValIntoSelectedItems("M22106")) {
				return selectedColor;
			}
		}
		return unselectedColor;
	}
}


function selAragon() {
	genericSelection("Aragon", null, null, true);
}

function selProvincia(item, updateDataPrev) {
	if (! alreadyLoadedP) {
		loadMap("#mapPreviewProvincia", urlJson + "T02_Provincias_4326.topojson.json", itemClickedP, getColorSelectedP, getIdP, "T02_Provincias_4326", "#CCC", 0.2, highlightFillColor, true, funTextProvincia);
		alreadyLoadedP = true;
	}

	genericSelection("Provincia", item, dProvList, updateDataPrev);
}

function selComarca(item, updateDataPrev) {
	if (! alreadyLoadedC) {
		loadMap("#mapPreviewComarca", urlJson + "T02_Comarcas_4326.topojson.json", itemClickedC, getColorSelectedC, getIdC, "T02_Comarcas_4326", "#CCC", 0.2, highlightFillColor, true, funTextComarca);
		alreadyLoadedC = true;
	}
	genericSelection("Comarca", item, dComList, updateDataPrev);
}

function selMunicipio(item, updateDataPrev) {
	if (! alreadyLoadedM) {
		loadMap("#mapPreviewMunicipio", urlJson + "T02_Municipios_4326.topojson.json", itemClickedM, getColorSelectedM, getIdM, "collection", "#CCC", 0.2, highlightFillColor, true, funTextMunicipio);
		alreadyLoadedM = true;
	}

	genericSelection("Municipio", item, dMuniList, updateDataPrev);
}