import { useState } from "react";

const PaginateTimeSlots = ({ timeSlots, setFormData, formData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(timeSlots.length / itemsPerPage);

    // Get current page items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = timeSlots.slice(startIndex, startIndex + itemsPerPage);

    // Handlers
    const handleNext = (e) => {
        e.preventDefault(); // Prevent form submission
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = (e) => {
        e.preventDefault(); // Prevent form submission
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            <h2>Time Slots</h2>
            <ul className="flex flex-col items-center p-0" style={{ listStyleType: "none", }}>
                {currentItems.map((slot, i) => (
                    <li
                        key={i}
                        onClick={() =>
                            setFormData({ ...formData, timeSlot: slot.slot, timeSlotCenterId: slot.center_id })
                        }
                    >
                        <button
                            key={i}
                            type="button"
                            onClick={() =>
                                setFormData({ ...formData, timeSlot: slot, timeSlotCenterId: slot.center_id })
                            }
                            className={`p-2 rounded-md text-center mb-2 ${formData.timeSlot === slot.slot
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                                } hover:bg-blue-100 hover:shadow-md transition`}
                        >
                            {slot.slot}
                        </button>
                    </li>
                ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    style={{ padding: "10px", cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
                >
                    Previous
                </button>
                <span>
                    {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    style={{ padding: "10px", cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginateTimeSlots;
