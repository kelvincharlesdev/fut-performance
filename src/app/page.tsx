'use client';

import { useState } from 'react';
import { InitialWlForm } from '@/containers/Forms/InitialWlForm';
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
    <div className="flex flex-col items-center h-screen ">
      <h1 className=" text-3xl md:text-5xl text-center md:text-left font-bold text-white">
        Bem vindo ao FUT!
      </h1>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-4 w-full max-w-2xs cursor-pointer">
            Iniciar nova WL
          </Button>
        </DialogTrigger>

        <DialogContent className="text-primary-foreground">
          <DialogHeader>
            <DialogTitle>Nova Weekend League</DialogTitle>
            <DialogDescription>
              Preencha os dados para iniciar sua nova WL.
            </DialogDescription>
          </DialogHeader>

          <InitialWlForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
