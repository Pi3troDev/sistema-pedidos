# Sistema de Pedidos Full-Stack 🍔🍕
📜 Sobre o Projeto
Este é um sistema de pedidos completo, desenvolvido para pequenos negócios gerenciarem seus produtos e vendas. A aplicação possui um backend robusto construído com Node.js e uma interface de usuário moderna e reativa com React.

# ✨ Funcionalidades
✅ Autenticação Segura: Cadastro e Login com senhas criptografadas e tokens JWT.

✅ Separação de Perfis: Rotas e painéis distintos para Clientes e Administradores.

✅ Vitrine de Produtos: Exibição de produtos com imagem, nome e preço.

✅ Interface Reativa: Experiência de usuário fluida e rápida, sem recarregar a página.

🛠️ Tecnologias Utilizadas
Backend (API)
<p>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/node.js-339933%3Fstyle%3Dfor-the-badge%26logo%3Dnodedotjs%26logoColor%3Dwhite" alt="Node.js">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/express.js-%2523404d59.svg%3Fstyle%3Dfor-the-badge%26logo%3Dexpress%26logoColor%3D%252361DAFB" alt="Express.js">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Sequelize-52B0E7%3Fstyle%3Dfor-the-badge%26logo%3Dsequelize%26logoColor%3Dwhite" alt="Sequelize">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/mysql-%252300f.svg%3Fstyle%3Dfor-the-badge%26logo%3Dmysql%26logoColor%3Dwhite" alt="MySQL">
</p>

Frontend (Cliente)
<p>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/react-%252320232a.svg%3Fstyle%3Dfor-the-badge%26logo%3Dreact%26logoColor%3D%252361DAFB" alt="React">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/React_Router-CA4245%3Fstyle%3Dfor-the-badge%26logo%3Dreact-router%26logoColor%3Dwhite" alt="React Router">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/axios-671ddf%3F%26style%3Dfor-the-badge%26logo%3Daxios%26logoColor%3Dwhite" alt="Axios">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/css3-%25231572B6.svg%3Fstyle%3Dfor-the-badge%26logo%3Dcss3%26logoColor%3Dwhite" alt="CSS3">
</p>

🚀 Como Executar
Siga os passos abaixo para rodar o projeto localmente.

Pré-requisitos
Node.js (v16+)

Git

NPM ou Yarn

MySQL ou MariaDB

1. Clonar o Repositório
git clone [https://github.com/PietroDev/sistema-pedidos.git](https://github.com/PietroDev/sistema-pedidos.git)
cd sistema-pedidos

2. Configurar e Rodar o Backend
# Acesse a pasta do backend
cd backend

# Instale as dependências
npm install

# Configure seu arquivo .env
cp .env.example .env

# Rode as migrations do banco
npx sequelize-cli db:migrate

# Inicie o servidor
npm start

3. Configurar e Rodar o Frontend
# Em um novo terminal, acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o cliente React
npm start

A aplicação estará rodando em http://localhost:3001.

Feito com ❤️ por PietroDev.