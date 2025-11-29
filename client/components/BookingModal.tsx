"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { BookingModalProps } from "@/lib/types";
import { X } from "lucide-react";

const BookingModal: React.FC<BookingModalProps> = ({
    room,
    handleToggleModal,
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 bg-slate-700/30 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 space-y-4 max-w-md w-full mx-4">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">Book {room.name}</h4>
                    <button
                        className="rounded-md p-1 hover:bg-slate-200 transition-all duration-150 ease-in-out"
                        onClick={handleToggleModal}
                    >
                        <X width={14} height={14} />
                    </button>
                </div>
                <p className="text-sm">Secure your productive session now.</p>
            </div>
        </div>,
        document.body,
    );
};

export default BookingModal;
