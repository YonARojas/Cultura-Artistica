const ITEMS = [
	{
		age: 1990,
		title: "Objetivos del Milenio",
		description:
			"En el año 2000, la ONU estableció 8 objetivos para combatir la pobreza, el hambre, la enfermedad, el analfabetismo, la degradación del medio ambiente y la discriminación contra la mujer.",
	},
	{
		age: 2015,
		title: "Objetivos de Desarrollo Sostenible",
		description:
			"En 2015, la ONU estableció 17 objetivos para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos como parte de una nueva agenda de desarrollo sostenible.",
	},
	{
		age: 2030,
		title: "Agenda 2030",
		description:
			"La Agenda 2030 es un plan de acción a favor de las personas, el planeta y la prosperidad. Busca fortalecer la paz universal y el acceso a la justicia.",
	},
	{
		age: 2050,
		title: "Objetivos del Siglo XXI",
		description:
			"En el año 2050, la ONU establecerá nuevos objetivos para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos.",
	},
	{
		age: 2100,
		title: "Objetivos del Futuro",
		description:
			"En el año 2100, la ONU establecerá nuevos objetivos para garantizar la paz, la justicia y la prosperidad en todo el mundo.",
	},
	{
		age: 2150,
		title: "Objetivos del Universo",
		description:
			"En el año 2150, la ONU establecerá nuevos objetivos para garantizar la paz, la justicia y la prosperidad en todo el universo.",
	},
];

var html = "";
const timelineDiv = document.getElementById("timeLine");

ITEMS.forEach((item) => {
	html += `
    <div class="child">
        <div class="content">
            <h2>${item.age}</h2>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    </div>`;
});
timelineDiv.innerHTML = html;

// animations
const childs = document.querySelectorAll(".child");

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

function updateVisibility() {
	childs.forEach((child) => {
		if (isInViewport(child)) {
			child.classList.remove("hidden");
			child.classList.add("show");
		} else {
			child.classList.remove("show");
			child.classList.add("hidden");
		}
	});
}

window.addEventListener("load", updateVisibility);
window.addEventListener("scroll", updateVisibility);
