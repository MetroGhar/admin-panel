import { useEffect, useRef, useState } from "react";
import "../Style/Style.css";

export function MultiSelect({ multiple, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);  
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const containerRef = useRef()
  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined)
  }

  function selectOption(option) {
   
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value?.filter(o => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option)
    }
  }

  function isOptionSelected(option) {
    return multiple ? value?.includes(option) : option === value
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])


  useEffect(() => {
    const handler = (e) => {
      if (e.target != containerRef.current) return
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen(prev => !prev)
          if (isOpen) selectOption(options[highlightedIndex])
          break
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true)
            break
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case "Escape":
          setIsOpen(false)
          break
      }
    }
    containerRef.current?.addEventListener("keydown", handler)

    return () => {
      containerRef.current?.removeEventListener("keydown", handler)
    }
  }, [isOpen, highlightedIndex, options])

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)}
      tabIndex={0}
      className={`containerSelect w-full`}
    >
      <span className={`value`}>
        {multiple
          ? value?.map((v, index) => (
              <button
                key={index}
                onClick={e => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className={["option-badge"]}
              >
                {v}
                <span className={["remove-btn"]}>&times;</span>
              </button>
            ))
          : ""}
      </span>
      <button
        onClick={e => {
          e.stopPropagation()
          clearOptions()
        }}
        className={["clear-btn"]}
      >
        &times;
      </button>
      <div className={`divider`}></div>
      <div className={`caret`}></div>
      <ul className={`${`options`} ${isOpen ? `show` : ""}`}>
        {options?.map((option, index) => (
          <li
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={index}
            className={`${`option`} ${
              isOptionSelected(option) ? `selected` : ""
            } ${index === highlightedIndex ? "highlighted" : ""}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}