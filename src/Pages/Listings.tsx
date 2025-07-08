// src/pages/Listings.tsx
import React from "react"
import Booklistings from "../App/Landing/Booklistings"
import { CustomCombobox } from "../Components/Combobox"
import Spacer from "../Components/Spacer"

const subjectOptions = [
  { label: "None", value: "" },
  { label: "Mathematics", value: "math" },
  { label: "Physics", value: "physics" },
  { label: "Chemistry", value: "chem" },
]

const departmentOptions = [
  { label: "None", value: "" },
  { label: "CSE", value: "cse" },
  { label: "ECE", value: "ece" },
  { label: "Mechanical", value: "mech" },
]

const semesterOptions = [
  { label: "None", value: "" },
  { label: "Semester 1", value: "sem1" },
  { label: "Semester 2", value: "sem2" },
  { label: "Semester 3", value: "sem3" },
]

export default function Listings() {
  const handleFilterChange = (val: string, idx: number) => {
    console.log(`Combobox ${idx} selected:`, val)
    // You can use state to store filters here
  }

  return (
    <div className="relative z-[510] w-full min-h-screen flex flex-col items-center justify-start px-6 py-12">
      <Spacer height={150} />

      {/* Combobox row */}
      <div className="pointer-events-auto flex flex-col sm:flex-row gap-6 mb-8">
        <CustomCombobox
        label="Filter by Subject"
          items={subjectOptions}
          placeholder="Subject"
          onValueChange={val => handleFilterChange(val, 1)}
        />
        <CustomCombobox
          items={departmentOptions}
          label="Filter by Subject"
          placeholder="Department"
          onValueChange={val => handleFilterChange(val, 2)}
        />
        <CustomCombobox
        label="Filter by Subject"
          items={semesterOptions}
          
          placeholder="Semester"
          onValueChange={val => handleFilterChange(val, 3)}
        />
      </div>

      {/* Book listings below */}
      <div className="w-full">
        <Booklistings />
      </div>
    </div>
  )
}
