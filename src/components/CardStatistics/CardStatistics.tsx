import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import * as I from "./CardStatistics.interface";

export const CardStatistics = ({
  title,
  statistic,
  trend = "default",
}: I.CardStatisticsProps) => {
  const trendColors: Record<I.CardStatisticsProps["trend"], string> = {
    positive: "text-green-500",
    negative: "text-red-500",
    default: "text-primary-foreground",
  };

  const colorClass = trendColors[trend];
  return (
    <Card className="flex justify-center items-center gap-2 bg-foreground border-0 shadow-xl/30">
      <CardHeader className="w-full text-center text-muted-foreground">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className={`text-lg font-semibold ${colorClass}`}>
          {statistic}
        </span>
      </CardContent>
    </Card>
  );
};
