import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <MapPin className="text-amber-500" size={24} />
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-gray-600">123 Music Avenue, Harmony City</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="text-amber-500" size={24} />
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="text-amber-500" size={24} />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-600">contact@harmonicfusion.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}