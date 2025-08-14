# Configuration des Variables d'Environnement

## Créer le fichier `.env.local` à la racine du projet

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production

# Google OAuth (Optionnel - pour l'authentification Google)
# GOOGLE_CLIENT_ID=your-google-client-id
# GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth (Optionnel - pour l'authentification GitHub)
# GITHUB_CLIENT_ID=your-github-client-id
# GITHUB_CLIENT_SECRET=your-github-client-secret

# Supabase (Optionnel - pour le chat en temps réel)
# NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Domain (pour les métadonnées)
DOMAIN=http://localhost:3000

# Email (pour le formulaire de contact)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password

# GitHub API (pour les contributions)
GITHUB_TOKEN=your-github-token

# Wakatime API (pour les statistiques de codage)
WAKATIME_API_KEY=your-wakatime-api-key

# Codewars API (pour les statistiques Codewars)
CODEWARS_API_KEY=your-codewars-api-key

# Monkeytype API (pour les statistiques de frappe)
MONKEYTYPE_API_KEY=your-monkeytype-api-key

# Umami Analytics (pour les analytics)
UMAMI_WEBSITE_ID=your-umami-website-id
UMAMI_API_KEY=your-umami-api-key
```

## Instructions pour configurer l'authentification

### 1. Google OAuth (Recommandé)
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un existant
3. Activez l'API Google+ API
4. Créez des identifiants OAuth 2.0
5. Ajoutez `http://localhost:3000/api/auth/callback/google` comme URI de redirection
6. Copiez le Client ID et Client Secret dans `.env.local`

### 2. GitHub OAuth (Alternative)
1. Allez sur [GitHub Developer Settings](https://github.com/settings/developers)
2. Créez une nouvelle OAuth App
3. Ajoutez `http://localhost:3000/api/auth/callback/github` comme Callback URL
4. Copiez le Client ID et Client Secret dans `.env.local`

### 3. NEXTAUTH_SECRET
Générez une clé secrète aléatoire :
```bash
openssl rand -base64 32
```

## Redémarrage requis
Après avoir créé le fichier `.env.local`, redémarrez le serveur de développement :
```bash
npm run dev
``` 