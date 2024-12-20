export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <img 
        src="/images/logo.png"
        alt="Harmonic Fusion Logo"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-white font-bold text-xl">Harmonic Fusion</span>
    </div>
  );
}