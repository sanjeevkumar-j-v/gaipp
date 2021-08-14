import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "BSC",
    Current: 4000,
    Previous: 2400,
    amt: 2400,
  },
  {
    name: "Ethereum",
    Current: 3000,
    Previous: 1398,
    amt: 2210,
  },
  {
    name: "Polygon",
    Current: 2000,
    Previous: 9800,
    amt: 2290,
  },
  {
    name: "Oxygen",
    Current: 2780,
    Previous: 3908,
    amt: 2000,
  },
  {
    name: "Sereum",
    Current: 1890,
    Previous: 4800,
    amt: 2181,
  },
];

export default class SimpleBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Current" fill="#e22a6f" />
          <Bar dataKey="Previous" fill="#1a2942" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
