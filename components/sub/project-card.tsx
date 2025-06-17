import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  tags?: string[];
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link ?? ''}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain group-hover:brightness-110 transition-all duration-300"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-gray-300 mb-4">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};