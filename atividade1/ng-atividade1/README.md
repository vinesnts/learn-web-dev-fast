# Atividade 1 - Angular (FE)

## Configurar

- Rodar `npm install` na raiz do projeto para instalar as dependências.

## Rodar

- Rodar `ng serve` na raiz do projeto para levantar a aplicação.

## Estrutura de um projeto Angular

- O Angular, como um framework, possui um conjunto de ferramentas necessárias para o desenvolvimento de uma aplicação Web, por isso, a estrutura de um projeto em um framework pode possuir diversos arquivos e pastas, que servem para o funcionamento do framework como um todo.
- No desenvolvimento com Angular, estamos interessados principalmente na pasta `src/`.
  - A pasta `src/app/` é a pasta de maior interesse do desenvolvedor.
    - O Angular oferece alguns arquivos por padrão nesta pasta quando criamos a aplicação, são eles:
      - `module.ts`: O Angular divide a aplicação em módulos, cada módulo importa apenas os módulos que ele precisa em seus componentes.
        - `app.module.ts`: Este é o módulo principal da aplicação Angular, que pode importar outros módulos criados pelo desenvolvedor dentro da própria aplicação.
      - `component.ts`: O Angular permite a criação de diversos componentes que juntos formam a aplicação, por exemplo, a barra superior da aplicação pode ser um componente, o corpo da aplicação pode ser outro, e o rodapé pode ser outro. Eles podem ser agregados em um outro componente para formar uma página da Web. O Angular vem com um componente principal, onde os demais componentes do usuário serão inseridos.
        - `app.component.html`: O `html` do componente principal do aplicação Angular.
        - `app.component.ts`: O `ts` do componente principal da aplicação.
        - `app.component.css`: O `css` do componente principal da aplicação.
        - `app.component.spec.ts`: Arquivo onde devem ser implementados os testes do componente principal da aplicação.
    - Caso escolha a opção de aplicação com rotas na criação do projeto Angular, o seguinte arquivo virá por padrão:
      - `app-routing.module.ts`: Arquivo de rotas do módulo principal da aplicação. Outros módulos da aplicação podem ter seus próprios arquivos de rotas.
    - Quaisquer demais arquivos nesta pasta foram criados para o exercício.
  - A pasta `src/assets` é onde devem ser colocados arquivos estáticos da aplicação, como imagens.
  - O `favicon.ico` é o ícone da aplicação, mostrado na aba do navegador.
  - `index.html` é o arquivo `html` que o Angular utilizar para inicializar a aplicação, basicamente, todos os outros componentes que o desenvolvedor vai criar na aplicação serão injetados por meio do framework neste arquivo, que finalmente é mostrado ao usuário no navegador.
    - É muito improvável que precisaremos mexer aqui, apenas em casos de configurações específicas.
  - O `main.ts` é o arquivo `ts/js` que inicializa a aplicação Angular. Ele importa o módulo de inicialização da aplicação Angular, oferecido pela biblioteca do Angular, e chama o comando para inicialização da aplicação.
    - É muito improvável que precisaremos mexer aqui, apenas em casos de configurações específicas.
  - O `styles.css` é o arquivo principal de `css` da aplicação. Os estilos gerais da aplicação podem ser aplicados aqui. Os estilos específicos de cada componente devem ser aplicados no respectivo `css` do componente.
- As demais pastas e arquivos são de interesse do framework, porém, eventualmente, o desenvolvedor pode precisar configurar algo nelas.
  - O arquivo `package.json` é criado pelo `npm`, que é o gerenciador de pacotes do `node`.
    - Ele guarda os nomes e versões das dependências do projeto.
    - O `package-lock.json` é semelhante a ele, porém é mais detalhado, contendo as dependências que cada dependência tem, entre outras informações.
  - A pasta `node_modules/` guarda os arquivos das dependências da aplicação.
  - Arquivos `tsconfig` representam as configurações do `TypeScript`.
  - O `angular.json` possui algumas configurações do Angular.
  - O `.gitignore` define os arquivos/pastas ignorados pelo `git`.

## Estrutura da atividade

- Como a atividade utiliza apenas uma página, utilizamos o componente principal do Angular, portanto, os arquivos onde deve ser implementada a atividade são:
  - `app.component.html`
  - `app.component.ts`
  - `app.component.css`
- Além deles, o arquivo `app.service.ts` foi criado.
  - Os arquivos `service.ts` representam serviços da aplicação.
    - Serviços não estão associados diretamente a módulos ou componentes, pois eles precisam ser injetados diretamente onde precisam ser utilizados, em qualquer lugar da aplicação.
    - Serviços permitem a comunicação entre componentes e módulos do Angular, ou até mesmo entre a aplicação e outros sistemas, como uma API, por exemplo.
    - São classes no padrão `Singleton`, ou seja, possuem uma instância única na aplicação.
  - O `app.service.ts` permite a conexão entre a aplicação e o uma API utilizando o protocolo `http`.
    - É injetado no `app.component.ts` por meio da função `inject` do Angular.
