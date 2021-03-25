import * as React from "react"

export const HeroWave = (props) => {
    return (
        <svg
            width={1440}
            height={44}
            viewBox="0 0 1440 44"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio
            {...props}
        >
            <g clipPath="url(#prefix__clip0)">
                <path
                    d="M-62 44S217 0 451 0s414 44 543 44 228.5-30 406.5-30S1551 44 1551 44H-62z"
                    fill="inherit"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="inherit" d="M0 0h1440v44H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}
