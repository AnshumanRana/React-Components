import { Icon } from "@iconify/react"

const HistogramChart = () => {

    const arr = [50, 20, 70, 80, 25, 60, 50, 20, 70, 80, 20, 40, 50, 29, 40, 25, 10, 50, 20, 70, 80, 25, 60, 50, 20, 70, 80, 20, 40, 50, 29, 40, 25, 10];
    return (
        <div className='w-120 rounded-3xl  bg-white p-6'>
            {/* Top container */}
            <div className='  text-3xl  flex flex-col gap-3 '>
                <div className='flex justify-between'>
                    <h1 className='font-semibold'>Histogram Chart</h1>
                    <h1 className='text-purple-600 '>256</h1>
                </div>

                <div className='text-start text-2xl flex  gap-'>
                    <Icon icon="jam:tools" className='h-8 w-8' />
                    <p className="text-gray-500">Production status</p>
                </div>
            </div>

            {/* Graph section */}
            <div className="flex  justify-between  h-50 gap-0.5">
                {arr.map(
                    (value, index) => (

                        <div className="relative w-8 flex items-end" key={index}>
                            <div style={{ height: `${value}%` }} className="w-full bg-purple-200 flex flex-col pb-2">

                                <div className=" bg-purple-500 h-1 w-full" ></div>
                                <div className=" bg-white h-1 w-full " ></div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default HistogramChart
