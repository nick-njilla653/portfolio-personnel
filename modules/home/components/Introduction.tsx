const Introduction = () => {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
        <h1>Bonjour, je suis Nicol Emmanuel NJILLA TCHAGADICK</h1>
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-x-10 gap-y-2 text-neutral-700 dark:text-neutral-400 md:flex-row">
          <li>Basé à Yaoundé, Cameroun 🇨🇲</li>
          <li>Présentiel</li>
        </ul>
        <p className="mt-6 leading-loose text-neutral-600 dark:text-neutral-300">
          Ingénieur en Génie Informatique passionné et expérimenté, spécialisé en Intelligence Artificielle et Science des Données. Je travaille avec Python, Java et les technologies web modernes pour construire des solutions intelligentes. Mon expertise inclut le Machine Learning, le Deep Learning et le développement full-stack. Je suis un ingénieur collaboratif et orienté détail, engagé à livrer des applications innovantes alimentées par l'IA dans divers domaines incluant la santé, l'agriculture et la logistique.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
