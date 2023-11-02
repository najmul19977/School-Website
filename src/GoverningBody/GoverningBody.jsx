import React, { useEffect, useState } from "react";
import SingleBody from "../SingleBody/SingleBody";

const GoverningBody = () => {
  const [body, setBody] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("governing.json")
      .then((res) => res.json())
      .then((data) => setBody(data));
    setLoading(false);
  }, []);
  return (
    <div data-aos="fade-right">
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div>
          <div className="bg-slate-200" data-aos="fade-up">
            <h2 className="text-5xl font-bold pt-5 pb-5">Governing Body</h2>
          </div>
          <div className="md:grid grid-cols-4 items-center gap-4 mx-auto">
            {body.map((item) => (
              <SingleBody key={item._id} item={item}></SingleBody>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoverningBody;
