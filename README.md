<div align="center">

# 🍔 Sistema de Pedidos  
Uma solução **full-stack** para gerenciamento de produtos e pedidos, construída com **Node.js** e **React**.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)  
![Licença](https://img.shields.io/badge/licença-MIT-blue?style=for-the-badge)

</div>

---

## 📜 Sobre o Projeto
O **Sistema de Pedidos** é uma plataforma completa que auxilia pequenos negócios a exibirem seus produtos e gerenciarem pedidos de forma eficiente.  

A aplicação é dividida em:
- **Backend (API)**: responsável pela lógica de negócio, autenticação e persistência dos dados.  
- **Frontend (Cliente)**: interface moderna e responsiva para clientes e administradores.  

---

## ✨ Funcionalidades

| Funcionalidade         | Status | Descrição |
|-------------------------|--------|-----------|
| 🔒 Autenticação Segura | ✅ | Cadastro e Login com senhas criptografadas e autenticação via JWT |
| 👤 Separação de Perfis | ✅ | Rotas e painéis distintos para **Clientes** e **Administradores** |
| 🛍️ Vitrine de Produtos | ✅ | Exibição de produtos com imagem, nome, descrição e preço |
| ⚡ Interface Reativa   | ✅ | Navegação fluida, sem recarregar a página |
| 🛒 Carrinho de Compras | 🚧 | Em desenvolvimento |
| 📊 Painel do Admin     | 🚧 | Em desenvolvimento |

---

## 🛠️ Tecnologias Utilizadas  

### Backend
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v16 ou superior)  
- [Git](https://git-scm.com/)  
- NPM ou Yarn  
- Banco de dados **MySQL** ou **MariaDB** ativo  

---

### 🔧 Passos para rodar localmente

#### 1. Clone o repositório
```bash
git clone https://github.com/PietroDev/sistema-pedidos.git
cd sistema-pedidos

# Acesse a pasta
cd backend

# Instale as dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env

# Rode as migrations
npx sequelize-cli db:migrate

# Inicie o servidor
npm start

# Em um novo terminal, acesse a pasta
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm start

div align="center">
👨‍💻 Desenvolvido por PietroDev

Feito com ❤️ e muito ☕

</div> ```