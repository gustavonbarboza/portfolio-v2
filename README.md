# Portfólio v2

Este é o repositório para a segunda versão do meu portfólio, desenvolvido com React.

## Como Rodar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Instale as dependências:**
    No terminal, dentro da pasta do projeto, execute o comando:
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    Após a instalação das dependências, execute:
    ```bash
    npm start
    ```
    Isso iniciará a aplicação em modo de desenvolvimento. Abra http://localhost:3000 para visualizá-la no seu navegador.

## Estrutura de Dados (`/src/data`)

Toda a informação exibida no portfólio, como experiências de carreira e projetos, está centralizada na pasta `/src/data`.

Para atualizar o conteúdo do seu portfólio, você só precisa editar os arquivos dentro deste diretório:

-   `src/data/careerData.js`: Contém um array com suas experiências profissionais.
-   `src/data/projectsData.js`: Contém um array com os projetos que você deseja exibir.

Basta modificar os objetos dentro desses arrays para que as alterações sejam refletidas no site. Não é necessário alterar nenhum componente React para atualizar as informações.


