# Charte Graphique - Portfolio Personnel Satria Bahari

## 🎨 Identité visuelle

### Concept créatif
Le design du portfolio reflète l'identité d'un développeur moderne et professionnel, combinant élégance technique et créativité. L'approche est minimaliste mais dynamique, avec des animations subtiles et une palette de couleurs équilibrée.

### Personnalité de la marque
- **Professionnel** : Interface claire et structurée
- **Innovant** : Animations et interactions modernes
- **Accessible** : Design inclusif et responsive
- **Technique** : Éléments visuels reflétant l'expertise technique

## 🎨 Palette de couleurs

### Couleurs principales

#### Mode clair
```css
/* Couleurs de base */
--color-primary: #4ade80 (vert émeraude)
--color-secondary: #3b82f6 (bleu)
--color-accent: #f59e0b (orange)

/* Couleurs de texte */
--color-text-primary: #171717 (gris très foncé)
--color-text-secondary: #525252 (gris moyen)
--color-text-muted: #737373 (gris clair)

/* Couleurs de fond */
--color-bg-primary: #fafafa (blanc cassé)
--color-bg-secondary: #ffffff (blanc pur)
--color-bg-tertiary: #f5f5f5 (gris très clair)

/* Couleurs d'interface */
--color-border: #e5e5e5 (gris clair)
--color-shadow: rgba(0, 0, 0, 0.1)
```

#### Mode sombre
```css
/* Couleurs de base */
--color-primary: #4ade80 (vert émeraude)
--color-secondary: #60a5fa (bleu clair)
--color-accent: #fbbf24 (orange clair)

/* Couleurs de texte */
--color-text-primary: #e4e6eb (gris très clair)
--color-text-secondary: #b0b3b8 (gris moyen)
--color-text-muted: #65676b (gris foncé)

/* Couleurs de fond */
--color-bg-primary: #121212 (gris très foncé)
--color-bg-secondary: #1e1e1e (gris foncé)
--color-bg-tertiary: #2d2d2d (gris moyen)

/* Couleurs d'interface */
--color-border: #3a3a3a (gris moyen)
--color-shadow: rgba(0, 0, 0, 0.3)
```

### Couleurs des technologies
```css
/* Langages et frameworks */
--color-html: #f97316 (orange)
--color-css: #3b82f6 (bleu)
--color-js: #fbbf24 (jaune)
--color-ts: #3b82f6 (bleu)
--color-react: #06b6d4 (cyan)
--color-next: #000000 (noir)
--color-node: #16a34a (vert)
--color-tailwind: #06b6d4 (cyan)
--color-firebase: #f59e0b (orange)
--color-supabase: #10b981 (vert émeraude)
```

## 🔤 Typographie

### Police principale
- **Famille** : Onest Sans (Google Fonts)
- **Poids disponibles** : 300, 400, 500, 600, 700
- **Style** : Sans-serif moderne et lisible

### Hiérarchie typographique

#### Titres
```css
/* H1 - Titre principal */
font-size: 2.25rem (36px)
font-weight: 600
line-height: 1.2

/* H2 - Titres de section */
font-size: 1.875rem (30px)
font-weight: 600
line-height: 1.3

/* H3 - Sous-titres */
font-size: 1.5rem (24px)
font-weight: 500
line-height: 1.4
```

#### Corps de texte
```css
/* Texte principal */
font-size: 1rem (16px)
font-weight: 400
line-height: 1.6

/* Texte secondaire */
font-size: 0.875rem (14px)
font-weight: 400
line-height: 1.5

/* Petits textes */
font-size: 0.75rem (12px)
font-weight: 400
line-height: 1.4
```

### Espacement des lettres
- **Titres** : -0.025em
- **Corps de texte** : 0em
- **Labels** : 0.025em

## 🎭 Éléments graphiques

### Icônes
- **Style** : Ligne fine et moderne
- **Taille standard** : 20px, 24px, 26px
- **Couleur** : Adaptative selon le thème
- **Bibliothèque** : React Icons (Phosphor, Lucide, Heroicons)

### Boutons
```css
/* Bouton primaire */
background: #4ade80
color: #ffffff
border-radius: 8px
padding: 12px 24px
font-weight: 500
transition: all 0.2s ease

/* Bouton secondaire */
background: transparent
color: #4ade80
border: 2px solid #4ade80
border-radius: 8px
padding: 10px 22px
font-weight: 500
transition: all 0.2s ease

/* Bouton ghost */
background: transparent
color: var(--color-text-primary)
border: none
padding: 8px 16px
font-weight: 400
transition: all 0.2s ease
```

### Cartes et conteneurs
```css
/* Carte standard */
background: var(--color-bg-secondary)
border: 1px solid var(--color-border)
border-radius: 12px
padding: 24px
box-shadow: 0 1px 3px var(--color-shadow)

/* Carte interactive */
background: var(--color-bg-secondary)
border: 1px solid var(--color-border)
border-radius: 12px
padding: 24px
box-shadow: 0 4px 6px var(--color-shadow)
transition: all 0.3s ease

/* Carte hover */
transform: translateY(-2px)
box-shadow: 0 8px 25px var(--color-shadow)
```

