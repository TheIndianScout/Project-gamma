import React from 'react'

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="flex space-x-2">
                <div className="h-4 w-4 bg-black rounded-full animate-custom-bounce1"></div>
                <div className="h-4 w-4 bg-black rounded-full animate-custom-bounce2"></div>
                <div className="h-4 w-4 bg-black rounded-full animate-custom-bounce3"></div>
            </div>
        </div>

        // <div className="fixed inset-0 bg-white flex items-center justify-center w-full">
        //     <div className="h-[2px] w-full rounded-full overflow-hidden">
        //         <div className="h-full w-3/4 bg-black animate-progress"></div>
        //     </div>
        // </div>

    )
}
