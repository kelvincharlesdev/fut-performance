"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Match, WeekendLeagueData } from "@/models";
import { romanRanks } from "@/consts/romanRanks";
import { HeroWLPage, MatchList, StatisticsList } from "@/content/weekendLeague";
import {
  defeats,
  myGoals,
  myPossession,
  opponentGoals,
  totalAccuratePasses,
  totalDisconnects,
  totalPasses,
  victories,
} from "./functions/stats";

export default function WeekendLeague() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [allWls, setAllWls] = useState<WeekendLeagueData[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("wls") || "[]");
    }
    return [];
  });

  const wlActual = allWls.find((wl) => wl.status === "active");

  if (!wlActual)
    return (
      <span className="w-full text-muted-foreground flex items-center justify-center">
        Nenhuma WL Ativa
      </span>
    );

  const handleFormSubmit = (values: Omit<Match, "id">) => {
    const lastId = wlActual.matches?.length
      ? Math.max(...wlActual.matches.map((m) => m.id))
      : 0;

    const newMatch: Match = { ...values, id: lastId + 1 };

    // Atualiza o estado de forma imutável
    const updatedWls = allWls.map((wl) =>
      wl.id === wlActual.id
        ? { ...wl, matches: [...(wl.matches || []), newMatch] }
        : wl,
    );
    setAllWls(updatedWls);
    localStorage.setItem("wls", JSON.stringify(updatedWls));

    toast.success("Partida enviada com sucesso!");
    setOpen(false);
  };

  const handleFinishWL = () => {
    const confirmed = window.confirm("Tem certeza que deseja finalizar a WL?");
    if (!confirmed) return;

    const updatedWls = allWls.map((wl) =>
      wl.id === wlActual.id ? { ...wl, status: "finished" } : wl,
    );
    setAllWls(updatedWls);
    localStorage.setItem("wls", JSON.stringify(updatedWls));

    toast.success("WL finalizada com sucesso!");
    router.push("/");
  };

  // Estatísticas
  const goalsScored = myGoals(wlActual);
  const goalsConceded = opponentGoals(wlActual);
  const goalDifference = goalsScored - goalsConceded;
  const myPossessionBall = myPossession(wlActual);
  const averageMyPossession =
    myPossessionBall / (wlActual?.matches?.length || 1);
  const myTotalPasses = totalPasses(wlActual);
  const myTotalAccuratePasses = totalAccuratePasses(wlActual);
  const accuratePassPercentage =
    (myTotalAccuratePasses / (myTotalPasses || 1)) * 100;
  const myTotalDisconnects = totalDisconnects(wlActual);
  const myVictories = victories(wlActual);
  const myDefeats = defeats(wlActual);
  const currentRank = romanRanks[Math.min(myVictories, 15) - 1] || 0;

  return (
    <div>
      <HeroWLPage
        onSubmit={handleFormSubmit}
        open={open}
        setOpen={setOpen}
        wlActive={wlActual}
      />
      <StatisticsList
        wlActive={wlActual}
        currentRank={String(currentRank)}
        victories={String(myVictories)}
        defeats={String(myDefeats)}
        totalDisconnects={String(myTotalDisconnects)}
        myGoals={String(goalsScored)}
        opponentGoals={String(goalsConceded)}
        goalDifference={goalDifference}
        averageMyPossession={averageMyPossession}
        accuratePassPercentage={accuratePassPercentage}
      />
      <MatchList wlAtiva={wlActual} />

      <div className="w-full flex justify-center mt-10">
        <Button
          className="mt-4 w-full max-w-2xs cursor-pointer"
          onClick={handleFinishWL}
        >
          Finalizar WL {wlActual.nameWl}
        </Button>
      </div>
    </div>
  );
}
