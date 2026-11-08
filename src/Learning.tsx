import React from 'react'
import Footer from '../sections-v2/Footer.tsx'

const Divider = () => <div className="h-px w-full self-center bg-white/20 my-6"></div>

const Learning = () => {
    return (
        <main className="max-w-3xl px-5 mx-auto relative p-4 font-google">
            <section className='py-5 text-start'>
                <h1 className='text-4xl mb-8 flex justify-between font-bold'>
                    what i'm currently learning
                    <a href="/" className='justify-center items-center font-light text-base link'>home</a>
                </h1>
                <Divider />

                {/* Golang */}
                <article className="lowercase flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <a href='https://github.com/samnne/go_playground' target='_blank' rel="noopener noreferrer" className=" link text-lg font-bold">golang</a>
                        <span className="text-sm">
                            <span className="text-accent font-black">[</span> language <span className="text-accent font-black">]</span>
                        </span>
                    </div>
                    <p className="text-sm text-white/50">
                        picking up go for backend work. concurrency, goroutines, and building small services.
                    </p>
                </article>
                <article className="lowercase flex flex-col gap-2 pt-4">
                    <div className="flex justify-between items-center">
                        <a href='https://github.com/samnne/nature_of_code_neaural_network' target='_blank' rel="noopener noreferrer" className=" link text-lg font-bold">nature of code (neural networks)</a>
                        <span className="text-sm">
                            <span className="text-accent font-black">[</span> theory <span className="text-accent font-black">]</span>
                        </span>
                    </div>
                    <p className="text-sm text-white/50">
                       learning about neural networks, generation algorithms, and machine learning in general. 
                    </p>
                </article>
                <Divider />

                {/* Home Server */}
                <article className="lowercase flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">home server</h2>
                        <span className="text-sm">
                            <span className="text-accent font-black">[</span> infrastructure <span className="text-accent font-black">]</span>
                        </span>
                    </div>
                    <p className="text-sm text-white/50">
                        setting up and self-hosting my own services at home.
                    </p>
                </article>
                <Divider />

                {/* Producing Music */}
                <article className="lowercase flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">producing music</h2>
                        <span className="text-sm">
                            <span className="text-accent font-black">[</span> creative <span className="text-accent font-black">]</span>
                        </span>
                    </div>
                    <p className="text-sm text-white/50">
                        learning to make my own tracks, from sound design to arrangement and mixing.
                    </p>
                </article>
                <Divider />

                {/* Reading */}
                <article className="lowercase flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">reading</h2>
                        <span className="text-sm">
                            <span className="text-accent font-black">[</span> currently <span className="text-accent font-black">]</span>
                        </span>
                    </div>
                    <p className="italic border-l pl-4 text-white/50">
                        sunrise on the reaping
                    </p>
                    <p className="text-sm text-white/50">by suzanne collins</p>
                </article>
            </section>
            <Footer />
        </main>
    )
}

export default Learning