"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";

import { Match, WeekendLeagueData } from "@/models";
import { romanRanks } from "@/consts/romanRanks";
import { HeroWLPage, StatisticsList } from "@/content/weekendLeague";
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

  const allWls: WeekendLeagueData[] = JSON.parse(
    localStorage.getItem("wls") || "[]",
  );
  const wlActual = allWls.find((wl) => wl.status === "active");

  const onSubmit = (values: Match) => {
    try {
      if (!wlActual) return;

      wlActual.matches = wlActual.matches || [];
      wlActual.matches.push(values);
      localStorage.setItem("wls", JSON.stringify(allWls));

      toast.success("Partida enviada com sucesso!");

      setOpen(false);
    } catch (error) {
      toast.error("Erro ao enviar partida");
      console.error(error);
    }
  };

  // Statistics
  const goalsScored = wlActual ? myGoals(wlActual) : 0;
  const goalsConceded = wlActual ? opponentGoals(wlActual) : 0;
  const goalDifference = goalsScored - goalsConceded;
  const myPossessionBall = wlActual ? myPossession(wlActual) : 0;
  const averageMyPossession =
    myPossessionBall / (wlActual?.matches?.length || 1);
  const myTotalPasses = wlActual ? totalPasses(wlActual) : 0;
  const myTotalAccuratePasses = wlActual ? totalAccuratePasses(wlActual) : 0;
  const accuratePassPercentage =
    (myTotalAccuratePasses / (myTotalPasses || 1)) * 100;
  const myTotalDisconnects = wlActual ? totalDisconnects(wlActual) : 0;
  const myVictories = wlActual ? victories(wlActual) : 0;
  const myDefeats = wlActual ? defeats(wlActual) : 0;
  const currentRank = romanRanks[Math.min(myVictories, 15) - 1] || 0;

  const handleFinishWL = () => {
    if (!wlActual) return;

    const confirmed = window.confirm("Tem certeza que deseja finalizar a WL?");
    if (!confirmed) return;

    wlActual.status = "finished";
    localStorage.setItem("wls", JSON.stringify(allWls));
    toast.success("WL finalizada com sucesso!");
    router.push("/");
  };

  if (!wlActual)
    return (
      <span className="w-full  text-muted-foreground flex items-center justify-center ">
        Nenhuma WL Ativa
      </span>
    );

  return (
    <div>
      <HeroWLPage
        onSubmit={onSubmit}
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

      <div className="w-full flex justify-center mt-10">
        <Button
          className="mt-4 w-full max-w-2xs cursor-pointer"
          onClick={handleFinishWL}
        >
          Finalizar WL {wlActual?.nameWl}
        </Button>
      </div>
    </div>
  );
}
