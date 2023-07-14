import React from 'react';
import Header from "../../components/shared/Header";
import Card from "../../components/Core/Card"
import Footer from "../../components/shared/Footer";
const DashboardComponent = () => {
  return (
    <div>

       <Header/>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Welcome, John Doe!</h2>
          <p className="text-gray-500">Clubs</p>
        </div>
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="/path/to/profile-picture.jpg"
          alt="Profile"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-500 text-white rounded-lg p-4 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <div>
            <h3 className="text-lg font-semibold">Class Schedule</h3>
            <p>View and manage your class schedule</p>
          </div>
        </div>

        <div className="bg-green-500 text-white rounded-lg p-4 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <div>
            <h3 className="text-lg font-semibold">Grades</h3>
            <p>Check your grades and academic performance</p>
          </div>
        </div>
  
  




<Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
   name={"Robotics"}
   
   Cordinator={"xyz"}

     />
    <Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
  name={"Literary Club"}
   
   Cordinator={"xyz"}

     />
   <Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
 name={"Nishad (music)"}
   
   Cordinator={"xyz"}

     />
 <Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
  name={"Dramatics Club"}
   
   Cordinator={"xyz"}

     />
   <Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
 name={"Chess Club"}
   
   Cordinator={"xyz"}

     />

<Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
  name={"Rotaract Club"}
   
   Cordinator={"xyz"}

     />
     <Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
   name={"Enactus"}
   
   Cordinator={"xyz"}

     />
     <Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }

    comitee={"club"}
    name={"Aero Club"}
   
   Cordinator={"xyz"}

     />
 <Card   subsection={
    {
        btnText: "explore",
        linkto: "/upload",
        active: true,
    }
    }
    comitee={"club"}
name={"CC Club"}
   
   Cordinator={"xyz"}

     />

        {/* Add more dashboard cards as needed */}
      </div>
     
    </div>


<Footer/>
    </div>
  );
};

export default DashboardComponent;







