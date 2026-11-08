
const Footer = () => {
  const tidbits = [
    {
      href: "/",
      name: "home"
    },
    {name: " - "},
    {
      href: "/works",
      name: "works"
    },
    {name: " - "},
    {
      href: "/learning",
      name: "currently learning"
    },
    
    {name: " - "},
    {
      href: "/papers",
      name: "papers & assignments"
    },
    
  ]

  return (
    <div className="border-t   flex justify-between border-accent/20">

      <div className='py-6 max-lg:flex-col flex lg:gap-4'>
        {/* <WebsiteCarbonBadge  url='https://samechefu.com' /> */}
        {tidbits.map((tidbit, index) => {
          return <a key={`${index} 1234`} className='link justify-start ' href={tidbit.href}>{tidbit.name}</a>
        })}
      </div>

     <div className='py-6 flex gap-4 text-sm text-end justify-center items-start'>
         &copy; 2026 Samuel Echefu. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer