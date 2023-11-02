import React from 'react';
import img1 from '../assets/Image/library-1.webp'

const Library = () => {
    return (
        <div className='md:grid grid-cols-2 items-center mx-auto mt-20 mb-20 gap-5 '>
            <div data-aos="zoom-in">
                <img className='w-full rounded-2xl ' src={img1} alt="" />
            </div>
            <div className='text-left' data-aos="zoom-in-up">
                <h1 className='text-3xl font-bold text-center mb-4'>Library</h1>
                <p className='text-xl font-semibold'>A library clinches the eternal eagerness of the learners. Daffodil International School-EV has a well decorated voluminous library comprising 10,000 collections of fiction, non-fiction, history, reference books, and newspapers. The collection is multi-cultural and reflects the multi character of our student body and units of inquiry. The discipline of the library is strictly maintained by the librarian. All students visit library as per their classroom visit schedule and also as per their needs. Students have the privilege to borrow books and at the same time the record for the same are maintained by the librarian. Anyone borrowing a book is required to comply with the DIS library policy and guidelines and is responsible for the replacement cost of the lost and damaged library materials.</p>
            </div>
            
        </div>
    );
};

export default Library;