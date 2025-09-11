export const KnowledgeCard = ({
  image = "web-knowledge.png",
  title,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque ab nisi magnam iure error in illum consequatur culpa expedita doloremque similique laborum maxime, veritatis fuga explicabo beatae vitae earum!",
}: {
  image?: string;
  title: string;
  description?: string;
}) => {
  return (
    <article className="p-5 gap-3 info-card justify-evenly border-2 border-[rgba(255,255,255,.3)] w-full min-h-[10rem] md:max-h-[30rem]">
      <img className="w-20 h-20" src={`/icons/${image}`} alt="" />
      <h3>{title}</h3>
      <p className="md:text-sm" style={{whiteSpace: "pre-line"}}>{description}</p>
    </article>
  );
};
