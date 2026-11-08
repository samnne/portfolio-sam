
import { poems } from '../constants/poems.ts'
import Footer from '../sections-v2/Footer.tsx'

const Works = () => {
   

    return (
        <main className="screen">
            
            <section className='py-5 text-start'>
                <h1 className='text-4xl mb-8 flex justify-between font-bold'>works written by me <a href="/" className='justify-center items-center font-light link'>home</a></h1>
                <div className="h-px w-full self-center bg-white/20 my-6"></div>
                {poems.map((poem, index) => (
                    <div className='flex flex-col' key={poem.title}>
                        <article className="poem lowercase">
                            <h1 className="mb-4 text-lg font-bold">{poem.title}</h1>
                            <div className="whitespace-pre-line">{poem.body}</div>
                        </article>
                        {index < poems.length - 1 && <div className="h-px w-full self-center bg-white/20 my-6"></div>}
                    </div>
                ))}
            </section>
            <Footer />
        </main>
    )
}

export default Works