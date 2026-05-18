import { Mail, Phone, Target, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const membros = [
  { id: 1, nome: 'Ana Silva', cargo: 'Vendedora Sênior', email: 'ana.silva@empresa.com', tel: '(11) 98888-1111', meta: '95%', avatar: 'AS' },
  { id: 2, nome: 'Carlos Santos', cargo: 'Vendedor Pleno', email: 'carlos.s@empresa.com', tel: '(11) 98888-2222', meta: '82%', avatar: 'CS' },
  { id: 3, nome: 'Marina Costa', cargo: 'Vendedora Sênior', email: 'marina.c@empresa.com', tel: '(11) 98888-3333', meta: '110%', avatar: 'MC' },
  { id: 4, nome: 'João Pedro', cargo: 'Vendedor Júnior', email: 'joao.p@empresa.com', tel: '(11) 98888-4444', meta: '65%', avatar: 'JP' },
];

export function Team() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans">

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white p-6 shadow-sm flex justify-between items-center z-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Equipe Comercial</h1>
            <p className="text-sm text-slate-500">Gerencie os membros do seu time</p>
          </div>
          <Link to="/profile" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold hover:bg-blue-200 transition-colors cursor-pointer">Mat</Link>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Membros Ativos ({membros.length})</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm">
              <UserPlus className="w-4 h-4" /> Novo Membro
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {membros.map((membro) => (
              <div key={membro.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-600 mb-4">
                  {membro.avatar}
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{membro.nome}</h3>
                <p className="text-sm text-slate-500 mb-4">{membro.cargo}</p>
                
                <div className="w-full bg-slate-50 rounded-lg p-3 mb-4 flex justify-between items-center border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Meta Mês</span>
                  </div>
                  <span className="text-sm font-bold text-slate-800">{membro.meta}</span>
                </div>

                <div className="w-full space-y-2 mt-auto">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium">
                    <Mail className="w-4 h-4" /> E-mail
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium">
                    <Phone className="w-4 h-4" /> Ligar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}