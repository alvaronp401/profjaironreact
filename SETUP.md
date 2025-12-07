# Guia de Setup

## Passo a Passo para Configuração

### 1. Instalar Dependências

```bash
pnpm install
```

### 2. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite o `.env.local` com suas configurações.

### 3. Copiar Assets

Copie os seguintes arquivos/pastas do projeto original para `public/`:

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

**Localização original dos assets:**
- `deputado-site-main/teste01-main/src/main/resources/static/img/`
- `deputado-site-main/teste01-main/src/main/resources/static/favicon.ico`

### 4. Executar o Projeto

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas Esperada

```
.
├── app/
├── components/
├── lib/
├── public/
│   ├── img/          ← Copiar aqui
│   └── favicon.ico    ← Copiar aqui
├── .env.local        ← Criar a partir de .env.example
└── package.json
```

## Verificação

Após copiar os assets, verifique se:
- ✅ A logo aparece no header
- ✅ A foto do professor aparece na página `/professor`
- ✅ As imagens das palestras aparecem na galeria
- ✅ O QR Code é gerado corretamente em `/api/qr`

