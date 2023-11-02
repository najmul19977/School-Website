import React from 'react';


const Application = () => {
    return (
        <div className='bg-slate-300 m-5'>
            <h2 className='text-5xl font-bold mt-4'>Our International School </h2>
            <p className='text-3xl font-bold mt-4'>Admission Going On</p>
            <p className='mt-2'>Online Application Form</p>
            <form action="" className='m-5'>
                <input type="text" placeholder="Student's Name First Name" className="input input-bordered w-full max-w-xs m-2" /> <br />
                <input type="text" placeholder="Student's Name Last Name" className="input input-bordered w-full max-w-xs m-2" /> <br />
                <input type="text" placeholder="Guardian's Name" className="input input-bordered w-full max-w-xs m-2" /> <br />
                <input type="tel" placeholder="Guardian's Phone Number" className="input input-bordered w-full max-w-xs m-2" /> <br />

                <input type="tel" placeholder="Student's Phone Number" className="input input-bordered w-full max-w-xs m-2" /> <br />
                <input type="date" placeholder="Student's Date Of Birth" className="input input-bordered w-full max-w-xs m-2" /> <br />

                <input type="email" placeholder="Guardian's E-mail" className="input input-bordered w-full max-w-xs m-2" /> <br />
                Student's Passport Size Photo:
                <label htmlFor=""> <br />

                    <input type="file" className="file-input file-input-bordered w-full max-w-xs m-2" />

                </label> <br />
                <label htmlFor="">
                    Student's Birth Certificate: <br />
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs m-2" />

                </label> <br />
                <button className='btn btn-primary mt-4 mb-4 me-4'>Submit</button>
                <button className='btn btn-secondary mt-4 mb-4'>Reset</button>


            </form>
        </div>
    );
};

export default Application;