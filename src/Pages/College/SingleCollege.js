import React from "react";
import { useParams } from "react-router-dom";
import { useCollegeContext } from "../../context/collegeContext";

export default function SingleCollege() {
  const { collegeName } = useParams();
  const colleges = useCollegeContext();

  // Find the selected college based on the collegeName parameter
  const selectedCollege = colleges.find(
    (college) => college.Name === collegeName
  );

  if (!selectedCollege) {
    // Handle the case where the selected college is not found
    return <div>College not found.</div>;
  }

  return (
    <div>
      <h2>{selectedCollege.Name}</h2>
      {/* Render the details of the selected college */}
      {/* You can access the properties of the selected college, such as selectedCollege.Location, selectedCollege.Rating, etc. */}
    </div>
  );
}
