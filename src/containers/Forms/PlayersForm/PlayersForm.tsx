'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormItem, FormLabel } from '@/components/ui/form';

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { useState } from 'react';

import { playersSchema } from '@/schemas/formSchema';
import { Trash2 } from 'lucide-react';

type FormData = z.infer<typeof playersSchema>;

type FormContentProps = {
  onSuccess?: () => void;
};

export const PlayersForm = ({ onSuccess }: FormContentProps) => {
  const [playerName, setPlayerName] = useState('');

  const addPlayer = () => {
    if (!playerName.trim() || playerName === '') {
      alert('Por favor, insira um nome de jogador!');
      return;
    }

    const currentPlayers = form.getValues().players || [];

    if (currentPlayers.includes(playerName.trim())) {
      alert('Esse jogador já existe na lista.');
      return;
    }

    form.setValue('players', [...currentPlayers, playerName.trim()]);
    setPlayerName('');
  };

  const removePlayer = (index: number) => {
    const currentPlayers = form.getValues().players || [];

    const updatedPlayers = currentPlayers.filter((_, i) => i !== index);

    form.setValue('players', updatedPlayers);
  };

  const form = useForm<FormData>({
    resolver: zodResolver(playersSchema),
    defaultValues: {
      players: [],
    },
  });

  const onSubmit = (values: FormData) => {
    console.log(values);

    if (onSuccess) onSuccess();
  };

  const players = form.watch('players') ?? [];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 text-primary-foreground"
      >
        <FormItem>
          <FormLabel>Adicione os jogadores</FormLabel>
          <div className="flex gap-2">
            <Input
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <Button type="button" onClick={addPlayer}>
              Adicionar
            </Button>
          </div>
        </FormItem>

        {players.length > 0 && (
          <div className="pt-4">
            <h3 className="font-semibold mb-2">Jogadores adicionados:</h3>
            <div className="max-h-64 overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome do Jogador</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {players.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{player}</TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          onClick={() => removePlayer(index)}
                        >
                          <Trash2 />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}

        <Button type="submit">Enviar jogadores</Button>
      </form>
    </Form>
  );
};
