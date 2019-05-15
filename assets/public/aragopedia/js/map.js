var svg = new Array();

var maxLengthByLineLabel = 12;

function loadMap(idDiv, urlJson, funClick, funColor, funGetId, nombreId, strokeColor, strokeOpacity, highlightColor, includeLabel, funText) {
	
	d3.json(urlJson, function(error, items) {

		if (error) return console.error(error);
		var width = 306,
		height = 403;
		var center = new Array();
		center[0] = -2160.8114783630382;
		center[1] = 41.4563507613297;
		var offset = [width/2, height/2];
		var projection = d3.geo.mercator().scale(5250).center(center).translate(offset);

		var path = d3.geo.path().projection(projection);

		svg[idDiv] = d3.select(idDiv)
		.append("svg")
		.attr("width", width)
		.attr("height", height);

		svg[idDiv].append("g").attr("id", nombreId)
	    .selectAll("path")
	    .data(topojson.feature(items, eval("items.objects."+nombreId)).features)
	    .enter()
		.append("path")
	  	.attr("d", path)
		.attr("id", function(d) {
			return funGetId(d);
		})
		.on("click", function (d,i) {
			funClick(d); 
		})
		.on("mouseover", function(d,i) {
			d3.select(this.parentNode.appendChild(this)).transition().duration(300).style({'cursor':'pointer','fill':highlightColor});
			if (nombreId != 'T02_Aragon_4326') {
				var aux = d3.select("#" + nombreId + "Label").selectAll("." + this.id);
			}
			if (aux) {
				if (aux[0]) {
					if (aux[0][0]) {
						aux[0][0].attributes.fill.value = selectedColorLabel;
					}
					if (aux[0][1]) {
						aux[0][1].attributes.fill.value = selectedColorLabel;
					}
				}
			}
		})
		.on("mouseout", function(d,i) {
			d3.select(this.parentNode.appendChild(this)).transition().duration(100)
			.style("stroke", strokeColor)
			.style("stroke-width", "1px")
			.style("stroke-opacity", strokeOpacity)
			.style("fill", function (d,i) {
				return funColor(d);
			})
			if (nombreId != 'T02_Aragon_4326') {
				var aux = d3.select("#" + nombreId + "Label").selectAll("." + this.id);
			}
			if (aux) {
				if (aux[0]) {
					if (aux[0][0]) {
						aux[0][0].attributes.fill.value = "transparent";
					}
					if (aux[0][1]) {
						aux[0][1].attributes.fill.value = "transparent";
					}
				}
			}
		})
		.style("stroke", strokeColor)
		.style("stroke-width", "1px")
		.style("stroke-opacity", strokeOpacity)
		.style("fill", function (d,i) {
			return funColor(d);
		})


		if (includeLabel) {
			var txtItem = svg[idDiv].append("g").attr("id", nombreId + "Label")
			.selectAll("path")
		    	.data(topojson.feature(items, eval("items.objects."+nombreId)).features)
	  		.enter()
			.append("svg:text");

			txtItem.append("svg:tspan")
			.text(function(d){
				return firstPartLabel(funText(d.properties));
				})
		  	.attr("x", function(d){
				return path.centroid(d)[0];
			})
			.attr("y", function(d){
				return  path.centroid(d)[1];
		  	})
		  	.attr("class", function(d){
				return funGetId(d) + " tooltipMap";
			})
			.attr("text-anchor","middle")
			.attr('fill', 'transparent');

			txtItem.append("svg:tspan")
			.text(function(d){
				return secondPartLabel(funText(d.properties));
				})
		  	.attr("x", function(d){
			  return path.centroid(d)[0];
				})
				.attr("y", function(d){
	  		return  path.centroid(d)[1] + 20;
		  	})
		  	.attr("class", function(d){
				return funGetId(d) + " tooltipMap";
			})
			.attr("text-anchor","middle")
			.attr('fill', 'transparent');
		}
	});
}

function firstPartLabel(txt) {
	var beginPos = 0;
	var endPos = txt.length-1;

	var partsTxt = txt.split(/[\/\- ]/);
	var currentLength = 0;

	for (var i = 0; i < partsTxt.length; i++) {
		endPos = currentLength + partsTxt[i].length + 1;

		if (endPos < maxLengthByLineLabel) {
						// +1 due to separator
			currentLength += partsTxt[i].length + 1;
		} else {
			return txt.substring(0, currentLength);
		}
	}
	return txt.substring(0, currentLength);
}

function secondPartLabel(txt) {
	var beginPos = 0;
	var endPos = txt.length-1;

	var partsTxt = txt.split(/[\/\- ]/);
	var currentLength = 0;

	for (var i = 0; i < partsTxt.length; i++) {
		endPos = currentLength + partsTxt[i].length + 1;

		if (endPos < maxLengthByLineLabel) {
						// +1 due to separator
			currentLength += partsTxt[i].length + 1;
		} else {
			beginPos = currentLength;
			break;
		}
	}

	if (currentLength == endPos) {
		return "";
	} else {
		if ((beginPos+maxLengthByLineLabel) >= txt.length) {
			return txt.substring(beginPos, beginPos+maxLengthByLineLabel);
		} else {
				// -3 due to "..."
			return txt.substring(beginPos, beginPos+(maxLengthByLineLabel-3))+"...";
		}
	}
}