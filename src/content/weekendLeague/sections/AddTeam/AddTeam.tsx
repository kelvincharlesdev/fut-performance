// import { PlayersForm } from "@/containers/Forms/PlayersForm";

// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// export const AddTeam = () => {
//   return (
//     <section className="mt-8">
//       <p className="text-xl text-center md:text-left  text-white">
//         Adicione seu time para ter estatisticas de gols e assistencias de cada
//         atleta!
//       </p>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button className="mt-4 w-full max-w-2xs cursor-pointer">
//             Adicionar Time!
//           </Button>
//         </DialogTrigger>

//         <DialogContent className="text-primary-foreground">
//           <DialogHeader>
//             <DialogTitle>Nova Weekend League</DialogTitle>
//             <DialogDescription>
//               Preencha os dados para iniciar sua nova WL.
//             </DialogDescription>
//           </DialogHeader>

//           <PlayersForm onSuccess={() => setOpen(false)} />
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// };
