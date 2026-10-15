import { Link } from "react-router-dom";

function BlogCard({ visibleCount, filteredCards }) {
  return (
    <>
      {filteredCards.slice(0, visibleCount).map((card) => (
        <article
          key={card.id}
          className="rounded-xl border border-[#E8E8EA] p-4"
        >
          <img
            className="h-60 w-90 rounded-xl mb-6"
            src={card.image}
            alt="card-image"
          />
          <div className="p-2 max-w-90 ">
            <span className="text-sm bg-[#4B6BFB0D] text-blue-600 p-2.5 rounded-md">
              {card.category}
            </span>

            <Link
              to={`/details/${card.id}`}
              className="mt-2 font-bold text-2xl block"
            >
              {card.title}
            </Link>
            <div className="flex items-center gap-3 text-[#97989F] ">
              <img src={card.writerPhoto} alt="writer-photo" />{" "}
              <p>{card.writer}</p>
              <p> {card.date}</p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
export default BlogCard;
