
# Desafio de Integração
Todo briefing do desafio pode ser encontrado no link https://github.com/godevapi/vagas/tree/master/integrations

## Como configurar as chaves localmente?
### Secrets
- Duplique o arquivo .env.template
- Renomeie o novo arquivo para .env
- Informe a sua HUB_API_KEY 
### Credentials
- Informe suas credencias da api do Google Sheets no arquivo src/config/credentials/credentials.json

## Como rodar localmente?

Clonar o projeto

```bash
  git clone https://github.com/GustavoRochaSantos/godevapi_integrations_challenge.git
```

Acessar a pasta do projeto

```bash
  cd godevapi_integrations_challenge
```

Instalar dependências

```bash
  yarn
```

Iniciar o serviço

```bash
  yarn start:dev
```


## API - Documentação

Para consultar as apis criadas, bem como campos obrigatórios e seus retornos, acessar http://localhost:3000/docs/

## API - Insomnia

Para testar as apis criadas, importar o arquivo "Insomnia_2024-10-04.json" no seu Insomnia ou Postman, que a coleção com todos os endpoints será criada.

## API - Integração

Para fazer a integração da planilha com o HubSpot, criar a planilha com os seguintes nomes de coluna na primeira linha:
Empresa	Contato	Email	Telefone	Website

Chamar o endpoint /integrations/google-hub/:sheetId com o método POST. 

Verificar o retorno de quantos foram importados, quais deram erro de api, quantos tinham email públicos e não foram importados, etc.