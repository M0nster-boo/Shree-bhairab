import SectionContainer from './sections/SectionContainer';
import EventsList from './events/EventsList';

export default function Events() {
  return (
    <SectionContainer 
      id="events" 
      className="bg-gradient-to-br from-rose-50 via-red-50 to-orange-50"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-rose-900">Upcoming Events</h2>
      <EventsList />
    </SectionContainer>
  );
}