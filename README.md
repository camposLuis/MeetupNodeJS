- Desafio Final bootcampo Rocktseat - Node JS

- Configurando o projeto para rodar na máquina local

  1 - Baixe o projeto ou clone o repositorio

  2 - Instale o banco postgres via docker ou localmente em sua máquina, assim que instalado crie uma base de dados para a aplicação.

  3 - Instale o banco redis via docker ou localmente em sua máquina

  4 - Configure um smtp de envio de email como o mail trap

  5 - Configure o Sentry para o monitoramento do log de erros

  6 - Feito os passos anteriores, renomear o arquivo ".env.exemple" para ".env", logo a seguir preencha todas as variáveis de ambiemte de acordo com as instalações realizadas.

  7 - Com as variáveis de ambiente preenchidas execute o seguinte comando: - yarn sequelize db:migrate

   Esse comando irá criar as tabelas no banco de dados.

  8 - Para executar o projeto execute: - yarn dev (inicializa a aplicação) - yarn queue (inicializa o monitoramento de fila de tarefas, neste caso o envio de email)
