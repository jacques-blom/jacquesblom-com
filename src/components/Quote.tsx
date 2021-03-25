import React from "react"

export const Quote: React.FC<{ name: string }> = ({ name, children }) => {
    return (
        <div className="border border-gray-800 px-3.5 py-2 rounded-lg text-base">
            &ldquo;{children}&rdquo;
            <div className="italic text-sm mt-1">&mdash; {name}</div>
        </div>
    )
}
