// src/components/CustomCombobox.tsx
import React, { useState, useRef, useEffect } from "react"

interface ComboboxItem {
  label: string
  value: string
}

interface CustomComboboxProps {
  items: ComboboxItem[]
  placeholder?: string
  onValueChange?: (value: string) => void
  className?: string
}

export const CustomCombobox: React.FC<CustomComboboxProps> = ({
  items,
  placeholder = "Select...",
  onValueChange,
  className = "",
}) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [highlightedIdx, setHighlightedIdx] = useState(0)
  const [selected, setSelected] = useState<ComboboxItem | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Filter items based on input
  const filtered = items.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const selectItem = (item: ComboboxItem) => {
    setSelected(item)
    onValueChange?.(item.value)
    setOpen(false)
    setQuery("")
  }

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="pointer-events-auto w-56 px-4 py-2 bg-white border border-gray-300 rounded shadow-sm hover:ring-1 hover:ring-blue-500 flex justify-between items-center"
      >
        <span>{selected?.label || placeholder}</span>
        <svg
          className="w-4 h-4 ml-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="pointer-events-auto absolute mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg z-[999]">
          <input
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value)
              setHighlightedIdx(0)
            }}
            autoFocus
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none"
            placeholder="Type to filter..."
          />
          <ul className="max-h-48 overflow-auto">
            {filtered.length === 0 && (
              <li className="px-4 py-2 text-gray-500">No results</li>
            )}
            {filtered.map((item, idx) => (
              <li
                key={item.value}
                onMouseEnter={() => setHighlightedIdx(idx)}
                onClick={() => selectItem(item)}
                className={`px-4 py-2 cursor-pointer ${
                  idx === highlightedIdx ? "bg-blue-100" : "hover:bg-gray-100"
                } ${selected?.value === item.value ? "font-semibold" : ""} `}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}