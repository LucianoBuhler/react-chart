import { useState } from 'react'
import { UserData } from '../Data';
import BarChart from './Barchart.js';
import PieChart from './Piechart.js';
import LineChart from './Linechart.js';
import { ChartData } from "../types/chart"
import { User } from "../types/user"

const ChartMain:React.FC = () => {
  const [userData, setUserData] = useState<ChartData>({
    labels: UserData.map((data:User) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data:User) => data.gain),
        backgroundColor: [
          "#fff",
          "skyblue",
          "darkgreen",
          "darkblue",
          "darkorange",
        ],
        borderColor: "black",
        borderWidth: 2,
        color: "white",
        links: UserData.map((data) => data.link)
      },
    ],
  });
  
  const [userData2, setUserData2] = useState<ChartData>({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.lost),
        backgroundColor: [
          "#fff",
          "skyblue",
          "darkgreen",
          "darkblue",
          "darkorange",
        ],
        borderColor: "purple",
        borderWidth: 2,
        color: "white",
      },
    ],
  });


  return (
    <div className='title'>
      <h1>Charts</h1>

      <div className='row'>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }} >
          <BarChart chartData={userData} />
        </div>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }} >
          <BarChart chartData={userData2} />
        </div>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }}>
          <PieChart chartData={userData} />
        </div>

        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }}>
          <LineChart chartData={userData} />
        </div>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }}>
          <LineChart chartData={userData2} />
        </div>
      </div>
    </div>
  );
}

export default ChartMain
