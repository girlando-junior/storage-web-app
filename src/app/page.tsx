"use client"; // renderiza dentro do servidor

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Plus, Edit2, Trash2, Home, Users, Calendar, Hammer, Package, PlugZap, KeyRound, UserPlus, Phone } from 'lucide-react';

export default function StorageVoluntarios() {
  const [volunteers] = useState(Array(16).fill(null).map((_, i) => ({
    id: `F523FD2F`,
    name: 'ANA CLARA CORDEIRO',
    phone: '85994166129',
    key: `F523FD2F-${i}`
  })));

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Página Inicial' },
    { icon: KeyRound, label: 'Chaves' },
    { icon: Hammer, label: 'Ferramentas' },
    { icon: PlugZap, label: 'Ferramentas Elétricas' },
    { icon: Users, label: 'Voluntários', active: true },
    { icon: Calendar, label: 'Programação' },
    { icon: UserPlus, label: 'Cadastro de Usuários' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-48' : 'w-20'} bg-slate-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center gap-2 border-b border-slate-700">
          <div className="w-8 h-8 bg-slate-800 flex items-center justify-center">
            <Package size={50} className="text-slate-50" />
          </div>
          {sidebarOpen && <span className="font-bold text-lg">STORAGE</span>}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded transition ${
                item.active
                  ? 'bg-slate-700 text-white'
                  : 'text-gray-300 hover:bg-slate-700'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center p-2 hover:bg-slate-700 rounded"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>STORAGE</span>
            <span>/</span>
            <span className="font-semibold">Voluntários</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="mb-6">
              <Button className="bg-slate-800 hover:bg-slate-900 text-white">
                <Plus size={18} className="mr-2" />
                Cadastrar Voluntários
              </Button>
            </div>

            {/* Grid de Voluntários */}
            <div className="grid grid-cols-4 gap-4">
              {volunteers.map((volunteer, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow border border-gray-200 p-4 hover:shadow-lg transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <Users size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{volunteer.id}</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {volunteer.name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <Phone size={20} className="text-gray-600" />
                      </svg>
                      <span className="text-sm">{volunteer.phone}</span>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-gray-700"
                      >
                        <Edit2 size={16} className="mr-1" />
                        Editar
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                      >
                        <Trash2 size={16} className="mr-1" />
                        Apagar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t px-6 py-3 text-sm text-gray-500 text-center">
          © 2025 Giriando Junior & Ana Clara. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
}