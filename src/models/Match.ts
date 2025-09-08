export interface Match {
  id: number;
  opponent: string;
  plataforma: "PS4" | "PS5" | "XBOX" | "PC";
  myGoals: string;
  opponentGoals: string;
  myPossession: string;
  opponentPossession: string;
  myTotalPasses: string;
  myAccuratePasses: string;
  dc: "sim" | "nao";
  resultado: "vitoria" | "derrota";
}
