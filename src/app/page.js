import NavBar from '@/components/NavBar'
import Title from '@/components/Title'

export default async function Home() {
  

  return (
    <>
    <NavBar />
     <Title>Pacientes</Title>

      <section className='flex flex-wrap'>
      <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>

        <span className='font-bold text-center line-clamp-1'>
          Lucas Simbelis
        </span>
        <div className='font-bold text-center line-clamp-1'>
          12/05/2020
        </div>
        <div className='font-bold text-center line-clamp-1'>
          Escore: 8
        </div>
      </div>
      </section>
    </>
  )
}
