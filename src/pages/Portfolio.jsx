import Navbar from '../components/Navbar'
const Portfolio = () => {

  const portfolioData = [
    {
      id: 1,
      image: "./mahesh.jpg",
      title: "Portfolio",
      link: "https://mw-project.netlify.app",
    },
    {
      id: 2,
      image: "./ecommerce.jpg",
      title: "E-Commerce-Firebase",
      link: "https://mw-ecommerce.netlify.app",
    },
    {
      id: 3,
      image: "./weather.jpg",
      title: "Climate-Weather ",
      link: "https://mw-climate-weatherapp.netlify.app",
    },
    {
      id: 3,
      image: "./redux.jpg",
      title: "Redux-firebase ",
      link: "https://redux-project-firebase.netlify.app",
    },
   
  
    {
      id: 3,
      image: "./movie.jpg",
      title: "MovieApp ",
      link: "https://mw-movieapp.netlify.app",
    },
 
  ];
  return (
    <>
      <Navbar>
        {/* <div className='bg-slate-100'>
          <h1 className='m-8'>THis is the Portfolio part of the project where every project list here</h1>

          <div className=' grid md:grid-cols-3 grid-cols-1  md:gap-6 gap-2  p-4 m-8 rounded-md shadow-2xl'>

            {portfolioData.map((item, index) => (
              <div key={index.id} className='shadow-lg rounded-md '>
                <img src={item.image} alt='' className='md:w-full   object-cover md:h-[400px] h-[300px] ' />
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
        </div> */}
        <div className='md:my-6 my-2 md:mx-12 mx-2'>
        <div className='flex justify-center items-center bg-slate-400 md:mx-8 mx-2 rounded text-white opacity-70'>
        <h1 className='md:mx-6 md:my-2 my-1 mx-2 text-center font-semibold md:p-3 p-1'>This is the Portfolio part of the project where every project list here</h1>
        </div>
          <div className=' grid md:grid-cols-3 grid-cols-1 '>

              {
                portfolioData.map((item,index)=>(
                  <div key={index.id} className='md:m-8 m-3  md:shadow-2xl shadow border rounded-md'>
                  <img src={item.image} alt={item.title} className='md:h-[360px] h-[300px] w-full rounded'/>
                  <h1 className='md:font-semibold my-2 text-center text-black'>{item.title}</h1>
                <a className='capitalize '
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className='my-2  text-center md:font-semibold bg-slate-600 text-white md:p-1 md:mx-32 mx-20 rounded hover:bg-green-300 hover:text-black'>View Project</h1>            </a>
                
                  </div>
                ))
              }
          </div>
        </div>

      </Navbar>
    </>
  )
}

export default Portfolio