<svg fill="none" viewBox="0 0 600 400" width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
  <div xmlns="http://www.w3.org/1999/xhtml">
    <style>
      * {
        margin: 0;
        padding: 0;
        color: inherit;
        text-decoration: none;
        list-style: none;
        outline: none;
        box-sizing: border-box;
      }

      .body {
        --color-main: #ff9b71;
        --color-primary: #ff4444;
        --color-secondary: #e8e677;
        --color-background: #0d1117;
        --color-link: #fef29e;
        --color-link-active: #ff4444;

        height: 400px;
        width: 100%;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: radial-gradient(var(--color-main), var(--color-primary), var(--color-secondary));
        animation: border 5s linear infinite;
        background-size: 200% 200%;
        background-position: 0 0;
        border: 24px solid;
        border-color: var(--color-background);
      }

      .container {
        background: var(--color-background);
        height: calc(100% - 10px);
        width: calc(100% - 10px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      h1 {
        font-size: 3.5rem;
        font-weight: 800;
        font-family: "Open Sans", sans-serif;
        text-align: center;
      }
      h1 a {
        display: block;
      }
      h1 a span {
        overflow: hidden;
        transition: transform 0.25s cubic-bezier(0.5, 0, 0.25, 1.25);
        display: block;
      }
      h1 a span em {
        display: block;
      }
      h1 a span:nth-child(1) {
        color: var(--color-main);
        margin-bottom: 6px;
        animation: intro 1.5s cubic-bezier(0.5, 0, 0.25, 1.3) -1s 1;
      }
      h1 a span:nth-child(1) em {
        margin-top: 30px;
        line-height: 0rem;
        margin-bottom: -10px;
      }
      h1 a span:nth-child(2) {
        color: var(--color-primary);
        margin-bottom: 6px;
        animation: intro 1.5s cubic-bezier(0.5, 0, 0.25, 1.2) -0.9s 1;
      }
      h1 a span:nth-child(2) em {
        margin-top: -6px;
        line-height: 1rem;
      }
      h1 a span:nth-child(3) {
        color: var(--color-secondary);
        animation: intro 1.5s cubic-bezier(0.5, 0, 0.25, 1.1) -0.8s 1;
      }
      h1 a span:nth-child(3) em {
        margin-top: -36px;
        line-height: 3rem;
      }
      h1 a:hover span,
      h1 a:focus span {
        transition: transform 0.125s cubic-bezier(0.5, 0, 0.25, 2.5);
      }
      h1 a:hover span:nth-child(1),
      h1 a:focus span:nth-child(1) {
        transform: translateX(1vw);
      }
      h1 a:hover span:nth-child(3),
      h1 a:focus span:nth-child(3) {
        transform: translateX(-1vw);
      }

      .items {
        margin-top: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      ul {
        font-size: 16px;
        line-height: 26px;
        color: var(--color-main);
        font-weight: 700;
        font-family: "Open Sans", sans-serif;
      }
      ul li {
        display: flex;
        letter-spacing: 0.125vw;
      }
      ul li a {
        margin-left: 5px;
      }
      ul li a:hover,
      ul li a:focus {
        color: var(--color-link-active);
      }
      ul li a {
        color: var(--color-link);
      }

      .hi {
        display: inline-block;
        transform-origin: 70% 70%;
        animation: hi 3s linear -2s infinite;
      }

      @keyframes border {
        0% { background-position: 0 0; }
        20% { background-position: 100% 0; }
        40% { background-position: 100% 100%; }
        60% { background-position: 0 100%; }
        100% { background-position: 0 0; }
      }

      @keyframes hi {
        25% { transform: rotate(0deg); }
        30% { transform: rotate(15deg); }
        35% { transform: rotate(0deg); }
        40% { transform: rotate(15deg); }
        45% { transform: rotate(0deg); }
        80% { transform: rotate(0deg); }
        85% { transform: rotate(15deg); }
        90% { transform: rotate(0deg); }
        95% { transform: rotate(15deg); }
        100% { transform: rotate(0deg); }
      }

      @keyframes intro {
        0%, 75% { transform: translateX(-100vw); }
        100% { transform: translateX(0); }
      }

      @keyframes fade {
        0%, 75% { opacity: 0; }
        100% { opacity: 1; }
      }

      @media (prefers-color-scheme: light) {
        .body {
          --color-main: #9B5DE5;
          --color-primary: #F15BB5;
          --color-secondary: #00BBF9;
          --color-background: #ffffff;
          --color-link: #00BBF9;
          --color-link-active: #F15BB5;
        }
      }

      @media (prefers-reduced-motion) {
        .body {
          animation: none;
        }

        .hi {
          animation: none;
        }

        ul li {
          opacity: 1;
          animation: none;
        }

        h1 a span:nth-child(1),
        h1 a span:nth-child(2),
        h1 a span:nth-child(3) {
          animation: none;
        }
      }
    </style>
    <div class='body'>
      <div class='container'>
        <h1>
          <a href="https://github.com/nikolalsvk">
            <span><em>nikola đuza</em></span>
            <span><em>nikola đuza</em></span>
            <span><em>nikola đuza</em></span>
          </a>
        </h1>
        <section class='items'>
          <ul>
            <li>Writer &#38; Software Engineer</li>
          </ul>
          <ul>
            <li>at <a href="https://pragmaticpineapple.com">Pragmatic Pineapple</a></li>
          </ul>
          <ul>
            <li><a href="mailto:nikolaseap@gmail.com" role="button"><span class='hi'>👋</span></a></li>
          </ul>
        </section>
      </div>
    </div>
  </div>
  </foreignObject>
</svg>

# Salut 👋, c’est Mickael 😎

🧠 Fullstack developer qui construit des **applications web augmentées par l’IA**.

Stack principale :
<p>
  <img src="https://img.shields.io/badge/Ruby_on_Rails-D30001?style=for-the-badge&logo=rubyonrails&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/LLM-FF6F00?style=for-the-badge"/>
</p>
J’aime transformer des idées simples en **produits utiles et intelligents**.

Après une formation intensive **AI Software Developer au Wagon** 🚂, je développe des applications web modernes avec **Ruby on Rails**, **JavaScript** et des **LLM (Large Language Models)**.

Je m’intéresse particulièrement à :

- l’intégration d’**IA dans les applications web**
- la création d’**agents intelligents**
- les **applications SaaS simples et utiles**

J’aime construire des produits performants qui résolvent des **problèmes concrets**.

<br>

## 🚀 Technologies

### 🧠 Langages

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white"/>
  <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white"/>
</p>

### ⚙️ Frameworks

<p>
  <img src="https://img.shields.io/badge/Ruby_on_Rails-D30001?style=for-the-badge&logo=rubyonrails&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/Stimulus-77E8B9?style=for-the-badge&logo=stimulus&logoColor=black"/>
  <img src="https://img.shields.io/badge/ActionCable-CC0000?style=for-the-badge"/>
</p>

### 🤖 Intelligence Artificielle

<p>
  <img src="https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=claude&logoColor=white"/>
  <img src="https://img.shields.io/badge/Claude_Code-000000?style=for-the-badge&logo=anthropic&logoColor=white"/>
  <img src="https://img.shields.io/badge/LLM-FF6F00?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/AI_Agents-000000?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Text_AI-2E8B57?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Image_AI-FF69B4?style=for-the-badge"/>
</p>

### 🌐 CMS
<p>
  <img src="https://img.shields.io/badge/Ghost-000?style=for-the-badge&logo=ghost&logoColor=yellow"/>
  <img src="https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white"/>
</p>

### 🗄️ Base de données

<p>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"/>
</p>

### 🛠️ Outils

<p>
  <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
  <img src="https://img.shields.io/badge/Digital_Ocean-0080FF?style=for-the-badge&logo=DigitalOcean&logoColor=white"/>
  <img src="https://img.shields.io/badge/Hostinger-673DE6?style=for-the-badge&logo=hostinger&logoColor=white"/>
  <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white"/>
</p>

### 💻 📱 Favorites OS
<p>
  <img src="https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white"/>
  <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white"/>
  <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"/>
</p>

<br>

## ⭐ Featured Projects

### 🧠 Padel Maestro

Assistant IA pour les joueurs de padel permettant des séances d'entrainement personnalisées.

Technologies :
<p>
  <img src="https://img.shields.io/badge/Ruby_on_Rails-D30001?style=for-the-badge&logo=rubyonrails&logoColor=white"/>
  <img src="https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
</p>

### 🌱 PokePlant

Application web collaborative pour aider les utilisateurs à prendre soin de leurs plantes.

Technologies :
<p>
  <img src="https://img.shields.io/badge/Ruby_on_Rails-D30001?style=for-the-badge&logo=rubyonrails&logoColor=white"/>
  <img src="https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
</p>

🔗 Repository  
https://github.com/Floopidou/pokeplant

### ✍️ Tremic

Blog personnel dédié à la productivité, la tech et l'écosystème Apple.

Technologies :
<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Ghost-000?style=for-the-badge&logo=ghost&logoColor=yellow"/>
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Hostinger-673DE6?style=for-the-badge&logo=hostinger&logoColor=white"/>
</p>


🌍 Website  
https://tremic.fr

<br>

## 📊 GitHub Stats

![GitHub stats](https://github-readme-stats.vercel.app/api?username=mtremauville&show_icons=true&theme=tokyonight)

<br>

## 🧠 Top Languages

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=mtremauville&layout=compact&theme=tokyonight)

<br>

## 📫 Me contacter

<p>
  <a href="https://www.linkedin.com/in/mickael-tremauville/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:mickael.tremauville@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>
