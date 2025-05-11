const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center h-screen items-center"
    >
      <header className="min-sm:text-7xl text-5xl leading-20 overflow-x-clip w-full text-center">
        <h1 className="text-shadow-black text-shadow-lg z-10 relative font-bold font-inter tracking-widest ">
          <span className="absolute left-20 z-10 opacity-15">Contact</span>
          Contact
          <span className="absolute right-20 -z-1 opacity-15">Contact</span>
        </h1>
      </header>

      <article className="min-lg:max-w-lg max-w-md mt-12">
        <p className="text-xl leading-12 text-center capitalize">
          At this point I look forward to <br />
          learning from senior developers to further learn more about the
          industry and possibly be mentored. <br /> My inbox is always open,
          <br /> so drop by and say hi!
        </p>
      </article>
      <a href="mailto:samuel.n.echefu@gmail.com" className="flex ">
        <div className="py-4 px-8 text-xl  font-inter hover:bg-accent-dark border border-accent font-bold tracking-wider   shadow shadow-black rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:text-primary">
          My Email
        </div>
      </a>
    </section>
  );
};

export default Contact;
