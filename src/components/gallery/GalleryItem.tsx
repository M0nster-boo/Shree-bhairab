interface GalleryItemProps {
  imagePath: string;
  title: string;
  onClick: () => void;
}

export default function GalleryItem({ imagePath, title, onClick }: GalleryItemProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
    >
      <img 
        src={`/images/gallery/${imagePath}`}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-xl font-semibold">{title}</p>
      </div>
    </div>
  );
}