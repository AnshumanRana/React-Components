import { Icon } from "@iconify/react";

const Profilecard = () => {
    return (
        <div className=' w-130 bg-white rounded-3xl p-1 '>
            {/* Pink Container */}
            <div className='bg-pink-200 p-5 rounded-[inherit] '>

                <div className='flex  justify-between '>

                    {/* Left content */}
                    <div className='  flex flex-col gap-4'>
                        <p className=' bg-black/10 rounded-2xl w-min ml-2 p-1 '>Student</p>

                        <h1 className=' text-3xl text-left font-bold'>UI/UX designer</h1>
                        <p className=' text-left text-gray-500'>Master the principles of user interface and user experience design</p>

                        <p className='flex justify-between  p-2'>
                            <Icon icon="solar:checklist-minimalistic-bold" className=" h-8 w-8 " />
                            350 tasks
                            <Icon icon="uis:bag" className="h-8 w-8" />
                            3 projects
                        </p>

                    </div>
                    {/* Right Side */}
                    <img src="/gmoji.webp" alt="Profile Image" />
                </div>
                {/* Progress */}
                <div className="flex flex-col gap-5 text-right">
                    Progress 72%
                    <div className="bg-black/20 h-2 w-full rounded-xl">
                        <div className="h-[inherit]  bg-black rounded-[inherit]" style={{width:'72%'}}></div>
                    </div>
                    </div>
            </div>

            <div className='flex justify-between p-4  rounded-[inherit] h-20 w-full'>
                <div className='text-l '> <span className='text-gray-500 '>Modules:</span> 12/16</div>
                <button className='border bg-black rounded-3xl text-l text-white pl-6 pr-6 pt-2 pb-2'>Continue</button>
            </div>

        </div>
    )
}

export default Profilecard





// {/* <div className='h-80  bg-pink-200 rounded-[inherit] pt-5 pl-8 '>
//                 {/* flex-column */}

//                 {/* Top portion */}
//                 <div className=' flex justify-start rounded-2xl w-min  p-1 bg-black/15'> Student</div>
//                 {/* Info Container */}
//                 <div className='flex justify-start border '>
//                     {/* Left Portion */}
//                     <div>
//                         {/* Heading */}
//                         <h1 className='border border-amber-900 text-3xl flex justify-start w-fit'>UI/UX designer</h1>
//                         {/* Description */}
//                         <p className=' border border-red-900'> Master the principles of user interface and user experience design.</p>
//                         {/* Info */}
//                         <div>
//                             <p className='flex justify-between border p-4'>
//                                 <p>350 tasks</p>
//                                 <p>3 Projects</p>
//                             </p>
//                         </div>
//                         {/* Progress Bar */}
//                     </div>
//                     {/* Image */}
//                     <img src="/location.png" alt="" />
//                 </div>
//                 <div className='border'> Progress Bar</div>
//             </div>
//             {/* Bottom Section */}

//             <div className='flex justify-between p-4 border rounded-[inherit]'>
//                 <div className='text-l border'> <span className='text-gray-500 '>Modules:</span> 12/16</div>
//                 <button className='border bg-black rounded-3xl text-l text-white pl-6 pr-6 pt-2 pb-2'>Continue</button>
//             </div>
//  */}
