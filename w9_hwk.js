var vg_1 = "https://raw.githubusercontent.com/ncha0085/FIT3179/refs/heads/main/flight_path_map.vg.json";

vegaEmbed("#flight_map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "https://raw.githubusercontent.com/ncha0085/FIT3179/refs/heads/main/arrivals_departures_bubble_chart.vg.json";

vegaEmbed("#bubble_chart", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);