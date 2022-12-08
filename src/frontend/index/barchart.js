var xValues = ["Besi", "Plastik", "Kertas"];
var yValues = [6.500, 6.000, 2.000];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Harga Sampah"
    }
  }
});