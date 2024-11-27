import React from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "../types/chart"

interface LineChartProps{
  chartData: ChartData[]
}

const LineChart:React.FC<LineChartProps> = ({ chartData }) => {
  return <Line data={chartData} />
}

export default LineChart