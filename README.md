# Portfolio Personnel - Nicol Emmanuel NJILLA TCHAGADICK

🔥 Portfolio personnel développé depuis zéro en utilisant Next.js, TypeScript, Tailwind CSS, SWR, Supabase et plus encore.

[![GitHub Repo stars](https://img.shields.io/github/stars/nick-njilla653/portfolio-personnel)](https://github.com/nick-njilla653/portfolio-personnel/stargazers)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/status.svg)](https://depfu.com)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/overview.svg)](https://depfu.com/github/nick-njilla653/portfolio-personnel?project_id=38809)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/count.svg)](https://depfu.com/github/nick-njilla653/portfolio-personnel?project_id=38809)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

<br/>


## 📘 Introduction

Ceci est mon portfolio personnel développé depuis Août 2025 en utilisant des technologies modernes telles que Next.js et TypeScript.

J'utilise cette plateforme pour partager mes projets, insights et ressources. Le site évolue constamment alors que j'ajoute plus de fonctionnalités et d'améliorations.

N'hésitez pas à explorer le code source, l'utiliser comme inspiration, ou le forker comme template sous la licence fournie. Si vous trouvez ce projet utile, considérez à lui donner une étoile ⭐.

Avez-vous des retours, idées ou questions ? N'hésitez pas à me contacter ! 🙌

---

## Stack Technologique

Ce site web est construit en utilisant ces technologies :

- **⚛️ Next.js**
- **🔰 TypeScript**
- **💠 Tailwind CSS v3**
- **🦫 Zustand**
- **〰️ SWR**
- **➰ Framer Motion**
- **💢 React Icons**
- **🌐 Next-Intl (i18n)**
- **📦 Absolute Imports & Path Alias**
- **📏 ESLint & Prettier**
- **📌 Conventional Commit Lint**

---

## 🚀 Fonctionnalités

### 🕗 Statistiques Wakatime
Affiche les statistiques de codage en direct depuis Wakatime en utilisant des routes API serverless dans Next.js.

### 🗳 Présentation des Projets
Les projets sont stockés dans une base de données PostgreSQL Supabase. Utilise ISR (revalidation 1s) et SSR pour des performances optimales.

### 🌍 Internationalisation
Supporte plusieurs langues en utilisant `next-intl`. Facilement extensible pour supporter des locales supplémentaires.

### 📊 Dashboard Développeur
Dashboard interactif visualisant :
- Contributions GitHub
- Données Wakatime
- Statistiques Codewars
- Statistiques de frappe Monkeytype

Chaque statistique est récupérée en utilisant des APIs publiques et visualisée de manière conviviale.

---

## 🛠 Pour Commencer

Suivez ces étapes pour exécuter le projet localement :

### 1. Cloner le Repository

En utilisant Git :
```bash
git clone https://github.com/nick-njilla653/portfolio-personnel
```

En utilisant `create-next-app` :
```bash
npx create-next-app -e https://github.com/nick-njilla653/portfolio-personnel nom-du-projet
```

En utilisant `degit` :
```bash
npx degit nick-njilla653/portfolio-personnel VOTRE_NOM_APP
```

Ou déployer directement sur Vercel / Netlify :

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/nick-njilla653/portfolio-personnel)  
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nick-njilla653/portfolio-personnel)

---

### 2. Installer les Dépendances

```bash
bun install
```

> ⚠️ Il est recommandé d'utiliser **Bun** pour s'assurer que les hooks et scripts husky fonctionnent correctement.

---

### 3. Configurer les Variables d'Environnement

Copiez `.env.example` vers `.env` et remplacez par vos propres identifiants.

```bash
cp .env.example .env
```

Vous aurez besoin d'identifiants pour des services comme :
- Nodemailer
- GitHub
- Wakatime
- Codewars
- Monkeytype
- Supabase/PostgreSQL

#### Exemple :

```
# Nodemailer
NODEMAILER_PW=votre_mot_de_passe_email
NODEMAILER_EMAIL=votre_email@example.com

# GitHub Token
GITHUB_READ_USER_TOKEN_PERSONAL=votre_token_github

# Umami Analytics
UMAMI_API_KEY=votre_cle_api_umami
UMAMI_WEBSITE_ID_SITE=votre_id_site
UMAMI_WEBSITE_ID_MYID=votre_id_myid

# Wakatime
WAKATIME_API_ID=votre_id_wakatime
WAKATIME_API_KEY=votre_cle_wakatime

# Monkeytype
MONKEYTYPE_API_KEY=votre_cle_api_monkeytype

# Codewars
CODEWARS_USER_ID=votre_username_codewars

# PostgreSQL (Supabase)
POSTGRES_URL=votre_url_postgres
POSTGRES_PRISMA_URL=votre_url_prisma
POSTGRES_URL_NO_SSL=votre_url_postgres_no_ssl
POSTGRES_URL_NON_POOLING=votre_url_postgres_non_pooling
POSTGRES_USER=votre_user_postgres
POSTGRES_HOST=votre_host_postgres
POSTGRES_PASSWORD=votre_password_postgres
POSTGRES_DATABASE=votre_db_postgres

# Google Auth
GOOGLE_CLIENT_ID=votre_google_client_id
GOOGLE_CLIENT_SECRET=votre_google_client_secret

# Gemini API
GEMINI_API_KEY=votre_cle_api_gemini

# GitHub Auth
GITHUB_ID=votre_github_app_id
GITHUB_SECRET=votre_github_app_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=votre_nextauth_secret

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=votre_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=votre_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=votre_firebase_app_id
NEXT_PUBLIC_FIREBASE_DB_URL=votre_firebase_db_url
NEXT_PUBLIC_FIREBASE_CHAT_DB=messages

# Supabase
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_supabase

# Misc
NEXT_PUBLIC_AUTHOR_EMAIL=votre_email@example.com
DOMAIN=https://www.votre_domaine.com

```

---

### 4. Lancer le Serveur de Développement

```bash
bun run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Vous pouvez commencer à éditer la page d'accueil dans :  
`src/pages/index.tsx`

---

## 📄 Licence

Ce projet est sous licence MIT.

---

**Développé avec passion pour l'IA et l'innovation technologique** 🚀
