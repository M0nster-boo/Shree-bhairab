import SectionContainer from '../sections/SectionContainer';
import MemberSlider from './MemberSlider';
import MemberGrid from './MemberGrid';

export default function Members() {
  return (
    <SectionContainer 
      id="members" 
      className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Meet the Band</h2>
      <MemberSlider />
      <MemberGrid />
    </SectionContainer>
  );
}