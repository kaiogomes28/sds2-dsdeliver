# sds2-dsdeliver

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/kaiogomes28)

# Sobre o projeto

https://kaiogomes-sds2.netlify.app/

DS Delivery é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em registrar pedidos através de uma pagina web criada com react e mostrar os pedidos através do app mobile fazendo inserção da localização e utilização do google maps.

## Layout mobile
![Mobile 1](https://gitlab.com/wiliammd/dsdelivery/-/raw/main/images/iPhone%208%20Plus%20-%20HOME.png) ![Mobile 2](https://gitlab.com/wiliammd/dsdelivery/-/raw/main/images/iPhone%208%20Plus%20-%20PEDIDOS.png) ![Mobile 3](https://gitlab.com/wiliammd/dsdelivery/-/raw/main/images/iPhone%208%20Plus%20-%20HOME%20Selecionado.png)

## Layout web
![Web 1](https://gitlab.com/wiliammd/dsdelivery/-/raw/main/images/HOME%20DELIVERY.png)

![Web 2](https://gitlab.com/wiliammd/dsdelivery/-/raw/main/images/SELECIONAR%20PRODUTOS.png)

## Modelo conceitual
![Modelo Conceitual](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/modelo-conceitual.png)

## Documentação aplicação
![Documentação Swagger](https://live.staticflickr.com/2899/14605009610_5fd762806e_z.jpg)<br/>

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate / h2
- Maven
- Swagger
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone  https://github.com/kaiogomes28/sds2-dsdeliver

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/kaiogomes28/sds2-dsdeliver

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Kaio Eduardo Menezes Gomes

https://www.linkedin.com/in/kaio-eduardo-gomes-3b29a922b/
