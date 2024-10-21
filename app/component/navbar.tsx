import Link from 'next/link';
export default function Navbar(){
    return(
        <div className='bg-blue-950  m-3 text-center border-yellow-400 border-4'>
             <h1 className='text-yellow-300 text-5xl p-5 font-extrabold  '><i>Gain Knowlegde!</i></h1>
<div className='bg-blue-900 border-4 border-yellow-400 text-center rounded-lg p-6 m-4'>
        <Link href='/'className='border-2 bg-black border-black m-2 text-lg p-2 text-white rounded-lg font-serif'>Home</Link>
         <Link href='/about'className='border-2 bg-black border-black m-2 text-lg p-2 text-white rounded-lg font-serif'>About</Link>
         <Link href='/info'className='border-2 bg-black border-black m-2 text-lg p-2 text-white rounded-lg font-serif'>Info</Link>
         <Link href='/types/kinds'className='border-2 bg-black border-black m-2 text-lg p-2 text-white rounded-lg font-serif'>Types/Kinds</Link>
         <Link href='/danger'className='border-2 m-2 bg-black border-black p-2 text-lg text-white rounded-lg font-serif'>Danger</Link>
         </div>
         </div>
    );
    }
