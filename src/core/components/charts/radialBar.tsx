import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function RadialBarReChart({ data }: { data: any }) {
  return (
    <div
      style={{
        width: "auto",
        height: "100%",
        direction: "ltr",
        margin: "10px",
      }}
    >
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="100%"
          barSize={20}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#000" }}
            background
            dataKey="value"
          />
          <Legend />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
