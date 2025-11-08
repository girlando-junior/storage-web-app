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
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Página Inicial", path: "/dashboard" },
  { icon: KeyRound, label: "Chaves", path: "/chaves" },
  { icon: Hammer, label: "Ferramentas", path: "/ferramentas" },
  {
    icon: PlugZap,
    label: "Ferramentas Elétricas",
    path: "/ferramentas-eletricas",
  },
  { icon: Users, label: "Voluntários", path: "/voluntarios" },
  { icon: Calendar, label: "Programação", path: "/programacao" },
  { icon: UserPlus, label: "Cadastro de Usuários", path: "/cadastro-usuarios" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "bg-[var(--color-primary)] text-primary-foreground shadow-md flex flex-col transition-all duration-300 overflow-x-hidden",
        open ? "w-[224px] justify-start" : "w-[80px]"
      )}
    >
      <div className="flex flex-col flex-1 h-screen border-t">
        <nav className="flex-1 overflow-y-auto px-2 py-4 flex flex-col gap-[16px] p-[16px]">
          {menuItems.map((item, index) => {
            const active = pathname === item.path;

            return (
              <div
                key={index}
                onClick={() => router.push(item.path)}
                className={cn(
                  "flex gap-[4px] items-center cursor-pointer min-w-0 rounded-md px-2 py-2 transition-all duration-200 hover:bg-primary-foreground/10",
                  open ? "justify-start" : "justify-center",
                  active && "bg-primary-foreground/20 font-medium"
                )}
              >
                <item.icon size={24} className="shrink-0" />

                <span
                  className={cn(
                    "overflow-x-hidden text-sm whitespace-nowrap transition-all duration-300 delay-100 ease-in-out",
                    open
                      ? "opacity-100 translate-x-0 ml-[4px]"
                      : "opacity-0 -translate-x-2 ml-0 pointer-events-none"
                  )}
                >
                  {open && item.label}
                </span>
              </div>
            );
          })}
        </nav>

        <div className="p-[16px] border-t">
          <span
            className="cursor-pointer flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </span>
        </div>
      </div>
    </aside>
  );
}
