import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { cardsData } from "../data/cardsData";

function Home({ searchTerm = "" }) {
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredCards = cardsData.filter((card) => {
    const search = searchTerm.toLowerCase().trim();

    return (
      card.title.toLowerCase().includes(search) ||
      card.category.toLowerCase().includes(search) ||
      card.writer.toLowerCase().includes(search)
    );
  });

  const loadMoreHandler = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main className="mx-auto p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <BlogCard visibleCount={visibleCount} filteredCards={filteredCards} />
      </div>

      {filteredCards.length > visibleCount && (
        <button
          onClick={loadMoreHandler}
          className="mt-8 flex h-12 w-33 cursor-pointer items-center justify-center justify-self-center rounded-md border border-[#696A75]"
        >
          Load More
        </button>
      )}

      {filteredCards.length === 0 && (
        <p className="mt-8 text-center text-gray-500">No articles found.</p>
      )}
    </main>
  );
}

export default Home;
