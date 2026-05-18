import { Shield, Users, Database, Key, CheckCircle, ArrowLeft, Edit, Power, Copy, Plus, X } from 'lucide-react';
import React, { useState } from 'react';

const mockUsers = [
    { id: 1, name: 'Ana Silva', email: 'ana.silva@empresa.com', role: 'vendedor_sr', active: true },
    { id: 2, name: 'Carlos Santos', email: 'carlos.s@empresa.com', role: 'vendedor_pl', active: true },
    { id: 3, name: 'Matheus', email: 'matheus@empresa.com', role: 'admin', active: true },
    { id: 4, name: 'João Pedro', email: 'joao.p@empresa.com', role: 'vendedor_jr', active: false },
];

const mockApiKeys = [
    { id: 1, name: 'Integração ERP', key: 'sk_live_9f8d7...a1b2c', env: 'Produção', lastUsed: 'Há 5 min', active: true },
    { id: 2, name: 'App Mobile Dev', key: 'sk_test_4b3c2...x9y8z', env: 'Homologação', lastUsed: 'Ontem', active: true },
    { id: 3, name: 'Sistema Antigo', key: 'sk_live_1d2e3...f4g5h', env: 'Produção', lastUsed: 'Há 3 meses', active: false },
];

type UserType = {
    id: number;
    name: string;
    email: string;
    role: string;
    active: boolean;
};

