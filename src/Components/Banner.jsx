import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Juice1 from "../assets/Juice1.jpg";
import Juice2 from "../assets/Juice2.jpg";
import Burger1 from "../assets/Burger1.jpg";
import Burger2 from "../assets/Burger2.jpg";

function Banner() {
  const images = [
    {
      title: "Dragon Fruit",
      image: Juice1,
    },
    {
      title: "Chicken Burger",
      image: Burger1,
    },
    {
      title: "Strawberry",
      image: Juice2,
    },
    {
      title: "French Fries",
      image: Burger2,
    },
  ];

  return (
    <>
      <div className=" text-white ">
        <div className="container mx-auto mt-10 px-4">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
          >
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full  h-96 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-center">
                    {img.title}
                  </h3>
                </div> 
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Banner;
