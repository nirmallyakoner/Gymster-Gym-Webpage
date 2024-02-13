import React, { useEffect, useState } from "react";
import BookingList from "./BookingList";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const [userId, setUserId] = useState(null); // State variable to store the user id
  const { id } = useParams(); // Getting the id from URL parameters

  useEffect(() => {
    // Set the userId state variable with the id from localStorage
    const storedUserId = localStorage.getItem("_id");
    setUserId(storedUserId);
  }, []);

  return (
    <div>
      {/* Render the BookingList component with the userId */}
      <BookingList userId={userId} />
    </div>
  );
}
