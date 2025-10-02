Sistema de Pedidos Full-Stack
Um projeto completo de um sistema de pedidos online, construído com um backend robusto em Node.js e um frontend moderno e reativo em React.

📜 Sobre o Projeto
Este projeto foi desenvolvido como uma solução completa para pequenos negócios que precisam de uma plataforma para exibir seus produtos e gerenciar pedidos. A aplicação conta com autenticação de usuários, separação de perfis (cliente e administrador) e uma interface intuitiva para uma ótima experiência do usuário.

✨ Funcionalidades Implementadas
Autenticação de Usuários: Sistema seguro de cadastro e login com senhas criptografadas.

Tokens JWT: Sessões de usuário gerenciadas com JSON Web Tokens para segurança e statelessness.

Perfis de Acesso:

Cliente: Visualiza a vitrine de produtos, faz login e se cadastra.

Administrador: Acessa um painel de controle exclusivo para gerenciamento.

Vitrine de Produtos: Exibição dinâmica dos produtos cadastrados no sistema.

Frontend Reativo: Interface construída com React para uma navegação rápida e fluida.

🛠️ Tecnologias Utilizadas
Este projeto é dividido em duas partes principais: o Backend e o Frontend.

Backend (API)
Tecnologia

Descrição

Node.js

Ambiente de execução para o JavaScript no servidor.

Express.js

Framework para a construção da API RESTful.

Sequelize

ORM para interagir com o banco de dados de forma segura.

MySQL / MariaDB

Banco de dados relacional para armazenar os dados.

Bcrypt.js

Biblioteca para criptografar as senhas dos usuários.

JWT

Geração e validação de tokens para autenticação.

Frontend (Cliente)
Tecnologia

Descrição

React.js

Biblioteca para a construção da interface de usuário.

React Router

Gerenciamento das rotas da aplicação (navegação).

Axios

Cliente HTTP para realizar as chamadas para a API.

Context API

Gerenciamento do estado de autenticação global.

CSS Modules

Estilização dos componentes de forma organizada.

🚀 Como Executar o Projeto
Siga os passos abaixo para rodar o projeto em sua máquina local.

Pré-requisitos
Node.js (versão 16 ou superior)

Git

Um gerenciador de pacotes como NPM ou Yarn

Um banco de dados MySQL ou MariaDB rodando localmente.

1. Clonar o Repositório
git clone [https://github.com/seu-usuario/sistema-pedidos.git](https://github.com/seu-usuario/sistema-pedidos.git)
cd sistema-pedidos

2. Configurar o Backend
# Navegue até a pasta do backend
cd backend

# Instale as dependências
npm install

# Crie um arquivo .env a partir do .env.example e configure suas variáveis de ambiente
# (principalmente as credenciais do banco de dados e o segredo JWT)
cp .env.example .env

# Rode as migrações para criar as tabelas no banco
npx sequelize-cli db:migrate

# Inicie o servidor do backend
npm start

3. Configurar o Frontend
# Em um novo terminal, navegue até a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação React
npm start

Após seguir esses passos, a aplicação estará rodando em http://localhost:3001 e o backend em http://localhost:3000.

🔮 Próximos Passos
[ ] Implementar carrinho de compras.

[ ] Funcionalidade para o cliente finalizar um pedido.

[ ] Painel do administrador para cadastrar/editar produtos.

[ ] Painel do administrador para visualizar e gerenciar pedidos.

Feito com ❤️ por PietroDev.