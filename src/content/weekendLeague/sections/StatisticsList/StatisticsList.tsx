import { CardStatistics } from "@/components/CardStatistics";
import { Card } from "@/components/ui/card";
import Image from "next/image";

import * as I from "./StatisticsList.interface";

export const StatisticsList = ({
  wlActive,
  currentRank,
  defeats,
  victories,
  totalDisconnects,
  accuratePassPercentage,
  myGoals,
  opponentGoals,
  goalDifference,
  averageMyPossession,
}: I.StatisticsListProps) => {
  return (
    <section className="mt-10 flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {/* Partidas jogadas + Rank Atual */}
        <Card className="flex flex-col md:flex-row justify-between items-center bg-foreground border-0 shadow-xl/30 p-4">
          <div className="flex flex-col items-center w-full">
            <p className="text-sm text-muted-foreground text-center">
              Partidas jogadas
            </p>
            <span className="text-lg font-semibold h-[50px] flex items-center justify-center">
              {wlActive?.matches?.length || 0}/15
            </span>
          </div>
          <hr className="border border-muted-foreground/25 mx-4 w-12 sm:w-16 md:w-px md:h-full" />
          <div className="flex flex-col items-center text-center w-full">
            <p className="text-sm text-muted-foreground">Rank Atual</p>
            <div className="relative w-[50px] h-[50px] flex items-center justify-center">
              <Image
                src="/rank-logo.png"
                alt="Rank Atual"
                fill
                className="object-contain"
              />
              <span className="absolute text-sm font-bold text-chart-3 top-[25%]">
                {currentRank}
              </span>
            </div>
          </div>
        </Card>

        {/* Vitórias/Derrotas */}
        <Card className="flex flex-row justify-between items-center bg-foreground border-0 shadow-xl/30 p-4">
          <div className="flex flex-col items-center gap-4 w-full ">
            <span className="text-sm text-muted-foreground">V</span>
            <span className="text-lg font-semibold text-green-400">
              {victories}
            </span>
          </div>
          <span className="h-full border-l border-muted-foreground/25 mx-4" />
          <div className="flex flex-col items-center gap-4 w-full ">
            <span className="text-sm text-muted-foreground">D</span>
            <span className="text-lg font-semibold text-red-500">
              {defeats}
            </span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Desconexões */}
        <CardStatistics
          title="Desconexões"
          statistic={String(totalDisconnects)}
          trend="negative"
        />

        {/* Gols marcados */}
        <CardStatistics
          title="Gols marcados"
          statistic={String(myGoals)}
          trend="positive"
        />

        {/* Gols sofridos */}
        <CardStatistics
          title="Gols sofridos"
          statistic={String(opponentGoals)}
          trend="negative"
        />

        {/* Saldo de gols */}
        <CardStatistics
          title="Saldo de gols"
          statistic={String(goalDifference)}
          trend={
            goalDifference > 0
              ? "positive"
              : goalDifference < 0
              ? "negative"
              : "default"
          }
        />

        {/* Posse de bola */}
        <CardStatistics
          title="Posse de bola"
          statistic={String(averageMyPossession.toFixed(0)) + "%"}
          trend="default"
        />

        {/* Passes certos */}
        <CardStatistics
          title="Passes certos"
          statistic={String(accuratePassPercentage.toFixed(0)) + "%"}
          trend="default"
        />
      </div>
    </section>
  );
};
