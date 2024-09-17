import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// CSS prefix: .chart-
import "./style.css";

type ChartProps = { series: Highcharts.Options["series"] };

function Chart({ series }: ChartProps) {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
      plotShadow: false,
    },
    title: { text: "" },
    tooltip: {
      pointFormat: "<b>{point.percentage:.1f}%</b>",
      style: { fontSize: "16px" },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
      },
    },
    series,
    credits: { enabled: false },
  };
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
}

export default Chart;
