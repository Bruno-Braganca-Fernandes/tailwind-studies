export default function ChatPage() {
  return (
    <div id="layout-wrapper">
      {/* Sidebar (Histórico) */}
      <aside>
        <button>+ Novo Chat</button>
        <nav>
          <ul>
            <li>Explicando Tailwind</li>
            <li>Refatoração React</li>
            <li>Receita de Bolo</li>
          </ul>
        </nav>
      </aside>

      {/* Área Principal do Chat */}
      <main>
        {/* Header do Chat */}
        <header>
          <h2>Modelo Padrão v2.0</h2>
          <button>Perfil</button>
        </header>

        {/* Área onde as mensagens aparecem (Esta parte rola) */}
        <section id="chat-messages">
          {/* Tela inicial vazia com o GRID de 4 opções que você pediu */}
          <div>
            <h1>Como posso te ajudar hoje, Bruno?</h1>

            {/* Aqui é onde a mágica do CSS Grid vai acontecer */}
            <div id="grid-opcoes">
              <button>
                <h3>Explicar código</h3>
                <p>Como funciona o CSS Grid no Tailwind?</p>
              </button>

              <button>
                <h3>Criar estrutura</h3>
                <p>Faça um boilerplate de Next.js</p>
              </button>

              <button>
                <h3>Revisar texto</h3>
                <p>Corrija os erros de gramática deste e-mail</p>
              </button>

              <button>
                <h3>Brainstorm</h3>
                <p>Ideias para um projeto de portfólio</p>
              </button>
            </div>
          </div>

          {/* Exemplo de mensagens que apareceriam depois */}
          {/* 
          <article>Mensagem do Bruno</article>
          <article>Mensagem da IA</article> 
          */}
        </section>

        {/* Área de Input (Fica sempre presa no final da tela) */}
        <footer>
          <form>
            <textarea placeholder="Envie uma mensagem para a IA..."></textarea>
            <button type="submit">Enviar</button>
          </form>
          <p>
            A IA pode cometer erros. Considere verificar informações
            importantes.
          </p>
        </footer>
      </main>
    </div>
  );
}
