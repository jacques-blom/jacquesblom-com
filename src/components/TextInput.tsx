import React, { InputHTMLAttributes } from "react"
import classNames from "classnames"

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>

type TextInputProps = HTMLInputProps & {
    error: string | undefined | false
}

export const TextInput = ({ error, ...inputProps }: TextInputProps) => {
    return (
        <div className="flex-1">
            <input
                className="h-14 px-5 font-normal text-base w-full placeholder-white placeholder-opacity-80 bg-transparent outline-none border-2 focus:border-purple-500 rounded-md border-gray-400 transition-colors"
                {...inputProps}
            />
            {error && (
                <div className="text-sm text-red-500 mt-1" role="alert">
                    {error}
                </div>
            )}
        </div>
    )
}
