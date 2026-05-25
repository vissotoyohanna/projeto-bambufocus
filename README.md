# 🎋 BambuFocus - Estudo Inteligente

<p align="center">
  <img src="assets/bambufocus-panda.png" alt="Logo BambuFocus" width="150"/>
</p>

<p align="center">
  <strong>Sua sala de estudos digital com foco total.</strong>
</p>

---

## 📌 Sobre o Projeto

O **BambuFocus** é uma aplicação web desenvolvida para auxiliar estudantes e concurseiros a organizarem suas rotinas de estudo de forma inteligente e livre de distrações. Nascido da necessidade de gerenciar editais extensos e manter a constância diária, o projeto une gamificação, gestão de tempo e organização de tópicos em uma interface moderna e acolhedora.

Este projeto está sendo construído do zero, com foco em responsividade e nas melhores práticas de UI/UX, utilizando heurísticas de usabilidade para garantir uma experiência de usuário fluida tanto em dispositivos móveis quanto em desktops.

## 🚀 Funcionalidades

- **⏱️ Ciclo Pomodoro Integrado:** Cronômetro nativo (25min de foco / pausas curtas) para gerenciamento de tempo baseado em blocos de estudo.
- **📄 Leitor e Filtro de Editais:** Área dedicada para importação de editais em texto bruto (como o da Câmara Municipal), com o objetivo de filtrar e separar o conteúdo por blocos de conhecimento.
- **✅ Gestão de Tarefas (To-Do List):** Acompanhamento diário de metas rápidas (ex: revisão de resumos, resolução de questões).
- **🔥 Gamificação (Streak):** Sistema de "foguinho" que incentiva o usuário a manter o ritmo de estudos diário.
- **📊 Acompanhamento de Metas Longas:** Painel visual com barras de progresso para monitorar objetivos a longo prazo (ex: conclusão de editais, fluência em idiomas).
- **📱 Design Responsivo:** Interface fluida que se adapta perfeitamente a smartphones, tablets e monitores ultrawide.

## 🛠️ Tecnologias Utilizadas

**Frontend:**
* **HTML5:** Estruturação semântica.
* **CSS3:** Estilização modularizada (arquivos globais, de autenticação e dashboard separados para melhor performance), CSS Grid, Flexbox e variáveis CSS.
* **JavaScript (Vanilla):** Lógica do cronômetro Pomodoro e interatividade inicial.
* **Design:** Prototipação e identidade visual criadas no Canva (Paleta de cores em tons pastéis e tipografia Nunito).

**Backend (Em Planejamento):**
* Lógica de processamento de editais (Parser) e estruturação do banco de dados para gestão de contas de usuários (Python/Java).

## 📁 Estrutura do Projeto

A arquitetura do frontend foi modularizada para facilitar a manutenção e a escalabilidade do código:

```text
📦 BambuFocus
 ┣ 📂 assets/              # Imagens e ícones SVG
 ┣ 📜 index.html           # Tela de Boas-Vindas (Onboarding)
 ┣ 📜 login.html           # Tela de Autenticação
 ┣ 📜 cadastro.html        # Criação de Conta
 ┣ 📜 dashboard.html       # Painel Principal (Pomodoro, Metas, Edital)
 ┣ 📜 global.css           # Estilos globais, variáveis e componentes base
 ┣ 📜 auth.css             # Estilos específicos para entrada de usuários
 ┣ 📜 dashboard.css        # Layout estrutural e responsividade do painel principal
 ┗ 📜 dashboard.js         # Lógica de funcionamento do cronômetro
