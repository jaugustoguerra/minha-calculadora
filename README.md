# 🧮 Calculadora Inteligente

Uma calculadora simples e moderna desenvolvida com **React (Next.js)**, estilizada com **Tailwind CSS**, e com validação inteligente de expressões usando **IA** para detectar erros antes do cálculo.

## 🚀 Funcionalidades

- Interface intuitiva e responsiva.
- Verificação de erros com IA antes da execução (`detectErrors`).
- Suporte a operações básicas: soma, subtração, multiplicação, divisão e números decimais.
- Botão de limpar (`Clear`) para reiniciar a expressão e o resultado.

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) com modo Client-side (`"use client"`)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Componentes personalizados de UI (`Button`, `Input`)
- Função auxiliar com IA: `detectErrors` (para validação de expressões)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/jaugustoguerra/minha-calculadora.git
cd calculadora-inteligente
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse: [http://localhost:3000](http://localhost:3000)

## 🧠 Sobre o `detectErrors`

A função `detectErrors` (localizada em `@/ai/flows/detect-errors`) é uma verificação opcional que avalia a expressão digitada antes de usar `eval`, oferecendo mais segurança e controle.

Você pode personalizá-la para integrar outras formas de validação, como regras matemáticas, expressões regulares ou até mesmo uma API externa de análise de expressão.


## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENCE](LICENCE) para mais detalhes.

---

Feito com 💙 por [José Augusto Guerra](https://github.com/jaugustoguerra)
```
