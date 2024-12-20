export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img 
        src="/images/hero.jpg"
        alt="Orchestra performing"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
      />
      <div className="z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Harmonic Fusion</h1>
        <p className="text-xl md:text-2xl text-gray-300">Where Instruments Tell Stories</p>
      </div>
    </div>
  );
}