import CardBox from "../components/CardBox";
import Chart from "../components/Chart";
import Rightbar from "../components/Rightbar";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col flex-3 gap-5 justify-between">
        <CardBox />
        <Transactions />
        <Chart />
      </div>

      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
