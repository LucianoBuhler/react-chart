interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string;
  borderWidth: number;
  color: string;
  links?: string[];
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}