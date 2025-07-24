import { MenuLink } from '@/models/MenuLinks';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

export const menuLinks: MenuLink[] = [
  {
    label: 'Home',
    link: '/',
    icon: Home,
  },
  {
    label: 'Iniciar WL',
    link: '/iniciar-wl',
    icon: Home,
  },
];
