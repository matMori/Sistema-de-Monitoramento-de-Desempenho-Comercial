import { User, Mail, Briefcase, ArrowLeft, LogOut, Camera, Key } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

export function Profile() {
  const navigate = useNavigate();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarPreview(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="h-32 bg-slate-900 relative">

            <div className="absolute -bottom-12 left-8">
              <div className="relative group">
                <div className="w-24 h-24 bg-blue-100 border-4 border-white rounded-full flex items-center justify-center text-blue-700 text-3xl font-bold shadow-sm overflow-hidden">
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span>Mat</span>
                  )}
                </div>

                <button 
                  onClick={() => fileInputRef.current?.click()}
                  type="button"
                  className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white border-2 border-white hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                  title="Alterar foto de perfil"
                >
                  <Camera className="w-4 h-4" />
                </button>

                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

          </div>
          
          <div className="pt-16 pb-8 px-8">
            <h1 className="text-2xl font-bold text-slate-800">Meu Perfil</h1>
            <p className="text-slate-500 text-sm mb-8">Gerencie suas informações pessoais e configurações.</p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                  <div className="relative">
                    <User className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-slate-400" />
                    <input type="text" defaultValue="Matheus" className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Cargo</label>
                  <div className="relative">
                    <Briefcase className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-slate-400" />
                    <input type="text" defaultValue="Desenvolvedor Frontend" className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-slate-400" />
                    <input type="email" defaultValue="email@exemplo.com" className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-2 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-800 mb-4">Segurança da Conta</h3>
                <Link to="/change-password" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                  <Key className="w-4 h-4" />
                  Mudar Senha
                </Link>
              </div>

              <div className="pt-8 mt-4 border-t border-slate-100 flex justify-between items-center">
                <button 
                  onClick={handleLogout}
                  type="button"
                  className="flex items-center gap-2 px-6 py-2 border border-red-200 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Sair da Conta
                </button>
                
                <button type="button" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                  Salvar Alterações
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}