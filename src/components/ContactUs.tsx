import { DialogContent, DialogTitle } from "../ui/dialog"


const ContactUs = ({ loader, setLoader }: { loader: boolean, setLoader: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <DialogContent className="sm:max-w-[600px] sm:max-h-[80%] overflow-y-scroll">
            <div className='flex justify-center items-center'>
                <DialogTitle className='text-xl'>Contact Us</DialogTitle>
            </div>
            {loader && <div
                className={`flex items-center justify-center h-full`}>
                <div
                    className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                    role='status'>
                </div>
            </div>}

            <div className='flex justify-center items-center' onLoad={() => setLoader(false)}>
                <iframe title='contact-form' src="https://forms.gle/Y5bTVokUdU9ov5tu9" width="500px" height="800px" />
            </div>
            <div className='here flex gap-4 items-center justify-center bg-[#f6f6f6] text-[#fff] rounded-lg p-4'>
                <div className='rounded-md font-semibold tracking-widest bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 transition duration-200'>
                    Interest Expressed : 108
                </div>
                <div className='rounded-md font-semibold tracking-widest bg-green-500 hover:bg-green-600 text-white py-2 px-4 transition duration-200'>
                    Orders Placed : 64
                </div>
            </div>
        </DialogContent>
    )
}

export default ContactUs