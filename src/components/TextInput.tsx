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
                    "border border-transparent rounded-md h-12 px-4 font-normal text-base w-full text-black",
                    { "border border-red-400": !!error }
                )}
                {...inputProps}
            />
            {error && (
                <div
                    className="sm:h-0 text-sm text-red-500 relative top-1"
                    role="alert"
                >
                    {error}
                </div>
            )}
        </div>
    )
}
