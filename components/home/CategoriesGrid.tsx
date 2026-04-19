import { CategoryCard } from "@/components/shared/CategoryCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Category } from "@/lib/categories";

interface CategoriesGridProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  categories: Category[];
  bgClass?: string;
}

export function CategoriesGrid({
  id,
  eyebrow,
  title,
  description,
  categories,
  bgClass = "bg-muted/30",
}: CategoriesGridProps) {
  return (
    <section id={id} className={`${bgClass} py-20`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} align="center" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={cat.slug} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
