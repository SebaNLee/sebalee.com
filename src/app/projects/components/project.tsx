import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  name: string;
  link: string;
  description: string;
};

export function Project({ name, link, description }: Props) {
  return (
    <div
      className="
      text-justify
      mb-4 md:mb-6 2xl:mb-8
      "
    >
      <a
        href={link}
        className="
        underline flex items-center
        text-sm md:text-base 2xl:text-xl
        "
      >
        {name}
        <FiArrowUpRight />
      </a>
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
