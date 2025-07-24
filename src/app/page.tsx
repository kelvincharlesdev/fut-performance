'use client';

import { useState } from 'react';
import { FormContent } from '@/components/Form/';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white">Bem vindo ao FUT!</h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-4 w-full max-w-2xs cursor-pointer">
            Iniciar nova WL
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Weekend League</DialogTitle>
            <DialogDescription>
              Preencha os dados para iniciar sua nova WL.
            </DialogDescription>
          </DialogHeader>

          <FormContent onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
