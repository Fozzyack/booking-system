"use client";

import { SpacesAvailableProps } from "@/lib/types";
import RoomCard from "./RoomCard";

const SpacesAvailable: React.FC<SpacesAvailableProps> = ({
    selectedTags,
    rooms,
    searchTerm,
}) => {
    const filteredRooms = rooms.filter((room) => {
        const hasSelectedTags =
            selectedTags.length === 0 ||
            selectedTags.every((selectedTag) =>
                room.tags.some((tag) => tag.tag === selectedTag),
            );

        const matchesSearch =
            searchTerm === "" ||
            room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            room.description.toLowerCase().includes(searchTerm.toLowerCase());

        return hasSelectedTags && matchesSearch;
    });

    const handleTagClick = (tag: string) => {
        console.log("Tag clicked:", tag);
    };

    return (
        <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">
                Spaces Available:{" "}
                <span className="text-bloom-orbit">{filteredRooms.length}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        room={room}
                        onTagClick={handleTagClick}
                    />
                ))}
                {filteredRooms.length === 0 && (
                    <div className="col-span-full text-center py-8 text-gray-500">
                        No rooms match your criteria
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpacesAvailable;
