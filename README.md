
# API Mini Banco Central

Esta é uma API RESTful que simula um "Mini Banco Central", permitindo o gerenciamento de instituições financeiras, contas bancárias, transações, saldos e extratos consolidados por usuário e instituição.

## 🧰 Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- SQLite (banco de dados)
- JWT (autenticação)
- Docker (opcional)
- Insomnia (testes de rotas)

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone <seu-repositorio-ou-descompacte-o-zip>
cd APImini-banco
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar o Banco de Dados

A API usa SQLite, então nenhuma instalação adicional de banco é necessária. Você pode rodar o script `schema.sql` para criar as tabelas manualmente ou deixar que o Sequelize crie automaticamente ao rodar a aplicação.

### 4. Rodar o projeto

```bash
npm run dev
```

O servidor iniciará em `http://localhost:3000`.

---

## 🔐 Autenticação

A API utiliza autenticação JWT. Primeiro, é necessário criar um usuário e fazer login para obter um token JWT. Utilize este token para autenticar nas demais rotas protegidas.

---

## 📫 Testando a API com o Insomnia

Você pode testar todas as rotas da API utilizando o Insomnia.

### 1. Instalar o Insomnia

https://insomnia.rest/download

### 2. Importar as requisições

Crie um novo Workspace e adicione as rotas manualmente ou importe um JSON (se você tiver). Aqui estão as principais rotas:

### 🧪 Rotas disponíveis

#### Usuário

- `POST /usuarios` – Criar novo usuário
- `POST /login` – Autenticar e obter token JWT

#### Instituições

- `GET /instituicoes` – Listar instituições
- `POST /instituicoes` – Criar instituição
- `PUT /instituicoes/:id` – Atualizar instituição
- `DELETE /instituicoes/:id` – Remover instituição

#### Contas

- `GET /contas` – Listar contas
- `POST /contas` – Criar conta
- `PUT /contas/:id` – Atualizar conta
- `DELETE /contas/:id` – Deletar conta

#### Transações

- `GET /transacoes` – Listar transações
- `POST /transacoes` – Criar transação
- `PUT /transacoes/:id` – Atualizar transação
- `DELETE /transacoes/:id` – Deletar transação

#### Saldos e Extratos

- `GET /saldos/:usuarioId` – Consolidado por usuário
- `GET /extratos/:usuarioId/:instituicaoId` – Extrato de um usuário por instituição

> ⚠️ **Importante:** Lembre-se de incluir o token JWT no cabeçalho Authorization:
```
Authorization: Bearer <seu_token>
```

---

## 🐳 Usando Docker (Opcional)

```bash
docker build -t mini-banco .
docker-compose up
```

---

## 📁 Estrutura de Pastas

- `User.js`, `Conta.js`, `Instituicao.js`, `Transacao.js`: Models
- `*Controller.js`: Controllers de cada recurso
- `routes.js`: Arquivo de rotas principais
- `auth.js`: Middleware de autenticação JWT
- `db.js`, `database.js`: Configuração do banco via Sequelize

---

## 📌 Autor

Este projeto foi desenvolvido como uma simulação de um agregador de contas bancárias no contexto de Open Finance.

---

