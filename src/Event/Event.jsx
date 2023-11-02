import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EventCard from "../EventCard/EventCard";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div>
          <div className="mt-20">
            <h1 className="text-5xl font-bold " data-aos="fade-up">News & Events</h1>

            <div className="md:grid grid-cols-4  ">
              {events.map((e) => (
                <EventCard key={e._id} e={e}></EventCard>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
