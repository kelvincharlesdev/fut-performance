import { UseFormReturn } from "react-hook-form";
import { FormData } from "../../MatchStatsForm";

export interface StatsRowProps {
  label: string;
  myStatic: keyof FormData & string;
  opponentStatic: keyof FormData & string;
  form: UseFormReturn<FormData>;
}
