import { Search, Filter, Download, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const vendas = [
  { id: '#V-1042', cliente: 'Tech Solutions LTDA', valor: 'R$ 12.500,00', data: '13/05/2026', status: 'Concluído', vendedor: 'Ana Silva' },
  { id: '#V-1041', cliente: 'Mercado Central', valor: 'R$ 3.200,00', data: '12/05/2026', status: 'Pendente', vendedor: 'Carlos Santos' },
  { id: '#V-1040', cliente: 'Construtora Alpha', valor: 'R$ 28.900,00', data: '10/05/2026', status: 'Concluído', vendedor: 'Marina Costa' },
  { id: '#V-1039', cliente: 'Livraria Saber', valor: 'R$ 1.450,00', data: '09/05/2026', status: 'Cancelado', vendedor: 'João Pedro' },
  { id: '#V-1038', cliente: 'Clínica Bem Estar', valor: 'R$ 5.600,00', data: '08/05/2026', status: 'Concluído', vendedor: 'Ana Silva' },
];

export function Sales() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans">

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white p-6 shadow-sm flex justify-between items-center z-10">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Controle de Vendas</h1>
            <p className="text-sm text-slate-500">Gerencie e acompanhe todas as transações</p>
          </div>
          <Link to="/profile" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold hover:bg-blue-200 transition-colors cursor-pointer">Mat</Link>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input type="text" placeholder="Buscar por cliente, ID ou vendedor..." className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50" />
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium text-sm">
                  <Filter className="w-4 h-4" /> Filtros
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors font-medium text-sm">
                  <Download className="w-4 h-4" /> Exportar
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
                    <th className="p-4 font-medium">ID da Venda</th>
                    <th className="p-4 font-medium">Cliente</th>
                    <th className="p-4 font-medium">Valor</th>
                    <th className="p-4 font-medium">Data</th>
                    <th className="p-4 font-medium">Vendedor</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {vendas.map((venda) => (
                    <tr key={venda.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium text-slate-900">{venda.id}</td>
                      <td className="p-4 text-slate-700">{venda.cliente}</td>
                      <td className="p-4 text-slate-900 font-medium">{venda.valor}</td>
                      <td className="p-4 text-slate-500">{venda.data}</td>
                      <td className="p-4 text-slate-700">{venda.vendedor}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium
                          ${venda.status === 'Concluído' ? 'bg-green-100 text-green-700' : ''}
                          ${venda.status === 'Pendente' ? 'bg-orange-100 text-orange-700' : ''}
                          ${venda.status === 'Cancelado' ? 'bg-red-100 text-red-700' : ''}
                        `}>
                          {venda.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                          <MoreHorizontal className="w-5 h-5 ml-auto" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}