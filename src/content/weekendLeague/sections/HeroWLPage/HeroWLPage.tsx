import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MatchStatsForm } from "@/containers/Forms/MatchStatsForm";

import * as I from "./HeroWLPage.interface";
import { Match } from "@/models";

export const HeroWLPage = ({
  wlActive,
  open,
  setOpen,
  onSubmit,
}: I.HeroWLPageProps) => {
  const handleFormSubmit = (values: Omit<Match, "id">) => {
    const lastId = wlActive.matches?.length
      ? Math.max(...wlActive.matches.map((m) => m.id))
      : 0;

    const newMatch: Match = { ...values, id: lastId + 1 };
    onSubmit(newMatch);
  };
  return (
    <section className="flex flex-col justify-center w-full items-center">
      <h1 className="text-2xl md:text-3xl text-center md:text-left font-semibold text-white">
        Desempenho na wl
        <span className="ml-4 text-secondary-foreground font-bold ">
          {wlActive && wlActive.nameWl}
        </span>
      </h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-4 w-full max-w-2xs cursor-pointer">
            Iniciar partida
          </Button>
        </DialogTrigger>

        <DialogContent className=" text-primary-foreground max-h-[80vh] w-full max-w-2xl overflow-auto">
          <DialogHeader>
            <DialogTitle>Nova partida</DialogTitle>
            <DialogDescription>
              Preencha os dados da sua nova partida.
            </DialogDescription>
          </DialogHeader>

          <MatchStatsForm
            onSuccess={() => setOpen(false)}
            onSubmit={handleFormSubmit}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};