## 🎬 Animations et transitions

### Durées standard
```css
/* Transitions rapides */
--duration-fast: 150ms
--duration-normal: 300ms
--duration-slow: 500ms

/* Animations */
--duration-bounce: 800ms
--duration-fade: 400ms
```

### Types d'animations
```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide in */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

/* Scale */
@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Glitch effect */
@keyframes glitch {
  0% { clip-path: inset(20% 0 50% 0); }
  5% { clip-path: inset(10% 0 60% 0); }
  /* ... autres keyframes */
}
```

### Easing functions
```css
/* Standard */
ease: cubic-bezier(0.4, 0, 0.2, 1)

/* Smooth */
ease-out: cubic-bezier(0, 0, 0.2, 1)

/* Bounce */
ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### Grilles
```css
/* Container principal */
max-width: 1280px (7xl)
margin: 0 auto
padding: 0 1rem (mobile)
padding: 0 3rem (desktop)

/* Grille Bento */
display: grid
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
gap: 1.5rem
```

## 🎨 Composants spécifiques

### Grille Bento
- **Style** : Cartes de différentes tailles
- **Disposition** : Grid responsive
- **Animations** : Hover effects et transitions
- **Couleurs** : Dégradés subtils

### Sidebar
```css
/* Desktop */
width: 20% (lg:w-1/5)
position: sticky
top: 0
height: 100vh
padding: 2rem 0

/* Mobile */
width: 100%
position: fixed
bottom: 0
height: auto
background: var(--color-bg-secondary)
border-top: 1px solid var(--color-border)
```

### Navigation
```css
/* Menu items */
display: flex
align-items: center
gap: 0.75rem
padding: 0.75rem 1rem
border-radius: 8px
transition: all 0.2s ease

/* Active state */
background: var(--color-primary)
color: white

/* Hover state */
background: var(--color-bg-tertiary)
color: var(--color-text-primary)
```

### Dashboard Cards
```css
/* Statistiques */
background: linear-gradient(135deg, var(--color-primary), var(--color-secondary))
color: white
border-radius: 16px
padding: 1.5rem
box-shadow: 0 8px 32px rgba(74, 222, 128, 0.3)

/* Graphiques */
background: var(--color-bg-secondary)
border: 1px solid var(--color-border)
border-radius: 12px
padding: 1.5rem
```

## 🌟 Effets spéciaux

### Gradients
```css
/* Gradient principal */
background: linear-gradient(135deg, #4ade80 0%, #3b82f6 100%)

/* Gradient subtil */
background: linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)

/* Gradient radial */
background: radial-gradient(ellipse 60% 50% at 50% -30%, rgba(250, 250, 250, 0.15) 0%, transparent)
```

### Ombres
```css
/* Ombre légère */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)

/* Ombre moyenne */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

/* Ombre forte */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15)

/* Ombre colorée */
box-shadow: 0 8px 32px rgba(74, 222, 128, 0.3)
```

### Effets de texte
```css
/* Texte brillant */
background: linear-gradient(90deg, #4ade80, #3b82f6, #4ade80)
background-size: 200% 100%
animation: shine 3s linear infinite
-webkit-background-clip: text
-webkit-text-fill-color: transparent

/* Texte glitch */
position: relative
&::before, &::after {
  content: attr(data-text)
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
}
```

## 📐 Espacement et proportions

### Système d'espacement
```css
/* Base unit: 4px */
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-5: 1.25rem (20px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
```

### Ratios d'aspect
```css
/* Images de profil */
aspect-ratio: 1/1 (carré)

/* Images de projets */
aspect-ratio: 16/9 (paysage)

/* Cartes Bento */
aspect-ratio: 4/3 (portrait)
```

## 🎯 Accessibilité

### Contraste
- **Ratio minimum** : 4.5:1 pour le texte normal
- **Ratio recommandé** : 7:1 pour le texte petit
- **Couleurs d'accent** : Respectent les standards WCAG

### Focus
```css
/* Focus visible */
outline: 2px solid var(--color-primary)
outline-offset: 2px
border-radius: 4px

/* Focus pour les boutons */
box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.3)
```

### Réduction de mouvement
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📋 Guide d'utilisation

### Règles générales
1. **Cohérence** : Utiliser toujours la même palette de couleurs
2. **Hiérarchie** : Respecter la hiérarchie typographique
3. **Espacement** : Maintenir des espacements cohérents
4. **Animations** : Subtiles et non intrusives
5. **Accessibilité** : Toujours vérifier les contrastes

### Do's et Don'ts
✅ **À faire**
- Utiliser les couleurs de la palette officielle
- Respecter les espacements du système
- Tester en mode sombre et clair
- Vérifier l'accessibilité

❌ **À éviter**
- Créer de nouvelles couleurs sans validation
- Ignorer la hiérarchie typographique
- Surcharger les animations
- Négliger l'expérience mobile