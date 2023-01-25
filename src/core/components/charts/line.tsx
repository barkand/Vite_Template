import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function LineReChart(props: any) {
  const { data, color }: any = props;

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
          {props.yAxis && <YAxis stroke="darkgray" />}
          <Line
            type="monotone"
            dataKey="value"
            strokeWidth="4"
            stroke={color}
          />
          {data && data[0]?.value2 && (
            <Line
              type="monotone"
              dataKey="value2"
              strokeWidth="4"
              stroke={props.color2}
            />
          )}
          <CartesianGrid stroke="#666" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
