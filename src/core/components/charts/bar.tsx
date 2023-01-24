import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";

export default function BarReChart({ data, fill }: any) {
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
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" stroke="darkgray" />
          <Bar
            dataKey="value"
            fill={fill}
            label={{ position: "insideStart", fill: "#000" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
