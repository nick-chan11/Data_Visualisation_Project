// JS for live FIT3179 A2 website page 

// Flight Path Map
var vg_1 = "json/flight_path_map.vg.json";
vegaEmbed("#flight_map", vg_1).then(function(result) {
}).catch(console.error);

// Arrivals and Departures Bubble Chart
var vg_2 = "json/arrivals_departures_bubble_chart.vg.json";
vegaEmbed("#bubble_chart", vg_2).then(function(result) {
}).catch(console.error);

// On-Time Performance Timeline
var vg_3 = "json/on_time_arrival_timeline.vg.json";
vegaEmbed("#timeline_chart", vg_3).then(function(result) {
}).catch(console.error);

// On-Time vs Distance Scatter Plot
var vg_4 = "json/ontime_vs_distance_scatter.vg.json";
vegaEmbed("#scatter_chart", vg_4).then(function(result) {
}).catch(console.error);

// Outgoing Flights Stacked Area
var vg_5 = "json/otp_outgoing_flights_stacked_area.vg.json";
vegaEmbed("#stacked_area_chart", vg_5).then(function(result) {
}).catch(console.error);

// Punctuality Arrivals
var vg_6 = "json/punctuality_arrivals.vg.json";
vegaEmbed("#punctuality_chart", vg_6).then(function(result) {
}).catch(console.error);

