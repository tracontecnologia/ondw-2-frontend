import {
  MdPieChartOutline,
  MdAttachMoney,
  MdPersonOutline,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo';
import { SidebarItem } from './SidebarItem';

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-[350px] h-full bg-white shadow-lg flex flex-col items-center justify-start p-10">
      <Link to="/">
        <Logo width={200} />
      </Link>

      <div className="w-full my-5 flex flex-col gap-1">
        <Link to="/">
          <SidebarItem>
            <MdPieChartOutline fontSize="24px" />
            Dashboard
          </SidebarItem>
        </Link>
        <Link to="/cobrancas">
          <SidebarItem>
            <MdAttachMoney fontSize="24px" />
            Cobranças
          </SidebarItem>
        </Link>
        <Link to="/clientes">
          <SidebarItem>
            <MdPersonOutline fontSize="24px" />
            Clientes
          </SidebarItem>
        </Link>
      </div>
    </aside>
  );
}
