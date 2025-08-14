import { createClient } from "@/common/utils/server";

// Données de test pour les projets
const mockProjects = [
  {
    id: 1,
    title: "Portail DNS",
    slug: "portail-dns",
    description: "Système de gestion DNS avancé avec interface d'administration",
    image: "/images/projects/portail-dns.png",
    link_demo: "https://example.com/portail-dns",
    link_github: "https://github.com/njilla/portail-dns",
    stacks: ["Python", "HTML", "CSS", "JavaScript", "Bootstrap", "Docker"],
    content: `
# Portail DNS

Un système de gestion DNS avancé avec interface d'administration moderne.

## Objectifs

- Gestion centralisée des zones DNS
- Interface web intuitive
- Sécurité renforcée
- Monitoring en temps réel

## Technologies utilisées

- **Backend**: Python, BIND
- **Frontend**: HTML/CSS/JavaScript, Bootstrap
- **Infrastructure**: Linux, Docker

## Fonctionnalités principales

- Configuration DNS avancée
- Gestion dynamique des enregistrements
- Interface d'administration sécurisée
- Monitoring et alertes
- API REST pour l'intégration

## Architecture

Le système utilise une architecture modulaire avec séparation claire entre la logique métier et l'interface utilisateur.
    `,
    is_show: true,
    is_featured: true,
  },
  {
    id: 2,
    title: "Model IA Mbong",
    slug: "model-ia-mbong",
    description: "Système de recommandation culinaire basé sur l'IA",
    image: "/images/projects/model-ia-mbong.png",
    link_demo: "https://example.com/model-ia-mbong",
    link_github: "https://github.com/njilla/model-ia-mbong",
    stacks: ["Python", "Scikit-learn", "Django", "PostgreSQL", "React", "TailwindCSS"],
    content: `
# Model IA Mbong

Système de recommandation culinaire intelligent basé sur l'Intelligence Artificielle.

## Objectifs

- Recommandations culinaires personnalisées
- Analyse des préférences utilisateur
- Base de données de recettes enrichie
- Interface utilisateur moderne

## Technologies utilisées

- **IA/ML**: Python, Scikit-learn, Pandas, NumPy
- **Backend**: Django, PostgreSQL
- **Frontend**: React.js, Tailwind CSS
- **Visualisation**: Chart.js

## Fonctionnalités principales

- Système de recommandation intelligent
- Base de données culinaire complète
- Interface utilisateur intuitive
- Algorithmes d'IA avancés
- Analyse des préférences

## Algorithmes implémentés

- Collaborative Filtering
- Content-Based Filtering
- Hybrid Recommender Systems
- Sentiment Analysis
    `,
    is_show: true,
    is_featured: true,
  },
  {
    id: 3,
    title: "Service IA Agricole",
    slug: "service-ia-agricole",
    description: "Service d'IA pour plateforme IoT agricole",
    image: "/images/projects/service-ia-agricole.png",
    link_demo: "https://example.com/service-ia-agricole",
    link_github: "https://github.com/njilla/service-ia-agricole",
    stacks: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
    content: `
# Service IA pour Plateforme IoT Agricole

Service d'Intelligence Artificielle spécialisé pour l'agriculture intelligente.

## Objectifs

- Analyse de sentiment des données agricoles
- Prédiction de rendement des cultures
- Optimisation des ressources
- Monitoring en temps réel

## Technologies utilisées

- **IA/ML**: Python, Scikit-learn, TensorFlow/Keras
- **NLP**: NLTK, Spacy
- **Explainability**: SHAP, LIME
- **Backend**: Django, FastAPI
- **Base de données**: PostgreSQL, Redis
- **IoT**: MQTT, InfluxDB
- **Monitoring**: Grafana
- **Cloud**: AWS/GCP, Docker, Kubernetes

## Fonctionnalités principales

- Analyse de sentiment des données agricoles
- Prédiction de rendement des cultures
- Prédiction de rendement
- Explainabilité des modèles
- Système de recommandation

## Modèles d'IA implémentés

- Sentiment Analysis pour données agricoles
- Crop Prediction Models
- Yield Prediction Models
- Explainable AI (XAI)
- Recommendation Systems
    `,
    is_show: true,
    is_featured: false,
  },
  {
    id: 4,
    title: "Pancreas IA",
    slug: "pancreas-ia",
    description: "Système d'IA pour l'analyse d'images médicales du pancréas",
    image: "/images/projects/pancreas-ia.png",
    link_demo: "https://example.com/pancreas-ia",
    link_github: "https://github.com/njilla/pancreas-ia",
    stacks: ["Python", "TensorFlow", "Django", "PostgreSQL", "React"],
    content: `
# Pancreas IA

Système d'Intelligence Artificielle pour l'analyse d'images médicales du pancréas.

## Objectifs

- Analyse automatique d'images médicales
- Détection de pathologies pancréatiques
- Interface médicale sécurisée
- Explainabilité des résultats

## Technologies utilisées

- **IA/ML**: Python, TensorFlow/Keras, Scikit-learn
- **Computer Vision**: OpenCV, PIL/Pillow
- **Explainability**: SHAP, LIME
- **Deep Learning**: CNN, Transfer Learning
- **Backend**: Django, FastAPI
- **Base de données**: PostgreSQL, Redis
- **Frontend**: React.js, DICOM.js, Chart.js
- **UI**: Material-UI
- **Infrastructure**: Docker, GPU Computing
- **Sécurité**: HIPAA Compliance

## Fonctionnalités principales

- Analyse de données cliniques
- Analyse d'images de scanner
- Fusion multimodale
- Interface médicale
- Explainabilité des résultats

## Modèles d'IA implémentés

- CNN pour analyse d'images
- Transfer Learning
- Multimodal Fusion
- Explainable AI (XAI)
- Medical Image Segmentation
    `,
    is_show: true,
    is_featured: false,
  },
  {
    id: 5,
    title: "Système de Codification",
    slug: "systeme-codification-marchandises",
    description: "Système intelligent de codification des marchandises",
    image: "/images/projects/systeme-codification.png",
    link_demo: "https://example.com/systeme-codification",
    link_github: "https://github.com/njilla/systeme-codification",
    stacks: ["Python", "PostgreSQL", "React", "TypeScript", "Docker"],
    content: `
# Système Intelligent de Codification des Marchandises

Système d'Intelligence Artificielle pour la codification automatique des marchandises.

## Objectifs

- Classification automatique des marchandises
- Assistant RAG intelligent
- Interface utilisateur moderne
- Monitoring et analytics

## Technologies utilisées

- **IA/ML**: Python, Transformers, Scikit-learn
- **RAG**: Vector Database, Retrieval-Augmented Generation
- **Backend**: FastAPI, Springboot
- **Base de données**: PostgreSQL, Redis
- **Tâches asynchrones**: Celery
- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Visualisation**: Chart.js, React Query
- **Infrastructure**: Docker, Nginx
- **Monitoring**: Prometheus, Grafana, ELK Stack

## Fonctionnalités principales

- Classification automatique
- Assistant RAG intelligent
- Interface utilisateur moderne
- Monitoring et analytics
- Gestion des données

## Modèles d'IA implémentés

- Transformer Models
- RAG (Retrieval-Augmented Generation)
- Classification Models
- NLP Models
- Vector Embeddings
    `,
    is_show: true,
    is_featured: false,
  },
];

export const getProjectsData = async () => {
  // Code Supabase commenté pour l'instant
  // const supabase = createClient();
  // let { data } = await supabase.from("projects").select();
  // return data;

  // Pour l'instant, retournons les données de test
  // TODO: Décommenter le code Supabase plus tard quand la base de données sera configurée
  return mockProjects;
};

export const getProjectsDataBySlug = async (slug: string) => {
  // Code Supabase commenté pour l'instant
  // const supabase = createClient();
  // let { data } = await supabase.from("projects").select().eq("slug", slug).single();
  // return data;

  // Pour l'instant, retournons les données de test
  // TODO: Décommenter le code Supabase plus tard quand la base de données sera configurée
  return mockProjects.find(project => project.slug === slug) || null;
};
