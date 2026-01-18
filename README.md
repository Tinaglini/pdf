# 🌸 Catálogo de Perfumes - Gerador

Ferramenta web profissional para criar catálogos de perfumes e exportar como **PNG** ou **PDF** para compartilhar no WhatsApp, Instagram e grupos.

![Status](https://img.shields.io/badge/status-concluído-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Demonstração](#-demonstração)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)

---

## ✨ Funcionalidades

### 📦 Gerenciamento de Produtos
- ✅ Adicionar produtos com foto, nome, marca, preço e categoria
- ✅ Upload de imagens (JPG, PNG, WEBP)
- ✅ Editar e remover produtos
- ✅ **Drag-and-drop** para reordenar produtos
- ✅ Persistência automática com localStorage

### 👁️ Preview em Tempo Real
- ✅ Visualização instantânea do catálogo
- ✅ Atualização automática ao adicionar/remover produtos
- ✅ Múltiplos layouts disponíveis

### 📥 Exportação Profissional
- ✅ **Exportar como PNG** (alta resolução - 2x scale)
- ✅ **Exportar como PDF** (multipágina automático)
- ✅ Otimizado para WhatsApp Status e Instagram Stories
- ✅ Formato A4 para PDF

### ⚙️ Configurações Personalizáveis
- ✅ Título do catálogo customizável
- ✅ Nome da loja
- ✅ WhatsApp e Instagram
- ✅ Escolher layout: **Grid** (2 ou 3 colunas) ou **Lista**
- ✅ Badges coloridos por categoria:
  - 🔵 Masculino (Azul)
  - 🌸 Feminino (Rosa)
  - 💜 Unissex (Roxo)

---

## 🎨 Demonstração

### Tela Principal
```
┌──────────────────────────────────────────────────────┐
│ 🌸 Catálogo de Perfumes    [⚙️ Configurações]       │
├──────────────┬───────────────────────────────────────┤
│ ESQUERDA     │ DIREITA                               │
│              │                                       │
│ 📦 Adicionar │ 👁️ Preview do Catálogo               │
│ Produto      │                                       │
│              │ ┌─────────────────────────────────┐  │
│ [Formulário] │ │ 🌸 Catálogo Primavera 2025     │  │
│              │ │ Perfumaria Elegância           │  │
│              │ ├─────────────┬─────────────────┤  │
│ 📋 Lista de  │ │ [Produto 1] │ [Produto 2]     │  │
│ Produtos     │ │             │                 │  │
│              │ ├─────────────┼─────────────────┤  │
│ [Produtos]   │ │ [Produto 3] │ [Produto 4]     │  │
│              │ └─────────────┴─────────────────┘  │
│              │                                       │
│              │ [📥 Baixar PNG] [📄 Baixar PDF]      │
└──────────────┴───────────────────────────────────────┘
```

---

## 🛠️ Tecnologias

- **React 18.2** - Framework JavaScript
- **Vite 5.0** - Build tool ultrarrápido
- **html2canvas 1.4** - Conversão HTML → PNG
- **jsPDF 2.5** - Geração de PDF
- **CSS3** - Estilos modernos com gradientes

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/catalogo-perfumes.git
cd catalogo-perfumes

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:5173
```

### Build para Produção

```bash
npm run build
npm run preview
```

---

## 📖 Como Usar

### 1. Adicionar Produtos

1. Clique em **"Upload de Foto"** para adicionar imagem do perfume
2. Preencha: Nome, Marca, Preço e Categoria
3. Clique em **"➕ Adicionar Produto"**

### 2. Organizar Produtos

- **Reordenar**: Arraste e solte produtos usando o ícone ⋮⋮
- **Editar**: Clique no botão ✏️ (em breve)
- **Remover**: Clique no botão 🗑️

### 3. Configurar Catálogo

1. Clique em **"⚙️ Configurações"**
2. Personalize:
   - Título do catálogo
   - Nome da loja
   - WhatsApp e Instagram
   - Layout (Grid ou Lista)
   - Número de colunas (2 ou 3)
3. Clique em **"💾 Salvar Configurações"**

### 4. Exportar

#### PNG (Imagem)
- Ideal para: WhatsApp Status, Instagram Stories
- Clique em **"📥 Baixar como PNG"**
- Resolução: 2x (alta qualidade)
- Formato: Otimizado para redes sociais

#### PDF (Documento)
- Ideal para: Impressão, email, grupos
- Clique em **"📄 Baixar como PDF"**
- Formato: A4
- Multipágina automático se necessário

---

## 📁 Estrutura do Projeto

```
catalogo-perfumes/
├── src/
│   ├── components/
│   │   ├── ProductForm.jsx       # Formulário de adicionar produto
│   │   ├── ProductForm.css
│   │   ├── ProductList.jsx       # Lista de produtos (drag-drop)
│   │   ├── ProductList.css
│   │   ├── CatalogPreview.jsx    # Preview do catálogo
│   │   ├── CatalogPreview.css
│   │   ├── ExportButtons.jsx     # Botões PNG/PDF
│   │   ├── ExportButtons.css
│   │   ├── ConfigModal.jsx       # Modal de configurações
│   │   └── ConfigModal.css
│   ├── App.jsx                   # Componente principal
│   ├── App.css
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Casos de Uso

### 1. Catálogo para WhatsApp
- Adicione seus perfumes
- Exporte como PNG
- Compartilhe no grupo ou status

### 2. Instagram Stories
- Layout otimizado para Stories (1080px)
- Exporte PNG de alta qualidade
- Poste diretamente

### 3. Catálogo para Impressão
- Exporte como PDF
- Imprima em formato A4
- Distribua fisicamente

### 4. Atualização Semanal
- Altere preços rapidamente
- Adicione novos produtos
- Gere novo catálogo em segundos

---

## 💡 Dicas

### Upload de Fotos
- Use imagens quadradas (300x300px ou maior)
- Fundo branco destaca melhor o produto
- PNG com transparência funciona perfeitamente

### Preços
- Use formato: `289,90` (sem R$)
- O R$ é adicionado automaticamente no preview

### Layout
- **Grid 2 colunas**: Melhor para WhatsApp
- **Grid 3 colunas**: Mais produtos visíveis
- **Lista**: Ideal para catálogos extensos

### Performance
- Os dados são salvos automaticamente
- Mesmo fechando o navegador, seus produtos permanecem
- Limpe o localStorage se quiser recomeçar

---

## 🐛 Solução de Problemas

### Imagens não aparecem no PDF/PNG
- Certifique-se de fazer upload de imagens locais
- URLs externas podem ter restrições CORS

### Exportação lenta
- Normal para catálogos com muitas imagens
- html2canvas processa cada elemento

### Produtos não salvam
- Verifique se localStorage está habilitado
- Modo privado do navegador pode bloquear

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

---

## 📜 Licença

MIT License - Sinta-se livre para usar em projetos pessoais ou comerciais.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ para vendedores de perfumes e empreendedores.

---

## 🎉 Próximas Features

- [ ] Edição inline de produtos (duplo clique)
- [ ] Múltiplas páginas para catálogos grandes
- [ ] Templates de design prontos
- [ ] Importação de CSV
- [ ] Marca d'água personalizada
- [ ] Compartilhamento direto via API do WhatsApp

---

**Boas vendas! 🚀**
