import Link from 'next/link';

import * as I from './MobileHeader.interface';

export const NavMobile = ({ menuLinks }: I.NavMobileProps) => {
  return (
    <ul className="flex flex-col px-4 gap-4 ">
      {menuLinks.map((item) => (
        <li key={item.label} className="text-primary-foreground border-b pb-4">
          <Link
            key={item.label}
            href={item.link}
            className="flex items-center gap-2"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
