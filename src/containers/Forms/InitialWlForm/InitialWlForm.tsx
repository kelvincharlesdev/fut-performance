"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

import { useRouter } from "next/navigation";
import { initialWLSchema } from "@/schemas/formSchema";

type FormData = z.infer<typeof initialWLSchema>;

type FormContentProps = {
  onSuccess?: () => void;
};

export const InitialWlForm = ({ onSuccess }: FormContentProps) => {
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(initialWLSchema),
    defaultValues: {
      nameWl: "",
      nameTime: "",
    },
  });

  const onSubmit = (values: FormData) => {
    const newWl = {
      id: crypto.randomUUID(),
      ...values,
      createdAt: new Date().toISOString(),
      status: "active",
    };
    const storedWls = JSON.parse(localStorage.getItem("wls") || "[]");
    const updatedWls = [...storedWls, newWl];
    localStorage.setItem("wls", JSON.stringify(updatedWls));

    if (onSuccess) onSuccess();
    router.push("/weekend-league");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 text-primary-foreground"
      >
        <FormField
          control={form.control}
          name="nameWl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da WL (Ex: Primeira WL)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome da WL"
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
        <FormField
          control={form.control}
          name="nameTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Time (Opcional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite numero de derrotas"
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
        <div className="flex justify-center">
          <Button type="submit" className="w-full">
            Iniciar
          </Button>
        </div>
      </form>
    </Form>
  );
};
