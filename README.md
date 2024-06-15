# Clean Angular
Proposta de Arquitetura Limpa para Angular 2 baseada “Clean Dart”


# Início

Podemos dizer que uma arquitetura limpa pode definir o futuro do seu projeto, sabendo disso, devemos tê-la como objeto de estudo constante para que assim saibamos onde, quando e como aplicá-la. 

Para essa proposta nos baseamos nas camadas da Arquitetura Limpa proposta por Robert C. Martin no livro **“Arquitetura Limpa: O Guia do Artesão para Estrutura e Design de Software”**.


# Camadas de uma Arquitetura Limpa

**Robert C. Martin** conclui que uma arquitetura deve conter pelo menos 4 camadas principais e independentes para ser considerada “limpa”, são elas: 
1. Regras de Negócio Corporativas
2. Regras de Negócio da Aplicação
3. Adaptadores de Interface
4. Frameworks & Drivers (Externos)

![Image 0](https://raw.githubusercontent.com/SauloMcChelsom/SauloMcChelsom/b58a7bed1caa4e62158efffa5d492ae4efd9fd71/images/architecture-date-layer.png)


## Regras de Negócio Corporativas

São as regras de negócio cruciais para a sua aplicação, são representadas por modelos de dados denominado **"Entidades"**, essa camada tem as regras mais sensíveis de um sistema, por isso ela está no topo das camadas. Uma "Entidade" deve ser pura, ou seja, não deve conhecer nenhuma outra camada, porém é conhecida pelas outras camadas.


## Regras de Negócio da Aplicação

São as regras que só o computador pode executar, aqui temos uma representação de comandos chamados de **"Casos de Uso"**, e basicamente representam as ações que um usuário pode fazer na aplicação. 

Um **"Caso de Uso"** conhece apenas as Entidades, porém não sabe nada sobre as implementações das camadas de mais baixo nível. 

Se um **"Caso de Uso"** precisar acessar uma camada superior, deverá fazê-lo por meio de contratos definidos por uma interface, seguindo o **“Princípio de Inversão de Dependências”** do [SOLID](https://www.youtube.com/watch?v=mkx0CdWiPRA).


## Adaptadores de Interface

Essa camada é responsável por “dar suporte” para as camadas mais altas (Regras de Negócios) convertendo os dados externos em um formato que cumpra os contratos de interface definidos pelas Regras de Negócios.


## Frameworks & Drivers

Todas as abstrações feitas pelas camadas mais altas foram para aumentar a facilidade do plug & play dos artefatos externos como um banco de dados ou uma interface gráfica.

Essa camada normalmente sofre muitas modificações, porém com uma arquitetura limpa aplicada isso pode ser completamente indolor e segura para a sua regra de negócio.

Podemos então trocar uma API REST por outra em GraphQL sem afetar suas regras de negócio. Poderemos também trocar a interface gráfica completamente ou até mesmo trocar o Angular pelo React, Vue... e mesmo assim as Regras de Negócio ficarão funcionais!


# Clean Dart

A proposta de Arquitetura se propõe a desacoplar as camadas mais externas e preservar a Regra de Negócio.

# Exemplo 1
![Image ](https://raw.githubusercontent.com/SauloMcChelsom/SauloMcChelsom/b58a7bed1caa4e62158efffa5d492ae4efd9fd71/images/architecture-show-horizontal.png)

# Exemplo 2
![Image ](https://raw.githubusercontent.com/SauloMcChelsom/SauloMcChelsom/b58a7bed1caa4e62158efffa5d492ae4efd9fd71/images/architecture-show-vertical.png)


## Presenter

A Camada **Presenter** fica responsável por declarar as entradas, saídas e interações da aplicação. 

Usando o Flutter como exemplo, hospedaremos os Widgets, Pages e também Alguma Gerência de Estado, já no backend como exemplo, seria nesta camada onde colocaríamos os Handlers ou Commands da nossa API.


## Domain

A camada de **Domain** hospedará as Regras de Negócio Corporativa(Entity) e da Aplicação(Usecase).

Nossas Entidades devem ser objetos simples podendo conter regras de validação dos seus dados por meio de funções ou ValueObjects. **A Entidade não deve usar nenhum objeto das outras camadas.**

Os **Casos de Uso** devem executar a lógica necessária para resolver o problema. Se o **Caso de Uso** precisar de algum acesso externo então esse acesso deve ser feito por meio de contratos de interface que serão implementados em uma camada de mais baixo nível.

A camada **Domain** deve ser responsável apenas pela execução da lógica de negócio, não deve haver implementações de outros objetos como Repositories ou Services dentro do **Domain**. 

Tomando um Repository como exemplo, teremos que ter apenas o contrato de interfaces(Abstrações) e a responsabilidade de implementação desse objeto deverá ser repassado a outra camada mais baixa.



## Infrastructure (Infra)

Esta camada dá suporte a camada **Domain** implementando suas interfaces. Para isso, adapta os dados externos para que possa cumprir os contratos do domínio.

Muito provavelmente nessa camada iremos implementar alguma interface de um Repository ou Services que pode ou não depender de dados externos como uma API ou acesso a algum Hardware como por exemplo Bluetooth. 

Para que o Repository possa processar e adaptar os dados externos devemos criar contratos para esses serviços visando passar a responsabilidade de implementação para a camada mais baixa da nossa arquitetura.

Como sugestão, iremos criar objetos de **DataSource** quando quisermos acessar um dado externo, uma BaaS como Firebase ou um Cache Local usando SQLite por exemplo.
Outra sugestão seria criar objetos denominados **Drivers** para interfacear a comunicação com algum Hardware do dispositivo.

Os acessos externos como Datasources e Drivers devem ser implementados por outra camada, ficando apenas os Contratos de Interface nesta camada de Infra.


## External

Aqui começaremos a implementar os acessos externos e que dependem de um hardware, package ou acesso muito específico.

Basicamente a camada External deve conter tudo aquilo que terá grandes chances de ser alterado sem que o programador possa intervir diretamente no projeto.

No Flutter por exemplo, para cache local usamos o SharedPreferences, mas talvez em alguma estágio do projeto a implementação do SharedPreferences não seja mais suficiente para a aplicação e deve ser substituída por outro package como Hive, nesse ponto a única coisa que precisamos fazer é criar uma nova classe, implementando o Contrato esperado pela camada mais alta (que seria a **Infra**) e implementarmos a lógica usando o Hive.

Um outro exemplo prático seria pensar em um login com Firebase Auth, porém outro produto deseja utilizar um outro provider de autenticação. Bastaria apenas implementar um datasource baseado no outro provider e “Inverter a Dependência” substituindo a implementação do Firebase pela nova quando for necessário.

Os Datasources devem se preocupar apenas em “descobrir” os dados externos e enviar para a camada de Infra para serem tratados.

Da mesma forma os objetos **Drivers** devem apenas retornar as informações solicitadas sobre o Hardware do Device e não devem fazer tratamento fora ao que lhe foi solicitado no contrato.


## Clean Angular

## Shared

Este contém todas as funcionalidades comuns para o aplicativo. por exemplo, cliente http, configuração de ambiente, itens específicos da plataforma, como verificador de rede, etc.

Essas funcionalidades comuns serão usadas pela camada de dados, camada de domínio e camada de apresentação, por exemplo, cliente http por fonte de dados remota, informações de rede por camada de repositório, enums por camada de domínio e configuração por apresentação.

## Domain

Esta é a camada mais interna e conterá a lógica de negócios principal, ou seja, casos de uso e objetos de negócios também chamados de entidades, o caso de uso depende do contrato do repositório (não da implementação)

sempre o codigo começa no dominio
o dominio e responsavel por toda a logica de negocio da aplicação
o dominio tem entities e usecases

usecases tem contratos seguido por implementação

faço a inversao do controlle de dependencia
preciço de um repositorio 
aqui eu não sei quem implementa essa interface
tenho um contrato, quem algum implementa um contrato

então a minha camada de dominio não conheçe o mundo exterior
porem ela escreve um contrato, que algum tem que implementar esse
contrato, isso quer dizer na pratica quem alguma camada vai olhar 
pra esse repositorio e vai realizar a implementação dele, o usecase
que vai ultilizar esse repositorio, não quer saber quem implementar e como 
como implementa

## Data

As camadas de dados contêm a implementação do repositório e essa camada está mais próxima das fontes de dados reais e é responsável pela comunicação com as fontes de dados.

A camada de dados retorna os modelos e não entidades e o modelo também contém o mapeador fromJson e toJson.

Observação: não temos uma classe de mapeador extra, vamos apenas aproveitar o construtor nomeado por dart para mapear nosso conjunto de dados de um formulário para nossos modelos. toJson e fromJson.

a camada de date tem a reponsabilidade de tratar de dados

serialização
desarialização
transformação de dados
busca em apis
busca em  cache
trabalha em enttrada e saida de dados

## Entidades

Regras de negócios em toda a empresa
Composto de classes que podem conter métodos
Objetos de negócios do aplicativo
Usado em todo o aplicativo
Menos provável de mudar quando algo no aplicativo muda

## Casos de Uso
Regras de negócios específicas do aplicativo
Encapsule todos os casos de uso do aplicativo
Orquestre o fluxo de dados em todo o aplicativo
Não deve ser afetado por nenhuma alteração na interface do usuário
Pode mudar se a funcionalidade e o fluxo do aplicativo mudarem

## Repositórios
Classes abstratas que definem a funcionalidade esperada das camadas externas
Não estão cientes das camadas externas, simplesmente defina a funcionalidade esperada
Por exemplo, o Logincaso de uso espera um Repositoryque tenha loginfuncionalidade
Passado para Usecasesas camadas externas

## Presentation/UI

Essa camada contém todas as informações sobre a interface do usuário e tudo para mostrar ao cliente usuário final. A camada de apresentação também contém o bloco que é o gerenciamento de estado e geralmente denominado como cérebro da interface do usuário.

A camada de apresentação interage via camada de domínio, ou seja, entidades e casos de uso.

# Objetivo

Esse documento tem por objetivo principal organizar o processo de desenvolvimento do software.

# Regras iniciais, limite e Análise

Pontos a serem levados em consideração antes de introduzir uma nova feature:

- Precisará respeitar as regras de Lint.
- Esse projeto deve ter cobertura mínima de testes de no mínimo 70%.
- Camadas globais devem ter um lugar específico na aplicação, por tanto, devem estar na pasta Shared.
- Cada feature deverá ter sua própria pasta onde conterá todas as camadas necessárias para a execução dos casos de uso da feature.
- Packages e plugins novos só poderão ser usados nos projetos após avaliação e aprovação de toda equipe responsável pelo projeto.
- Atualizações no Modelo de domínio só poderão ser aceitas se primeiro for adicionada nesse documento e aprovado por todos os envolvidos no projeto.
- Não é permitido ter uma classe concreta como dependência de uma camada. Só será aceita coesão com classes abstratas ou interfaces. Com exceção da Store.
- Cada camada deve ter apenas uma responsabilidade.

# Package externos (Comum)

- moment: Analise, valide, manipule e exiba datas e horas em JavaScript.
- bootstrap: componentes prontos para ser utilizar no projeto.
- ngx-mask: aplicação de máscaras em inputs.
- rxjs: programação reativa usando Observables, facilitando a manipulação de eventos assíncronos e fluxos de dados.
- component-store: é uma biblioteca independente que ajuda a gerenciar o estado local/componente.
- input-mask: aplicação de máscaras em inputs.
- uuid:  UUID é um identificador universalmente exclusivo utilizado para identificação de qualquer coisa no mundo da computação.
- angular/material: é um módulo Angular que funciona como camada frontend para desenvolver aplicações de forma rápida, fácil e visualmente atrativa.
- ngx-highlightjs: Diretivas de destaque de código instantâneo.
- jasmine: criação de testes automatizados.
- sass: Folhas de Estilo que adicionar recursos especiais como variáveis, mixins, funções,  operações e outras.
- prettier: é um formatador de código.

### Folder structure

```
├── src
│   ├── styles.scss
│   ├── main.ts
│   ├── index.html
│   ├── main.ts
│   ├── test
│   ├── assets
│   ├── config
│   │   ├── endpoints
│   │   ├── injector
│   │   ├── translate
│   │   ├── validate
│   │   └── utils
│   └── app
│       ├── data
│       │   ├── datasources
│       │   │   ├── local
│       │   │   │   └── note_local_datasource.ts
│       │   │   └── remote
│       │   │       └── note_remote_datasource.ts
│       │   ├── models
│       │   │   └── note_model.dart
│       │   └── repositories
│       │       └── note_repository_impl.dart
│       │
│       ├── domain
│       │   ├── entities
│       │   │   └── note_entity.dart
│       │   ├── helpers
│       │   │   └── constants
│       │   │   │    └── core.ts
│       │   │   ├── enums
│       │   │   │    ├── status_code.ts
│       │   │   │    ├── user_role.ts
│       │   │   │    └── user_type.ts 
│       │   │   ├──  transformers
│       │   │   │    └── transform_title_to_link.ts
│       │   │   └── validations
│       │   │        ├── email.usecase.ts
│       │   │        ├── password.usecase.ts
│       │   │        └── user_name.usecase.ts
│       │   ├── repositories
│       │   │   └── note_repository.dart
│       │   └── usescases
│       │       └── note
│       │           ├── implements
│       │           |     └── create_new_note.usecase.ts
│       │           |     └── delete_note.usecase.ts
│       │           |     └── find_note_by_id.usecase.ts
│       │           |     └── find_note_by_link_note.usecase.ts
│       │           |     └── find_note_by_title_note.usecase.ts
│       │           |     └── get_all_note.usecase.ts
│       │           |     └── update_note.usecase.ts
│       │           └── note_usecase.dart
│       ├── infra
│       │   ├── http
│       │   │   ├── implements
│       │   │   │   └── http_client_adapter.ts
│       │   │   ├── model
│       │   │   │   └── end-point.model.ts
│       │   │   │   └── http-error-response.model.ts
│       │   │   │   └── url.model.ts
│       │   │   └── http_repository.dart
│       │   └── cache
│       │       ├── implements
│       │       │   └── local_storage_adapter.ts
│       │       └── cache_repository.dart
│       │
│       └── ui
│           ├── components
│           ├── directives
│           ├── guards
│           ├── interceptors
│           ├── pages
│           │   └── note
│           │      ├── components
│           │      ├── pages
│           │      │   ├── add
│           │      │   ├── list-all
│           │      │   ├── find-one
│           │      │   ├── update
│           │      │   ├── note.component.scss
│           │      │   ├── note.component.html
│           │      │   └── note.component.ts
│           │      ├── note.module.ts
│           │      └── note.routing.module.ts
│           ├── pipes
│           ├── stores
│           ├── theme
│           ├── app-routing.module.ts
│           ├── app.component.html
│           ├── app.component.scss
│           ├── app.component.ts
│           └── app.modules.ts
├── pubspec.lock
└── pubspec.yaml

```

# How to run

Iniciar aplicação
```bash
npm run start
```

# Dicas

## Pense por camada

Quando for desenvolver comece a pensar por camada, não devemos nos preocupar com o que tem na camada de **Presenter** ou **External** por exemplo. Se pensarmos nas camadas mais externas podemos acabar nos orientando (erroneamente) por essas camadas. Assim, devemos nos acostumar a desenvolver camada por camada, de dentro para fora e não ao contrário.

Talvez no começo da sua jornada "Limpa" algumas camadas possam parecer "sem utilidade", isso acontece quando nossa mente ainda não está **Pensando em Camadas** (ou porque sua Regra de Negócio é simples demais para isso)

## Teste de Unidade será sua nova UI

É muito comum os desenvolvedores criarem primeiro as suas Views para que então possam "testar" as Regras de Negócio. Mas nós já temos uma ferramenta própria para isso e um lugar dedicado para armazenar esses testes.

Desenvolver de forma "limpa" está em total sinergia com o **TDD**(Test Driven Development) pois a camada de **Presenter** será uma das últimas coisas que iremos pensar no desenvolvimento da nossa feature.

## Gaste mais tempo tratando erros

**"É melhor deixar uma Exception acontecer do que tratar um erro de forma genérica"...**
Uma boa dica é usar alguma classe que nos obrigue a tratar os erros como o **Either** do pacote **dartz**.

Either é uma classe que pode receber dois tipos de dados, um Left (para quando enviar o erro) e o Right(para enviar o dado esperado). Isso também diminui muito a necessidade de realizar um tratamento manual de erro com **try catch** em camadas mais superiores como **Presenter**.

## Não caia na tentação de furar uma camada

Algumas vezes você poderá ter um **UseCase** muito simples, que apenas repassa para o **Repository**, como por exemplo em um CRUD onde você apenas precisa validar se a informação está chegando da maneira correta e repassar para o **Repository** fazer seu trabalho. 

Parece estranho você ter uma classe com um método que faz somente a validação dos dados e repassa para outra classe, porém você verá a grande utilidade disso no momento de uma manutenção. Pois muitas vezes o **UseCase** pode nascer pequeno mas em um futuro próximo ele pode ganhar corpo. 

Um exemplo disso é a utilização do Firebase, o package do Firebase te retornar uma Stream que você pode muito bem colocar ele direto na sua **View**, porém se um dia você quiser remover o firebase do seu projeto, você terá que reconstruir toda sua tela ou pior todo seu projeto.

Sendo assim não caia na tentação de chamar o **Repository** direto do **Controller** ou mesmo plugar o Firebase direto na sua **View**, além de infringir as regras da arquitetura, você irá se arrepender em um futuro próximo.
