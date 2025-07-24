import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';

import { menuLinks } from '@/data/menuLinks';

export function SidebarDesktop() {
  return (
    <Sidebar className="hidden md:flex">
      <SidebarHeader className="flex items-center p-4">
        <Image src="/images/logo-fut.png" alt="Logo" width={150} height={150} />
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuLinks.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  className="text-primary-foreground"
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.link}>
                      <item.icon />
                      <p>{item.label}</p>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarSeparator className="my-2" />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
