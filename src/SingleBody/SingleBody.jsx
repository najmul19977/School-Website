import React from "react";

const SingleBody = ({ item }) => {
  //console.log(item);
  const { images, name } = item;
  return (
    <div className=" ">
      <div className="card w-72 h-80 bg-base-100 ">
        <figure>
          <img className="image-zoom"
            src={images}
            alt="Shoes"
          />
        </figure>
        <p className="text-xl font-bold">{name}</p>
        
      </div>
    </div>
  );
};

export default SingleBody;
