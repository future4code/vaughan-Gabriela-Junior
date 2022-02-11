# HermeneMatch - Projeto AstroMatch

## Descrição
Projeto de uma plataforma semelhante ao tinder com a possibilidade do usuário poder curtir ou não os perfis que aparecem para ele, podendo também acessar a página com uma lista dos matches dados.
Para as funcionalidades foi utilizada a API Astro Match disponibilizada pela Labenu.

## Link Surge

## Linguagens utilizadas
### Site feito em React
Javascript; <br/>
HTML; <br />
CSS. <br />

## Funcionalidades

### Universal
Todas as páginas contam com o Header "HermeneMatch" e um manual para navegação do site utilizando as teclas do teclado.

### Página Inicial
A página inicial possui um card com a imagem do perfil a ser escolhido, aparecendo seu nome, idade e descrição. O card contém três botões: um para ir para a tela de Matches, um para curtir o perfil e outro para não curtir e chamar outro perfil.
Enquanto os perfis não carregam, a página possui uma animação de Loading feita em CSS.

### Página de Matches
A página de Matches contém um card com a lista de todos os matches dados, possui também dois botões: um para voltar para a tela inicial e outro para apagar todos os matches.

### Navegação pelo teclado
O site conta com a opção de navegar pelo teclado, sendo as respectivas teclas e seus comandos:
*<* = Recusar perfil 
*>* = Curtir
*Espaço* = Deletar todos os matches
*M* = Matches
*Backspace* = Voltar

### Responsividade
O site foi feito desktop-first, mas contém responsividade para Iphone 12.

### Quando acabam os perfis da API
Quando acabam os perfis da API aparece uma mensagem avisando, quando o usuário pressiona Ok, ele é levado até a página de Matches onde pode deletar todos os Matches e assim os perfis são resetados.

## Desenvolvedores
Gabriela Hermenegildo Júnior