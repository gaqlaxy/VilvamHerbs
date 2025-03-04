import React, {useState} from 'react'
import LatestProds from '../data/latestprods.json'
console.log(LatestProds);

export default function LatestProducts() {
    

  return (
    <>
    <div>
        <div className='flex justify-between items-center mx-12 my-5'>
            <h1 className='text-4xl text-black font-bold'>Our Best Products</h1>
            <p className='text-sm'>We have solutions to help you achieve smoother, <br />cleaner and more youthful looking skin.</p>
        </div>
        


    </div>
    {/* <div className='mx-12 my-5 flex items-center justify-around relative'>
        <div>
            <h1 className='text-4xl text-black font-bold'>Our Best <br /> <span className='text-[#0e402d]'>Products</span></h1>
            <button>Left</button>
            <button>Right</button>
        </div>
        <div className='grid grid-cols-4 gap-4 relative'>
            <div className=' relative'>
                <img src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=1482&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""className='w-[200px] h-[270px] rounded-2xl'  />
                <h2 className='absolute bottom-[20px] text-2xl font-bold tracking-wide ml-3'>Olive Soap</h2>
                <p className='absolute bottom-[5px] text-sm ml-3'>Premium Olives</p>
            </div>
            <div className=' rounded-lg relative'>
                <img src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""className='w-[200px] h-[270px] rounded-2xl'  />
                <h2 className='absolute bottom-[20px] text-2xl font-bold tracking-wide ml-3'>Olive Soap</h2>
                <p className='absolute bottom-[5px] text-sm ml-3'>Premium Olives</p>

            </div>
            <div className=' rounded-lg relative'>
                <img src="https://images.unsplash.com/photo-1612800083273-24ea5c80313d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""className='w-[200px] h-[270px] rounded-2xl' />
                <h2 className='absolute bottom-[20px] text-2xl font-bold tracking-wide ml-3'>Olive Soap</h2>
                <p className='absolute bottom-[5px] text-sm ml-3'>Premium Olives</p>

            </div>
            <div className='rounded-lg relative'>
                <img src="https://plus.unsplash.com/premium_photo-1684471006752-51c016b7b51c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""className='w-[200px] h-[270px] rounded-2xl' />
                <h2 className='absolute bottom-[20px] text-2xl font-bold tracking-wide ml-3'>Olive Soap</h2>
                <p className='absolute bottom-[5px] text-sm ml-3'>Premium Olives</p>

            </div>
        </div>
    </div> */}
    </>
  )
}

{/* <div className='grid grid-cols-3 gap-4'>
    {LatestProds.latprod.map((prod) => {
        return (
            <div>
                <img src={prod.image} alt={prod.name} />
                <h2>{prod.name}</h2>
                <p>{prod.description}</p>
                <button>View Product</button>
            </div>
        )
    })}
</div> */}