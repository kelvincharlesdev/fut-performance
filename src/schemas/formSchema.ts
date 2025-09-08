import z from "zod";

export const initialWLSchema = z.object({
  nameWl: z.string().min(1, "Nome da WL é obrigatório"),
  nameTime: z.string().optional(),
});

export const matchStatsSchema = z.object({
  opponent: z.string().min(1, "Nome do oponente é obrigatório"),
  plataforma: z.enum(["PS4", "PS5", "XBOX", "PC"], {
    error: "Plataforma invalida, escolha uma das opções: PS4, PS5, XBOX, PC",
  }),
  myGoals: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválido"),
  opponentGoals: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválido"),
  dc: z.enum(["sim", "nao"], {
    error: "Selecione se houve desconexão",
  }),
  resultado: z.enum(["vitoria", "derrota"], {
    error: "Selecione o resultado da partida",
  }),

  myShots: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválidas"),
  opponentShots: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválidas"),

  myPossession: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100,
      "Inválidas, deve ser entre 0 e 100",
    ),
  opponentPossession: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100,
      "Inválidas, deve ser entre 0 e 100",
    ),

  myTotalPasses: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválido"),
  opponentTotalPasses: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválido"),

  myAccuratePasses: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválido"),
  opponentAccuratePasses: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Inválido"),

  myPassAccuracy: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100,
      "Precisão deve ser entre 0 e 100",
    ),
  opponentPassAccuracy: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100,
      "Precisão deve ser entre 0 e 100",
    ),
});

export const playersSchema = z.object({
  players: z.array(z.string()).optional(),
});
