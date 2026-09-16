import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.slice(1);
const site = join(root, 'sites', 'mega-espaco-festa-eventos');
const files = [
  join(root, 'index.html'),
  join(site, 'index.html'),
  join(site, 'style.css'),
  ...[1, 2, 3, 4].map((number) => join(site, 'media', `evento-${number}.mp4`)),
];

for (const file of files) assert.ok(existsSync(file), `Arquivo ausente: ${file}`);

for (const file of files.slice(0, 2)) {
  const html = readFileSync(file, 'utf8');
  assert.match(html, /noindex,nofollow/i, `${file} deve bloquear indexação`);
}

const proposal = readFileSync(join(site, 'index.html'), 'utf8');
assert.match(proposal, /wa\.me\/5511947797150/, 'WhatsApp ausente');
assert.match(proposal, /instagram\.com\/megaespacofestaeventos/, 'Instagram ausente');
assert.equal((proposal.match(/<video/g) || []).length, 4, 'A proposta deve exibir quatro vídeos');

console.log('ACM Propostas: integridade validada.');
