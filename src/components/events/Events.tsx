import { events } from '../../data/events';
import EventCard from './EventCard';

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-teal-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-900">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}