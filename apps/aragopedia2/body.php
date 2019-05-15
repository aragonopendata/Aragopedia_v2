

	<div class="huecoInicioPagina"></div>
	<div class="separadorContenidoPagina"></div>
	<div class="clear"></div>

	<div class="separadorContenidoPagina"></div>

	<div class="pagina">
		<div>
			<div class="huecoInicioPagina"></div>
			<h1 class="azul i_i">Aragopedia: Los datos</h1>
			<div class="huecoInicioPagina"></div>
			<div class="descripcionTitulo1 i_i grisMedio">Busca toda la estadística local en tres pasos</div>
			<div class="huecoInicioPagina"></div>

			<div class="contenido">
			<div class="row menuBancoDatos">
			<div class="col-sm-4 first">
			<div id="donde">
					<div class="cabecera titulosSecundariosNegritas">D&Oacute;NDE</div>
					<div class="option" id="dondeOption" onclick="javascript:activateOption('donde');">
						<div class="optionResumen elipsis optionOneLine" id="dondeOptionResumen">
							Aragón
						</div>
						<div class="optionDetalle oculto" id="dondeOptionDetalle">
							<div class="optionDetalleTexto" id="dondeOptionDetalleTexto"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-4 second">
			<div id="que">
					<div class="cabecera titulosSecundariosNegritas">QUÉ</div>
					<div class="option" id="queOption" onclick="javascript:activateOption('que');">
						<div class="optionResumen optionTwoLines" id="queOptionResumen">
							Cifras oficiales de población anuales desde 1996
						</div>
						<div class="optionDetalle" id="queOptionDetalle">
							<div class="optionDetalleTexto optionDetalleTextoTwoLines" id="queOptionDetalleTexto">
								Demografía y Población &gt; Cifras de población y Censos demográficos &gt; Datos históricos &gt; Series...
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-4 last">
			<div id="cuando">
					<div class="cabecera titulosSecundariosNegritas">CUÁNDO</div>
					<div class="option" id="cuandoOption" onclick="javascript:activateOption('cuando');">
						<div class="optionResumen optionOneLine elipsis " id="cuandoOptionResumen">
							1996 - 2018
						</div>
						<div class="optionDetalle oculto" id="cuandoOptionDetalle">
							<div class="optionDetalleTexto" id="cuandoOptionDetalleTexto"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

				<div class="huecoInicioPagina"></div>
				<div id="dondeZone" class="remodal" data-remodal-id="dondeZoneModal" role="dialog">
					<div class="modalInner">
						<div class="titleBDAZone">DÓNDE
							<button data-remodal-action="close" class="aplybutton">Aplica y cierra</button>
						</div>
						<div class="clear_i"></div>
						<div class="descripcionTitulo1 i_i grisMedio">
							<div class="descripcionTitulo1_mini">Selecciona los territorios de los que quieres datos</div>
						</div>
						<div class="huecoInicioPagina"></div>

						<div class="clear_i"></div>
				
						<ul class="dondeTypes">
							<li class="type first selected" id="dondeAragon" onclick="javascript:showAragon()">
								TODO ARAGÓN
							</li>
							<li class="type second" id="dondeProvincia" onclick="javascript:showProvincia()">
								PROVINCIAS
							</li>
							<li class="type third" id="dondeComarca" onclick="javascript:showComarca()">
								COMARCAS
							</li>
							<li class="type fourth lastType" id="dondeMunicipio" onclick="javascript:showMunicipio()">
								MUNICIPIOS
							</li>
						</ul>
						<div id="dondeAragonItems"></div>
						<div id="dondeProvinciaItems" class="oculto">
							<div id="directorioProvincia">
								<ul class="dondeProvinciaType">
									<li class="typeProvincia first" id="itemProvinciaP22" onclick="javascript:selProvincia('P22', true)">
										HUESCA
									</li>
									<li class="typeProvincia second" id="itemProvinciaP50" onclick="javascript:selProvincia('P50', true)">
										ZARAGOZA
									</li>
									<li class="typeProvincia third lastProvinciaType" id="itemProvinciaP44" onclick="javascript:selProvincia('P44', true)">
										TERUEL
									</li>
								</ul>
								<div class="huecoInicioPagina"></div>
						
								<div class="dondeBottomLinks">
									<a href="javascript:activateSeleccionCondicionada('Provincia');" class="i_i">
										Ir a selección avanzada para acceder a más filtros de búsqueda
									</a>
								</div>
							</div>
							<div id="dondeSeleccionCondicionadaProvincia" style="display:none;">
								<div id="dondeSeleccionCondicionadaItemsProvincia" class="dondeSeleccionCondicionadaItems">
									<div class="subtitleBDAZone">SELECCIÓN AVANZADA</div>
									<div class="dondeSeleccionCondicionadaQuestion">
										<p class="textosNormales i_i">Provincias que cumplen</p>
										<select id="dondeSeleccionCondicionadaLogicalProvincia" class="comboFiltro dondeSeleccionCondicionadaLogical i_i">
											<option value="AND">todas</option>
											<option value="OR">alguna de</option>
										</select>
										<p class="textosNormales i_i">las condiciones</p>
									</div>
									<div id="conditionProvinciaZone" class="conditionZone"></div>
								</div>
								<div class="selCondicionada">
									<div id="selCondicionadaAddProvincia" class="selCondicionadaAdd">
										<div class="addCondition" onclick="javascript:addNewConditionBlock('Provincia')">
											AÑADIR OTRA CONDICIÓN
										</div>
										<div class="aplicar" onclick="javascript:applyCondicionada()">
											APLICAR CONDICIONES
										</div>
									</div>
								</div>
								<div class="huecoInicioPagina"></div>
								<div class="dondeBottomLinks">
									<a href="javascript:deactivateSeleccionCondicionada('Provincia');" class="i_i">
										Volver al directorio para buscar únicamente por nombre
									</a>
								</div>
							</div>
						</div>
						<div id="dondeComarcaItems" class="oculto">
							<div id="directorioComarca">
								<ul class="dondeComarcaType" id="dondeComarcaType1"></ul>
								<ul class="dondeComarcaType" id="dondeComarcaType2"></ul>
								<div class="huecoInicioPagina"></div>
								<div class="huecoInicioPagina"></div>
								<div class="dondeBottomLinks">
									<a href="javascript:activateSeleccionCondicionada('Comarca');" class="i_i">
										Ir a selección avanzada para acceder a más filtros de búsqueda
									</a>
								</div>
							</div>
							<div id="dondeSeleccionCondicionadaComarca" style="display:none;">
								<div id="dondeSeleccionCondicionadaItemsComarca" class="dondeSeleccionCondicionadaItems">
									<div class="subtitleBDAZone">SELECCIÓN AVANZADA</div>
									<div class="dondeSeleccionCondicionadaQuestion">
										<p class="textosNormales i_i">Comarcas que cumplen</p>
										<select id="dondeSeleccionCondicionadaLogicalComarca" class="comboFiltro dondeSeleccionCondicionadaLogical i_i">
											<option value="AND">todas</option>
											<option value="OR">alguna de</option>
										</select>
										<p class="textosNormales i_i">las condiciones</p>
									</div>
									<div id="conditionComarcaZone" class="conditionZone"></div>
								</div>
								<div class="selCondicionada">
									<div id="selCondicionadaAddComarca" class="selCondicionadaAdd">
										<div class="addCondition" onclick="javascript:addNewConditionBlock('Comarca')">
											AÑADIR OTRA CONDICIÓN
										</div>
										<div class="aplicar" onclick="javascript:applyCondicionada()">
											APLICAR CONDICIONES
										</div>
									</div>
								</div>
								<div class="huecoInicioPagina"></div>
								<div class="dondeBottomLinks">
									<a href="javascript:deactivateSeleccionCondicionada('Comarca');" class="i_i">
										Volver al directorio para buscar únicamente por nombre
									</a>
								</div>
							</div>
						</div>
						<div id="dondeMunicipioItems" class="oculto">
							<div id="directorioMunicipio">
								<div class="directorioMunicipios">
									<div class="i_i">
										<ul class="dondeMuniInitialType" id="directorioMunicipiosList"></ul>
									</div>
									<div class="d_d oculto" id="directoryShowFilter"></div>
								</div>
								<div class="" id="dondeMunicipioItemsOptions">
									<div class="dondeMunicipioItemsOptions_8columns" id="dondeMunicipioItemsOptions_8columns_A">
										<ul class="bxslider" id="bxslider_municipioA">
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_1"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_2"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_3"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_4"></ul>
												</div>
											</li>
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_5"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_6"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_7"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8A_8"></ul>
												</div>
											</li>
										</ul>
									</div>
									<div class="dondeMunicipioItemsOptions_8columns" id="dondeMunicipioItemsOptions_8columns_B">
										<ul class="bxslider" id="bxslider_municipioB">
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_1"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_2"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_3"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_4"></ul>
												</div>
											</li>
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_5"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_6"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_7"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8B_8"></ul>
												</div>
											</li>
										</ul>
									</div>
									<div class="dondeMunicipioItemsOptions_8columns" id="dondeMunicipioItemsOptions_8columns_C">
										<ul class="bxslider" id="bxslider_municipioC">
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_1"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_2"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_3"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_4"></ul>
												</div>
											</li>
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_5"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_6"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_7"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8C_8"></ul>
												</div>
											</li>
										</ul>
									</div>
									<div class="dondeMunicipioItemsOptions_8columns" id="dondeMunicipioItemsOptions_8columns_L">
										<ul class="bxslider" id="bxslider_municipioL">
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_1"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_2"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_3"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_4"></ul>
												</div>
											</li>
											<li>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_5"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_6"></ul>
												</div>
												<div class="dondeMunicipioItemsOptions_2columns">
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_7"></ul>
													<ul class="dondeMunicipioType" id="dondeMunicipioType8L_8"></ul>
												</div>
											</li>
										</ul>
									</div>
									<div class="oculto dondeMunicipioItemsOptions_4columns">
										<div class="dondeMunicipioItemsOptions_2columns">
											<ul class="dondeMunicipioType" id="dondeMunicipioType4_1"></ul>
											<ul class="dondeMunicipioType" id="dondeMunicipioType4_2"></ul>
										</div>
										<div class="dondeMunicipioItemsOptions_2columns">
											<ul class="dondeMunicipioType" id="dondeMunicipioType4_3"></ul>
											<ul class="dondeMunicipioType" id="dondeMunicipioType4_4"></ul>
										</div>
									</div>
								</div>

								<div class="huecoInicioPagina"></div>
								<div class="dondeBottomLinks">
									<a href="javascript:showActivateDeactivate('Municipio');" class="i_i">
										Activar / desactivar todos los de una provincia o comarca
									</a><br>
									<div class="huecoInicioPagina"></div>
										<a href="javascript:activateSeleccionCondicionada('Municipio');" class="i_i">
											Ir a selección avanzada para acceder a más filtros de búsqueda
										</a>
									</div>
									<div class="huecoInicioPagina"></div>
								</div>
								<div id="dondeActivateDeactivateZoneMunicipio" style="display:none;">
									<div class="activateDeactivateZone">
										<div class="i_i">
											<select id="comboDeacActivateType">
												<option value="activate">Activar</option>
												<option value="deactivate">Desactivar</option>
											</select>
										</div>
										<div class="i_i">
											los municipios de:&nbsp;
										</div>
										
										<div class="huecoInicioPagina"></div>
										<ul>
											<li onclick="javascript:applyDeacActivate('A');">Todo Aragón</a></li>
										</ul>
										<ul>
											<li onclick="javascript:applyDeacActivate('P22');">Provincia de Huesca</a></li>
										</ul>
										<ul>
											<li onclick="javascript:applyDeacActivate('P44');">Provincia de Teruel</a></li>
										</ul>
										<ul>
											<li onclick="javascript:applyDeacActivate('P50');">Provincia de Zaragoza</a></li>
										</ul>
										<div class="huecoInicioPagina"></div>
										<div class="dondeMunicipioItemsOptions_2columns">
											<ul>
												<li onclick="javascript:applyDeacActivate('C2');">Alto Gállego</a></li>
												<li onclick="javascript:applyDeacActivate('C27');">Andorra - Sierra de Arcos</a></li>
												<li onclick="javascript:applyDeacActivate('C14');">Aranda</a></li>
												<li onclick="javascript:applyDeacActivate('C28');">Bajo Aragón</a></li>
												<li onclick="javascript:applyDeacActivate('C19');">Bajo Aragón - Caspe / Baix Aragó - Casp</a></li>
												<li onclick="javascript:applyDeacActivate('C11');">Bajo Cinca / Baix Cinca</a></li>
												<li onclick="javascript:applyDeacActivate('C23');">Bajo Martín</a></li>
												<li onclick="javascript:applyDeacActivate('C22');">Campo de Belchite</a></li>
												<li onclick="javascript:applyDeacActivate('C13');">Campo de Borja</a></li>
											</ul>
											<ul>
												<li onclick="javascript:applyDeacActivate('C21');">Campo de Cariñena</a></li>
												<li onclick="javascript:applyDeacActivate('C24');">Campo de Daroca</a></li>
												<li onclick="javascript:applyDeacActivate('C8');">Cinca Medio</a></li>
												<li onclick="javascript:applyDeacActivate('C5');">Cinco Villas</a></li>
												<li onclick="javascript:applyDeacActivate('C20');">Comunidad de Calatayud</a></li>
												<li onclick="javascript:applyDeacActivate('C29');">Comunidad de Teruel</a></li>
												<li onclick="javascript:applyDeacActivate('C26');">Cuencas Mineras</a></li>
												<li onclick="javascript:applyDeacActivate('C17');">D.C. Zaragoza</a></li>
											</ul>
										</div>
										<div class="dondeMunicipioItemsOptions_2columns">
											<ul>
												<li onclick="javascript:applyDeacActivate('C32');">Gúdar - Javalambre</a></li>
												<li onclick="javascript:applyDeacActivate('C6');">Hoya de Huesca / Plana de Uesca</a></li>
												<li onclick="javascript:applyDeacActivate('C25');">Jiloca</a></li>
												<li onclick="javascript:applyDeacActivate('C1');">La Jacetania</a></li>
												<li onclick="javascript:applyDeacActivate('C9');">La Litera / La Llitera</a></li>
												<li onclick="javascript:applyDeacActivate('C4');">La Ribagorza</a></li>
												<li onclick="javascript:applyDeacActivate('C10');">Los Monegros</a></li>
												<li onclick="javascript:applyDeacActivate('C30');">Maestrazgo</a></li>
											</ul>
											<ul>
												<li onclick="javascript:applyDeacActivate('C33');">Matarraña / Matarranya</a></li>
												<li onclick="javascript:applyDeacActivate('C15');">Ribera Alta del Ebro</a></li>
												<li onclick="javascript:applyDeacActivate('C18');">Ribera Baja del Ebro</a></li>
												<li onclick="javascript:applyDeacActivate('C31');">Sierra de Albarracín</a></li>
												<li onclick="javascript:applyDeacActivate('C3');">Sobrarbe</a></li>
												<li onclick="javascript:applyDeacActivate('C7');">Somontano de Barbastro</a></li>
												<li onclick="javascript:applyDeacActivate('C12');">Tarazona y El Moncayo</a></li>
												<li onclick="javascript:applyDeacActivate('C16');">Valdejalón</a></li>
											</ul>
										</div>
									</div>
									<div class="huecoInicioPagina"></div>
									<div class="dondeBottomLinks">
										<a href="javascript:deactivateSeleccionCondicionada('Municipio');" class="i_i">
											Volver al directorio para buscar únicamente por nombre
										</a>
									</div>
									<div class="huecoInicioPagina"></div>
								</div>

								<div id="dondeSeleccionCondicionadaMunicipio" style="display:none;">
									<div id="dondeSeleccionCondicionadaItemsMunicipio" class="dondeSeleccionCondicionadaItems">
										<div class="subtitleBDAZone">SELECCI&Oacute;N AVANZADA</div>
										<div class="dondeSeleccionCondicionadaQuestion">
											<p class="textosNormales i_i">Municipios que cumplen</p>
											<select id="dondeSeleccionCondicionadaLogicalMunicipio" class="comboFiltro dondeSeleccionCondicionadaLogical i_i">
												<option value="AND">todas</option>
												<option value="OR">alguna de</option>
											</select>
											<p class="textosNormales i_i">las condiciones</p>
										</div>
										<div id="conditionMunicipioZone" class="conditionZone"></div>
									</div>
									<div class="selCondicionada">
										<div id="selCondicionadaAddMunicipio" class="selCondicionadaAdd">
										<div class="addCondition" onclick="javascript:addNewConditionBlock('Municipio')">
											AñADIR OTRA CONDICIÓN
										</div>
										<div class="aplicar" onclick="javascript:applyCondicionada()">
											APLICAR CONDICIONES
										</div>
									</div>
								</div>

								<div class="huecoInicioPagina"></div>
								<div class="dondeBottomLinks">
									<a href="javascript:deactivateSeleccionCondicionada('Municipio');" class="i_i">
										Volver al directorio para buscar únicamente por nombre
									</a>
								</div>
							</div>
						</div>
						<div class="mapZonePreview">
							<ul class="bxslider" id="bxslider_info">
								<li>
									<div class="mapPreview" id="mapPreviewAragon"></div>
									<div class="mapPreview oculto" id="mapPreviewProvincia"></div>
									<div class="mapPreview oculto" id="mapPreviewComarca"></div>
									<div class="mapPreview oculto" id="mapPreviewMunicipio"></div>
								</li>
								<li>
									<div class="infoAboutSelection">
										<div class="infoAboutSelectionSummary">Seleccionado Aragón</div>
										<div class="oculto infoAboutSelectionDetail"></div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div id="queZone" class="remodal" data-remodal-id="queZoneModal" role="dialog">
					<div class="modalInner">
						<div class="titleBDAZone">QUÉ
							<button data-remodal-action="close" class="aplybutton">Aplica y cierra</button>
						</div>
						<div class="clear_i"></div>
						<div class="descripcionTitulo1 i_i grisMedio">
							<div class="descripcionTitulo1_mini">Selecciona el tema sobre el que quieres información</div>
						</div>
						<div class="huecoInicioPagina"></div>

						<div class="clear_i"></div>

						<div id="quePredefinedZone">
					
							<input type="text" class="informeAutocomplete" id="informeAutocompleteQue" placeholder="Buscar el texto">
								<div onmousedown="javascript:this.className='boton botonQue botonClicked';" onmouseup="javascript:this.className='boton botonQue botonNormal';"
						onmouseover="javascript:this.className='boton botonQue botonOver';" onmouseout="javascript:this.className='boton botonQue botonNormal';"
						onclick="javascript:showDirectorioReports()" class="boton botonQue botonNormal" title="APLICAR">
						Banco de Datos
								</div>
								<div class="huecoInicioPagina"></div>
								<div class="recentQue">
									<h3 class="titulosSecundariosNegritas i_i">Búsquedas más recientes</h3>

									<div class="clear"></div>
									<ul class="queOpciones textosNormales" id="recentReports">
										<li class="queOpcion" id="recentReport1"><a href="javascript:selectItemDirectoryReports('Liquidaciones de presupuestos. Gastos. Clasificación por capítulos', '01-010043', 'Liquidaciones de presupuestos. Gastos. Clasificación por capítulos> Presupuestos de las Entidades Locales > Presupuestos de la Administración Pública > Sector Público. Elecciones >')" title="Liquidaciones de presupuestos. Gastos. Clasificación por capítulos" class="i_i">Liquidaciones de presupuestos. Gastos. Clasificación por capítulos</a></li>
										<li class="queOpcion" id="recentReport2"><a href="javascript:selectItemDirectoryReports('Paro registrado Grupos de edad y sexo', '05-050202', 'Grupos de edad y sexo> Paro registrado > Trabajo, Salarios y Relaciones Laborales >')" title="Paro registrado Grupos de edad y sexo" class="i_i">Paro registrado Grupos de edad y sexo</a></li>
										<li class="queOpcion" id="recentReport3"><a href="javascript:selectItemDirectoryReports('Presupuestos. Ingresos', '01-010039', 'Presupuestos. Ingresos> Presupuestos de las Entidades Locales > Presupuestos de la Administración Pública > Sector Público. Elecciones >')" title="Presupuestos. Ingresos" class="i_i">Presupuestos. Ingresos</a></li>
									</ul>
								</div>
								<div class="clear"></div>
								<div class="popularQue">
									<h3 class="titulosSecundariosNegritas i_i">B&uacute;squedas m&aacute;s consultadas</h3>

									<div class="clear"></div>
									<ul class="queOpciones textosNormales" id="popularReports">
										<li class="queOpcion"><a href="javascript:selectItemDirectoryReports('Liquidaciones de presupuestos. Gastos. Clasificación por capítulos', '01-010043', 'Liquidaciones de presupuestos. Gastos. Clasificación por capítulos> Presupuestos de las Entidades Locales > Presupuestos de la Administración Pública > Sector Público. Elecciones >')" title="Liquidaciones de presupuestos. Gastos. Clasificación por capítulos" class="i_i">Liquidaciones de presupuestos. Gastos. Clasificación por capítulos</a></li>
										<li class="queOpcion"><a href="javascript:selectItemDirectoryReports('Paro registrado Grupos de edad y sexo', '05-050202', 'Grupos de edad y sexo> Paro registrado > Trabajo, Salarios y Relaciones Laborales >')" title="Paro registrado Grupos de edad y sexo" class="i_i">Paro registrado Grupos de edad y sexo</a></li>
										<li class="queOpcion"><a href="javascript:selectItemDirectoryReports('Usos del suelo (nomenclatura a 1 dígito)', '04-040009', 'Usos del suelo (nomenclatura a 1 dígito)> Corine Land Cover > Ocupación del suelo  > Usos del suelo > Territorio  >')" title="Usos del suelo (nomenclatura a 1 dígito)" class="i_i">Usos del suelo (nomenclatura a 1 dígito)</a></li>
									</ul>
								</div>
								<div class="huecoInicioPagina"></div>
							</div>

							<div id="queReportTreeZone" style="display:none;">
								<div id="queReportTree"></div>
								<div class="huecoInicioPagina"></div>
								<div class="dondeBottomLinks">
									<a href="javascript:returnPredefinedQue();" class="i_i">
										Volver a la selección por búsqueda de texto, más recientes o más consultadas
									</a>
								</div>
							</div>
						</div>
					</div>

			<div id="cuandoZone"  class="remodal" data-remodal-id="cuandoZoneModal" role="dialog">
				<div class="modalInner">

					<div class="titleBDAZone">CUÁNDO
						<button data-remodal-action="close" class="aplybutton">Aplica y Cierra</button>
					</div>

					<div class="clear_i"></div>
					<div class="descripcionTitulo1 i_i grisMedio">
						<div class="descripcionTitulo1_mini">Selecciona el período temporal del que quieres datos</div>
					</div>
					<div class="huecoInicioPagina"></div>
					<div class="clear_i"></div>
					<ul class="yearInterval">
						<li>
							<div class="headText">Desde</div>
							<select id="cuandoDesdeYear" class="comboFiltro comboFiltroSmall">
								<option value="1996" selected="">1996</option>
								<option value="1997">1997</option>
								<option value="1998">1998</option>
								<option value="1999">1999</option>
								<option value="2000">2000</option>
								<option value="2001">2001</option>
								<option value="2002">2002</option>
								<option value="2003">2003</option>
								<option value="2004">2004</option>
								<option value="2005">2005</option>
								<option value="2006">2006</option>
								<option value="2007">2007</option>
								<option value="2008">2008</option>
								<option value="2009">2009</option>
								<option value="2010">2010</option>
								<option value="2011">2011</option>
								<option value="2012">2012</option>
								<option value="2013">2013</option>
								<option value="2014">2014</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
							</select>
						</li>
						<li>
							<div class="headText">Hasta</div>
							<select id="cuandoHastaYear" class="comboFiltro comboFiltroSmall">
								<option value="1996" selected="">1996</option>
								<option value="1997">1997</option>
								<option value="1998">1998</option>
								<option value="1999">1999</option>
								<option value="2000">2000</option>
								<option value="2001">2001</option>
								<option value="2002">2002</option>
								<option value="2003">2003</option>
								<option value="2004">2004</option>
								<option value="2005">2005</option>
								<option value="2006">2006</option>
								<option value="2007">2007</option>
								<option value="2008">2008</option>
								<option value="2009">2009</option>
								<option value="2010">2010</option>
								<option value="2011">2011</option>
								<option value="2012">2012</option>
								<option value="2013">2013</option>
								<option value="2014">2014</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018" selected>2018</option>
							</select>
						</li>
					</ul>
					<ul class="cuandoOpciones textosNormales">
						<li class="cuandoOpcion">
							<a href="javascript:selectAllAvailableYears()" title="Todos los datos" class="i_i">Todos los datos</a>
							<div id="cuandoAllYears" class="i_i">(1996 - 2018)</div>
						</li>
						<li class="cuandoOpcion">
							<a href="javascript:selectLastAvailableYear()" title="El &uacute;ltimo a&ntilde;o disponible" class="i_i">El &uacute;ltimo a&ntilde;o disponible</a>
							<div id="cuandoLastYear" class="i_i">(2018)</div>
						</li>
					</ul>
				</div>
			</div>

			<div class="resultsTableBDA">
				<div class="separadorContenidoPagina"></div>
				<div id="queItemsHidden" class="oculto">http://opendata.aragon.es/def/iaest/medida#poblacion@</div>
				<div id="queItemsHiddenLabel" class="oculto">Población@</div>
				<div id="queItemsHiddenRange" class="oculto">http://www.w3.org/2001/XMLSchema#int@</div>
				<div id="queDirectorio" class="oculto"></div>
				<input type="hidden" id="idReportQue" value="03-030001">

				<div class="huecoInicioPagina"></div>
				
				<div class="clear_i"></div>
				<h2 id="titlePreview">Cifras oficiales de población anuales desde 1996</h2>

				<div class="downloadZone">
					<ul class="downloadFormat">
						<li class="first"><a class="recuadroNoResaltado textosNormales" href="javascript:download('text/csv')" title="Descarga en formato CSV">CSV</a></li>
						<li><a class="recuadroNoResaltado textosNormales" href="javascript:download('application/json')" title="Descarga en formato JSON">JSON</a></li>
					</ul>
					<img src="/static/public/aragopedia/i/32-Download-OFF.png" alt="Descarga" title="Descarga" class="d_d" id="iconDownload"/>
				</div>

				<div id="hierarchyPreview"> Demografía y Población   &gt; Cifras de población y Censos demográficos  &gt; Datos históricos  &gt; Series históricas de población  &gt;Cifras oficiales de población anuales desde 1996</div>
				<div class="huecoInicioPagina"></div>
				<div class="textosNormales"><a id="informeMetodologico" target="_blank" href="http://aplicaciones.aragon.es/iaestmtd/gestion?idp=2&Id_Op=0059">Informe metodolológico</a></div>
				<div class="textosNormales">Fuente: Instituto Aragonés de Estadística (IAEST)</div>
				<div class="huecoInicioPagina"></div>
				<div id="queItems">
					<ul class="infoQue">
						<li>
							<input type="checkbox" checked="" id="queColumn0" onclick="javascript:updateDataPreview()"> Población
						</li>
					</ul>
				</div>
				<div class="huecoInicioPagina"></div>
				<p>Solo se muestran los primeros 300 resultados. Para disponer de la totalidad de los datos descargue CSV / JSON</p>
				<div id="noResults" class="oculto textosNormales">
					No hay datos que cumplan con las características seleccionadas
				</div>
			</div>
			<table class="resultsTableBDA oculto" cellpadding="0" cellspacing="0" id="resultsTableBDA"></table>
		</div>
		<div class="huecoInicioPagina"></div>
	   </div>
	</div>
