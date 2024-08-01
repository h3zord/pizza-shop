<h1 align="center">Boas-vindas ao repositório do Pizza Shop!</h1>

<div align="center"><img src="public/pizza.svg"/></div>

<h2 align="center">
  <a href="https://app-pizza-shop.vercel.app" target="_blank">
    Conheça o Pizza Shop!
  </a>
</h2>

## O que foi desenvolvido?

<strong>Pizza Shop</strong> é uma plataforma de gerenciamento de pedidos. A página inicial é uma área de login onde o usuário deve inserir seu email cadastrado. Caso não possua uma conta, é possível cadastrar um novo estabelecimento preenchendo um formulário com algumas informações. Após um login bem-sucedido, o usuário é direcionado para a tela "Dashboard", onde tem acesso a várias métricas importantes, como receita total, pedidos e cancelamentos no mês e pedidos do dia. A tela também inclui gráficos de produtos populares e da receita diária para um período específico determinado pelo usuário. Na tela de "Pedidos", são exibidas informações detalhadas sobre todos os pedidos, permitindo atualizar o status de cada um, como: pendente, em preparo, em entrega, entregue e cancelado. O usuário pode filtrar pedidos específicos pelo ID, nome do cliente ou status.

A aplicação foi desenvolvida com Vite (versão 5.2.0), React (versão 18.2.0) e TypeScript. O [back-end](https://github.com/h3zord/pizza-shop-api) foi desenvolvido e disponibilizado pela equipe da [Rocketseat](https://github.com/rocketseat-education). A estilização do projeto foi realizada com Tailwind CSS e componentes das bibliotecas Shadcn UI e Recharts para os gráficos. Outras bibliotecas e ferramentas utilizadas incluem: Zod e React Hook Form para validações e formulários, Sonner para notificações toast, Date-fns, Axios, Lucide React, ESLint e Git para controle de versão.

<strong>➜ Por questões visuais, o banco de dados é resetado a cada login, garantindo que os pedidos estejam sempre com datas atualizadas e que as métricas sejam visualizadas nos gráficos desde o primeiro momento.</strong>

<strong>➜ A responsividade deste projeto está em desenvolvimento.</strong>

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
- [Date-fns](https://date-fns.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Lucide React](https://lucide.dev/)
- [ESLint](https://eslint.org/)
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

<strong>Vite irá executar a aplicação na porta padrão 5173.</strong>
<br/>
➜ http://localhost:5173