export function Admin() {
    const [view, setView] = useState<'home' | 'users' | 'api'>('home');
    const [users, setUsers] = useState<UserType[]>(mockUsers);
    const [apiKeys, setApiKeys] = useState(mockApiKeys);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<UserType>({ id: 0, name: '', email: '', role: 'vendedor_jr', active: true });

    const toggleUserStatus = (id: number) => {
        setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user));
    };

    const handleOpenNewUser = () => {
        setFormData({ id: 0, name: '', email: '', role: 'vendedor_jr', active: true });
        setIsModalOpen(true);
    };

    const handleOpenEditUser = (user: UserType) => {
        setFormData(user);
        setIsModalOpen(true);
    };

    const handleSaveUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.id === 0) {
            const senhaProvisoria = Math.random().toString(36).slice(-8);
            setUsers([...users, { ...formData, id: Date.now() }]);
            alert(`✅ Usuário criado com sucesso!\n\nUma senha temporária foi enviada para o e-mail: ${formData.email}\n\nSenha Provisória: ${senhaProvisoria}\n\nO usuário poderá alterá-la no painel do perfil.`);
        } else {
            setUsers(users.map(u => u.id === formData.id ? formData : u));
        }
        setIsModalOpen(false);
    };

    const toggleApiStatus = (id: number) => {
        setApiKeys(apiKeys.map(api => api.id === id ? { ...api, active: !api.active } : api));
    };

    return (
        <>
            <header className="bg-white p-6 shadow-sm flex justify-between items-center z-10">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <Shield className="text-amber-500 w-7 h-7" />
                        Painel de Governança Global
                    </h1>
                    <p className="text-sm text-slate-500">Configurações críticas do sistema e auditoria</p>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 relative">

                {view === 'home' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-slate-800">Controle de Perfis</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 flex-1">Gerencie quais funcionários possuem acesso de leitura ou escrita.</p>
                                <button onClick={() => setView('users')} className="text-sm text-blue-600 font-semibold hover:underline text-left cursor-pointer">
                                    Configurar permissões →
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Database className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-slate-800">Status do Banco</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 flex-1">Monitore conexões ativas e logs de persistência.</p>
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 w-fit">
                                    <CheckCircle className="w-3 h-3" /> Online e Isolado
                                </span>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Key className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-slate-800">Integrações de API</h3>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 flex-1">Gerencie chaves criptográficas para sincronização.</p>
                                <button onClick={() => setView('api')} className="text-sm text-orange-600 font-semibold hover:underline text-left cursor-pointer">
                                    Ver chaves de API →
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {view === 'users' && (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div className="flex items-center gap-4">
                                <button onClick={() => setView('home')} className="p-2 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-slate-600">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <h2 className="text-xl font-bold text-slate-800">Gerenciamento de Perfis</h2>
                            </div>
                            <button
                                onClick={handleOpenNewUser}
                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                            >
                                <Plus className="w-4 h-4" /> Novo Usuário
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white text-slate-500 text-sm border-b border-slate-100">
                                        <th className="p-4 font-medium">Nome</th>
                                        <th className="p-4 font-medium">E-mail</th>
                                        <th className="p-4 font-medium">Cargo/Regra</th>
                                        <th className="p-4 font-medium">Status</th>
                                        <th className="p-4 font-medium text-right">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {users.map((u) => (
                                        <tr key={u.id} className={`border-b border-slate-50 transition-colors ${u.active ? 'hover:bg-slate-50' : 'bg-slate-50 opacity-75'}`}>
                                            <td className="p-4 font-medium text-slate-900">{u.name}</td>
                                            <td className="p-4 text-slate-600">{u.email}</td>
                                            <td className="p-4 text-slate-600 font-mono text-xs">{u.role}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.active ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                                                    {u.active ? 'Ativo' : 'Inativo'}
                                                </span>
                                            </td>
                                            <td className="p-4 flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleOpenEditUser(u)}
                                                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                                                    title="Editar"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => toggleUserStatus(u.id)}
                                                    className={`p-2 rounded transition-colors cursor-pointer ${u.active ? 'text-red-400 hover:text-red-600 hover:bg-red-50' : 'text-green-500 hover:text-green-700 hover:bg-green-50'}`}
                                                    title={u.active ? "Desativar Acesso" : "Ativar Acesso"}
                                                >
                                                    <Power className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {view === 'api' && (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div className="flex items-center gap-4">
                                <button onClick={() => setView('home')} className="p-2 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-slate-600">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <h2 className="text-xl font-bold text-slate-800">Chaves de API</h2>
                            </div>
                            <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors cursor-pointer">
                                <Plus className="w-4 h-4" /> Gerar Nova Chave
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white text-slate-500 text-sm border-b border-slate-100">
                                        <th className="p-4 font-medium">Nome da Integração</th>
                                        <th className="p-4 font-medium">Ambiente</th>
                                        <th className="p-4 font-medium">Chave (Secret)</th>
                                        <th className="p-4 font-medium">Último Uso</th>
                                        <th className="p-4 font-medium text-right">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {apiKeys.map((api) => (
                                        <tr key={api.id} className={`border-b border-slate-50 transition-colors ${api.active ? 'hover:bg-slate-50' : 'bg-slate-50 opacity-75'}`}>
                                            <td className="p-4 font-medium text-slate-900">{api.name}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${api.env === 'Produção' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                                                    {api.env}
                                                </span>
                                            </td>
                                            <td className="p-4 font-mono text-xs text-slate-500 flex items-center gap-2">
                                                {api.active ? api.key : '••••••••••••••••'}
                                                {api.active && (
                                                    <span title="Copiar Chave" className="cursor-pointer hover:text-slate-800 flex items-center">
                                                        <Copy className="w-3 h-3" />
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-4 text-slate-500">{api.lastUsed}</td>
                                            <td className="p-4 flex justify-end gap-2">
                                                <button
                                                    onClick={() => toggleApiStatus(api.id)}
                                                    className={`p-2 rounded transition-colors cursor-pointer ${api.active ? 'text-red-400 hover:text-red-600 hover:bg-red-50' : 'text-green-500 hover:text-green-700 hover:bg-green-50'}`}
                                                    title={api.active ? "Revogar Chave" : "Reativar Chave"}
                                                >
                                                    <Power className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 className="text-lg font-bold text-slate-800">
                                {formData.id === 0 ? 'Adicionar Novo Usuário' : 'Editar Usuário'}
                            </h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 hover:bg-slate-200 p-1 rounded-md transition-colors cursor-pointer">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveUser} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
                                    placeholder="Nome do funcionário"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">E-mail Corporativo</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
                                    placeholder="email@empresa.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nível de Acesso (Cargo)</label>
                                <select
                                    required
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50 cursor-pointer"
                                >
                                    <option value="vendedor_jr">Vendedor Júnior</option>
                                    <option value="vendedor_pl">Vendedor Pleno</option>
                                    <option value="vendedor_sr">Vendedor Sênior</option>
                                    <option value="gerente">Gerente Comercial</option>
                                    <option value="admin">Administrador do Sistema</option>
                                </select>
                            </div>

                            <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                                >
                                    Salvar Dados
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </>
    );
}