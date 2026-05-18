import { Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === 'admin@empresa.com') {
      localStorage.setItem('userRole', 'admin');
    } else {
      localStorage.setItem('userRole', 'user');
    }

    navigate('/dashboard');
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans">

      <div className="hidden lg:flex w-1/2 bg-slate-900 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-20 transform -skew-x-12 translate-x-1/4"></div>
        <div className="relative z-10 text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-6">Monitoramento Comercial</h1>
          <p className="text-xl text-slate-300">
            Acompanhe suas metas, gerencie sua equipe e tenha visão total do seu desempenho em tempo real.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800">Bem-vindo de volta</h2>
            <p className="text-slate-500 mt-2">Acesse sua conta para continuar</p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-900" 
                  placeholder="admin@empresa.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-900" 
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-end mt-1">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500 font-medium">Esqueceu a senha?</Link>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer"
            >
              Entrar no Sistema
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Ainda não tem uma conta?{' '}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Criar conta
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
}