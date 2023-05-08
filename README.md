# AtividadeTesteCypressS206

Repositório para a entrega do exercício de S206 sobre teste utilizando cypress.

Nome: Lucas Ribeiro de Martha

Curso: GES

Matrícula: 198

Link para o site utilizado: [League of Legends](https://www.leagueoflegends.com/pt-br/)

Link para a página do site utilizada nos testes: [Campeões do League of Legends](https://www.leagueoflegends.com/pt-br/champions/)

Utilizei o site LEAGUE OF LEGENDS para a realizar o trabalho de cypress. O site trata-se de um dos jogos mais famosos de todos os tempos, o moba League of legends. Utilizei a página de campeõs para a realização dos testes, nela se encontra todos os campeões existentes no jogo, alem de suas funções e dificuldade.

- Primeiro caso de teste: Buscar por um campeão existente (Vayne). Realizei a busca de um campeão existente no jogo para que o site retornasse o campeão pesquisado.

- Segundo caso de teste: Buscar por um campeão com 3 traços de dificuldade. Realizei a busca de campeões existente no jogo com 3 traços de dificuldade para que o site retornasse todos os campeões com dificuldade 3.

- Terceiro caso de teste: Buscar por um capeão existente (Zed) e que seja da função Assassino. Realizei a busca na função de assassino com o campeão (Zed) para que o site me retornasse o campeão pesquisado.

- Quarto caso de teste: Buscar por um campeão existente (Kalista) e que tenha dificuldade 2 e que seja da função Atirador. Realizei uma busca na função Atirador com 2 traços de dificuldade com o campeão existente (Kalista) para que o site me retornasse o campeão pesquisado.

- Quinto caso de teste: Buscar por um campeão inexistente (Zeus). Realizei a busca de um campeão inexistente no jogo afim de que o site não encontrasse nenhum campeão com esse nome, e quando isso acontece aparece uma caixa dizendo que nenhum campeão foi encontrado.

- Sexto caso de teste: Buscar por um campeão existente (Lee Sin) com a função de Mago. Realizei a busca de um campeão existente (Lee Sin) com uma função que não é dele (Mago) afim de que o site não encontrasse nenhum resultado, e quando isso acontece, retorna uma mensaagem dizendo que nenhum campeão foi encontrado com esse critério.
 
Para executar o projeto basta realizar a cópia do repositório para sua máquina, utilizar o comando npm install para instalar as dependencias do projeto, acessá-lo utilizando o GITBASH, e utilizar o comando ./node_modules/.bin/cypress open para abrir o cypress e executá-lo. Você pode também utilizar a linha de comando ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' para rodar no terminal.

Para gerar o relatório HTML basta segui os seguintes comandos:
`código inline`

1. Adicionando as dependências necessárias para gerar o reporte de testes:
npm i --save-dev cypress-mochawesome-reporter
	
2. Modificar o arquivo cypress.config.js:
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

3. Adicionar em cypress/support/e2e.js:
import 'cypress-mochawesome-reporter/register';

4. Rodar specs pela linha de comando:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'