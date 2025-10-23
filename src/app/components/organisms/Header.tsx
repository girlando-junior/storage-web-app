export default function Header() {
  return (
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
  );
}