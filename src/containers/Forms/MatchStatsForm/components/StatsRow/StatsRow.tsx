import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import * as I from "./StatsRow.interface";

export const StatsRow = ({
  label,
  myStatic,
  opponentStatic,
  form,
}: I.StatsRowProps) => (
  <div className="flex justify-center gap-4">
    <FormField
      control={form.control}
      name={myStatic}
      render={({ field }) => (
        <FormItem className="h-15">
          <FormControl>
            <Input type="text" className="text-center" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <span className="w-32 h-9 flex items-center  justify-center text-center font-medium">
      {label}
    </span>
    <FormField
      control={form.control}
      name={opponentStatic}
      render={({ field }) => (
        <FormItem className="h-15">
          <FormControl>
            <Input type="text" className="text-center" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
);
