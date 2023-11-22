"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    sales: 4000,
    views: 2400,
  },
  {
    name: "Tue",
    sales: 3000,
    views: 1398,
  },
  {
    name: "Wed",
    sales: 2000,
    views: 9800,
  },
  {
    name: "Thu",
    sales: 2780,
    views: 3908,
  },
  {
    name: "Fri",
    sales: 1890,
    views: 4800,
  },
  {
    name: "Sat",
    sales: 2390,
    views: 3800,
  },
  {
    name: "Sun",
    sales: 3490,
    views: 4300,
  },
];
const Chart = () => {
  return (
    <div className="h-80 ">
      <h2 className="-text--textSoft font-light mb-2">Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
