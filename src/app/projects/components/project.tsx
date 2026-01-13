import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  name: string;
  link: string;
  icons?: string[];
  description: string;
};

export function Project({ name, link, icons, description }: Props) {
  return (
    <div
      className="
      text-justify
      mb-4 md:mb-6 2xl:mb-8
      "
    >
      <p
        className="
        flex items-center
        text-sm md:text-base 2xl:text-xl
        "
      >
        <a href={link} className="underline flex items-center">
          {name}
          <FiArrowUpRight />
        </a>
        <p className="ml-2 flex flex-row justify-center items-center gap-1 text-xs 2xl:text-base">
          {icons?.map((item) =>
            item.startsWith("devicon-") ? (
              <i key={item} className={item}></i>
            ) : (
              <span key={item} className="font-mono text-xs">
                {item}
              </span>
            ),
          )}
        </p>
      </p>
      <p
        className="
        text-xs md:text-sm 2xl:text-base
        "
      >
        {description}
      </p>
    </div>
  );
}
