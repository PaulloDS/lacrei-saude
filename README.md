# Lacrei Saúde

Lacrei Saúde é uma aplicação web desenvolvida para facilitar o acesso a serviços de saúde para a comunidade LGBTQIA+. O projeto tem como objetivo fornecer uma plataforma inclusiva e acessível para conectar usuários a profissionais e serviços de saúde confiáveis.

## 🚀 Tecnologias Utilizadas

- **Front-end**: Next.js, React, TypeScript, TailwindCSS
- **Back-end**: Node.js, Express.js, Prisma (ORM)
- **Banco de Dados**: PostgreSQL (NeonDB)
- **Autenticação**: NextAuth.js
- **Testes**: Jest, Testing Library

## 📌 Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/lacrei-saude.git
   cd lacrei-saude
   ```
2. **Instale as dependências:**
   ```sh
   npm install
   ```
3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto e adicione suas configurações, como credenciais do banco de dados e chaves de API.
4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```
5. **Acesse a aplicação:**
   O projeto estará disponível em `http://localhost:3000`

## 🔧 Testes

Para executar os testes automatizados, utilize o seguinte comando:
```sh
npm test
```
Resultado esperado:
```
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        ~1.5s
```

## 📦 Build e Deploy

### Build para Produção
```sh
npm run build
```
### Deploy
O projeto pode ser facilmente implantado em plataformas como Vercel ou Heroku. Para realizar o deploy no Vercel:
```sh
vercel
```
Ou, caso prefira o Heroku:
```sh
heroku create lacrei-saude
heroku git:remote -a lacrei-saude
heroku buildpacks:add heroku/nodejs
git push heroku main
```

## 📄 Informações Adicionais

- **Autor:** Seu Nome
- **Contato:** seuemail@example.com
- **Licença:** MIT
- **Contribuições:** Sinta-se à vontade para abrir issues ou enviar pull requests!

---
Projeto desenvolvido com 💙 pela comunidade!

