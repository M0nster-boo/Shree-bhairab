import SectionContainer from './sections/SectionContainer';

export default function About() {
  return (
    <SectionContainer 
      id="about" 
      className="bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">Our Story</h2>
        <p className="text-lg text-indigo-900 mb-6">
          Harmonic Fusion emerged from a shared passion for creating powerful instrumental music that transcends genres. Founded in 2020, our ensemble brings together classical training and contemporary innovation.
        </p>
        <p className="text-lg text-indigo-900">
          Each performance is a unique journey through sound, where traditional orchestration meets modern composition techniques. Our music speaks without words, creating emotional landscapes that resonate with audiences worldwide.
        </p>
      </div>
    </SectionContainer>
  );
}