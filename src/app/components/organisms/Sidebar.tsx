"use client";

import { useState } from "react";
import {
  Home,
  KeyRound,
  Hammer,
  PlugZap,
  Users,
  Calendar,
  UserPlus,
  Package,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Página Inicial" },
  { icon: KeyRound, label: "Chaves" },
  { icon: Hammer, label: "Ferramentas" },
  { icon: PlugZap, label: "Ferramentas Elétricas" },
  { icon: Users, label: "Voluntários", active: true },
  { icon: Calendar, label: "Programação" },
  { icon: UserPlus, label: "Cadastro de Usuários" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={cn(
        " bg-[var(--color-primary)] text-primary-foreground shadow-md flex flex-col transition-all duration-300",
        open ? "w-[224px]" : "w-[80px]"
      )}
    >
      <div className="flex flex-col flex-1 h-screen h-full">
        <nav className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <nav key={index}>
              <item.icon size={20} />
              {open && <span>{item.label}</span>}
            </nav>
          ))}
        </nav>

        <div className="border-t border-primary-foreground/20 p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className="w-full text-white hover:bg-primary-foreground/20"
          >
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </aside>
  );
}
