interface GalleryModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function GalleryModal({ imageUrl, onClose }: GalleryModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <img 
        src={imageUrl} 
        alt="Gallery preview"
        className="max-w-full max-h-[90vh] object-contain"
      />
    </div>
  );
}