import React from 'react'

function AboutComponent() {
  return (
    <section className='container  mx-auto'>
        <div className='flex my-8 flex-col items-center max-w-screen-xl'>
            <h1 className='text-3xl font-bold uppercase'>Who we are</h1>
            <p className='md:w-1/2 md:text-center mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores tempora quidem cupiditate nihil, consequatur laborum ratione deserunt veniam necessitatibus aperiam ipsa, consequuntur cumque dolore error officia impedit unde magni.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-11 mt-8'>
                <div className=''>
                    <img src="https://img.freepik.com/free-photo/medium-shot-doctor-talking-patient_23-2148873041.jpg?size=626&ext=jpg" alt="aboutImage" className='rounded object-fill h-96 w-full' />
                    <h1 className='text-2xl font-bold mt-3'>Lorem, ipsum</h1>
                    <p className='sm:w-2/3 sm:text-left mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem aut excepturi ad alias quod ullam temporibus, dolore quidem sit aliquam praesentium asperiores quos numquam doloremque quae! At, perferendis voluptate.</p>
                </div>
                <div className=''>
                    <img src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329009.jpg?size=626&ext=jpg" alt="aboutImage" className='rounded object-fill h-96 w-full' />
                    <h1 className='text-2xl font-bold mt-3'>Lorem, ipsum</h1>
                    <p className='sm:w-2/3 sm:text-left mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem aut excepturi ad alias quod ullam temporibus, dolore quidem sit aliquam praesentium asperiores quos numquam doloremque quae! At, perferendis voluptate.</p>    
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutComponent