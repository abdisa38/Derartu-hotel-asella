export const hotelInfo = {
  name: 'Derartu Hotel',
  tagline: 'Experience Comfort and Luxury in the Heart of Asella',
  description: 'Welcome to Derartu Hotel, where comfort, elegance, and exceptional hospitality come together.',
  location: 'Asella, Oromia, Ethiopia',
  phones: ['+251223312828', '+251911841145'],
  email: 'info@derartuhotel.com',
  telegram: '@derartuhotel',
  coordinates: { lat: 7.9539, lng: 39.1353 },
}

export const stats = [
  { number: 27, label: 'Rooms', suffix: '' },
  { number: 24, label: 'Reception', suffix: '/7' },
  { number: 100, label: 'Guests Monthly', suffix: '+' },
  { number: 10, label: 'Years Experience', suffix: '+' },
]

export const services = [
  { icon: 'Utensils', title: 'Restaurant', description: 'Experience authentic Ethiopian cuisine and international dishes' },
  { icon: 'Wifi', title: 'Free WiFi', description: 'High-speed internet access throughout the hotel' },
  { icon: 'Car', title: 'Parking', description: 'Secure parking facilities for all guests' },
  { icon: 'Users', title: 'Conference Hall', description: 'Modern facilities for meetings and events' },
  { icon: 'Concierge', title: 'Room Service', description: '24/7 room service for your convenience' },
  { icon: 'Shirt', title: 'Laundry', description: 'Professional laundry and dry cleaning services' },
  { icon: 'Shield', title: 'Security', description: '24-hour security and CCTV surveillance' },
  { icon: 'Droplets', title: 'Hot Shower', description: 'Hot water available 24/7 in all rooms' },
  { icon: 'Tv', title: 'Satellite TV', description: 'International channels and entertainment' },
  { icon: 'Zap', title: 'Backup Generator', description: 'Uninterrupted power supply' },
  { icon: 'Sparkles', title: 'Housekeeping', description: 'Daily housekeeping services' },
  { icon: 'Coffee', title: '24/7 Service', description: 'Round-the-clock guest services' },
]

export const rooms = [
  {
    id: 'single-room',
    name: 'Single Room',
    price: 1200,
    capacity: 1,
    size: '25 sqm',
    description: 'Cozy and comfortable single room perfect for solo travelers. Features elegant furnishings and modern amenities.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
    amenities: ['King Size Bed', 'Free WiFi', 'Satellite TV', 'Hot Shower', 'Air Conditioning', 'Mini Fridge', 'Work Desk', 'Room Service'],
    featured: true,
  },
  {
    id: 'twin-room',
    name: 'Twin Room',
    price: 1800,
    capacity: 2,
    size: '30 sqm',
    description: 'Spacious twin room with two comfortable beds, ideal for friends or colleagues traveling together.',
    image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1920',
    amenities: ['Two Single Beds', 'Free WiFi', 'Satellite TV', 'Hot Shower', 'Air Conditioning', 'Mini Fridge', 'Seating Area', 'Room Service'],
    featured: true,
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    price: 2500,
    capacity: 2,
    size: '35 sqm',
    description: 'Luxurious deluxe room featuring premium furnishings, spacious layout, and enhanced amenities for a memorable stay.',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920',
    amenities: ['Queen Size Bed', 'Free WiFi', 'Satellite TV', 'Hot Shower', 'Air Conditioning', 'Mini Bar', 'Sofa', 'Balcony', 'Room Service'],
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    price: 3500,
    capacity: 3,
    size: '50 sqm',
    description: 'Our finest accommodation featuring separate living area, premium amenities, and breathtaking views.',
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920',
    amenities: ['King Size Bed', 'Free WiFi', 'Satellite TV', 'Hot Shower', 'Air Conditioning', 'Mini Bar', 'Living Room', 'Dining Area', 'Balcony', 'Premium Toiletries', 'Room Service'],
    featured: true,
  },
]

export const menuCategories = [
  {
    title: 'Traditional Ethiopian',
    description: 'Authentic Ethiopian cuisine prepared by expert chefs',
    items: [
      { name: 'Doro Wot', description: 'Traditional chicken stew with berbere spice', price: 350 },
      { name: 'Kitfo', description: 'Ethiopian steak tartare with spiced butter', price: 400 },
      { name: 'Tibs', description: 'Sautéed meat with vegetables and spices', price: 380 },
      { name: 'Shiro', description: 'Chickpea powder stew', price: 250 },
      { name: 'Veggie Combo', description: 'Assorted vegetarian dishes', price: 280 },
    ],
  },
  {
    title: 'International Cuisine',
    description: 'Global flavors prepared to perfection',
    items: [
      { name: 'Margherita Pizza', description: 'Fresh mozzarella, tomato sauce, basil', price: 450 },
      { name: 'Pepperoni Pizza', description: 'Italian pepperoni, mozzarella, tomato sauce', price: 500 },
      { name: 'Pasta Carbonara', description: 'Creamy pasta with bacon and parmesan', price: 380 },
      { name: 'Grilled Chicken', description: 'Herb-marinated grilled chicken breast', price: 420 },
      { name: 'Beef Burger', description: 'Premium beef patty with fresh vegetables', price: 400 },
    ],
  },
  {
    title: 'Coffee & Beverages',
    description: 'Ethiopian coffee ceremony and refreshing drinks',
    items: [
      { name: 'Ethiopian Coffee', description: 'Traditional coffee ceremony', price: 80 },
      { name: 'Macchiato', description: 'Espresso with steamed milk', price: 60 },
      { name: 'Cappuccino', description: 'Espresso with foamed milk', price: 70 },
      { name: 'Fresh Juice', description: 'Seasonal fresh fruit juice', price: 100 },
      { name: 'Soft Drinks', description: 'Assorted sodas and beverages', price: 50 },
    ],
  },
  {
    title: 'Breakfast',
    description: 'Start your day with a hearty breakfast',
    items: [
      { name: 'Continental Breakfast', description: 'Bread, eggs, fruits, coffee/tea', price: 250 },
      { name: 'Ethiopian Breakfast', description: 'Ful, scrambled eggs, bread, tea', price: 200 },
      { name: 'Full English Breakfast', description: 'Eggs, bacon, sausages, beans, toast', price: 350 },
      { name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 180 },
    ],
  },
]

