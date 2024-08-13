# Atividade 1 - BE

## Configuração do Backend

- O arquivo `atividade1/backend/requirements.txt` guarda as bibliotecas utilizadas no projeto.
- Crie um novo ambiente Python dentro da pasta do projeto `atividade1/backend/`:
  - Linux: `python -m venv env`
  - Windows: `py -3 -m venv .venv`
- Ative o novo ambiente criado:
  - `source env/bin/activate`
  - `.venv\Scripts\activate`
- Instale as bibliotecas:
  - `pip install -r requirements.txt`

## Executando o Backend

- Abra o projeto utilizando o `vscode` na pasta do Backend `atividade1/backend/`
- Entre no menu `Executar e Depurar` e pressione `F5`.

## Testando a aplicação

- Observe no console/terminal onde a API está rodando, o URL e porta onde a API está executando.
  - Provavelmente: `http://127.0.0.1:5000`
- Utilizando o Postman/Insomnia ou até mesmo `curl` no terminal do Linux, faça uma chamada `GET` para o URL e porta da API na seguinte rota:
  - `/hello-world`
  - Utilizando `curl` no Linux seria o comando: `curl http://localhost:5000/hello-world`
- A resposta deve ser a seguinte:
  - `<p>Hello, World!</p`
