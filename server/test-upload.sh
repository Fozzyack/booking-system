#!/bin/bash

# Create rooms with images from testimages folder

echo "Authenticating as admin..."
http --session=admin --auth admin:admin GET :8000/rooms/ > /dev/null 2>&1

echo "Creating rooms with test images..."

# Room 1 with cw1.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="IMac Central" \
  excerpt="Command center for your next tech revolution" \
  description="Large conference room featuring state-of-the-art projection technology and comfortable seating arrangements designed for productive meetings and presentations. This room is equipped with advanced AV systems including a ceiling-mounted projector, wireless connectivity, and a dedicated screen for seamless content sharing across multiple devices." \
  good_for="Presentations" \
  capacity:=20 \
  image@./testimages/cw1.jpg

# Room 2 with cw2.jpg  
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="Under Rottnest" \
  excerpt="Dive deep into collaboration (no quokkas included)" \
  description="Intimate meeting room designed for small team collaborations with a coastal-inspired aesthetic. This cozy 6-person space features wireless presentation capabilities, smart TV for content sharing, and abundant natural lighting. Equipped with comfortable ergonomic seating, whiteboard surfaces for brainstorming, and acoustic treatments ensuring privacy." \
  good_for="Collaboration" \
  capacity:=6 \
  image@./testimages/cw2.jpg

# Room 3 with cw3.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="The Cove" \
  excerpt="Where pirates planned treasure hunts, now you plan budgets" \
  description="Executive board room designed for high-level meetings and strategic discussions, featuring professional video conferencing capabilities and premium furnishings throughout. The room includes a mahogany conference table, executive leather chairs, and integrated video conferencing equipment with HD cameras and advanced microphone arrays for crystal-clear communication with remote participants." \
  good_for="Executive" \
  capacity:=15 \
  image@./testimages/cw3.jpg

# Room 4 with cw4.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="Training Room D" \
  excerpt="D stands for Development (and definitely not Detention)" \
  description="Comprehensive training room equipped with multiple interactive whiteboards and cutting-edge display technology designed for effective learning and skill development. The space features tiered seating for optimal visibility, a dedicated trainer station with presentation controls, digital annotation capabilities, and the ability to save and share notes electronically with all participants." \
  good_for="Training" \
  capacity:=30 \
  image@./testimages/cw4.jpg

# Room 5 with cw5.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="Standard Hall E" \
  excerpt="Nothing standard about this hall, trust us" \
  description="Large-capacity lecture hall accommodating 200+ attendees with tiered stadium seating providing excellent sightlines from every position. Equipped with advanced audiovisual equipment including a main projection screen, rear display monitors, professional sound system with ceiling speakers, and a centralized control room for managing all presentation components from a single location." \
  good_for="Lectures" \
  capacity:=200 \
  image@./testimages/cw5.jpg

# Room 6 with cw6.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="The Milky Way" \
  excerpt="Reach for the stars, literally in this galaxy" \
  description="Open collaboration area designed to foster creativity and innovation with flexible seating arrangements that can be quickly reconfigured for various team brainstorming sessions and group activities. The space features modular furniture, portable whiteboards, writable wall panels, comfortable lounge areas, and bright ambient lighting that promotes creative thinking and productive teamwork." \
  good_for="Brainstorming" \
  capacity:=25 \
  image@./testimages/cw6.jpg

# Room 7 with cw7.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="Video Conference G" \
  excerpt="G for Great connections (and not Glitchy like Zoom)" \
  description="Dedicated video conferencing space featuring professional-grade 4K cameras providing crystal-clear video quality for remote participants. The room includes sophisticated lighting systems designed to enhance skin tones and reduce shadows, acoustic treatment for optimal audio quality, multiple display screens for viewing presentations and participants, and integrated video conferencing software compatible with all major platforms." \
  good_for="Remote" \
  capacity:=10 \
  image@./testimages/cw7.jpg

# Room 8 with cw8.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="Warm Studio H" \
  excerpt="Cozy vibes and natural light for your creative genius" \
  description="Inspiring creative studio flooded with natural light from oversized windows, creating an ideal environment for design thinking workshops and artistic collaboration. The space is fully stocked with comprehensive art supplies, including markers, colored pencils, sketch paper, modeling materials, and digital design workstations, enabling teams to brainstorm and prototype creative solutions." \
  good_for="Creativity" \
  capacity:=12 \
  image@./testimages/cw8.jpg

# Room 9 with cw9.jpg
http --session=admin --ignore-stdin -f POST :8000/rooms/ \
  name="Large Dog Park I" \
  excerpt="The dogs look a little bigger than I thought" \
  description="Peaceful and quiet focus room specifically designed for individual deep work and concentration, featuring premium ergonomic furniture to support extended work sessions and minimize physical strain. The room is acoustically isolated to eliminate external distractions, includes adjustable lighting to reduce eye strain, and provides a distraction-free environment ideal for complex problem-solving and focused professional tasks." \
  good_for="Focus" \
  capacity:=1 \
  image@./testimages/cw9.jpg

# Define available room types
ROOM_TYPES=("Conference" "Meeting" "Training" "Presentation" "Creative" "Focus" "Collaboration")

echo "Adding room types..."

# Add room types to each room
http --session=admin --ignore-stdin POST :8000/room-types/ type="Conference" room:=1
http --session=admin --ignore-stdin POST :8000/room-types/ type="Meeting" room:=2
http --session=admin --ignore-stdin POST :8000/room-types/ type="Board" room:=3
http --session=admin --ignore-stdin POST :8000/room-types/ type="Training" room:=4
http --session=admin --ignore-stdin POST :8000/room-types/ type="Presentation" room:=5
http --session=admin --ignore-stdin POST :8000/room-types/ type="Collaboration" room:=6
http --session=admin --ignore-stdin POST :8000/room-types/ type="Video Conference" room:=7
http --session=admin --ignore-stdin POST :8000/room-types/ type="Creative Studio" room:=8
http --session=admin --ignore-stdin POST :8000/room-types/ type="Focus Room" room:=9

# Define available tags
TAGS=("High-Speed Wifi" "Meeting Rooms" "Quiet Zones" "Pet Friendly" "Dual Monitors" "Whiteboard")

echo "Adding random tags to rooms..."

# Function to add random tags to a room
add_random_tags() {
  local room_id=$1
  local num_tags=$((RANDOM % 4 + 1))  # 1-4 tags
  
  for ((i=0; i<num_tags; i++)); do
    local random_tag="${TAGS[RANDOM % ${#TAGS[@]}]}"
    http --session=admin --ignore-stdin POST :8000/tags/ tag="$random_tag" room:=$room_id
  done
}

# Add random tags to each room
add_random_tags 1
add_random_tags 2  
add_random_tags 3
add_random_tags 4
add_random_tags 5
add_random_tags 6
add_random_tags 7
add_random_tags 8
add_random_tags 9

echo "Updating room capacities..."
http --session=admin PATCH :8000/rooms/1/ capacity:=20
http --session=admin PATCH :8000/rooms/2/ capacity:=6
http --session=admin PATCH :8000/rooms/3/ capacity:=15
http --session=admin PATCH :8000/rooms/4/ capacity:=30
http --session=admin PATCH :8000/rooms/5/ capacity:=200
http --session=admin PATCH :8000/rooms/6/ capacity:=25
http --session=admin PATCH :8000/rooms/7/ capacity:=10
http --session=admin PATCH :8000/rooms/8/ capacity:=12
http --session=admin PATCH :8000/rooms/9/ capacity:=1

echo "Done! Verify with: http --session=admin --ignore-stdin :8000/rooms/"
