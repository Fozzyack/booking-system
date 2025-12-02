import {
    Wifi,
    Monitor,
    Coffee,
    Printer,
    Video,
    Users,
    Projector,
    Mic,
    Speaker,
    Headphones,
    AirVent,
    Lightbulb,
    DoorOpen,
    WashingMachine,
    Laptop,
    Cable,
    CircleParking,
    Accessibility,
    LucideIcon,
} from "lucide-react";

interface TagsListProps {
    tags?: Array<{ id: number; tag: string; room: number }>;
}

// Map tag names to their corresponding Lucide icons
const tagIconMap: Record<string, LucideIcon> = {
    wifi: Wifi,
    "wi-fi": Wifi,
    internet: Wifi,
    monitor: Monitor,
    screen: Monitor,
    display: Monitor,
    coffee: Coffee,
    beverage: Coffee,
    refreshments: Coffee,
    printer: Printer,
    printing: Printer,
    video: Video,
    camera: Video,
    "video conferencing": Video,
    "video conference": Video,
    whiteboard: Users,
    board: Users,
    projector: Projector,
    presentation: Projector,
    microphone: Mic,
    mic: Mic,
    audio: Mic,
    speaker: Speaker,
    speakers: Speaker,
    sound: Speaker,
    headphones: Headphones,
    "air conditioning": AirVent,
    ac: AirVent,
    "air-conditioning": AirVent,
    hvac: AirVent,
    lighting: Lightbulb,
    lights: Lightbulb,
    "natural light": Lightbulb,
    "private entrance": DoorOpen,
    entrance: DoorOpen,
    "accessible entrance": DoorOpen,
    kitchen: WashingMachine,
    kitchenette: WashingMachine,
    laptop: Laptop,
    computer: Laptop,
    workstation: Laptop,
    cables: Cable,
    "hdmi cables": Cable,
    adapters: Cable,
    parking: CircleParking,
    "parking space": CircleParking,
    "accessible parking": CircleParking,
    accessibility: Accessibility,
    accessible: Accessibility,
    "wheelchair accessible": Accessibility,
};

// Get icon for a tag based on keywords
const getTagIcon = (tag: string): LucideIcon => {
    const normalized = tag.toLowerCase().trim();
    return tagIconMap[normalized] || Lightbulb; // Default to Lightbulb icon
};

const TagsList = ({ tags }: TagsListProps) => {
    const items = tags?.map((tag) => tag.tag) || [];

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-lg">What this Room Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item, index) => {
                    const Icon = getTagIcon(item);
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <Icon className="w-6 h-6 text-bloom-orbit" />
                            <span className="text-slate-700 capitalize">
                                {item}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TagsList;
