<h1 align="center">Boas-vindas ao repositório do Pizza Shop!</h1>
<div align="center">🍕</div>

## O que foi desenvolvido?

O <strong>Pizza Shop</strong> é uma plataforma de gerenciamento de pedidos. Sua página inicial é uma área de login onde o usuário deve inserir seu email cadastrado, caso ainda não possua uma conta, é possível cadastrar um novo estabelecimento, basta apenas preencher um formulário com algumas informações e então finalizar o cadastro. Se o login for bem sucedido há o direcionamento para a tela "Dashboard", aqui o usuário tem acesso a várias métricas importantes, como: receita total, pedidos e cancelamentos no mês e também  pedidos do dia. Há ainda gráficos dos produtos populares e da receita diária de um período específico determinado pelo usuário. A tela de "Pedidos" contém informações detalhadas sobre todos os pedidos e sendo possível atualizar o status de cada um, sendo eles: pendente, em preparo, em entrega, entregue e cancelado. O usuário pode filtrar um pedido específico pelo id, nome do cliente ou pelo status. 

A aplicação foi desenvolvida com o Vite na versão 5.2.0, React na versão 18.2.0 e Typescript, 
o [back end](https://github.com/h3zord/pizza-shop-api) foi desenvolvido e disponibilizado pela equipe da [Rocketseat](https://www.rocketseat.com.br/). A estilização do projeto foi realizada com Tailwind CSS, foram utilizados componentes da biblioteca Shadcn UI, e da biblioteca Recharts, a qual disponilizou os gráficos. Mais algumas bibliotecas e ferramentas foram necessários para o desenvolvimento do projeto, como: Zod e React Hook Form para lidar com validações e formulários, Sonner para notificações toast, Date-fns, Axios, Lucide React, Eslint e Git para versionamento do código.

➜ <strong>A responsividade desse projeto está em desenvolvimento.</strong>

## Linguagens e ferramentas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/en-US/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Date FNS](https://date-fns.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Lucide React](https://lucide.dev/)
- [Eslint](https://eslint.org/)
- [Git](https://git-scm.com/)

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/pizza-shop.git
```

### 2 - Entre no repositório
```
cd pizza-shop
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

### 5 - Configure as variáveis de ambiente:
➜ <strong>Crie na raíz do projeto um arquivo .env</strong>

```javascript
// URL da API
VITE_API_URL="https://pizza-shop-api.up.railway.app"
```
<br/>

<strong>O Vite irá executar a aplicação na porta padrão 5173.</strong>
<br/>
➜ http://localhost:5173