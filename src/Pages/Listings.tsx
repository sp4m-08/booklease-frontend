// src/pages/Listings.tsx
import React from "react"
import Booklistings from "../App/Landing/Booklistings"
import { CustomCombobox } from "../Components/Combobox"
import Spacer from "../Components/Spacer"

const frameworks = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
]

export default function Listings() {
  const handleFilterChange = (val: string, idx: number) => {
    console.log(`Combobox ${idx} selected:`, val)
  }

  return (
    <div className="relative z-[510] w-full min-h-screen flex flex-col items-center justify-start px-6 py-12">
      <Spacer height={100} />
      {/* Combobox row */}
      <div className="pointer-events-auto flex flex-col sm:flex-row gap-6 mb-8">
        {[1, 2, 3].map((_, i) => (
          <CustomCombobox
            key={i}
            items={frameworks}
            placeholder={`Filter ${i + 1}`}
            onValueChange={val => handleFilterChange(val, i + 1)}
          />
        ))}
      </div>

      {/* Book listings below */}
      <div className="w-full">
        <Booklistings />
      </div>
    </div>
  )
}
