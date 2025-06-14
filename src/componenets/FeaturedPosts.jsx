import { Calendar, ChevronRight, MessageSquare } from "lucide-react";

export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "https://images.placeholders.dev/350x300",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "https://images.placeholders.dev/350x300",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      image: "https://images.placeholders.dev/350x300",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h4 className="text-center text-sm font-semibold text-blue-600">
        Practice Advice
      </h4>
      <h2 className="text-center text-3xl font-bold mt-2">Featured Posts</h2>
      <p className="text-center text-gray-500 mt-2 max-w-2xl mx-auto">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4 space-y-3">
              <div className="text-xs text-gray-500 space-x-2">
                <span className="text-blue-600">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare size={14} />
                  <span>{post.comments} comments</span>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold text-sm mt-1"
              >
                Learn More <ChevronRight size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
