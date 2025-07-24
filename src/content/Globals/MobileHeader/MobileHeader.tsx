'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { menuLinks } from '@/data/menuLinks';
import { NavMobile } from './NavMobile';

export function MobileHeader() {
  return (
    <header className="flex items-center justify-between p-2 md:hidden border-b border-border bg-sidebar ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-6 h-6 text-primary-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 ">
          <SheetHeader className="border-b border-border pb-4">
            <SheetTitle className="text-primary-foreground">Menu</SheetTitle>
          </SheetHeader>
          <NavMobile menuLinks={menuLinks} />
        </SheetContent>
      </Sheet>
      <Image src="/images/logo-fut.png" alt="Logo" width={80} height={80} />
    </header>
  );
}
