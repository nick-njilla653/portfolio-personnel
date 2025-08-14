import { createClient } from "@/common/utils/server";

interface GetAchievementsDataProps {
  category?: string;
  search?: string;
}

// Données de test pour les réalisations
const mockAchievements = [
  {
    id: 1,
    credential_id: "CERT-001",
    name: "Certification Google Cloud - Machine Learning",
    issuing_organization: "Google Cloud",
    issue_date: "2024-12-01",
    expiration_date: null,
    image: "/images/achievements/certificates/google-cloud-ml.png",
    url_credential: "https://example.com/cert1",
    category: "certification",
    is_show: true,
  },
  {
    id: 2,
    credential_id: "CERT-002",
    name: "Certification TensorFlow Developer",
    issuing_organization: "Google",
    issue_date: "2024-11-15",
    expiration_date: null,
    image: "/images/achievements/certificates/tensorflow-cert.png",
    url_credential: "https://example.com/cert2",
    category: "certification",
    is_show: true,
  },
  {
    id: 3,
    credential_id: "CERT-003",
    name: "Certification Python pour la Data Science",
    issuing_organization: "DataCamp",
    issue_date: "2024-10-20",
    expiration_date: null,
    image: "/images/achievements/certificates/python-datascience.png",
    url_credential: "https://example.com/cert3",
    category: "certification",
    is_show: true,
  },
  {
    id: 4,
    credential_id: "BADGE-001",
    name: "Badge d'Excellence en IA",
    issuing_organization: "ENSPY",
    issue_date: "2024-09-10",
    expiration_date: null,
    image: "/images/achievements/badges/ai-excellence.png",
    url_credential: "https://example.com/badge1",
    category: "badge",
    is_show: true,
  },
  {
    id: 5,
    credential_id: "PROJ-001",
    name: "Projet Innovant - Pancreas IA",
    issuing_organization: "ENSPY",
    issue_date: "2024-08-15",
    expiration_date: null,
    image: "/images/achievements/projects/pancreas-ia.png",
    url_credential: "https://example.com/proj1",
    category: "project",
    is_show: true,
  },
  {
    id: 6,
    credential_id: "PROJ-002",
    name: "Projet Innovant - Service IA Agricole",
    issuing_organization: "ENSPY",
    issue_date: "2024-07-20",
    expiration_date: null,
    image: "/images/achievements/projects/ia-agricole.png",
    url_credential: "https://example.com/proj2",
    category: "project",
    is_show: true,
  },
];

export const getAchievementsData = async ({
  category,
  search,
}: GetAchievementsDataProps) => {
  // Code Supabase commenté pour l'instant
  // const supabase = createClient();
  // let query = supabase.from("achievements").select();
  // if (category) {
  //   query = query.eq("category", category);
  // }
  // if (search) {
  //   query = query.ilike("name", `%${search}%`);
  // }
  // const { data, error } = await query;
  // if (error) {
  //   throw new Error(error.message);
  // }
  // return data;

  // Pour l'instant, retournons les données de test
  // TODO: Décommenter le code Supabase plus tard quand la base de données sera configurée
  
  let filteredData = mockAchievements;

  if (category) {
    filteredData = filteredData.filter(item => item.category === category);
  }

  if (search) {
    filteredData = filteredData.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.issuing_organization.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filteredData;
};
