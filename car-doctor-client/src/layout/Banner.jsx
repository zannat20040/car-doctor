import React from "react";
import "../assets/1.jpg";

const Banner = () => {
  return (
    <div className="mx-auto container">
      <div className="carousel w-full mt-5 rounded-lg ">
      <div
        id="slide1"
        className="carousel-item relative w-full  items-center"
      >
        <img src="https://i.ibb.co/nQsgfGh/1.jpg" alt="" className="w-full" />
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-600">
            ❯
          </a>
        </div>
        <div className="absolute text-white max-w-lg p-10">
          <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
          <p className="py-6">
          There are many variations of passages of  available, but the majority have suffered alteration in some form
          </p>
          <button className="btn  mr-5 oborder-0  bg-orange-600 hover:text-orange-600  text-white  font-medium">Discover More</button>
          <button className="btn border-2 border-white text-white hover:text-orange-600 bg-transparent  font-medium">Latest Project</button>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full  items-center"
      >
        <img src="https://i.ibb.co/hg89t5X/3.jpg" className="w-full" />
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle bg-orange-600">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute text-white max-w-lg p-10">
          <h1 className="text-5xl font-bold">Affordable Price For Car Servicing</h1>
          <p className="py-6">
          There are many variations of passages of  available, but the majority have suffered alteration in some form
          </p>
          <button className="btn  mr-5 oborder-0  bg-orange-600 hover:text-orange-600  text-white  font-medium">Discover More</button>
          <button className="btn border-2 border-white text-white hover:text-orange-600 bg-transparent  font-medium">Latest Project</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
