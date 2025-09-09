import { Match, WeekendLeagueData } from "@/models";

export interface HeroWLPageProps {
  wlActive: WeekendLeagueData;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (values: Match) => void;
}
