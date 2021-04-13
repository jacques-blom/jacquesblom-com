import * as React from "react"
import { HeroWave } from "../components/HeroWave"
import { NewsletterForm } from "../components/NewsletterForm"
import { Quote } from "../components/Quote"
// @ts-ignore
import Jacques from "../images/jacques.png"
import { shuffle } from "../utils"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"

const IndexPage = () => {
    return (
        <div className="pb-28">
            <SEO />
            <div className="gradient-purple px-8 pt-8 md:pt-0">
                <div
                    className="max-w-4xl mx-auto flex flex-col justify-between items-center md:flex-row"
                    style={{ textShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)" }}
                >
                    <div className="pb-7">
                        <h1 className="my-0 pb-4">Hey! I'm Jacques. 👋</h1>
                        <h2 className="text-white my-0">
                            A developer, learning in public.
                        </h2>
                    </div>
                    <img
                        src={Jacques}
                        className="block w-full max-w-sm md:self-end pt-5 md:w-auto md:h-72 lg:h-80"
                    />
                </div>
            </div>
            <div
                className="w-full relative"
                style={{ height: 44, marginTop: -44 }}
            >
                <HeroWave
                    className="absolute top-0 right-0 bottom-0 h-full fill-current"
                    style={{ minWidth: 800, color: "var(--jb-body-bg)" }}
                />
            </div>
            <div className="px-8">
                <div className="max-w-4xl mx-auto py-12">
                    <div className="prose-lg max-w-prose">
                        <h2>🦸‍♂️ I'm on a mission...</h2>
                        <p>
                            My two greatest passions in life are programming and
                            teaching others. In March 2021 I even{" "}
                            <strong>
                                left my full-time job to focus on making
                                content.
                            </strong>
                        </p>
                        <p>
                            I'm on a mission to{" "}
                            <strong>build the life I want</strong> while{" "}
                            <strong>
                                helping & empowering other developers
                            </strong>{" "}
                            at the same time.
                        </p>
                        <p>
                            Through my content I hope to help you{" "}
                            <strong>develop your skills</strong> as an engineer,
                            and to show you{" "}
                            <strong>how to take full advantage of them</strong>{" "}
                            to build the career and life you want.
                        </p>
                        <h2 id="follow">👋 Keep in touch!</h2>
                        <p>
                            My goal with my newsletter is to provide helpful
                            content to front-end devs. I also love having
                            conversations with people.
                        </p>
                        <p>
                            No one likes receiving useless email. So I keep my
                            newsletter high signal, low noise. And I only send
                            one email per week every Monday.
                        </p>
                        <p>
                            <strong>Enter your email below</strong> to keep in
                            touch. 👇
                        </p>
                        <div className="max-w-2xl">
                            <NewsletterForm />
                        </div>
                        <p className="text-sm">
                            No spam. Unsubscribe at any time.
                        </p>
                        <p>
                            You can also{" "}
                            <a
                                href="https://twitter.com/jacques_codes"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                follow me on Twitter
                            </a>{" "}
                            for my daily learnings and thoughts, or{" "}
                            <a
                                href="https://www.youtube.com/c/JacquesBlom"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                check out my YouTube channel
                            </a>{" "}
                            for coding tutorials.
                        </p>
                        <p>
                            My current big project is a free{" "}
                            <a
                                href="https://recoiljs.org"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Recoil.js
                            </a>{" "}
                            course, which you can check out at{" "}
                            <a
                                href="https://learnrecoil.com"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                learnrecoil.com
                            </a>
                            .
                        </p>
                        <h2>😍 What people say about my content.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {quotes.map(({ quote, name }) => (
                                <Quote name={name}>{quote}</Quote>
                            ))}
                        </div>
                        <p>
                            So what are you waiting for? 😉
                            <br />
                            <a href="#follow">Sign up to my newsletter</a> and
                            let's keep in touch.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

let quotes: Record<"name" | "quote", string>[] = [
    {
        name: "David",
        quote: `Thank you for your high quality lectures. Looking forward to the upcoming videos.`,
    },
    {
        name: "UI Gems",
        quote: `Subscribed! Good content.`,
    },
    {
        name: "Jebble",
        quote: `Easiest Recoil video I've seen! ... Thanks to your video I suddenly understand half of it already!`,
    },
    {
        name: "Eric",
        quote: `Very impressed with @jacques_codes series on YT.`,
    },
    {
        name: "Marcão",
        quote: `Hi, Jacques, finished watching your videos and I would like to say it's amazing.`,
    },
    {
        name: "Hamid",
        quote: `Just wanted to drop you an email and thank you for sharing your work.`,
    },
    {
        name: "Jihchi",
        quote: `Thanks for such a high quality course! Really enjoy it!`,
    },
    {
        name: "Immortalx",
        quote: `Nice video, it really makes the case for using recoil! Great Job!`,
    },
]

quotes = shuffle(quotes)

export default IndexPage
