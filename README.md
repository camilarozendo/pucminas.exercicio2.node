<p align="center">
  <img src="https://camo.githubusercontent.com/a4e71a0942263821f4cb9213b2808af909e46967d9ed3ccee6e7e122f276efd6/68747470733a2f2f696d672e69636f6e73382e636f6d2f65787465726e616c2d74616c2d72657669766f2d726567756c61722d74616c2d72657669766f2f39362f65787465726e616c2d726561646d652d69732d612d656173792d746f2d6275696c642d612d646576656c6f7065722d6875622d746861742d6164617074732d746f2d7468652d757365722d6c6f676f2d726567756c61722d74616c2d72657669766f2e706e67" width="100" />
</p>
<p align="center">
    <h1 align="center">PUCMINAS.EXERCICIO2.NODE</h1>
</p>
<p align="center">
    <em>Exercício para a disciplina de Programação Web com Node.js do curso de Desenvolvimento Web Front-End - PUC Minas</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/camilarozendo/pucminas.exercicio2.node?style=default&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/camilarozendo/pucminas.exercicio2.node?style=default&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/camilarozendo/pucminas.exercicio2.node?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/camilarozendo/pucminas.exercicio2.node?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running pucminas.exercicio2.node](#-running-pucminas.exercicio2.node)
> - [ Contributing](#-contributing)
> - [ License](#-license)

---

## 📍 Overview

O projeto visa criar uma aplicação web simples utilizando o framework Express.js. Ele envolve a criação de rotas para manipular solicitações HTTP, renderização de páginas usando o mecanismo de template Handlebars (HBS), e a implementação de um formulário para lidar com solicitações POST.

---

## 🔮 Features

#### Estrutura do Projeto:

- O projeto é inicializado usando o comando npx express-generator --view=hbs my-project, que cria uma estrutura básica de projeto com configurações pré-definidas.

#### Solicitações GET com Parâmetros:

- Adição de uma rota que recebe parâmetros firstName e lastName via solicitação GET. Os parâmetros são então passados para uma página de modelo (hello.hbs) que os exibe.

#### Renderização de Página com Handlebars:

- Criação de uma página hello.hbs na pasta de views que utiliza o mecanismo de template Handlebars para renderizar os parâmetros recebidos na rota.

#### Nodemon para Desenvolvimento:

- Integração do pacote nodemon para reiniciar automaticamente o servidor sempre que houver alterações no código, facilitando o desenvolvimento contínuo.

#### Formulário POST:

- Adição de um formulário HTML na página form.hbs que envia solicitações POST para a rota /users.

#### Manipulação de Solicitações POST:

- Implementação da rota /users para manipular solicitações POST. O código inicialmente exibe o corpo (body) da solicitação em formato JSON.

#### Armazenamento em Array:

- Atualização do método POST para armazenar cada objeto recebido em um array chamado users.items.

#### Manipulação de Solicitações DELETE e GET:

- Implementação de métodos DELETE e GET para a rota /users no arquivo users.js. O método DELETE remove um usuário com base no email, e o método GET retorna todos os usuários adicionados.

### Considerações:

Este projeto é educativo e destina-se a ensinar conceitos básicos de desenvolvimento web usando o Express.js. Ele abrange tópicos como manipulação de rotas, renderização de páginas com Handlebars, lidar com solicitações POST e armazenamento temporário de dados em um array. Essas são habilidades fundamentais ao construir aplicativos web usando Node.js e Express.js.

---

## 🧩 Repository Structure

```sh

└── pucminas.exercicio2.node/
   ├── app.js
   ├── package-lock.json
   ├── package.json
   ├── routes/
   │   ├── form.js
   │   ├── index.js
   │   └── users.js
   └── views/
      ├── error.hbs
      ├── form.hbs
      ├── hello.hbs
      ├── index.hbs
      └── layout.hbs

```


---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* Node.js

### ⚙️ Installation

1. Clone the pucminas.exercicio2.node repository:

```sh
git clone https://github.com/camilarozendo/pucminas.exercicio2.node
```

2. Change to the project directory:

```sh
cd pucminas.exercicio2.node
```

3. Install the dependencies:

```sh
npm install
```

### 👩‍💻 Running pucminas.exercicio2.node

Use the following command to run pucminas.exercicio2.node:

```sh
npm start
```



---



## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github/camilarozendo/pucminas.exercicio2.node/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github/camilarozendo/pucminas.exercicio2.node/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github/camilarozendo/pucminas.exercicio2.node/issues)**: Submit bugs found or log feature requests for Pucminas.exercicio2.node.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/camilarozendo/pucminas.exercicio2.node
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

MIT License

Copyright (c) [2022] [Camila Rozendo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[**Return**](#-quick-links)

---
