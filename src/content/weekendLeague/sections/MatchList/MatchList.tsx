import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Match } from "@/models";

import * as I from "./MatchList.interface";

const getPassAccuracy = (match: Match) => {
  const total = Number(match.myTotalPasses);
  const accurate = Number(match.myAccuratePasses);

  if (!total) return "0.00";
  return ((accurate / total) * 100).toFixed(0);
};

export const MatchList = ({ wlAtiva }: I.MatchListProps) => {
  if (wlAtiva.matches?.length === 0) {
  }
  return (
    <section className="mt-10 flex flex-col gap-4 items-center w-full">
      <h3 className="text-2xl text-white font-bold">Partidas em detalhe</h3>
      {wlAtiva.matches === undefined && (
        <p className="w-full text-muted-foreground text-center">
          Nenhuma partida registrada
        </p>
      )}
      <ul className="w-full space-y-2 gap-4 grid md:grid-cols-2">
        {wlAtiva.matches?.map((match) => (
          <li key={match.id} className="max-w-4xl w-full mx-auto">
            <Accordion
              className="bg-foreground px-4 "
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white ">
                  Partida {match.id}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground flex flex-col border-t border-b-muted pt-2 ">
                  <ul className="space-y-2">
                    <li>Adversario: {match.opponent}</li>
                    <li>Resultado: {match.resultado}</li>
                    <li>
                      Placar: {match.myGoals} x {match.opponentGoals}
                    </li>
                    <li>Posse de bola: {match.myPossession}</li>
                    <li>Precisao dos passes: {getPassAccuracy(match)}%</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </section>
  );
};
