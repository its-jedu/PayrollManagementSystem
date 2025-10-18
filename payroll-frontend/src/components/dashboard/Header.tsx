import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow p-4">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div>
        <LogoutButton />
      </div>
    </header>
  );
}
