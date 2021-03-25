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
                className={classNames(
                    "border-gray-300 rounded-md h-12 px-4 font-normal text-base w-full",
                    { "border-red-300": !!error }
                )}
                {...inputProps}
            />
            {error && (
                <div
                    className="h-0 text-sm text-red-500 relative top-1"
                    role="alert"
                >
                    {error}
                </div>
            )}
        </div>
    )
}
