interface MemberCardProps {
  name: string;
  role: string;
  imagePath: string;
  bio: string;
}

export default function MemberCard({ name, role, imagePath, bio }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <img 
        src={`/images/members/${imagePath}`}
        alt={name}
        className="w-full h-80 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-rose-900">{name}</h3>
        <p className="text-rose-600 font-semibold mb-4">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}