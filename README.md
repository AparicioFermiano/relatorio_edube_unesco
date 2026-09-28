# Relatório EDUBE — UNESCO

Relatório on-line das ações da educação, em HTML estático: uma página por ação, mais apresentação, análise integrada e guia de uso.

## Abrir

Os links são absolutos (`/acao_01.html`), então sirva a partir da raiz do repositório:

```bash
python -m http.server 8000
```

Acesse <http://localhost:8000/>.

## Estrutura

```
index.html               página inicial
apresentacao.html        apresentação
acao_01.html … acao_18   uma página por ação
analise_integrada.html   análise integrada
guia_de_uso.html         guia de uso
media/                   CSS, JS e imagens
.htaccess                URLs sem .html no Apache
```

## Publicar

Copie tudo para a raiz de um site Apache com `mod_rewrite` ligado (o `.htaccess` tira o `.html` das URLs). Não há build.

## Homologação

Não há ambiente de homologação.
