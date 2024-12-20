interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionContainer({ id, className = "", children }: SectionContainerProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}