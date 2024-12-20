import { useState } from 'react';
import Button from '../ui/Button';
import GalleryModal from './GalleryModal';

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    { src: '/images/gallery/1.jpg', title: 'Group Photo' },
    { src: '/images/gallery/2.jpg', title: 'Studio Session' },
    { src: '/images/gallery/3.jpg', title: 'Award' },
    { src: '/images/gallery/4.jpg', title: 'Live Show' },
    { src: '/images/gallery/5.jpg', title: 'Shreejan Maharjan' },
    { src: '/images/gallery/6.jpg', title: 'Saman Maharjan' },
    { src: '/images/gallery/7.jpg', title: 'Pratik Maharjan' },
    { src: '/images/gallery/8.jpg', title: 'Mijal Maharjan' },
    { src: '/images/gallery/9.jpg', title: 'Susma Shrestha' },
  ];

 const displayedImages = showAll ? allImages : allImages.slice(0, 6);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedImages.map((image, index) => (
          <div
            key={image.src} // Use unique `src` as key
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.title || 'Gallery Image'} // Fallback for missing title
              loading="lazy"
              className="w-full h-auto object-cover aspect-w-4 aspect-h-3 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              {image.title ? (
                <p className="text-white text-xl font-semibold">{image.title}</p>
              ) : (
                <p className="text-white text-xl font-semibold">Untitled</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={() => setShowAll(!showAll)}
          variant="secondary"
        >
          {showAll ? 'Show Less' : 'View More Photos'}
        </Button>
      </div>

      {selectedImage && (
        <GalleryModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
