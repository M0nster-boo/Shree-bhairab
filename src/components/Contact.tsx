import ContactInfo from './contact/ContactInfo';
import Map from './contact/Map';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <Map />
        </div>
      </div>
    </section>
  );
}