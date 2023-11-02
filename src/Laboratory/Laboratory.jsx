import React from "react";
import img1 from "../assets/Image/physics_lab.webp";
import img2 from "../assets/Image/chemisty_lab.webp";
import img3 from "../assets/Image/biology_lab.webp";
import img4 from "../assets/Image/computer_lab.webp";

const Laboratory = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 ">
        <div className="text-left" data-aos="fade-down-right">
          <h1 className="text-3xl font-bold text-center mb-4">Physics Lab</h1>
          <p className="text-xl font-semibold">
            A library clinches the eternal eagerness of the learners. Daffodil
            International School-EV has a well decorated voluminous library
            comprising 10,000 collections of fiction, non-fiction, history,
            reference books, and newspapers. The collection is multi-cultural
            and reflects the multi character of our student body and units of
            inquiry. The discipline of the library is strictly maintained by the
            librarian. All students visit library as per their classroom visit
            schedule and also as per their needs. Students have the privilege to
            borrow books and at the same time the record for the same are
            maintained by the librarian. Anyone borrowing a book is required to
            comply with the DIS library policy and guidelines and is responsible
            for the replacement cost of the lost and damaged library materials.
          </p>
        </div>
        <div data-aos="fade-down-left">
          <img className="w-full rounded-2xl " src={img1} alt="" />
        </div>
      </div>
      <div className="md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 ">
        <div  data-aos="fade-down-right">
          <img className="w-full rounded-2xl " src={img2} alt="" />
        </div>

        <div className="text-left" data-aos="fade-down-left">
          <h1 className="text-3xl font-bold text-center mb-4">Chemistry Lab</h1>
          <p className="text-xl font-semibold">
            A library clinches the eternal eagerness of the learners. Daffodil
            International School-EV has a well decorated voluminous library
            comprising 10,000 collections of fiction, non-fiction, history,
            reference books, and newspapers. The collection is multi-cultural
            and reflects the multi character of our student body and units of
            inquiry. The discipline of the library is strictly maintained by the
            librarian. All students visit library as per their classroom visit
            schedule and also as per their needs. Students have the privilege to
            borrow books and at the same time the record for the same are
            maintained by the librarian. Anyone borrowing a book is required to
            comply with the DIS library policy and guidelines and is responsible
            for the replacement cost of the lost and damaged library materials.
          </p>
        </div>
      </div>
      <div className="md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 ">
        <div className="text-left" data-aos="fade-down-right">
          <h1 className="text-3xl font-bold text-center mb-4">Biology Lab</h1>
          <p className="text-xl font-semibold">
            A library clinches the eternal eagerness of the learners. Daffodil
            International School-EV has a well decorated voluminous library
            comprising 10,000 collections of fiction, non-fiction, history,
            reference books, and newspapers. The collection is multi-cultural
            and reflects the multi character of our student body and units of
            inquiry. The discipline of the library is strictly maintained by the
            librarian. All students visit library as per their classroom visit
            schedule and also as per their needs. Students have the privilege to
            borrow books and at the same time the record for the same are
            maintained by the librarian. Anyone borrowing a book is required to
            comply with the DIS library policy and guidelines and is responsible
            for the replacement cost of the lost and damaged library materials.
          </p>
        </div>
        <div data-aos="fade-down-left">
          <img className="w-full rounded-2xl " src={img3} alt="" />
        </div>
      </div>
      <div className="md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 ">
        <div data-aos="fade-down-right">
          <img className="w-full rounded-2xl " src={img4} alt="" />
        </div>

        <div className="text-left" data-aos="fade-down-left">
          <h1 className="text-3xl font-bold text-center mb-4">Computer Lab</h1>
          <p className="text-xl font-semibold">
            A library clinches the eternal eagerness of the learners. Daffodil
            International School-EV has a well decorated voluminous library
            comprising 10,000 collections of fiction, non-fiction, history,
            reference books, and newspapers. The collection is multi-cultural
            and reflects the multi character of our student body and units of
            inquiry. The discipline of the library is strictly maintained by the
            librarian. All students visit library as per their classroom visit
            schedule and also as per their needs. Students have the privilege to
            borrow books and at the same time the record for the same are
            maintained by the librarian. Anyone borrowing a book is required to
            comply with the DIS library policy and guidelines and is responsible
            for the replacement cost of the lost and damaged library materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Laboratory;
