# SECRETO 🔒

![Capa do Projeto](https://via.placeholder.com/800x400.png?text=Imagem+de+Capa+do+Projeto)

![GitHub stars](https://img.shields.io/github/stars/SEU_USUARIO/SEU_REPOSITORIO)
![GitHub forks](https://img.shields.io/github/forks/SEU_USUARIO/SEU_REPOSITORIO)
![GitHub issues](https://img.shields.io/github/issues/SEU_USUARIO/SEU_REPOSITORIO)
![GitHub license](https://img.shields.io/github/license/SEU_USUARIO/SEU_REPOSITORIO)

## Índice
- [Descrição do Projeto](#descrição-do-projeto)
- [Status do Projeto](#status-do-projeto)
- [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [Acesso ao Projeto](#acesso-ao-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pessoas Contribuidoras](#pessoas-contribuidoras)
- [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras-do-projeto)
- [Licença](#licença)

## Descrição do Projeto
O projeto **SECRETO** é uma aplicação web simples para criptografar e descriptografar mensagens. Utilizando uma interface amigável, o usuário pode digitar sua mensagem secreta, criptografá-la e depois descriptografá-la com facilidade.

## Status do Projeto
![Project Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## Funcionalidades e Demonstração da Aplicação
- Criptografar mensagens utilizando substituições simples.
- Descriptografar mensagens previamente criptografadas.
- Copiar a mensagem criptografada/descriptografada para a área de transferência.

### Demonstração
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SECRETO</title>
    <link rel="stylesheet" href="style.css">
    <script src="javascript.js" defer></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <div class="container col-md-5">
        <div class="header">
            <div class="logo">🔒</div>
            <h1>INPUT</h1>
        </div>
        <div class="content">
            <textarea id="textoOriginal" class="form-control" rows="5" placeholder="Digite sua mensagem secreta"></textarea>
            <div class="info mt-2">
                <span>Apenas letras minúsculas e sem acento.</span>
            </div>
            <div class="buttons mt-2">
                <button class="btn btn-primary encrypt" onclick="criptografar()">Criptografar</button>
                <button class="btn btn-secondary decrypt" onclick="descriptografar()">Descriptografar</button>
            </div>
        </div>
        <footer class="mt-4">
            <p>© By Luiz Seixeiro - 2024</p>
        </footer>
    </div>

    <div class="container col-md-5">
        <div class="header">
            <div class="logo">🔓</div>
            <h1>OUTPUT</h1>
        </div>
        <div class="content">
            <textarea id="textoResultante" class="form-control" rows="5" placeholder="Nenhum texto identificado"></textarea>
            <div class="info mt-2">
                <span>Sua mensagem.</span>
            </div>
            <div class="buttons mt-2">
                <button class="btn btn-success copy" onclick="copiarTexto()">Copiar</button>
            </div>
        </div>
        <footer class="mt-4">
            <p>© ONE - Alura</p>
        </footer>
    </div>
</body>
</html>
```

## Acesso ao Projeto
Você pode acessar o projeto diretamente [aqui](https://github.com/SEU_USUARIO/SEU_REPOSITORIO) ou clonar o repositório usando o seguinte comando no seu terminal:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- Bootstrap

## Pessoas Contribuidoras
Agradecemos às seguintes pessoas que contribuíram para este projeto:

-Luiz Miguel

## Pessoas Desenvolvedoras do Projeto
Este projeto foi desenvolvido por:

- Luiz Seixeiro

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
