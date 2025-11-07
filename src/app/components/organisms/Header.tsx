import { Package } from "lucide-react";

import { User } from "lucide-react";
import { MoreVertical } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-[var(--color-primary)] p-[16px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Package size={40} />
          <h1 className="font-bold">STORAGE</h1>
        </div>

        <div className="flex items-center gap-4">
          <MoreVertical size={40} />
          <User size={40} />
        </div>
      </div>
    </div>
  );
}
