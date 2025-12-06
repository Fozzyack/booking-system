"use client";

const BookingTimeComponent = () => {
    const timeConstruction = () => {
        // Note: this needs to take in a start_time and end_time (when it is available)
        const times = [];
        for (let i = 0; i < 24; i++) {
            const hour = i.toString();
            const minutes = i % 2 == 0 ? ":00" : ":30";
            const total_time = hour + minutes;

            times.push(<button className="p-2 rounded-xl border border-slate-200 hover:-translate-y-0.5 hover:bg-slate-100 transition-all duration-150 ease-in-out"> {total_time} </button>);
        }
        return times;
    };
    return (
        <div className="w-full bg-white rounded-xl border-slate-200 shadow-xl p-8 space-y-4">
        <h5 className="text-lg font-bold">
            Select a Time
        </h5>
            <div className="grid grid-cols-3 gap-4">
                {timeConstruction()}
            </div>
        </div>
    );
};

export default BookingTimeComponent;
