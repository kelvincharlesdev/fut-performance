import { WeekendLeagueData } from "@/models/WeekendLeagueData";

// Gols feitos
export const myGoals = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.reduce((sum, match) => sum + Number(match.myGoals), 0) ||
    0
  );
};

// Gols sofridos
export const opponentGoals = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.reduce(
      (sum, match) => sum + Number(match.opponentGoals),
      0,
    ) || 0
  );
};

// Posse de bola
export const myPossession = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.reduce(
      (sum, match) => sum + Number(match.myPossession),
      0,
    ) || 0
  );
};

// Total de passes
export const totalPasses = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.reduce(
      (total, match) => total + Number(match.myTotalPasses),
      0,
    ) || 0
  );
};

// Total de passes certos
export const totalAccuratePasses = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.reduce(
      (sum, match) => sum + Number(match.myAccuratePasses),
      0,
    ) || 0
  );
};

// Total de desconexões
export const totalDisconnects = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.reduce(
      (sum, match) => sum + (match.dc === "sim" ? 1 : 0),
      0,
    ) || 0
  );
};

// Vitórias
export const victories = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.filter((match) => match.resultado === "vitoria")
      .length || 0
  );
};

// Derrotas
export const defeats = (wlActual: WeekendLeagueData) => {
  return (
    wlActual?.matches?.filter((match) => match.resultado === "derrota")
      .length || 0
  );
};
