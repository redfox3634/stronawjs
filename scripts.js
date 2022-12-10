var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
var citytoshow;

// Image List
images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";
images[3] = "image4.jpg";
images[4] = "image5.jpg";
images[5] = "image6.jpg";
images[6] = "image7.jpg";
images[7] = "image8.jpg";
images[8] = "image9.jpg";
images[9] = "image10.jpg";


//Array of coordinates and description
let coordinates = [
  {
    "coordinatex": "48.858093",
    "coordinatey": "2.294694",
    "nameoflandmark": "Wieża Eiffla",
	"description": " Wieża Eiffla – najbardziej znany obiekt architektoniczny Paryża, uznawany za symbol tego miasta i niekiedy całej Francji. Jest najwyższą budowlą w Paryżu, a w momencie powstania była najwyższą budowlą na świecie.„Żelazna dama” stoi w zachodniej części miasta, nad Sekwaną, na północno-zachodnim krańcu Pola Marsowego. "
  },
  {
    "coordinatex": "43.568790",
    "coordinatey": "-116.376266",
    "nameoflandmark": "Krzywa Wieża w Pizie",
	"description": "Krzywa Wieża w Pizie (wł. Torre pendente di Pisa) – jedna z najbardziej znanych budowli świata, odwiedzana rocznie przez około 10 milionów turystów; symbol miasta Pizy. W istocie jest dzwonnicą (kampanilą) katedralną i należy do kompleksu zabudowań w stylu romańskim na Campo dei Miracoli, wpisanych w 1987 roku na listę światowego dziedzictwa UNESCO."
  },
    {
    "coordinatex": "29.979235",
    "coordinatey": "31.134201",
    "nameoflandmark": "Piramidy w Gizie",
	"description": "Piramidy w Gizie – zespół historycznych budowli obejmujący dwie największe piramidy zbudowane w starożytnym Egipcie (piramidę Cheopsa i piramidę Chefrena) oraz mniejszą piramidę Mykerinosa i towarzyszące im obiekty."
  },
    {
    "coordinatex": "-33.856785",
    "coordinatey": "151.215302",
    "nameoflandmark": "Sydney Opera House",
	"description": "Sydney Opera House – gmach opery w stylu nowoczesnego ekspresjonizmu, położony na przylądku Bennelong Point w Sydney.Opera budowana była w latach 1959–1973, wykonana została ze stali, betonu i szkła. Otwarcie nastąpiło 20 października 1973 – na uroczystości z tej okazji przybyła królowa Elżbieta II. Głównymi architektami byli Jørn Utzon i Ove Arup, których projekt został wybrany spośród 233 zgłoszonych przez przedstawicieli 32 państw świata.Utzon został uhonorowany w 2003 roku Nagrodą Pritzkera. Budynek opery został wpisany 28 czerwca 2007 roku na listę światowego dziedzictwa UNESCO."
  },
	{
    "coordinatex": "40.689247",
    "coordinatey": "-74.044502",
    "nameoflandmark": "Statua Wolności",
	"description": "Statua Wolności (ang. Statue of Liberty), właściwie Wolność Opromieniająca Świat[a] (ang. Liberty Enlightening the World, fr. La liberté éclairant le monde) – posąg na wyspie Liberty Island u ujścia rzeki Hudson do Oceanu Atlantyckiego w regionie metropolitalnym Nowego Jorku, nieoficjalny symbol wolności, Nowego Jorku i Stanów Zjednoczonych. Wyspa Liberty wraz z wyspą Ellis stanowi kompleks będący własnością federalną i zarządzany przez National Park Service. Administracyjnie należy do stanu Nowy Jork."
  },
  	{
    "coordinatex": "27.175014",
    "coordinatey": "78.042152",
    "nameoflandmark": "Tadź Mahal",
	"description": "Tadź Mahal – indyjskie mauzoleum wzniesione przez Szahdżahana z dynastii Wielkich Mogołów, na pamiątkę przedwcześnie zmarłej, ukochanej żony Mumtaz Mahal. Obiekt bywa nazywany świątynią miłości."
  },
    {
    "coordinatex": "-33.048241",
    "coordinatey": "-71.395012",
    "nameoflandmark": "Moai",
	"description": "Moai – rodzaj posągów wykonanych przez mieszkańców Wyspy Wielkanocnej z tufu wulkanicznego. Rzeźby są monolityczne. Niektóre ważą ponad 18 ton i mają ponad 6 metrów wysokości. Największy z moai – tak zwany Paro miał około 10 metrów wysokości i ważył 75 ton."
  },
  {
    "coordinatex": "-13.163141",
    "coordinatey": "-72.544960",
    "nameoflandmark": "Machu Picchu",
	"description": "Machu Picchu (keczua Machu Pikchu, stary szczyt) – najlepiej zachowane miasto Inków, w odległości 112 km od Cuzco. Położone jest na wysokości 2090–2400 m n.p.m."
  },
	{
    "coordinatex": "37.819927",
    "coordinatey": "-122.478256",
    "nameoflandmark": "Golden Gate Bridge",
	"description": "Golden Gate Bridge – most wiszący łączący San Francisco z hrabstwem Marin, nad cieśniną Golden Gate. Został otwarty 27 maja 1937. Golden Gate Bridge jest ważnym węzłem komunikacyjnym i celem wycieczek turystycznych. Miesięcznie przejeżdża po nim około 3,4 mln samochodów i liczba ta wzrasta."
  },
    {
    "coordinatex": "51.173972",
    "coordinatey": "-1.822376",
    "nameoflandmark": "Stonehenge",
	"description": "Stonehenge – jedna z najsłynniejszych europejskich budowli megalitycznych, pochodząca z epok neolitu i brązu. Kromlech ten położony jest w odległości 13 km od miasta Salisbury w hrabstwie Wiltshire w południowej Anglii. Najprawdopodobniej związany był z kultem Księżyca i Słońca. Księżyc mógł symbolizować tutaj kobietę (biorąc pod uwagę jej menstruację), Słońce – mężczyznę."
  }
]

