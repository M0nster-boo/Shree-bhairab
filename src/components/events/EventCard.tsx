interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function EventCard({ title, date, location, description }: EventCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 duration-300">
      <h3 className="text-2xl font-bold mb-2 text-teal-900">{title}</h3>
      <div className="space-y-3">
        <p className="text-teal-600 font-semibold">{date}</p>
        <p className="text-teal-700">{location}</p>
        <p className="text-teal-800">{description}</p>
      </div>
    </div>
  );
}