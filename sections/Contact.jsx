const Contact = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-1  sm:grid-cols-2  justify-center h-screen"
    >
      <header className="min-sm:text-7xl text-5xl flex flex-col items-center  justify-start  leading-20 overflow-x-clip w-full ">
        <h1 className="text-shadow-black text-shadow-lg z-10  font-bold font-inter tracking-widest ">
          Contact
          <br/>
          Me!
        </h1>
  
      </header>

      <article className="flex flex-col px-12 gap-5 justify-center ">
        <p className="text-sm  leading-12  capitalize">
          I currently am open to new opporunites and would love to hear from you
          and discuss how we can work together. Whether you have a question, a
          project idea, or need an extra pair of hands, feel free to react out
          to me via email!
        </p>
        <a href="mailto:samuel.n.echefu@gmail.com" className="flex self-end ">
          <div className="py-2 px-4 text-xl hover:rounded-xl focus:scale-110 hover:scale-110  font-inter bg-accent-dark  font-bold tracking-wider   shadow shadow-black  cursor-pointer transition-all duration-300 ease-in-out ">
            Email Me!
          </div>
        </a>
      </article>
    </section>
  );
};

export default Contact;
