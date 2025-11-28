"use client";

import { SpacesAvailableProps } from "@/lib/types";

const SpacesAvailable: React.FC<SpacesAvailableProps> = ({ selectedTags, rooms, searchTerm }) => {
    // Filter rooms based on selected tags and search term
    const filteredRooms = rooms.filter(room => {
        // Check if room has any of the selected tags
        const hasSelectedTags = selectedTags.length === 0 || 
            room.tags.some(tag => selectedTags.includes(tag.tag));
        
        // Check if room matches search term
        const matchesSearch = searchTerm === '' || 
            room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            room.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return hasSelectedTags && matchesSearch;
    });

    return (
        <div className="">
            <h3 className="text-xl font-semibold mb-4">
                Spaces Available: {filteredRooms.length}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRooms.map(room => (
                    <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        {room.image && (
                            <img 
                                src={room.image} 
                                alt={room.name}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h4 className="text-lg font-semibold text-primary">{room.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{room.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {room.tags.slice(0, 3).map(tag => (
                                    <span 
                                        key={tag.id}
                                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                                    >
                                        {tag.tag}
                                    </span>
                                ))}
                                {room.tags.length > 3 && (
                                    <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                                        +{room.tags.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
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
