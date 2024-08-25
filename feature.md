# [ok] nome de componente
 1 - [ok] renomear os nome file da pagina exemplo [named as its location]`C:\workspace\maelly-develop\clean-architecture-angular\src\app\ui\pages\note\add\add-note.component.html` com o video de javascript verificar se o padrao de nome de componente e pagina estao ok

 2 - [ok] verificar se em `components\full\note\card`precisa de criar pasta content e colocar os conteudo para dentro, pois podemos criar outras pasta como base `componente base` 

# [ok] layout
  1 - [ok] organizar o layout mobile esta quebrado
  2 - [ok] melhor o layout pois esta muito espacoso 
  3 - [ok] melhorar o card
  4 - [ok] remover nome fixo em cadastro
  5 - [ok] navegacao para atualizar fica em branco
  6 - [ok] remover bootstrap
  
# [x] login
  1 - criar funcionalidade login
  2 - salva em cache os dados caso nao esteja logado, e enviar quando loga

# [ok] estilizacao
  1 - como estao sendo definida es cores primaria e secudaria
  2 - themas

# [ok] propriedades padrao
  1 - [ok]padronizar desktop:
   - 80px, 24px, 16px, 12px, 8px
   - content: Width (780px + 316px gap8) (960px)
   - text/medium: Weight 500, Size 16px, line height 24px, Letter 0.15px
   - text/body/medium:Weight 400, Size 14px, line height 20px, Letter 0.25px
   - text/body/large: Weight 400, Size 16px, line height 24px, Letter 0.5px
  4 - [ok] brakpoint
  5 - [/]implementar padrao

# [x] idiomas
  1 - implementar esse funcionalidade 

# [x] componentizacao
  1 - agora temos dois componente card-p e note/card:
    -  qual a melhor arbordagem?
    - comparado com o conteudo do react com conteiner, faz sentido? exemplo temos micros componentes
    como head picture, o conteiner seria o componente completo como o card de vagas, card de anucio, card de
    empresa, isso sao componentes conteiner que reutiliza de diversos micros conteiner para contruir um todo. isso
    faz setido?
  2 - se for seguir o micro/conteiner componente refatore para que 
  o exemplo <ng-card> ou <p-card>... seja iniciada de um so luga
  src\app\ui\components\card
  por que caso queira trocar de bibliote ou atualiza seja feita em
  um so luga em vez de todo o projeto. por mais que seja um botao
  nao deixa que o projeto dependa da biblioteca, mas dependa do componente local
  `
  <button mat-icon-button *ngIf="!spinner" (click)="add()" aria-label="Example icon-button with menu icon">
    <mat-icon>
      add
    </mat-icon>
  </button>
  `
  exemplo aqui temos diretiva  mat-icon-button e um compenente do angular material <mat-icon>. isso nao e bom caso queira atualizar ou trocar de UI

# Desafio
  1 - Implementar uma estrutura de arvores que permite enxertar componentes em nodes, e busca-lo atraves de controles.
  exemplo servira para step de compenentes, irar redenrizar o componente e abaixo botoes
  "voltar, proximo e salvar" 

  work-filter
  2- Implementar um componente dinamico que dado um conteiner poderar projetar componente familia, cada componente familia tem suas regras depedente, tem entrada e saida. exemplo componete conteiner filterSearch vai redenrizar
  uma lista de componentes familias, tipo de search, Pcd, regiao...

  dynamic-form
  3 - Implementar componente formulario dinamicos. Este componente conteiner podera projetar componentes e compos
  e obter os dados preenchidos

  4 -  Implementar o search conector factore
