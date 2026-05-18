import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';

export function Layout() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}