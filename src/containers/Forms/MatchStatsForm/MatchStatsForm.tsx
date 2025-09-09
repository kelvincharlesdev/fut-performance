"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { matchStatsSchema } from "@/schemas/formSchema";
import { StatsRow } from "./components/StatsRow/StatsRow";

export type FormData = z.infer<typeof matchStatsSchema>;

type FormContentProps = {
  onSuccess?: () => void;
  onSubmit: (data: FormData) => void;
};

export const MatchStatsForm = ({ onSubmit }: FormContentProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(matchStatsSchema),
    defaultValues: {
      opponent: "",
      opponentGoals: "0",
      myGoals: "0",
      plataforma: "PS5",
      dc: "nao",
      resultado: "derrota",
      myShots: "0",
      opponentShots: "0",
      myPossession: "0",
      opponentPossession: "0",
      myTotalPasses: "0",
      opponentTotalPasses: "0",
      myAccuratePasses: "0",
      opponentAccuratePasses: "0",
      myPassAccuracy: "0",
      opponentPassAccuracy: "0",
    },
  });

  const handleDcChange = (
    val: "sim" | "nao",
    field: ControllerRenderProps<FormData, "dc">,
  ) => {
    field.onChange(val);
    if (val === "sim") {
      form.setValue("resultado", "derrota");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-primary-foreground"
      >
        {/* Oponente */}
        <FormField
          control={form.control}
          name="opponent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Oponente: </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite a tag do oponente"
                  type="text"
                  {...field}
                />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {/* Plataforma */}
        <FormField
          control={form.control}
          name="plataforma"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plataforma: </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite a plataforma"
                  type="text"
                  {...field}
                />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {/* Estatísticas */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">Estatísticas</h3>
          <div className="grid grid-cols-3 gap-4 text-center font-semibold">
            <span>Eu</span>
            <span></span>
            <span>Adversário</span>
          </div>
          <StatsRow
            label="Placar"
            myStatic="myGoals"
            opponentStatic="opponentGoals"
            form={form}
          />
          <StatsRow
            label="Finalizações"
            myStatic="myShots"
            opponentStatic="opponentShots"
            form={form}
          />
          <StatsRow
            label="Posse de Bola (%)"
            myStatic="myPossession"
            opponentStatic="opponentPossession"
            form={form}
          />
          <StatsRow
            label="Total de Passes"
            myStatic="myTotalPasses"
            opponentStatic="opponentTotalPasses"
            form={form}
          />
          <StatsRow
            label="Passes Certos"
            myStatic="myAccuratePasses"
            opponentStatic="opponentAccuratePasses"
            form={form}
          />
          <StatsRow
            label="Precisão Passe (%)"
            myStatic="myPassAccuracy"
            opponentStatic="opponentPassAccuracy"
            form={form}
          />
        </div>

        {/* Desconexão */}

        <div className="flex flex-col gap-6 mt-14 w-full items-center justify-center">
          <FormField
            control={form.control}
            name="dc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desconexão:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(val) => {
                      handleDcChange(val as "sim" | "nao", field);
                    }}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="sim" />
                      </FormControl>
                      <FormLabel className="font-normal">SIM</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="nao" />
                      </FormControl>
                      <FormLabel className="font-normal">NÃO</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Resultado */}
          <FormField
            control={form.control}
            name="resultado"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resultado:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={form.watch("resultado")}
                    className="flex gap-4"
                  >
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem
                          value="vitoria"
                          disabled={form.watch("dc") === "sim"}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">Vitória</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <RadioGroupItem value="derrota" />
                      </FormControl>
                      <FormLabel className="font-normal">Derrota</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-10"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Enviando partida..."
            : "Enviar partida"}
        </Button>
      </form>
    </Form>
  );
};
