## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Rotas](#rotas)
- [Tecnologias Utilizadas](#tecnologias)
- [Contato](#contato)

## Introdução

O projeto consiste em cadastrar um carrinho abandonado do ecommerce no CRM de um cliente. Uma mensagem é produzida pelo Ecommerce no tópico do Kafka “cart-abandoned” 

## Instalação

```
git clone https://github.com/picinelli/desafio-growth.git
```

```
Na raíz do projeto crie um aqruivo nome de ".env" e dentro dela adicione o conteudo que está dentro do ".env.example"
```

Execute o seguinte comando em um terminal para buildar a imagem do kafka e subir o container **(aguarde esse passo finalizar)**: 

```
docker-compose -f docker-compose.kafka.yml up
```

Execute o seguinte comando em outro terminal para buildar a imagem do projeto e subir o container:

```
docker-compose -f docker-compose.yml up
```

## Utilização
Como o fluxo do desafio se inicia a partir do recebimento de uma mensagem do kafka, é necessário simular um producer, precisamos então abrir o shell dentro do container do kafka e executar os seguintes comandos:

```
cd opt/kafka/bin
```

Não se esqueça do ponto no inicio do comando abaixo
```
./kafka-console-producer.sh --bootstrap-server localhost:9092 --topic cart-abandoned
```

Nesse momento qualquer conteúdo que você enviar, será recebido pelo consumer do tópico "cart-abandoned"

Envie então a seguinte mensagem, que deverá salvar no CRM do projeto A (id 1)
```
{ "id": 53, "items": [ { "id": 152, "name": "Produto 1", "quantity": 1 } ], "customer": { "id": 19, "email": "fulano@email.com", "firstName": "Fulano", "lastName": "Da Silva", "phone": "5527999643944" } }
```
Caso queira salvar no projeto B, envie a seguinte mensagem:

```
{ "id": 54, "items": [ { "id": 152, "name": "Produto 1", "quantity": 1 } ], "customer": { "id": 19, "email": "fulano@email.com", "firstName": "Fulano", "lastName": "Da Silva", "phone": "5527999643944" } }
```

Para visualizar as oportunidades salvas, verifique as [rotas](#rotas) abaixo.
## Rotas

    
- **GET** `http://localhost:3000/oportunity/organization/:organizationId`
    
    - Parâmetro :organizationId é o Id do Projeto A ou B, que neste desafio é o ID 1 e 2 respectivamente.
    
    A resposta tem o formato:
    
    ```jsx
    {
        "crmId": 1,
        "created": "2023-07-07T00:07:02.492Z",
        "updated": "2023-07-07T00:07:02.492Z",
        "customerEmail": "email@email.com",
        "customerName": "Joao da Silva",
        "customerPhone": "27999998888",
        "observation": "5x Produto com nome bem pensado | ",
        "id": 6
    },
    ```


## Tecnologias
 
![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<!-- CONTACT -->

## Contato

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Mail][mail-shield]][mail-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/pedro-ivo-brum-cinelli//
[mail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[mail-url]: mailto:cinelli.dev@gmail.com
