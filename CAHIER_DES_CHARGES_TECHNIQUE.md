# Cahier des Charges Technique - Portfolio Personnel Satria Bahari

## 📋 Vue d'ensemble du projet

### Contexte
Portfolio personnel développé par Satria Bahari, développeur full-stack basé en Indonésie. Le site présente ses compétences, projets, réalisations et offre des fonctionnalités interactives comme un chat en temps réel et un dashboard de statistiques de développement.

### Objectifs
- Présenter le profil professionnel et les compétences techniques
- Exposer les projets réalisés avec démonstrations interactives
- Fournir un dashboard de statistiques de développement en temps réel
- Offrir une plateforme de communication via chat
- Supporter l'internationalisation (français/anglais/indonésien)

## 🏗 Architecture technique

### Stack technologique principale
- **Framework Frontend**: Next.js 14.1.0 (App Router)
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.3.0
- **État global**: Zustand 4.5.1
- **Gestion des données**: SWR 2.2.5
- **Animations**: Framer Motion 11.3.21 + GSAP 3.13.0
- **Package Manager**: Bun (recommandé)

### Base de données et services
- **Base de données**: PostgreSQL (Supabase)
- **Authentification**: NextAuth.js 4.24.7
- **Chat temps réel**: Firebase Firestore
- **Analytics**: Umami Analytics
- **Email**: Nodemailer 6.9.10
- **Stockage d'images**: Cloudinary 2.0.1

### APIs externes intégrées
- **GitHub API**: Statistiques de contributions
- **Wakatime API**: Statistiques de temps de codage
- **Codewars API**: Statistiques de challenges
- **Monkeytype API**: Statistiques de vitesse de frappe
- **Gemini API**: Intelligence artificielle pour Smart Talk

## 🎯 Fonctionnalités principales

### 1. Pages statiques
- **Accueil**: Introduction, compétences, grille Bento
- **À propos**: Parcours professionnel, éducation, CV
- **Projets**: Catalogue de projets avec détails
- **Réalisations**: Certifications et badges
- **Contact**: Formulaire de contact avec email

### 2. Dashboard interactif
- **GitHub Contributions**: Calendrier de contributions
- **Wakatime Stats**: Temps de codage par langage
- **Codewars Stats**: Score et challenges complétés
- **Monkeytype Stats**: Vitesse de frappe et précision
- **Umami Analytics**: Statistiques de trafic

### 3. Fonctionnalités avancées
- **Chat Room**: Chat en temps réel avec Firebase
- **Smart Talk**: Assistant IA avec Gemini API
- **Internationalisation**: Support multi-langues (EN/ID/FR)
- **Mode sombre/clair**: Thème adaptatif
- **Animations**: Transitions fluides avec Framer Motion

## 🔧 Configuration technique

### Structure des dossiers
```
├── app/                    # App Router Next.js
│   ├── api/               # Routes API
│   ├── [locale]/          # Pages internationalisées
│   └── globals.css        # Styles globaux
├── common/                # Composants et utilitaires partagés
│   ├── components/        # Composants réutilisables
│   ├── constants/         # Configuration et constantes
│   ├── stores/           # État global Zustand
│   └── utils/            # Utilitaires
├── modules/              # Modules fonctionnels
│   ├── home/             # Page d'accueil
│   ├── dashboard/        # Dashboard interactif
│   ├── chat/             # Système de chat
│   └── projects/         # Gestion des projets
└── services/             # Services externes
```

### Variables d'environnement requises
```env
# Base de données
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_prisma_url

# Authentification
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret

# APIs externes
GITHUB_READ_USER_TOKEN_PERSONAL=your_github_token
WAKATIME_API_KEY=your_wakatime_key
MONKEYTYPE_API_KEY=your_monkeytype_api_key
CODEWARS_USER_ID=your_codewars_username
GEMINI_API_KEY=your_gemini_api_key

# Services
NODEMAILER_EMAIL=your_email@example.com
NODEMAILER_PW=your_email_password
UMAMI_API_KEY=your_umami_api_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
```

## 🚀 Déploiement et performance

### Optimisations
- **ISR (Incremental Static Regeneration)**: Revalidation toutes les secondes
- **SSR (Server-Side Rendering)**: Pour les pages dynamiques
- **Image Optimization**: Next.js Image avec Sharp
- **Code Splitting**: Chargement à la demande
- **Bundle Analysis**: Optimisation des bundles

### Monitoring
- **Analytics**: Umami pour le suivi des utilisateurs
- **Performance**: Vercel Analytics
- **Erreurs**: Logs serveur et client
- **SEO**: Métadonnées optimisées

### Déploiement
- **Plateforme principale**: Vercel
- **Alternative**: Netlify
- **CI/CD**: GitHub Actions
- **Domain**: satriabahari.my.id

## 🔒 Sécurité

### Authentification
- NextAuth.js avec Google OAuth
- Sessions sécurisées
- Protection des routes API

### Validation des données
- Validation côté client et serveur
- Sanitisation des entrées utilisateur
- Protection CSRF

### API Security
- Rate limiting sur les endpoints
- Validation des tokens
- CORS configuré

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Composants adaptatifs
- Sidebar responsive
- Navigation mobile
- Grilles flexibles
- Images adaptatives

## 🌐 Internationalisation

### Langues supportées
- **Anglais** (en)
- **Indonésien** (id)
- **Français** (fr) - en cours

### Structure des traductions
```
messages/
├── en.json
├── id.json
└── fr.json
```

## 🧪 Tests et qualité

### Outils de qualité
- **ESLint**: Linting du code
- **Prettier**: Formatage automatique
- **TypeScript**: Typage statique
- **Husky**: Git hooks

### Tests (à implémenter)
- **Jest**: Tests unitaires
- **React Testing Library**: Tests composants
- **Cypress**: Tests E2E

## 📈 Évolutions futures

### Fonctionnalités prévues
- Blog intégré avec MDX
- Système de commentaires
- Notifications push
- PWA (Progressive Web App)
- Intégration de plus d'APIs (LinkedIn, Twitter)

### Optimisations techniques
- Migration vers Next.js 15
- Implémentation de tests automatisés
- Optimisation des performances
- Amélioration de l'accessibilité

## 📊 Métriques de performance

### Objectifs
- **Lighthouse Score**: > 90
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Monitoring continu
- Surveillance des performances
- Analyse des erreurs
- Suivi de l'engagement utilisateur
- Optimisation continue 