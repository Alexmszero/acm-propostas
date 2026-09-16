# ACM Propostas

Sites temporários de apresentação comercial da ACM Soluções.

## Nova proposta

1. Duplique uma pasta de `sites/` e renomeie com o slug do cliente.
2. Troque textos, links e arquivos em `media/`.
3. Mantenha `<meta name="robots" content="noindex,nofollow">`.
4. Execute `node tests/check.mjs` e envie as alterações para a branch `main`.

O Cloudflare Pages publica automaticamente cada push. Não há build nem dependências.
