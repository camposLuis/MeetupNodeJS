# Desafio Final bootcamp Rocktseat - Node JS | Aluno: Luís Campos

# Configurando o projeto para rodar na máquina local

<b>1.</b> Baixe o projeto ou clone o repositório

- execute o seguinte comando para instalar as dependências do projeto:
  <b>yarn / npm install</b>

<b>2.</b> Instale o banco <b>Postgres</b> via docker ou localmente em sua máquina, assim que instalado crie uma base de dados para a aplicação.

<b>3.</b> Instale o banco <b>Redis</b> via docker ou localmente em sua máquina

<b>4.</b> Configure o smtp do <b>Mail Trap</b> para os testes de envio de email

<b>5.</b> Configure o <b>Sentry</b> para o monitoramento do log de erros

<b>6.</b> Feito os passos anteriores, renomear o arquivo <b>".env.exemple"</b> para <b>".env"</b>, logo a seguir preencha todas as variáveis de ambiemte no arquivo <b>".env"</b> de acordo com as instalações realizadas.

<b>7.</b> Com as variáveis de ambiente preenchidas execute o seguinte comando:

- <b>yarn sequelize db:migrate</b>

- Esse comando irá criar as tabelas no banco de dados.

<b>8.</b> Crie o diretório chamado <b>tmp</b> na raiz do projeto. Agora vá em: <b>src/database/util</b> copie a pasta <b>uploads</b> e jogue ela no diretório <b>tmp</b> que foi criado anteriormente. Por fim no diretório <b>src/database/util</b> existe o arquivo <b>fillDatabase.sql</b> esse arquivo contém um script para popular as tabelas do banco de dados da aplicação. Pegue esse arquivo e execute o script.

<b>9.</b> Para executar o projeto execute os seguintes comandos:

- <b>yarn dev</b> (inicializa a aplicação)
- <b>yarn queue</b> (inicializa o monitoramento de fila de tarefas, neste caso o envio de email)

<b>10.</b> Por fim no diretório <b>src/database/util</b> existe o arquivo <b>insominia_rotas.json</b> este arquivo pode ser importado no software Insomnia REST client para facilitar os testes da api.
