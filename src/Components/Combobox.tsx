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
  label?: string // <-- New label prop
}

export const CustomCombobox: React.FC<CustomComboboxProps> = ({
  items,
  placeholder = "Select...",
  onValueChange,
  className = "",
  label,
}) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [highlightedIdx, setHighlightedIdx] = useState(0)
  const [selected, setSelected] = useState<ComboboxItem>({
    label: "None",
    value: "",
  })

  const containerRef = useRef<HTMLDivElement>(null)

  const filtered = items.filter(
    item =>
      item.value === "" || item.label.toLowerCase().includes(query.toLowerCase())
  )

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
      className={`relative inline-block text-left pointer-events-auto ${className}`}
    >
      {label && (
        <label className="block text-[11px] font-medium text-white/40 mb-1 px-2">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="relative z-10 flex items-center justify-between min-w-[240px] px-[32px] py-[16px] gap-2 
        bg-[rgba(85,123,176,0.10)] backdrop-blur-[12px]
        rounded-[8px] outline outline-[1px] outline-[#ffffff20] text-white
        hover:ring-1 hover:ring-white/30 transition-all text-xs"
      >
        <span className="truncate text-white/90">
          {selected?.label || placeholder}
        </span>
        <svg
          className="w-3.5 h-3.5 text-white/70"
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
        <div
          className="absolute mt-2 w-full z-[999] overflow-hidden 
            bg-[rgba(85,123,176,0.10)] backdrop-blur-[12px]
            outline outline-[1px] outline-[#ffffff20] 
            rounded-[8px] py-1.5"
        >
          <input
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value)
              setHighlightedIdx(0)
            }}
            autoFocus
            placeholder="Type to filter..."
            className="w-full px-4 py-2 text-xs text-white bg-transparent 
              border-b border-white/10 placeholder-white/40 focus:outline-none"
          />
          <ul className="max-h-48 overflow-auto px-2 py-1">
            {filtered.length === 0 && (
              <li className="px-4 py-1.5 text-white/50 text-xs rounded-[215px]">
                No results
              </li>
            )}
            {filtered.map((item, idx) => (
              <li
                key={item.value}
                onMouseEnter={() => setHighlightedIdx(idx)}
                onClick={() => selectItem(item)}
                className={`px-4 py-1.5 cursor-pointer text-xs rounded-[215px] transition-all
                  ${
                    idx === highlightedIdx
                      ? "bg-black/20"
                      : "hover:bg-black/10"
                  }
                  ${
                    selected?.value === item.value
                      ? "font-semibold text-white"
                      : "text-white/80"
                  }`}
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
