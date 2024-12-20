import SectionContainer from './sections/SectionContainer';
import GalleryGrid from './gallery/GalleryGrid';

export default function Gallery() {
  return (
    <SectionContainer 
      id="gallery" 
      className="bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50"
    >
      <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Our Moments</h2>
      <GalleryGrid />
    </SectionContainer>
  );
}