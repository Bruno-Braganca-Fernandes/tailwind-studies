export default function LoginPage() {
  return (
    // 1. O CONTAINER PRINCIPAL (Fundo da tela)
    // min-h-screen: Ocupa 100% da altura da tela.
    // flex items-center justify-center: Centraliza o conteúdo (o card) nos eixos X e Y.
    // bg-slate-50: Aplica um fundo cinza bem claro.
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      {/* 2. O CARD DO FORMULÁRIO */}
      {/* max-w-md w-full: Limita a largura máxima, mas ocupa 100% em telas menores. */}
      {/* p-8: Padding interno espaçoso. */}
      {/* bg-white rounded-xl shadow-lg: Fundo branco, bordas arredondadas e sombra. */}
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center mb-8">
          {/* text-2xl font-bold: Aumenta a fonte e deixa em negrito */}
          {/* text-slate-900: Cor do texto (quase preto) */}
          <h1 className="text-2xl font-bold text-slate-900">
            Bem-vindo de volta
          </h1>
          <p className="text-slate-500 mt-2">
            Faça login para acessar o sistema
          </p>
        </div>

        {/* space-y-6: Um atalho maravilhoso. Aplica uma margem vertical uniforme entre todos os elementos filhos diretos deste form. */}
        <form className="space-y-6">
          {/* GRUPO DO E-MAIL */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="email"
            >
              E-mail
            </label>
            {/* INPUT: Foco no ring! Quando o usuário clica (focus), ele ganha uma borda azul */}
            <input
              type="email"
              id="email"
              placeholder="pessoa@servico.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          {/* GRUPO DA SENHA */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-slate-700"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              // para estilizar o placeholder, usamos placeholder:propriedade.
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400"
            />
          </div>

          {/* BOTÃO */}
          {/* hover:bg-blue-700 escurece a cor ao passar o mouse */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