export const conferenceFeatures = [
  { icon: 'Users', title: 'Capacity', description: 'Up to 150 people' },
  { icon: 'Projector', title: 'Projector & Screen', description: 'HD presentation equipment' },
  { icon: 'Wifi', title: 'High-Speed WiFi', description: 'Reliable internet connection' },
  { icon: 'Mic', title: 'Audio System', description: 'Professional sound system' },
  { icon: 'Coffee', title: 'Catering Service', description: 'Coffee breaks and meals' },
  { icon: 'Snowflake', title: 'Air Conditioning', description: 'Climate controlled room' },
  { icon: 'Layout', title: 'Flexible Layout', description: 'Customizable seating arrangements' },
  { icon: 'Clock', title: 'All Day Access', description: 'Flexible booking hours' },
]

export const attractions = [
  {
    name: 'Arsi University',
    distance: '3 km',
    description: 'One of Ethiopia\'s leading universities, known for its beautiful campus and academic excellence.',
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    name: 'Asella Stadium',
    distance: '2 km',
    description: 'Home to Ethiopia\'s running champions. Witness the birthplace of legendary athletes.',
    image: 'https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    name: 'Chilalo Mountain',
    distance: '25 km',
    description: 'Majestic mountain offering stunning views and hiking opportunities.',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    name: 'Bale Mountains',
    distance: '120 km',
    description: 'Gateway to Bale Mountains National Park, home to unique wildlife and breathtaking landscapes.',
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    name: 'Running Culture',
    distance: 'City Center',
    description: 'Experience Asella\'s rich running heritage. Early morning training sessions with local athletes.',
    image: 'https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    name: 'Local Markets',
    distance: '1 km',
    description: 'Explore vibrant local markets offering traditional crafts, fresh produce, and Ethiopian coffee.',
    image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
]

export const testimonials = [
  {
    name: 'Michael Anderson',
    role: 'Business Traveler',
    rating: 5,
    text: 'Exceptional service and comfort. The conference facilities are world-class. Highly recommend for business stays.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Tourist',
    rating: 5,
    text: 'A hidden gem in Asella! The staff went above and beyond to make our stay memorable. The restaurant serves amazing Ethiopian food.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'David Bekele',
    role: 'Event Organizer',
    rating: 5,
    text: 'Hosted a corporate event here. Everything was perfect - from the venue setup to the catering. Professional team!',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Emma Thompson',
    role: 'Family Vacation',
    rating: 5,
    text: 'Wonderful experience! Clean rooms, friendly staff, and great location. Our family felt right at home.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
]

export const faqs = [
  {
    question: 'What time is check-in and check-out?',
    answer: 'Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability.',
  },
  {
    question: 'Do you offer airport transportation?',
    answer: 'Yes, we provide airport pickup and drop-off services. Please contact us in advance to arrange transportation.',
  },
  {
    question: 'Is breakfast included in the room rate?',
    answer: 'Breakfast is included with certain room packages. Please check your booking details or contact us for more information.',
  },
  {
    question: 'Do you have parking facilities?',
    answer: 'Yes, we offer secure, complimentary parking for all our guests.',
  },
  {
    question: 'Is WiFi available?',
    answer: 'Yes, high-speed WiFi is available throughout the hotel free of charge.',
  },
  {
    question: 'Can I host events or conferences at the hotel?',
    answer: 'Absolutely! We have a fully-equipped conference hall that can accommodate up to 150 people. Contact us for booking and catering options.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 48 hours before check-in are fully refundable. Cancellations within 48 hours may incur a one-night charge.',
  },
  {
    question: 'Do you accept credit cards?',
    answer: 'Yes, we accept major credit cards, debit cards, and cash payments.',
  },
]

export const galleryImages = [
  { category: 'rooms', url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Luxury Room' },
  { category: 'rooms', url: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Twin Room' },
  { category: 'rooms', url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Deluxe Room' },
  { category: 'restaurant', url: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Restaurant' },
  { category: 'restaurant', url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Dining Area' },
  { category: 'conference', url: 'https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Conference Hall' },
  { category: 'events', url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Event Setup' },
  { category: 'lobby', url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Lobby' },
  { category: 'outdoor', url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920', title: 'Hotel Exterior' },
]
