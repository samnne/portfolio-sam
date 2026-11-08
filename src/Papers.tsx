import React from 'react'
import Footer from '../sections-v2/Footer.tsx'

type PaperType = 'paper' | 'assignment'

type PaperItem = {
    title: string
    type: PaperType
    course?: string
    description: string
    href: string 
}

const papers: PaperItem[] = [
    {
        title: 'Chaining Or Linear Probing Conjecture',
        type: 'assignment',
        course: 'csc 226',
        description: 'investigating the conjecture on hash table collision schemes to determine what is effective in production.',
        href: '/papers/Chaining_Or_Linear_Probing_in_Practice_Paper.pdf',
    },
    {
        title: 'VST Fingers Paper',
        type: 'assignment',
        course: "mus 207",
        description: 'The paper detailing how VST Fingers works and the pros and cons of our approach.',
        href: '/papers/VST FINGERS PAPER.pdf',
    },
]

const Divider = () => <div className="h-px w-full self-center bg-white/20 my-6"></div>

const Papers = () => {
    return (
        <main className="screen">
            <section className='py-5 text-start'>
                <h1 className='text-4xl mb-8 flex justify-between font-bold'>
                    papers & assignments
                    <a href="/" className='justify-center items-center font-light text-base link'>home</a>
                </h1>
                <Divider />

                {papers.map((paper, index) => (
                    <React.Fragment key={paper.href}>
                        <article className="lowercase flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold">{paper.title}</h2>
                                <span className="text-sm">
                                    <span className="text-accent font-black">[</span> {paper.course ? `${paper.type} / ${paper.course}` : paper.type} <span className="text-accent font-black">]</span>
                                </span>
                            </div>
                            <p className="text-sm text-white/50">{paper.description}</p>
                            <a
                                href={paper.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link text-sm justify-start"
                            >
                                view pdf
                            </a>
                        </article>
                        {index < papers.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </section>
            <Footer />
        </main>
    )
}

export default Papers