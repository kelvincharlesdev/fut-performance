import { Match } from "./Match";

export interface WeekendLeagueData {
  id: string;
  nameWl: string;
  status: string;
  matches?: Match[];
  createdAt: string;
}
