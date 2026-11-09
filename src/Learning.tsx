
import PencilDraw from '../components/PencilDraw.tsx'
import Footer from '../sections-v2/Footer.tsx'

const Divider = () => <div className="h-px w-full self-center bg-white/20 my-6"></div>

const Learning = () => {
    return (
        <>
        <main className="screen">
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
                    <p className="text-sm text-background/50">
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
                    <p className="text-sm text-background/50">
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
                    <p className="text-sm text-background/50">
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
                    <p className="text-sm text-background/50">
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
                    <a href='https://www.amazon.ca/sunrise-reaping/s?k=sunrise+on+the+reaping' target='_blank' className="italic  hover:text-accent transition-all hover:underline cursor-pointer border-l pl-4 text-background/50">
                        sunrise on the reaping
                    </a>
                    <p className="text-sm text-background/50">by suzanne collins</p>
                    <a href='https://www.amazon.ca/Sacred-Balance-25th-Anniversary-Edition/dp/1771649860/ref=asc_df_1771649860?mcid=e8051477ed0c37a5a2f811ba14a9fa92&tag=googleshopc0c-20&linkCode=df0&hvadid=706745562901&hvpos=&hvnetw=g&hvrand=10557732829345566283&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001596&hvtargid=pla-1672640200010&psc=1&hvocijid=10557732829345566283-1771649860-&hvexpln=0&gad_source=1' target='_blank' className="italic  hover:text-accent transition-all hover:underline cursor-pointer border-l pl-4 text-background/50">
                        the sacred balance
                    </a>
                    <p className="text-sm text-background/50">by david suzuki</p>
                </article>
            </section>
            <Footer />
        </main>
           <PencilDraw />
        </>
    )
}

export default Learning