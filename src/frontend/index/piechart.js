google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
    ['Contry', 'Mhl'],
  ['Besi',30],
  ['Plastik',40],
  ['Kertas',10],
  ['dll',20],
]);

var options = {
  title:'Pengelolaan Sampah',
  is3D:true
};

var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}
