# HopInsight

**HopInsight** é uma ferramenta de diagnóstico e análise de rotas de rede, inspirada no poderoso **MTR (My Traceroute)**, que combina funcionalidades de `ping` e `traceroute` para uma inspeção completa da conexão entre um ponto de origem e um host de destino.

[**GitHub Pages HopInsight**](https://antonyllz.github.io/HopInsight/front/html/index.html)

## Descrição

A função principal do **HopInsight** é realizar um diagnóstico e análise detalhada de rotas de rede. Ele permite observar o caminho que os pacotes percorrem entre a origem e um host de destino, identificando cada salto na rede, latências, perdas de pacotes e instabilidades no percurso.

Esta aplicação oferece uma visão detalhada e em tempo real das rotas de rede, sendo uma solução rápida, segura e eficiente para administradores de redes e engenheiros que desejam garantir uma conexão confiável e de alta performance.


## Funcionalidades

- **Monitoramento em Tempo Real**: Observe o percurso dos pacotes em tempo real, desde a origem até o destino.
- **Análise de Latência**: Identifique tempos de resposta em cada salto e monitore latências ao longo da rota.
- **Detecção de Perda de Pacotes**: Saiba onde ocorrem perdas de pacotes no caminho para facilitar o diagnóstico.
- **Identificação de Instabilidades**: Detecte gargalos e problemas de estabilidade em pontos específicos da rota.

# Instalação

Para utilizar o **HopInsight**, siga os passos de instalação abaixo:

## 1. Clone este repositório:
   ```bash
   git clone https://github.com/antonyllz/HopInsight.git
   ```

## 2. Dependências

Este projeto utiliza as seguintes dependências:

- **Express**: Framework web para Node.js.
- **Prisma**: ORM para Node.js que facilita o trabalho com bancos de dados.
- **SQLite**: Banco de dados leve e serverless.
- **CORS**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **Morgan**: Middleware de logging HTTP para Node.js.
- **express-async-errors**: Middleware para tratamento de erros assíncronos em rotas Express.

### Para instalar as dependências:

1. Navegue até o diretório do projeto:

    ```bash
    cd HopInsight/back/
    ```

2. Instale as dependências utilizando npm:

    ```bash
    npm install
    ```

   ou, se preferir, utilize o yarn:

    ```bash
    yarn install
    ```

## 3. Como rodar o projeto

Após instalar as dependências, você pode rodar o servidor localmente com os comandos:

```bash
cd HopInsight/back/ && npm start
```

Abra um novo terminal e utilize o comando

```bash
cd HopInsight/front/html/ && python3 -m http.server
```


# Desenvoldido por:

|Nome                            | Matrícula     | Email                              |
|--------------------------------|---------------|------------------------------------|
| Antony César Pereira de Araújo | 20231380013   | antony.cesar@academico.ifpb.edu.br |
| Gabriel Lavor de Albuquerque   | 20231380037   | gabriel.lavor@academico.ifpb.edu.br|
| Arthur de Macedo Muniz         | 20231380021   | arthur.muniz@academico.ifpb.edu.br |
