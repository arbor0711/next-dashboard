import CardBox from "../components/CardBox";
import Chart from "../components/Chart";
import ContentBox from "../components/ContentBox";
import Rightbar from "../components/Rightbar";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex flex-1  flex-col  gap-5 ">
        <CardBox />

        <ContentBox>
          <Transactions />
        </ContentBox>

        <ContentBox>
          <Chart />
        </ContentBox>
      </div>

      <div className="flex-initial" style={{ width: "370px" }}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
