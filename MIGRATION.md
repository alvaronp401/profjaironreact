# Guia de Migração - Java Spring Boot para Next.js

## ✅ O que foi migrado

### Funcionalidades Preservadas

1. **Páginas**
   - ✅ Página inicial (`/`) - Layout de 3 colunas preservado
   - ✅ Página do professor (`/professor`) - Galeria e vídeo preservados
   - ✅ Página QR Code (`/qrcode`) - Funcionalidade preservada

2. **Funcionalidades**
   - ✅ Geração de QR Code com assinatura HMAC-SHA256
   - ✅ Animação de frases no header
   - ✅ Compartilhamento de site (Web Share API)
   - ✅ Layout responsivo (desktop e mobile)
   - ✅ SEO completo (metadados, JSON-LD)

3. **Design e Animações**
   - ✅ Todas as cores e estilos preservados
   - ✅ Animações melhoradas com Framer Motion
   - ✅ Efeito shine na logo
   - ✅ Hover effects nos cards
   - ✅ Transições suaves entre páginas

### Melhorias Implementadas

1. **Performance**
   - ⚡ Transições instantâneas (sem recarregar página)
   - ⚡ Preservação de estado no cliente
   - ⚡ Code splitting automático
   - ⚡ Otimização de imagens (Next.js Image)

2. **Tecnologias Modernas**
   - 🎨 Tailwind CSS para estilização
   - 🎨 Shadcn/ui para componentes acessíveis
   - 🎨 Framer Motion para animações
   - 🎨 TypeScript para type safety

3. **Developer Experience**
   - 🔧 Hot reload instantâneo
   - 🔧 TypeScript para autocomplete
   - 🔧 Estrutura modular e escalável

## 📋 Mapeamento de Rotas

| Java (Spring Boot) | Next.js |
|-------------------|---------|
| `GET /` | `app/page.tsx` |
| `GET /professor` | `app/professor/page.tsx` |
| `GET /qrcode` | `app/qrcode/page.tsx` |
| `GET /qr` | `app/api/qr/route.ts` |

## 🔄 Mapeamento de Componentes

| Java/HTML | Next.js/React |
|-----------|---------------|
| `templates/index.html` | `app/page.tsx` |
| `templates/professor.html` | `app/professor/page.tsx` |
| `templates/qrcode.html` | `app/qrcode/page.tsx` |
| `QRCodeController` | `app/api/qr/route.ts` |
| `QRCodeUtil` | `app/api/qr/route.ts` (lógica integrada) |
| `static/js/main.js` | `components/AnimatedPhrase.tsx` |
| `static/css/style.css` | `app/globals.css` + Tailwind |

## 📦 Dependências

### Removidas (Java)
- Spring Boot
- Spring Security
- Thymeleaf
- ZXing (Java)

### Adicionadas (Next.js)
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn/ui
- QRCode (Node.js)
- React Icons

## 🚀 Próximos Passos

1. **Copiar Assets**
   ```bash
   # Copiar imagens
   cp -r deputado-site-main/teste01-main/src/main/resources/static/img public/
   
   # Copiar favicon
   cp deputado-site-main/teste01-main/src/main/resources/static/favicon.ico public/
   ```

2. **Configurar Variáveis de Ambiente**
   - Criar `.env.local` a partir de `.env.example`
   - Ajustar `NEXT_PUBLIC_SITE_URL` para produção

3. **Testar**
   ```bash
   pnpm dev
   ```

4. **Deploy**
   - Vercel (recomendado para Next.js)
   - Netlify
   - Outro servidor Node.js

## 📝 Notas Importantes

- ⚠️ O projeto Java original foi mantido na pasta `deputado-site-main/`
- ⚠️ As imagens precisam ser copiadas manualmente para `public/img/`
- ⚠️ O favicon precisa ser copiado para `public/favicon.ico`
- ✅ Todas as funcionalidades foram preservadas
- ✅ O design foi mantido fiel ao original
- ✅ As animações foram melhoradas

