import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function LineReChart({ data, color }: any) {
  return (
    <div
      style={{
        width: "auto",
        height: "100%",
        direction: "ltr",
        marginBottom: "10px",
      }}
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <YAxis stroke="darkgray" />
          <Line
            type="monotone"
            dataKey="value"
            strokeWidth="4"
            stroke={color}
          />
          <CartesianGrid stroke="#666" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
