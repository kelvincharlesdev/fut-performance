import { WeekendLeagueData } from "@/models";

export interface StatisticsListProps {
  wlActive: WeekendLeagueData;
  currentRank: string;
  victories: string;
  defeats: string;
  myGoals: string;
  opponentGoals: string;
  totalDisconnects: string;
  goalDifference: number;
  averageMyPossession: number;
  accuratePassPercentage: number;
}
