const tecnologia = [
	{
		nombre: "Grupo Monge",
		url: "https://www.grupomonge.com/"
	},
	{
		nombre: "Amazon",
		url: "https://www.amazon.com/"
	},
	{
		nombre: "Best Buy",
		url: "https://www.bestbuy.com/"
	},
	{
		nombre: "Newegg",
		url: "https://www.newegg.com/"
	},
	{
		nombre: "Walmart",
		url: "https://www.walmart.com/"
	}
];

const prendas = [
	{
		nombre: "Soccer Plus",
		url: "https://soccerpluscr.com/"
	},
	{
		nombre: "Mango",
		url: "https://shop.mango.com/cr-en/women"
	},
	{
		nombre: "Adidas",
		url: "https://www.adidas.co.cr/"
	},
	{
		nombre: "Forever 21",
		url: "https://www.forever21.com/us/shop"
	},
	{
		nombre: "H&M",
		url: "https://www2.hm.com/en_us/index.html"
	}
];

const calzado = [
	{
		nombre: "Payless",
		url: "https://www.payless.com/"
	},
	{
		nombre: "Crocs",
		url: "https://www.crocs.co.cr/"
	},
	{
		nombre: "Skechers",
		url: "https://www.skechers.com/en-us/"
	},
	{
		nombre: "Bata",
		url: "https://www.bata.cr/"
	},
	{
		nombre: "Vans",
		url: "https://www.vans.com/"
	}
];

const hogar = [
	{
		nombre: "Gollo",
		url: "https://www.gollotienda.com/"
	},
	{
		nombre: "Cemaco",
		url: "https://www.cemaco.co.cr/"
	},
	{
		nombre: "Do It Center",
		url: "https://www.doitcenter.com/"
	},
	{
		nombre: "Monge",
		url: "https://www.grupomonge.com/monge/"
	},
	{
		nombre: "Pricesmart",
		url: "https://www.pricesmart.com/site/cr/es/home"
	}
];

const autos = [
	{
		nombre: "Toyota",
		url: "https://www.toyota.com/"
	},
	{
		nombre: "Honda",
		url: "https://www.honda.com/"
	},
	{
		nombre: "Mitsubishi",
		url: "https://www.mitsubishicr.com/"
	},
	{
		nombre: "Kia",
		url: "https://www.kia.com/us/en/home"
	},
	{
		nombre: "Hyundai",
		url: "https://www.hyundai.com/us/en"
	}
];

// Obtener el elemento de la lista de resultados
const resultados = document.querySelector("#resultados");

// Función para mostrar los resultados de una categoría
function mostrarResultados(categoria) {
	// Limpiar los resultados anteriores
	resultados.innerHTML = "";
	
	// Crear la lista de resultados
	const listaResultados = document.createElement("ul");
	
	// Recorrer las páginas de la categoría y crear un elemento de lista por cada una
	for(let i = 0; i < categoria.length; i++) {
		const pagina = categoria[i];
		const itemLista = document.createElement("li");
		const enlace = document.createElement("a");
		enlace.href = pagina.url;
		enlace.textContent = pagina.nombre;
		itemLista.appendChild(enlace);
		listaResultados.appendChild(itemLista);
	}
	
	// Mostrar la lista de resultados en la página
	resultados.appendChild(listaResultados);
}

// Obtener los enlaces del menú
const enlacesMenu = document.querySelectorAll(".menu-enlace");

// Recorrer los enlaces del menú y agregar un evento de clic a cada uno
for(let i = 0; i < enlacesMenu.length; i++) {
	const enlace = enlacesMenu[i];
	
	enlace.addEventListener("click", function(evento) {
		// Prevenir el comportamiento por defecto del enlace
		evento.preventDefault();
		
		// Obtener el valor de la categoría
		const categoria = evento.target.dataset.categoria;
		
		// Mostrar los resultados de la categoría
		switch(categoria) {
			case "tecnologia":
				mostrarResultados(tecnologia);
				break;
			case "prendas":
				mostrarResultados(prendas);
				break;
			case "calzado":
				mostrarResultados(calzado);
				break;
			case "hogar":
				mostrarResultados(hogar);
				break;
			case "autos":
				mostrarResultados(autos);
				break;
			default:
				resultados.innerHTML = "No se encontraron resultados.";
				break;
		}
	});
};
