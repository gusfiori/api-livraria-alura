# API de Livraria - Projeto Alura

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

API RESTful completa para o gerenciamento de uma livraria, permitindo operações de CRUD (Criar, Ler, Atualizar, Deletar) para livros e autores.

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte do curso **"Node.js: criando uma API Rest com Express e MongoDB"** da [Alura](https://www.alura.com.br/). O objetivo principal foi aplicar os conceitos de desenvolvimento back-end, criando uma API robusta e bem estruturada, seguindo as melhores práticas do mercado, como a separação de responsabilidades (Rotas, Controladores e Modelos).

## ✨ Funcionalidades Principais

- **Gestão de Livros:** CRUD completo para os livros da livraria.
- **Gestão de Autores:** CRUD completo para os autores.
- **Relacionamento de Dados:** Associação de livros com seus respectivos autores.
- **Buscas Avançadas:** Capacidade de buscar livros por editora.
- **Estrutura Profissional:** Código organizado em uma arquitetura limpa e escalável.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para o JavaScript no servidor.
- **Express.js:** Framework para a construção da API e gerenciamento das rotas.
- **MongoDB:** Banco de dados NoSQL orientado a documentos para persistência dos dados.
- **Mongoose:** ODM (Object Data Modeling) para modelar e interagir com o MongoDB de forma elegante.
- **Nodemon:** Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação no seu ambiente de desenvolvimento.

**1. Clone o repositório:**
```bash
git clone [https://github.com/seu-usuario/api-livraria-alura.git](https://github.com/seu-usuario/api-livraria-alura.git)
```
*Substitua `seu-usuario` pelo seu nome de usuário do GitHub.*

**2. Navegue até a pasta do projeto:**
```bash
cd api-livraria-alura
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Configure as Variáveis de Ambiente:**

Para se conectar ao MongoDB de forma segura, crie um arquivo chamado `.env` na raiz do projeto e adicione sua string de conexão:
```
DB_CONNECTION_STRING=mongodb+srv://seu_usuario:sua_senha@cluster.mongodb.net/sua_database
```
***Importante:** Certifique-se de que o arquivo `.gitignore` contém a linha `.env` para que suas credenciais não sejam enviadas para o GitHub.*

**5. Inicie o servidor:**
```bash
npm run dev
```
O servidor estará rodando em `http://localhost:3000` (ou na porta que você definiu).

## 🔀 Endpoints da API

A seguir estão os endpoints disponíveis para interagir com a API. Recomenda-se o uso de uma ferramenta como o [Postman](https://www.postman.com/) para testá-los.

### Livros

| Método HTTP | Endpoint           | Descrição                                                  |
|-------------|--------------------|------------------------------------------------------------|
| `GET`       | `/livros`          | Lista todos os livros cadastrados.                         |
| `GET`       | `/livros/:id`      | Busca um livro específico pelo seu ID.                     |
| `GET`       | `/livros/busca`    | Busca livros por editora (query param `?editora=NOME`).      |
| `POST`      | `/livros`          | Cadastra um novo livro.                                    |
| `PUT`       | `/livros/:id`      | Atualiza um livro existente pelo seu ID.                   |
| `DELETE`    | `/livros/:id`      | Exclui um livro pelo seu ID.                               |

### Autores

| Método HTTP | Endpoint           | Descrição                                  |
|-------------|--------------------|--------------------------------------------|
| `GET`       | `/autores`         | Lista todos os autores cadastrados.        |
| `GET`       | `/autores/:id`     | Busca um autor específico pelo seu ID.     |
| `POST`      | `/autores`         | Cadastra um novo autor.                    |
| `PUT`       | `/autores/:id`     | Atualiza um autor existente pelo seu ID.   |
| `DELETE`    | `/autores/:id`     | Exclui um autor pelo seu ID.               |


## ✒️ Autor

Projeto desenvolvido por **Gustavo Fiori**.

- **LinkedIn:** [https://linkedin.com/in/gustavofiori](https://linkedin.com/in/gustavofiori)
- **GitHub:** [https://github.com/gusfiori](https://github.com/gusfiori)

---
