import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, ShieldAlert } from 'lucide-react';

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const userRole = localStorage.getItem('userRole');

  const isActive = (path: string) => {
    return location.pathname === path 
      ? "block p-3 bg-blue-600 rounded-lg font-medium text-white transition-colors"
      : "block p-3 hover:bg-slate-800 rounded-lg text-slate-300 transition-colors";
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-slate-800">
        Monitoramento
      </div>
      
      <nav className="p-4 flex-1">
        <ul className="space-y-2">
          <li><Link to="/dashboard" className={isActive('/dashboard')}>Visão Geral</Link></li>
          <li><Link to="/sales" className={isActive('/sales')}>Vendas</Link></li>
          <li><Link to="/team" className={isActive('/team')}>Equipe</Link></li>

          {userRole === 'admin' && (
            <li className="pt-4 mt-4 border-t border-slate-800">
              <Link to="/admin" className={isActive('/admin')}>
                <span className="flex items-center gap-2 text-amber-400 font-medium">
                  <ShieldAlert className="w-4 h-4" />
                  Painel Admin
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair do Sistema</span>
        </button>
      </div>
    </aside>
  );
}