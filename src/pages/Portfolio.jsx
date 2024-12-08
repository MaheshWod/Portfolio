import Navbar from '../components/Navbar'
const Portfolio = () => {

  const portfolioData = [
    {
      id: 1,
      image: "./mahesh.jpg",
      title: "E-commerce",
      link: "https://example.com/project-one",
    },
    {
      id: 2,
      image: "./logo512.png",
      title: "Employee",
      link: "https://example.com/project-two",
    },
    {
      id: 3,
      image: "./logo192.png",
      title: "Project Three",
      link: "https://example.com/project-three",
    },
  ];
  return (
    <>
      <Navbar>
        <div className='md:p-10 md:px-32 '>
          <h1 className='px-4'>THis is the Portfolio part of the project where every project list here</h1>

          <div className=' grid md:grid-cols-3 grid-cols-1 mx-auto md:gap-6 gap-2 md:p-4 p-4'>

            {portfolioData.map((item, index) => (
              <div key={index.id} className='shadow-lg rounded-md  md:px-2'>
                <img src={item.image} alt='' className='w-full p-2  object-fill md:h-[400px] h-[300px]' />
                <h1 className='font-semibold my-2 text-center text-black'>{item.title}</h1>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className='my-2  text-center font-semibold bg-slate-400 text-white p-1 md:mx-32 mx-20 rounded hover:bg-green-300 hover:text-black'>View Project</h1>            </a>

              </div>
            ))}
          </div>
        </div>

      </Navbar>
    </>
  )
}

export default Portfolio