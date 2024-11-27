import React from "react";
import 'chart.js/auto'; 
import { Pie } from "react-chartjs-2";
import { ChartData } from "../types/chart"

interface PieChartProps{
  chartData: ChartData[]
}

const PieChart:React.FC<PieChartProps> = ({ chartData }) => {
  return <Pie data={chartData} />
}

export default PieChart