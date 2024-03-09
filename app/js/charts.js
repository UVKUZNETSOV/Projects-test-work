const chartData = {
  labels: ["Александра", "Владимир", "Тимур", "Ангелина Сейт", "Денис"],
  data: [55, 5, 10, 20, 10],
}

const myChart = document.querySelector('.my-chart');

new Chart(myChart, {
  type: "doughnut", 
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Показатель X", 
        data: chartData.data
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
})
