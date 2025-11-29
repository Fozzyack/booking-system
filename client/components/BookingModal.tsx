"use client"


const BookingModal = () => {
    return (
        <div className="z-50 fixed top-0 left-0 w-screen h-screen bg-slate-700/30 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 space-y-4 max-w-md w-full mx-4">
                <h5 className="text-lg">
                    Book Your <span className="text-orbit">Room</span>
                </h5>
                <p className="text-sm">Secure your productive session now.</p>
            </div>
        </div>
    );
};

export default BookingModal;
