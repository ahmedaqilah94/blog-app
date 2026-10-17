// import BlogCard from "../components/BlogCard";

import { useParams } from "react-router-dom";
import { cardsData } from "../data/cardsData.js";
function BlogDetails() {
  const { id } = useParams();
  const card = cardsData.find((card) => card.id == id);

  return (
    <div className="w-full flex justify-center">
      <div className="w-200 mt-16 font-wark ">
        <span className="text-sm bg-[#4B6BFB] text-[#FFFFFF] p-2.5 rounded-md">
          {card.category}
        </span>
        <h1
          to={`/details/${card.id}`}
          className=" font-bold text-4xl mt-4 block"
        >
          {card.title}
        </h1>
        <div className="flex items-center gap-3 text-[#97989F] mt-5 mb-8">
          <img src={card.writerPhoto} alt="writer-photo" /> <p>{card.writer}</p>
          <p> {card.date}</p>
        </div>
        <img className="w-200 rounded-xl" src={`${card.image}`} alt="" />
        <p className="text-[#3B3C4A] text-[20px] font-source">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
          <br />
          <br /> One of the most rewarding aspects of traveling is immersing
          yourself in the local culture and customs. This includes trying local
          cuisine, attending cultural events and festivals, and interacting with
          locals. Learning a few phrases in the local language can also go a
          long way in making connections and showing respect.
        </p>
        <h2 className="font-extrabold text-[#181A2A] text-2xl mt-8 mb-4">
          Research Your Destination
        </h2>
        <p className="text-[#3B3C4A] text-[20px] font-source">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
          <br />
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <h2 className="font-extrabold text-[#181A2A] text-2xl mt-8 mb-4">
          Plan Your Itinerary
        </h2>
        <p className="text-[#3B3C4A] text-[20px] font-source">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.
          <br />
          <br />
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
        <p className="italic text-2xl text-[#181A2A] font-source bg-[#F6F6F7] rounded-xl p-8 mt-8 mb-8 ">
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </p>
        <img src={`${import.meta.env.BASE_URL}travel.svg`} alt="travel-img" />

        <div className="flex flex-col items-center justify-center bg-[#E8E8EA] h-25 text-[#696A75] rounded-xl mt-8">
          <p className="text-[14px]">Advertisement</p>
          <h2 className="text-2xl font-semibold">You can place ads</h2>
          <h2 className="text-[18px]">750x100</h2>
        </div>
        <h2 className="font-extrabold text-[#181A2A] text-2xl mt-8 mb-4">
          Pack Lightly and Smartly
        </h2>
        <p className="text-[#3B3C4A] text-[20px] font-source">
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
        <h2 className="font-extrabold text-[#181A2A] text-2xl mt-8 mb-4">
          Stay Safe and Healthy
        </h2>
        <p className="text-[#3B3C4A] text-[20px] font-source">
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </p>
        <h2 className="font-extrabold text-[#181A2A] text-2xl mt-8 mb-4">
          Immerse Yourself in the Local Culture
        </h2>
        <p className="text-[#3B3C4A] text-[20px] font-source">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <h2 className="font-extrabold text-[#181A2A] text-2xl mt-8 mb-4">
          Capture Memories
        </h2>
        <p className="text-[#3B3C4A] text-[20px] font-source">
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
        <h2 className="font-extrabold text-[#181A2A] text-2xl mt-8 mb-4">
          Conclusion:
        </h2>
        <p className="text-[#3B3C4A] text-[20px] font-source mb-54">
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </div>
    </div>
  );
}

export default BlogDetails;
