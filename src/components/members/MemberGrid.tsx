import { useState } from 'react';
import Button from '../ui/Button';

export default function MemberGrid() {
  const [showAll, setShowAll] = useState(false);

  const allMembers = [
    {
      name: "David Chen",
      role: "Piano",
      image: "/images/members/member1.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Violin",
      image: "/images/members/member2.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Percussion",
      image: "/images/members/member3.jpg"
    },
    {
      name: "Emily Zhang",
      role: "Cello",
      image: "/images/members/member4.jpg"
    },
    {
      name: "Michael Brown",
      role: "Bass",
      image: "/images/members/member5.jpg"
    },
    {
      name: "Lisa Anderson",
      role: "Flute",
      image: "/images/members/member6.jpg"
    }
  ];

  const displayedMembers = showAll ? allMembers : allMembers.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <img 
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-rose-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button 
          onClick={() => setShowAll(!showAll)}
          variant="secondary"
        >
          {showAll ? 'Show Less' : 'View More Members'}
        </Button>
      </div>
    </div>
  );
}