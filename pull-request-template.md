## Descrição

<!-- Descreva de forma sucinta o que este pull request faz. Explique o motivo da mudança e forneça o contexto necessário. -->

## Tipo de Mudança

- [ ] Correção de bug (bug fix)
- [ ] Nova funcionalidade (feature)
- [ ] Refatoração (refactoring)
- [ ] Documentação (documentation)

## Checklist

- [ ] O código segue os padrões do projeto
- [ ] Testes foram adicionados e/ou atualizados
- [ ] A documentação foi atualizada (se necessário)
- [ ] Todas as verificações de lint passaram
- [ ] A funcionalidade foi testada manualmente
- [ ] A issue relacionada foi marcada como resolvida

## Como Testar

<!-- Descreva os passos necessários para testar a funcionalidade/bug corrigido. -->

1. Vá para a página de login.
2. Clique nos botões de login do Google e Facebook.
3. Complete o processo de autenticação.
4. Verifique se o usuário é redirecionado corretamente após o login.
5. Confira se os dados do usuário são salvos corretamente no banco de dados.

## Referências

<!-- Adicione links para issues relacionadas e outras referências relevantes. -->

Este pull request resolve a issue [#123](https://github.com/seu-repositorio/issues/123).

## Capturas de Tela

<!-- Se aplicável, adicione capturas de tela para demonstrar as mudanças visuais. -->

*Login com Google*:
![Login com Google](https://via.placeholder.com/300)

*Login com Facebook*:
![Login com Facebook](https://via.placeholder.com/300)

## Notas Adicionais

<!-- Adicione qualquer outra informação relevante que não se encaixe nas categorias acima. -->

- Certifique-se de configurar as variáveis de ambiente para as credenciais do Google e Facebook antes de testar.
- Esta implementação utiliza `passport-google-oauth20` e `passport-facebook` para a integração OAuth.
