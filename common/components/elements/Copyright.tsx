const Copyright = () => {
  return (
    <div className="font-sora flex flex-wrap items-center justify-center gap-1 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <p>©</p>
      <span>{new Date().getFullYear()}</span>
      <p>Nicol Emmanuel NJILLA TCHAGADICK. Tous droits réservés.</p>
    </div>
  );
};

export default Copyright;
