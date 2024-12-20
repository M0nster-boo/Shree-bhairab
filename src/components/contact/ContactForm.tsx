export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}