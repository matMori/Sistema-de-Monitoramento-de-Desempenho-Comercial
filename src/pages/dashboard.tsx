import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, ShoppingCart, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const chartData = [
  { name: 'Seg', vendas: 4000 },
  { name: 'Ter', vendas: 3000 },
  { name: 'Qua', vendas: 2000 },
  { name: 'Qui', vendas: 2780 },
  { name: 'Sex', vendas: 1890 },
  { name: 'Sáb', vendas: 2390 },
  { name: 'Dom', vendas: 3490 },
];

const topSellers = [
  { id: 1, name: 'Ana Silva', sales: 'R$ 12.450', avatar: 'AS' },
  { id: 2, name: 'Carlos Santos', sales: 'R$ 10.230', avatar: 'CS' },
  { id: 3, name: 'Marina Costa', sales: 'R$ 8.900', avatar: 'MC' },
  { id: 4, name: 'João Pedro', sales: 'R$ 7.450', avatar: 'JP' },
];

const kpis = [
  { title: 'Faturamento Total', value: 'R$ 45.231', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
  { title: 'Vendas Realizadas', value: '342', icon: ShoppingCart, color: 'text-blue-600', bg: 'bg-blue-100' },
  { title: 'Ticket Médio', value: 'R$ 132,25', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
  { title: 'Meta do Mês', value: '85%', icon: Target, color: 'text-orange-600', bg: 'bg-orange-100' },
];

export function Dashboard() {
  return (
    <>
      <header className="bg-white p-6 shadow-sm flex justify-between items-center z-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Desempenho Comercial</h1>
          <p className="text-sm text-slate-500">Resumo das atividades da semana</p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/profile" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold hover:bg-blue-200 transition-colors cursor-pointer">
            Mat
          </Link>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi) => (
            <div key={kpi.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-slate-500 text-sm font-medium mb-1">{kpi.title}</h3>
                <p className="text-2xl font-bold text-slate-800">{kpi.value}</p>
              </div>
              <div className={`p-3 rounded-full ${kpi.bg}`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 lg:col-span-2 min-h-[400px]">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Evolução de Vendas (Semana)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} />
                  <Bar dataKey="vendas" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 min-h-[400px]">
             <h3 className="text-lg font-bold text-slate-800 mb-6">Top Vendedores</h3>
             <div className="flex flex-col gap-4">
               {topSellers.map((seller) => (
                 <div key={seller.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600">
                       {seller.avatar}
                     </div>
                     <span className="font-medium text-slate-700">{seller.name}</span>
                   </div>
                   <span className="font-bold text-slate-900">{seller.sales}</span>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </>
  );
}