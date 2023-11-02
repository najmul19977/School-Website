import React from 'react';
import AllNews from '../AllNews/AllNews';

const NewsDetails = () => {
    const news =[
        {
            "id":"01",
            "title":"Tree Festival 2023",
            "publish":"Sep 02, 2023",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            'image':"https://i.ibb.co/RSjmyYX/event-img1.webp"
        },
        {
            "id":"02",
            "title":"Orientation Day, Session 2023-24, DIS, EM",
            "publish":"Jul 23, 2023",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
            "image":"https://i.ibb.co/bH4VPt8/event-img2.webp"

        },
        {
            "id":"03",
            "title":"We involve our students in different extra curricular activities.",
            "publish":"Feb 06, 2023",
            "description":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
            "image":"https://i.ibb.co/bH4VPt8/event-img2.webp",
        },
        {
            "id":"04",
            "title":"Graduation Ceremony 2023",
            "publish":"Jan 17, 2023",
            "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image":"https://i.ibb.co/m9dtWNg/event-img4.jpg"
        }
    ]
    return (
        <div>
           <div className='md:grid grid-cols-1'>
           {
              news.map(item =><AllNews
              key={item.id}
              item={item}
              ></AllNews>)     
            }
           </div>
            
        </div>
    );
};

export default NewsDetails;