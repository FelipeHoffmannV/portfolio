# portfolio
🧾 Documentação — Portfólio de Felipe Hoffmann Dev.
🧠 Visão Geral

O Portfólio de Felipe Hoffmann é um site estático desenvolvido com HTML, CSS e Bootstrap 5, criado para apresentar informações profissionais, projetos e um formulário de contato integrado com EmailJS.
O objetivo é fornecer uma vitrine moderna e leve para o desenvolvedor.

⚙️ Tecnologias Utilizadas

HTML5 — Estrutura e marcação das páginas.

CSS3 — Estilização customizada e uso de variáveis de cor.

Bootstrap 5.3 — Layout responsivo e componentes prontos.

JavaScript (ES6) — Interatividade e integração com EmailJS.

Font Awesome — Ícones de redes sociais e botões.

EmailJS — Envio de mensagens diretamente do formulário de contato.

🧩 Estrutura do Projeto
/
├── index.html        # Página principal do site
├── css/
│   └── style.css     # Estilos personalizados
├── js/
│   └── script.js     # Scripts de interatividade (menu, EmailJS etc.)
├── img/
│   ├── project1.jpg  # Imagem do primeiro projeto
│   ├── project3.jpg  # Imagem do segundo projeto
│   └── ...           # Outras imagens do site
└── README.md         # Documentação do projeto

🧭 Seções do Site
1. Cabeçalho e Navegação

Contém o logotipo e o menu principal com links para as seções:

Início

Sobre

Projetos

Contato

O menu é adaptável para dispositivos móveis com um botão hambúrguer controlado por JavaScript.

2. Seção "Projetos"

Apresenta os principais trabalhos desenvolvidos:

CRUD de Estudo — Aplicação em Flask + SQLite.

Portfólio Profissional — O próprio site, com HTML, CSS e Bootstrap.

Cada card contém:

Imagem ilustrativa

Descrição

Links para o código e demo

Responsivo em duas colunas (col-md-6), ajustando-se automaticamente em telas menores.

3. Seção "Contato"

Formulário funcional conectado ao EmailJS, permitindo o envio de mensagens diretamente para o e-mail configurado no serviço.

Campos:

Nome

E-mail

Mensagem

Após o envio, o usuário recebe uma notificação visual de sucesso ou erro.

4. Rodapé

Contém os direitos autorais:

© 2025 Felipe Hoffmann — Todos os direitos reservados.

☁️ Publicação no GitHub Pages

O site é totalmente compatível com o GitHub Pages.
Para publicar:

Envie os arquivos para o repositório.

Vá em Settings → Pages.

Em Source, selecione main branch e pasta / (root).

O site estará disponível em:

https://felipehoffmannv.github.io/

🧠 Melhorias Futuras (opcional)

Adicionar animações de entrada com AOS.js ou ScrollReveal.

Implementar um tema dark mode.

Conectar novos projetos automaticamente via GitHub API.

Adicionar analytics (ex: Google Analytics ou Fathom).

Quer que eu monte essa documentação num arquivo README.md pronto para enviar junto ao repositório (com formatação Markdown e ícones)? Assim você só copia e cola no GitHub.
