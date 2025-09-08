import { Match, WeekendLeagueData } from "@/app/weekend-league/page";

export interface HeroWLPageProps {
  wlActive: WeekendLeagueData;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (values: Match) => void;
}
