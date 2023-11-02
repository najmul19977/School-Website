import React from 'react';
import Header from '../Header/Header';
import SchoolSection from '../SchoolSection/SchoolSection';
import Facilities from '../Facilities/Facilities';
import Branches from '../Branches/Branches';
import Teacher from '../Teacher/Teacher';
import Event from '../Event/Event';
import Parents from '../Parents/Parents';
import Student from '../Student/Student';
import PhotoGallery from '../PhotoGallery/PhotoGallery';



const First = () => {
    return (
        <div>
           <Header></Header>
           <SchoolSection></SchoolSection>
           <Facilities></Facilities>
           <Branches></Branches>
           <Teacher></Teacher>
           <Student></Student>
           <PhotoGallery></PhotoGallery>
           <Event></Event>
           <Parents></Parents>
           
           
        </div>
    );
};

export default First;