import { Icon } from "@iconify/react";

const SmallOptionCard = () => {
    return (
        <div className="bg-white  h-58 w-90 rounded-3xl p-2 pl-4 pr-4 ">
            <div className=''>
                {/* Top Portion (Id and status) */}

                <div className="flex justify-between  border-b border-gray-300 pb-1 pt-2">
                    {/* ID */}
                    <p className=" ">ID:1234567890</p>
                    {/* Status */}
                    <div className=" border border-red-600 rounded-3xl  text-red-600 h-7 w-20 bg-red-50">
                        <p> canceled</p>
                    </div>

                </div>

                {/* Image  and Info*/}
                <div className="flex  border-b border-gray-300 ">
                    {/* Image */}
                    <div>
                        <img src="/resort.jpg"
                            alt="resort Image"
                            className="h-30 w-50 p-2 rounded-3xl" />
                    </div>
                    {/* Info */}
                    <div className=" w-full  h-full pt-2">
                        <h1 className="text-xl  font-bold justify-around text-left">Cliffside Escape</h1>
                        <div className="flex ">
                            {/* <svg className="h-6 w-6 " viewBox="0 0 200 200">
                               <path fill="#282828" d="M100.232 149.198c-2.8 0-5.4-1.8-7.2-5.2-22.2-41-22.4-41.4-22.4-41.6-3.2-5.1-4.9-11.3-4.9-17.6 0-19.1 15.5-34.6 34.6-34.6s34.6 15.5 34.6 34.6c0 6.5-1.8 12.8-5.2 18.2 0 0-1.2 2.4-22.2 41-1.9 3.4-4.4 5.2-7.3 5.2zm.1-95c-16.9 0-30.6 13.7-30.6 30.6 0 5.6 1.5 11.1 4.5 15.9.6 1.3 16.4 30.4 22.4 41.5 2.1 3.9 5.2 3.9 7.4 0 7.5-13.8 21.7-40.1 22.2-41 3.1-5 4.7-10.6 4.7-16.3-.1-17-13.8-30.7-30.6-30.7z"/><path fill="#282828" d="M100.332 105.598c-10.6 0-19.1-8.6-19.1-19.1s8.5-19.2 19.1-19.2c10.6 0 19.1 8.6 19.1 19.1s-8.6 19.2-19.1 19.2zm0-34.3c-8.3 0-15.1 6.8-15.1 15.1s6.8 15.1 15.1 15.1 15.1-6.8 15.1-15.1-6.8-15.1-15.1-15.1z"/>
                            </svg> */}

                            <Icon icon="material-symbols:location-on-rounded" width="24" height="24" />
                            <p className="text-sm  text-gray-600">California,USA</p>
                            </div>
                        
                        <div className="flex gap-5">
                            <div>
                                <p className=" text-gray-600  flex justify-start ">Check In</p>
                                <p className="">19 June,2025</p>
                            </div>
                            <div>
                                <p className=" text-gray-600  flex justify-start"> Check Out</p>
                                <p className="">22 June,2025</p>
                            </div>

                        </div>

                    </div>
                </div>


                {/* Button */}

                <div className=" border-gray-300  pt-2 flex justify-end">
                    <button className=" bg-blue-800 text-white rounded-xl  w-40 h-10 text-sm " >Order Again</button>
                </div>

            </div>
        </div>

    )
}

export default SmallOptionCard
