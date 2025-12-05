import { Icon } from "@iconify/react";

const Profilecard = () => {
    return (
        <div className=' w-130 bg-white rounded-3xl p-1  text-[#1c3553]'>
            {/* Pink Container */}
            <div className='bg-pink-200 p-5 rounded-[inherit] '>

                <div className='flex  justify-between '>

                    {/* Left content */}
                    <div className='  flex flex-col gap-4'>
                        <p className=' bg-black/10 rounded-2xl w-min ml-2 p-1 px-3'>Student</p>

                        <h1 className=' text-3xl text-left font-bold items'>UI/UX designer</h1>
                        <p className=' text-left text-gray-500'>Master the principles of user interface and user experience design</p>

                        <p className='flex justify-between items-end'> 
                            <Icon icon="solar:checklist-minimalistic-bold" className=" h-7 w-7 " />
                            350 tasks 
                            <span className="font-bold inline-flex items-center justify-center" >.</span>
                            <Icon icon="uis:bag" className="h-7 w-7" />
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

            <div className='flex justify-between p-4 items-baseline  rounded-[inherit] h-20 w-full'>
                <div className='text-l '> <span className='text-gray-500 '>Modules:</span> 12/16</div>
                <button className='border bg-black rounded-3xl text-l text-white pl-6 pr-6 pt-2 pb-2'>Continue</button>
            </div>

        </div>
    )
}

export default Profilecard





