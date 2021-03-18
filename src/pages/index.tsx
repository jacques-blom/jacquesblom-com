import * as React from "react"
import { NewsletterForm } from "../components/NewsletterForm"
// @ts-ignore
import Jacques from "../images/jacques.png"
// @ts-ignore
import Wave from "../images/wave.svg"

const IndexPage = () => {
    return (
        <div className="pb-28">
            <div className="gradient-purple">
                <div
                    className="max-w-4xl mx-auto flex justify-between items-center"
                    style={{ textShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="pb-7">
                        <h1 className="my-0 pb-4">Hey! I'm Jacques. 👋</h1>
                        <h2 className="text-white my-0">
                            A developer, learning in public.
                        </h2>
                    </div>
                    <img src={Jacques} className="block h-80 self-end pt-5" />
                </div>
            </div>
            <div
                className="w-full relative"
                style={{ height: 44, marginTop: -44 }}
            >
                <img
                    src={Wave}
                    className="absolute top-0 left-0 right-0 bottom-0 h-full"
                    style={{ minWidth: 800 }}
                />
            </div>
            <div className="max-w-4xl mx-auto py-12 px-8">
                <div className="prose-lg max-w-prose">
                    <p>
                        I'm a 22 year old senior software engineer from Cape
                        Town. My two greatest passions in life are programming
                        and teaching others.
                    </p>
                    <p>
                        In March 2021 I left my full-time job to focus on making
                        content.
                    </p>
                    <h2>I'm on a mission...</h2>
                    <p>
                        I'm on a mission to{" "}
                        <strong>build the life I want</strong> while helping and{" "}
                        <strong>empowering other developers</strong> at the same
                        time.
                    </p>
                    <p>
                        Through my content I hope to{" "}
                        <strong>
                            help you develop your skills as an engineer
                        </strong>
                        , and to show you how to take full advantage of them to
                        build the career and life you want.
                    </p>
                    <h2>What I'm up to...</h2>
                    <p>
                        Right now you can{" "}
                        <a
                            href="https://twitter.com/jacques_codes"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            give me a follow on Twitter
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.youtube.com/c/JacquesBlom"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            check out my YouTube channel
                        </a>
                        .
                    </p>
                    <p>
                        And starting soon, I'll be posting 1 video and 1 blog
                        post per week.
                        <br />
                        <strong>
                            So sign up for my newsletter below to be the first
                            to know what I'm up to.
                        </strong>
                    </p>
                    <div className="max-w-xl">
                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage
