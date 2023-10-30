import React, { useContext } from "react";
import serviceImg from "../assets/images/services/6.jpg";
import RouteLocationBanner from "../components/RouteLocationBanner";
import swal from "sweetalert";

const AddServices = () => {
  

  const HandleProduct = (e) => {
    e.preventDefault();


    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const img = form.img.value;
    const facility = [
    {
      name: "Instant Car Services",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "24/7 Quality Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "Easy Customer Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
    {
      name: "Quality Cost Service",
      details:
        "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
    },
  ];

    const newProduct = {
      title: title,
      description: description,
      price: price,
      img: img,
      facility: facility,
    };

    console.log(newProduct);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Good job!", "You order has been placed", "success");
        }
      });
  };
  return (
    <div>
      <RouteLocationBanner
        img={serviceImg}
        title={"Service"}
      ></RouteLocationBanner>
      <div className="container mx-auto my-32">
        <form
          className="card-body bg-gray-100 rounded-md p-20 "
          onSubmit={HandleProduct}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="form-control">
              <input
                type="text"
                name="title"
                placeholder="Service name"
                className="input input-bordered bg-white border-0"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="price"
                name="price"
                placeholder="Service price"
                className="input input-bordered bg-white border-0"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <input
              type="text"
              name="img"
              placeholder="Service photo url"
              className="input input-bordered bg-white border-0"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea textarea-bordered h-56 bg-white border-0"
              placeholder="Service description"
              name="description"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn  border-0   bg-[#FF3811] hover:text-[#FF3811]  text-white  font-medium">
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
