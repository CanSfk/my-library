// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

// Components
import {
  ChevronLeft,
  ChevronRight,
  Theme,
  Ticket,
} from "../../components/icons";

// Temp Data
import { bookList } from "../../data";

export const Hero = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3 text-text-primary">
        Populer Kitaplar
      </h1>

      <div className="flex flex-col gap-4 h-[400px]">
        <div className="flex-1 bg-bg-surface rounded-xl p-8">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            loop
            navigation={{
              prevEl: "#prev-btn",
              nextEl: "#next-btn",
            }}
            pagination={{
              el: "#custom-pagination",
              clickable: true,
            }}
            autoplay={{ delay: 4000 }}
            className="h-full"
          >
            {bookList
              .filter((bk) => bk.isFavori)
              .map((sl, i) => {
                return (
                  <SwiperSlide key={i}>
                    <SliderContent
                      imgName={sl.imgName}
                      title={sl.title}
                      desc={sl.desc}
                      theme={sl.theme}
                      ticket={sl.ticket}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        <div className="flex justify-between">
          <div id="custom-pagination" className="flex gap-1"></div>

          <div className="flex items-center gap-2">
            <NavigationButton id="prev-btn">
              <ChevronLeft />
            </NavigationButton>

            <NavigationButton id="next-btn">
              <ChevronRight />
            </NavigationButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderContent = ({ imgName, title, desc, theme, ticket }) => {
  return (
    <div className="flex gap-8 h-full">
      <div className="relative min-w-[200px] h-full bg-black rounded-xl overflow-hidden">
        <img
          src={`../../../public/images/${imgName}`}
          alt={title}
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">{title}</h2>

          <p className="text-sm">{desc}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-icon-primary flex gap-2 items-center">
            <Theme />

            <p className="text-text-primary text-xs font-semibold">
              {(theme || []).join(", ")}
            </p>
          </div>

          <div className="text-icon-primary flex gap-2 items-center">
            <Ticket />

            <p className="text-text-primary text-xs font-semibold">
              {(ticket || []).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationButton = ({ children, id }) => {
  return (
    <button
      id={id}
      type="button"
      className="cursor-pointer border border-btn-primary text-btn-primary rounded-full w-8 h-8 grid place-items-center transition duration-300 hover:bg-btn-outline-primary-hover hover:text-white"
    >
      {children}
    </button>
  );
};
