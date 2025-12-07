# Site Prof. Jairon Pinheiro

Site moderno desenvolvido com Next.js 14, React, Tailwind CSS, Shadcn/ui e Framer Motion.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI acessíveis
- **Framer Motion** - Animações e transições
- **pnpm** - Gerenciador de pacotes

## 📦 Instalação

1. Instale as dependências:

```bash
pnpm install
```

2. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Em produção: https://profjairon.com.br

SECRET_KEY=ChaveSuperSecreta123!@#
```

3. Copie os assets:

Copie a pasta `img` e o `favicon.ico` do projeto original para `public/`:

```
public/
  ├── img/
  │   ├── logo.png
  │   ├── professor-foto.jpg
  │   ├── palestra1.jpg
  │   ├── palestra2.jpg
  │   ├── palestra3.jpg
  │   ├── atendimento1.jpg
  │   ├── atendimento2.jpg
  │   └── atendimento3.jpg
  └── favicon.ico
```

## 🏃 Executando

### Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Produção

```bash
pnpm build
pnpm start
```

## 📁 Estrutura do Projeto

```
.
├── app/
│   ├── api/
│   │   └── qr/
│   │       └── route.ts          # API route para QR Code
│   ├── professor/
│   │   └── page.tsx              # Página do professor
│   ├── qrcode/
│   │   └── page.tsx              # Página QR Code
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout raiz
│   └── page.tsx                  # Página inicial
├── components/
│   ├── ui/
│   │   └── button.tsx            # Componente Button (Shadcn)
│   ├── AnimatedPhrase.tsx        # Animação de frases
│   ├── Footer.tsx                # Rodapé
│   └── Header.tsx                # Cabeçalho
├── lib/
│   └── utils.ts                  # Utilitários (cn)
└── public/
    └── img/                      # Imagens do site
```

## ✨ Funcionalidades

- ✅ Transições rápidas sem recarregar página (Next.js App Router)
- ✅ Preservação de estado no cliente
- ✅ Animações suaves com Framer Motion
- ✅ Geração de QR Code com assinatura HMAC-SHA256
- ✅ Design responsivo com Tailwind CSS
- ✅ Componentes acessíveis com Shadcn/ui
- ✅ SEO otimizado com metadados
- ✅ Performance otimizada

## 🔧 Configuração

### Variáveis de Ambiente

- `NEXT_PUBLIC_SITE_URL`: URL do site (usada no QR Code)
- `SECRET_KEY`: Chave secreta para assinatura HMAC

### Personalização

Os estilos podem ser personalizados em:
- `tailwind.config.ts` - Configuração do Tailwind
- `app/globals.css` - Estilos globais
- Componentes individuais para estilos específicos

## 📝 Notas

- O projeto foi migrado de Java Spring Boot para Next.js
- Todas as funcionalidades foram preservadas
- As animações foram melhoradas com Framer Motion
- O design foi modernizado mantendo a identidade visual original

## 📄 Licença

Este projeto é privado.

