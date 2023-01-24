import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { PublicContext } from "../../context";
import { Colors } from "../../theme";

export default function LineReChart({ data }: { data: any }) {
  const { publicCtx } = React.useContext(PublicContext);

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
          <YAxis stroke="#999" />
          <Line
            type="monotone"
            dataKey="value"
            strokeWidth="4"
            stroke={
              Colors[publicCtx.theme.color][publicCtx.theme.background.name]
                .primary
            }
          />
          <CartesianGrid stroke="#666" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}