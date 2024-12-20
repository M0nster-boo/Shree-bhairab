import { Youtube } from 'lucide-react';

export default function SubscribeButton() {
  return (
    <a
      href="https://www.youtube.com/@YourChannel"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg"
    >
      <Youtube size={24} />
      <span className="font-semibold">Subscribe to Our Channel</span>
    </a>
  );
}