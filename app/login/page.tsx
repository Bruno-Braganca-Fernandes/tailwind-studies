export default function LoginPage() {
  return (
    <main>
      {/* Esta div será o "card" branco do formulário */}
      <div>
        <div>
          <h1>Bem-vindo de volta</h1>
          <p>Faça login para acessar o chat</p>
        </div>

        <form>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="seu@email.com" />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="********" />
          </div>

          <button type="submit">Entrar</button>
        </form>

        <p>
          Não tem uma conta? <a href="/registro">Registre-se</a>
        </p>
      </div>
    </main>
  );
}