// Change Image
function changeImg(){
	document.slide.src = images[i];
	console.log("coordinate x = " + coordinates[i].coordinatex);
	console.log("coordinate y = " + coordinates[i].coordinatey);

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	//setTimeout("changeImg()", time);
	
	
}

function rightClicked(){
	console.log("coordinate x = " + coordinates[i].coordinatex);
	console.log("coordinate y = " + coordinates[i].coordinatey);

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	  myFunction();
	} else { 
		// Reset Back To O
		i = 0;
		myFunction();
	}
}

function leftClicked(){
	
	console.log("coordinate x = " + coordinates[i].coordinatex);
	console.log("coordinate y = " + coordinates[i].coordinatey);

	// Check If Index Is 
	if(i > 0){
	  // Minus 1 to Index
	  i--; 
	  myFunction();
	} else { 
		// Reset Back To 4(max)
		i = 3;
		myFunction();
	}
}

let mapOptions = {
	center:[49.75677, 18.62568],
	zoom:10
}


let map = new L.map('map',mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

function myFunction() {
	//https://cors-anywhere.herokuapp.com/https://api.openaq.org/v1/locations?city=Cieszyn data.results[0].city
  //var x = document.getElementById("myText").value;
  //var x = citytoshow;
  //document.getElementById("markerpos").innerHTML = x;
		//console.log(res.results[0].countsByMeasurement[].parameter)
		let marker = new L.Marker([coordinates[i].coordinatex, coordinates[i].coordinatey]);
		marker.addTo(map);
		marker.bindPopup(coordinates[i].nameoflandmark).openPopup();
		map.panTo(new L.LatLng(coordinates[i].coordinatex, coordinates[i].coordinatey));
		document.querySelector("#description").innerHTML = coordinates[i].description;
		//document.querySelector("#description").innerHTML = 'This is description of the image';
		document.slide.src = images[i];
		
    }


// Run function when page loads
//window.onload=changeImg;
window.onload=myFunction;
