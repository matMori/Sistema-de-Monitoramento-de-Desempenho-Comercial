import { Lock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('As novas senhas não coincidem. Tente novamente.');
      return;
    }

    if (newPassword.length < 6) {
      setError('A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }

    console.log('Senha alterada com sucesso!');
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <Link to="/profile" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Perfil
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden p-8">
          
          {!isSuccess ? (
            <>
              <div className="mb-6 text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800">Alterar Senha</h1>
                <p className="text-slate-500 text-sm mt-1">Crie uma nova senha forte para sua conta.</p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Senha Atual</label>
                  <input 
                    type="password" 
                    required 
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50" 
                    placeholder="Digite sua senha atual"
                  />
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nova Senha</label>
                  <input 
                    type="password" 
                    required 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50" 
                    placeholder="Mínimo de 6 caracteres"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar Nova Senha</label>
                  <input 
                    type="password" 
                    required 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-slate-50" 
                    placeholder="Repita a nova senha"
                  />
                </div>

                <button type="submit" className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mt-6">
                  Atualizar Senha
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Senha alterada!</h2>
              <p className="text-slate-500 mb-8">Sua credencial de acesso foi atualizada com sucesso.</p>
              <Link to="/profile" className="inline-block px-6 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
                Retornar ao Perfil
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}