import React, { useEffect, useState } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div>
          <h1 className="text-5xl font-bold mt-20 mb-10" data-aos="fade-up">Our Teachers</h1>
          <div className="md:grid grid-cols-4 gap-4 bg-slate-200 p-5 mx-auto">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher._id} teacher={teacher}></TeacherCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;
