<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conteúdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Desenvolvido Com](#desenvolvido-com)
  - [Edição](#edição)
- [Fontes](#fontes)
    - [Nubank Press Kit e Guia da Marca (Cores, SVG, Telas, Icones, Fotos)](#nubank-press-kit-e-guia-da-marca-cores-svg-telas-icones-fotos)
    - [Inspiração](#inspiração)
    - [Change App Icon in React Native for Android and iOS](#change-app-icon-in-react-native-for-android-and-ios)
    - [App Icon Generato](#app-icon-generato)
    - [A SVG to React Transformer](#a-svg-to-react-transformer)
    - [Add Custom Icons to your React Native Application](#add-custom-icons-to-your-react-native-application)
    - [Flexbox Playground and Code Generator](#flexbox-playground-and-code-generator)
- [Contato](#contato)
- [Agradecimentos](#agradecimentos)

## Sobre o Projeto

Projeto App Nubank desenvolvido por meio de vídeo-aula Rocketseat, e aprimorado em estudos de React Native, neste projeto foram usadas as seguintes tecnologias: React Native, React Navigation, React Native Gesture Handler, React Native Vector Icons, styled-components, react-native-iphone-x-helper e react-native-svg.

App icon         |  Card
:-------------------------:|:-------------------------:
![](/assets/images/Screenshot_1.jpg) | ![Screenshot](/assets/images/Screenshot_2.jpg)

Menu            |  Tabs
:-------------------------:|:-------------------------:
![](/assets/images/Screenshot_3.jpg) | ![Screenshot](/assets/images/Screenshot_4.jpg)

### Desenvolvido Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
  - [reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

### Edição

Nesta seção haverão instruções explicando para que os diretórios são utilizadas e também os arquivos de configuração.

- **assets/fonts** - Diretório contendo o arquivo fonte `ttf` com os icones personalizados do projeto;

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

    - **config.js** - Arquivo contendo a configuração dos `Fontello` para ser usado na aplicação;

    - **loadFonts.js** - Arquivo contendo a configuração de todas as `fontes` usadas na aplicação;

    - **ReactotronConfig.js** - Arquivo contendo a configuração do Reactotron para ser usado na aplicação;

  - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação, esse diretório pode ser renomeado para `assets` e dentro de `assets` criar um novo diretório para guardar somente as imagens, assim é possível ter um diretório para guardar todo tipo de arquivo, e não apenas imagens;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js`;

      - **index.js** - Arquivo com toda a lógica da página, tal como os componentes visuais a serem renderizados;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.js** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **index.js** - Arquivo responsável por centralizar o código do diretório `src`, nele são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

  - **routes.js** - Arquivo com as configurações de navegação da aplicação, nele são criados os Navigator disponibilizados na biblitoeca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do Plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **dependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências que devem ser instaladas na aplicação, vale lembrar que as dependências que já vem por padrão no projeto como `react` e `react-native` não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **devDependencies.json** - Arquivo contendo apenas um objeto com a lista de dependências de desenvolvimento que devem ser instaladas na aplicação, vale lembrar que as dependências de desenvolvimento que já vem por padrão no projeto como `@babel/core`, `eslint`, entre outras, não precisam estar nessa lista, a menos que você queira gerenciar a versão dessas libs;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **jsconfig.json** - Arquivo de configuração do Javascript no Editor, ele é o responsável por ativar o Auto Complete de códigos Javascript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação da aplicação no NPM.

## Fontes

#### Nubank Press Kit e Guia da Marca (Cores, SVG, Telas, Icones, Fotos)
**https://nubank.com.br/imprensa/**

#### Inspiração
**https://www.behance.net/gallery/101082529/Atualizacao-de-interface?tracking_source=search_projects_recommended%7CNubank%20icon**

#### Change App Icon in React Native for Android and iOS
**https://aboutreact.com/react-native-change-app-icon/**

#### App Icon Generato
**https://appicon.co/**

#### A SVG to React Transformer
**https://react-svgr.com/playground/?native=true**

#### Add Custom Icons to your React Native Application
**https://blog.bam.tech/developer-news/add-custom-icons-to-your-react-native-application**

#### Flexbox Playground and Code Generator
**https://the-echoplex.net/flexyboxes/**

## Contato

Roger Albuquerque - **albuquerque.roger@gmail.com**

## Agradecimentos

Diego Fernandes - [Github](https://github.com/diego3g) -**diego.schell.f@gmail.com**

> Faça mais do que o esperado e corra a `Milha Extra`;
