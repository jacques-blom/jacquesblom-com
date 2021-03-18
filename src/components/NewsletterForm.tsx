import React from "react"
import { FORM_ERROR } from "final-form"
import { Field, Form } from "react-final-form"
import { validate as validateEmail } from "email-validator"
import { TextInput } from "./TextInput"
import classNames from "classnames"
import { useState } from "react"

const subscribe = async ({ name, email }: { name: string; email: string }) => {
    const body = new FormData()
    body.set("fields[first_name]", name)
    body.set("email_address", email)

    const response = await fetch(
        "https://app.convertkit.com/forms/2125295/subscriptions",
        {
            headers: { accept: "application/json" },
            body,
            method: "POST",
            credentials: "omit",
        }
    )

    if (!response.ok) throw new Error(response.statusText)

    const json = await response.json()
    if (json.errors) throw new Error(json.errors.messages[0])
}

const required = (message: string) => (value: any) => {
    return value ? undefined : message
}

export const NewsletterForm = () => {
    const [submitted, setSubmitted] = useState(false)

    if (submitted) {
        return (
            <div
                className="border border-green-400 flex align-center rounded-md text-base font-normal p-4"
                onClick={() => setSubmitted(true)}
            >
                <div className="mr-2 text-xl">🥳</div>
                <div>
                    <strong className="block text-lg">
                        Thanks for subscribing!
                    </strong>
                    Remember to check your inbox for a confirmation email.
                </div>
            </div>
        )
    }

    return (
        <Form
            onSubmit={async (data) => {
                try {
                    await subscribe(data as any)
                    setSubmitted(true)
                } catch (error) {
                    console.log(error)
                    return { [FORM_ERROR]: error.message }
                }
            }}
            validate={(values) => {
                const errors = { email: undefined }

                if (!values.email) {
                    errors.email = "Email is required"
                } else if (!validateEmail(values.email)) {
                    errors.email = "Invalid email"
                }

                return errors
            }}
        >
            {({ handleSubmit, submitError, submitting }) => (
                <div>
                    <form className="flex items-center" onSubmit={handleSubmit}>
                        <Field name="name">
                            {({ input, meta }) => (
                                <TextInput
                                    {...input}
                                    type="text"
                                    placeholder="Your first name"
                                    autoComplete="given-name"
                                    error={meta.touched && meta.error}
                                />
                            )}
                        </Field>
                        <Field
                            name="email"
                            validate={required("Email is required")}
                        >
                            {({ input, meta }) => (
                                <TextInput
                                    {...input}
                                    type="email"
                                    placeholder="Your email address"
                                    autoComplete="email"
                                    error={meta.touched && meta.error}
                                />
                            )}
                        </Field>
                        <button
                            type="submit"
                            className={classNames(
                                "rounded-md text-white h-12 px-4",
                                submitting ? "bg-gray-400" : "bg-blue-600"
                            )}
                            disabled={submitting}
                        >
                            Subscribe
                        </button>
                    </form>
                    {submitError && (
                        <div className="text-sm text-red-500 mt-1" role="alert">
                            {submitError}
                        </div>
                    )}
                </div>
            )}
        </Form>
    )
}
