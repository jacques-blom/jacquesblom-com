import { Link } from "gatsby"
import React from "react"
import { CheckCircle } from "react-feather"

const PreferencesConfirmed = () => {
    return (
        <div className="w-screen h-screen bg-wave flex flex-col items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col items-center mb-5">
                <CheckCircle
                    size={40}
                    color="currentColor"
                    className="text-green-400"
                />
                <h1 className="text-4xl mb-3 mt-6">Preferences Updated</h1>
                <p>
                    I've received your preferences and saved them to your
                    profile.
                </p>
            </div>
            <div>
                <Link to="/" className="text-white hover:text-white">
                    Click here
                </Link>{" "}
                to go to my home page.
            </div>
        </div>
    )
}

export default PreferencesConfirmed
