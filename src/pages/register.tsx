import { Lock, Mail, User, Briefcase } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans">
      <div className="hidden lg:flex w-1/2 bg-slate-900 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-20 transform -skew-x-12 translate-x-1/4"></div>
        <div className="relative z-10 text-white max-w-lg">
          <h1 className="text-5xl font-bold mb-6">Junte-se à Equipe</h1>
          <p className="text-xl text-slate-300">
            Crie sua conta para acessar o painel de monitoramento comercial e acompanhar seus resultados.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-slate-800">Criar Conta</h2>
            <p className="text-slate-500 mt-2">Preencha os dados abaixo para se cadastrar</p>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" required className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-900" placeholder="Seu nome" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" required className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-900" placeholder="seu@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Profissão / Cargo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-slate-400" />
                </div>
                <select 
                  required 
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-600 appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione sua profissão...</option>
                  <option value="vendedor_jr">Vendedor Júnior</option>
                  <option value="vendedor_pl">Vendedor Pleno</option>
                  <option value="vendedor_sr">Vendedor Sênior</option>
                  <option value="gerente">Gerente Comercial</option>
                  <option value="analista">Analista de BI</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input type="password" required className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50 text-slate-900" placeholder="••••••••" />
              </div>
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 mt-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer">
              Cadastrar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Já possui uma conta?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}