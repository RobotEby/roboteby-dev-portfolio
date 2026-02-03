import { Link } from 'react-router-dom';

interface Tag {
  name: string;
}

interface ContentCardProps {
  index: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: Tag[];
  upvotes: number;
  downvotes: number;
  canVote: boolean;
  basePath: string;
  onVote: (slug: string, value: 1 | -1) => void;
  onTagClick: (tag: string) => void;
}

const ContentCard = ({
  index,
  slug,
  title,
  author,
  date,
  tags,

  basePath,
  onTagClick,
}: ContentCardProps) => {
  const indexHex = '0x' + (index + 1).toString(16).toUpperCase().padStart(2, '0');

  return (
    <li
      className="card-terminal p-4 flex items-start gap-4 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="text-muted-foreground text-xs font-mono shrink-0 pt-1">{indexHex}</span>

      <div className="flex-1 min-w-0">
        <Link
          to={`${basePath}/${slug}`}
          className="text-primary hover:text-accent transition-colors font-medium block truncate"
        >
          {title}
        </Link>

        <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-muted-foreground">
          <span className="text-secondary-foreground">{author}</span>
          <span className="text-border">•</span>
          <span>{date}</span>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <button key={tag.name} onClick={() => onTagClick(tag.name)} className="tag-badge">
                {tag.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default ContentCard;
