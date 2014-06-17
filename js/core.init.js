function init() {
	// Load GEOJson Files
	var xhr = new XMLHttpRequest() || new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP");

	xhr.open("GET", "data/canton.geojson", false);
	xhr.send(null);
	var cantones = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/distritos.geojson", false);
	xhr.send(null);
	var distritos = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/voronoi.geojson", false);
	xhr.send(null);
	var voronoi = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/servicioSalud.geojson", false);
	xhr.send(null);
	var servSalud = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/servPublicos.geojson", false);
	xhr.send(null);
	var servPublico = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/escuelas.geojson", false);
	xhr.send(null);
	var escuelas = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/ParadaBus.geojson", false);
	xhr.send(null);
	var buses = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/Bancos.geojson", false);
	xhr.send(null);
	var banco = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/iglesia.geojson", false);
	xhr.send(null);
	var iglesia = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/puntes.geojson", false);
	xhr.send(null);
	var puente = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/parque.geojson", false);
	xhr.send(null);
	var parque = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/Comercios.geojson", false);
	xhr.send(null);
	var comercio = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/telPublico.geojson", false);
	xhr.send(null);
	var telPublico = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/instPublicas.geojson", false);
	xhr.send(null);
	var instPublica = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/barrios.geojson", false);
	xhr.send(null);
	var barrio = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/servDeportivos.geojson", false);
	xhr.send(null);
	var servDep = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/servComercio.geojson", false);
	xhr.send(null);
	var servComer = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/servTranspTodo.geojson", false);
	xhr.send(null);
	var servTrans = JSON.parse(xhr.responseText);
	xhr.open("GET", "data/restaurante.geojson", false);
	xhr.send(null);
	var servTurist = JSON.parse(xhr.responseText);
	xhr.open("GET","data/calles.geojson",false); 
	xhr.send(null);
	var calle = JSON.parse(xhr.responseText);
	xhr.open("GET","data/rios.geojson",false); 
	xhr.send(null);
	var rio = JSON.parse(xhr.responseText);

	// Init Marker Icons
	var redMarker = L.AwesomeMarkers.icon({
		icon : "heart",
		color : "green",
		iconColor : "black"
	});
	var PyblicMarker = L.AwesomeMarkers.icon({
		icon : "ok",
		color : "red",
		iconColor : "black"
	});
	var EscuelaMarker = L.AwesomeMarkers.icon({
		icon : "book",
		color : "orange",
		iconColor : "black"
	});
	var busMarker = L.AwesomeMarkers.icon({
		icon : "plane",
		color : "purple",
		iconColor : "black"
	});
	var BancoMarker = L.AwesomeMarkers.icon({
		icon : "home",
		color : "blue",
		iconColor : "black"
	});
	var IgleMarker = L.AwesomeMarkers.icon({
		icon : "plus",
		color : "green",
		iconColor : "black"
	});
	var ParqueMarker = L.AwesomeMarkers.icon({
		icon : "cloud",
		color : "orange",
		iconColor : "black"
	});
	var BarrioMarker = L.AwesomeMarkers.icon({
		icon : "pushpin",
		color : "purple",
		iconColor : "black"
	});
	var ComercioMarker = L.AwesomeMarkers.icon({
		icon : "gift",
		color : "blue",
		iconColor : "black"
	});
	var TelefonoMarker = L.AwesomeMarkers.icon({
		icon : "phone",
		color : "green",
		iconColor : "black"
	});

	var InstPuMarker = L.AwesomeMarkers.icon({
		icon : "plus",
		color : "orange",
		iconColor : "black"
	});
	var PuenteMarker = L.AwesomeMarkers.icon({
		icon : "road",
		color : "purple",
		iconColor : "black"
	});
	var ServDepMarker = L.AwesomeMarkers.icon({
		icon : "star",
		color : "blue",
		iconColor : "black"
	});
	var ServComMarker = L.AwesomeMarkers.icon({
		icon : "shopping-cart",
		color : "red",
		iconColor : "black"
	});
	var ServTransMarker = L.AwesomeMarkers.icon({
		icon : "asterisk",
		color : "green",
		iconColor : "black"
	});
	var ServTuristMarker = L.AwesomeMarkers.icon({
		icon : "food",
		color : "orange",
		iconColor : "black"
	});
	function onEachFeature(feature, layer) {
		layer.bindPopup(feature.properties.Nombre);
	};

	// Create Markers
	function saludLayer(feature, latlng) {
		return L.marker(latlng, {
			icon : redMarker
		});
	};
	function SerPub(feature, latlng) {
		return L.marker(latlng, {
			icon : PyblicMarker
		});
	};
	function Esc(feature, latlng) {
		return L.marker(latlng, {
			icon : EscuelaMarker
		});
	};
	function Bus(feature, latlng) {
		return L.marker(latlng, {
			icon : busMarker
		});
	};
	function Bancos(feature, latlng) {
		return L.marker(latlng, {
			icon : BancoMarker
		});
	};
	function Iglesias(feature, latlng) {
		return L.marker(latlng, {
			icon : IgleMarker
		});
	};
	function Parques(feature, latlng) {
		return L.marker(latlng, {
			icon : ParqueMarker
		});
	};
	function Barrios(feature, latlng) {
		return L.marker(latlng, {
			icon : BarrioMarker
		});
	};
	function Comercios(feature, latlng) {
		return L.marker(latlng, {
			icon : ComercioMarker
		});
	};
	function TelPublicos(feature, latlng) {
		return L.marker(latlng, {
			icon : TelefonoMarker
		});
	};
	function InsPublicas(feature, latlng) {
		return L.marker(latlng, {
			icon : InstPuMarker
		});
	};
	function Puentes(feature, latlng) {
		return L.marker(latlng, {
			icon : PuenteMarker
		});
	};
	function ServiciosDeportivos(feature, latlng) {
		return L.marker(latlng, {
			icon : ServDepMarker
		});
	};
	function ServComercio(feature, latlng) {
		return L.marker(latlng, {
			icon : ServComMarker
		});
	};
	function ServTransporte(feature, latlng) {
		return L.marker(latlng, {
			icon : ServTransMarker
		});
	};
	function ServTuristicos(feature, latlng) {
		return L.marker(latlng, {
			icon : ServTuristMarker
		});
	};

	// Initialize Styles
	var styleLineas = {
		"color" : "#A4A4A4",
		"weight" : 2,
		"opacity" : 0.65
	};
	var stylePoligonos = {
		"color" : "#A5DF00",
		"weight" : 1,
		"opacity" : 0.65
	};
	var styleVoronoi = {
		"color" : "#424242",
		"weight" : 1,
		"opacity" : 0.65
	};
	var styleDist = {
		"color" : "#D7DF01",
		"weight" : 1,
		"opacity" : 0.65
	};
	var style = {
		"color" : "#B40431",
		"weight" : 5,
		"opacity" : 0.65
	};
	var stylecalles = {
		"color": "#999999",
		"weight": 2,
		"opacity": 0.65
	};
	var stylerios = {
		"color": "#04B4AE",
		"weight": 2,
		"opacity": 0.65
	};
	
	// Create Layers


	var escuelasLayer = L.geoJson(escuelas, {
		pointToLayer : Esc,
		onEachFeature : onEachFeature
	});
	var IgleLayer = L.geoJson(iglesia, {
		pointToLayer : Iglesias,
		onEachFeature : onEachFeature
	});
	var ParqueLayer = L.geoJson(parque, {
		pointToLayer : Parques,
		onEachFeature : onEachFeature
	});
	var PuenteLayer = L.geoJson(puente, {
		pointToLayer : Puentes,
		onEachFeature : onEachFeature
	});
	var ComercioLayer = L.geoJson(comercio, {
		pointToLayer : Comercios,
		onEachFeature : onEachFeature
	});
	var TelLayer = L.geoJson(telPublico, {
		pointToLayer : TelPublicos,
		onEachFeature : onEachFeature
	});
	var bancoLayer = L.geoJson(banco, {
		pointToLayer : Bancos,
		onEachFeature : onEachFeature
	});
	var busLayer = L.geoJson(buses, {
		pointToLayer : Bus,
		onEachFeature : onEachFeature
	});
	var cantonLayer = L.geoJson(cantones, {
		pointToLayer : stylePoligonos,
		onEachFeature : onEachFeature
	});
	var distLayer = L.geoJson(distritos, {
		pointToLayer : styleDist,
		onEachFeature : onEachFeature
	});
	var voronoiLayer = L.geoJson(voronoi, {
		pointToLayer : styleVoronoi,
		onEachFeature : onEachFeature
	});
	var BarrioLayer = L.geoJson(barrio, {
		pointToLayer : Barrios,
		onEachFeature : onEachFeature
	});
	var servSaludLayer = L.geoJson(servSalud, {
		pointToLayer : saludLayer,
		onEachFeature : onEachFeature
	});
	var instPuLayer = L.geoJson(instPublica, {
		pointToLayer : InsPublicas,
		onEachFeature : onEachFeature
	});
	var servPublicoLayer = L.geoJson(servPublico, {
		pointToLayer : SerPub,
		onEachFeature : onEachFeature
	});
	var servDepLayer = L.geoJson(servDep, {
		pointToLayer : ServiciosDeportivos,
		onEachFeature : onEachFeature
	});
	var servComLayer = L.geoJson(servComer, {
		pointToLayer : ServComercio,
		onEachFeature : onEachFeature
	});
	var servTransLayer = L.geoJson(servTrans, {
		pointToLayer : ServTransporte,
		onEachFeature : onEachFeature
	});
	var servTuristLayer = L.geoJson(servTurist, {
		pointToLayer : ServTuristicos,
		onEachFeature : onEachFeature
	});
	var callesLayer = L.geoJson(calle, {
		pointToLayer : stylecalles,
		onEachFeature : onEachFeature
	});
	var riosLayer = L.geoJson(rio, {
		pointToLayer : stylerios,
		onEachFeature : onEachFeature
	});
	// Create Map
	var map = L.map("map", {
		center : new L.LatLng(9.919, -84.031),
		zoom : 14,
		layers : [escuelasLayer, IgleLayer,	ParqueLayer, PuenteLayer, ComercioLayer, TelLayer, bancoLayer, busLayer, cantonLayer, distLayer, BarrioLayer, voronoiLayer, callesLayer, riosLayer,servSaludLayer, servPublicoLayer, instPuLayer, servDepLayer, servComLayer, servTransLayer, servTuristLayer]
	});
	
	// Create Maps Menu
	var MenuMaps = {
		"Escuelas/Colegios en el distrito" : escuelasLayer,
		"Iglesias en el Distrito": IgleLayer,
		"Parques cerca de colegios": ParqueLayer,
		"Puentes en el Distrito": PuenteLayer,
		"Comercios en localidades": ComercioLayer,
		"Telefono publico cercano a paradas de bus":TelLayer,
		"Bancos cerca de Restaurantes" : bancoLayer,
		"Parada de Buses" : busLayer,
		"Voronoi": voronoiLayer,
		"Canton" : cantonLayer,
		"Distritos": distLayer,
		"Calles": callesLayer,
		"Rios": riosLayer,
		"Servicios de Salud" : servSaludLayer,
		"Servicios Publicos" : servPublicoLayer,
		"Barrios" : BarrioLayer,
		"Instalaciones publicas": instPuLayer,
		"Servicios Deportivos": servDepLayer,
		"Servicios de Comercio": servComLayer,
		"Servicios de Transporte": servTransLayer,
		"Servicios Turisticos" : servTuristLayer
	};

	// Load Map Tiles
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	// Set Map Controls
	L.control.scale().addTo(map);
	L.control.layers(null, MenuMaps).addTo(map);
}