import {BroomIcon, HairSalonIcon, MechToolIcon, MoversIcon, PaintBrushIcon, PlumbingIcon, RepairToolIcon, WasherIcon} from '@components';

export const categories = [
  {category: 'cleaning', icon: BroomIcon},
  {category: 'repairing', icon: RepairToolIcon},
  {category: 'painting', icon: PaintBrushIcon},
  {category: 'laundry', icon: WasherIcon},
  {category: 'appliance', icon: MechToolIcon},
  {category: 'plumbing', icon: PlumbingIcon},
  {category: 'movers', icon: MoversIcon},
  {category: "men's salon", icon: HairSalonIcon},
];

export const recommendedServices = [
  {
    category: 'Electrical',
    providerName: 'Reliable Electric Co.',
    rating: 4.7,
    serviceCharge: 80,
    reviews: 180,
  },
  {
    category: 'Cleaning',
    providerName: 'Sparkling Clean Homes',
    rating: 4.9,
    serviceCharge: 50,
    reviews: 320,
  },
  {
    category: 'Landscaping',
    providerName: 'Green Thumb Gardens',
    rating: 4.5,
    serviceCharge: 125,
    reviews: 100,
  },
];

export const discoveredServices = [
  {
    category: 'Pet Sitting',
    providerName: 'Happy Paws Pet Care',
    rating: 5.0,
    serviceCharge: 30,
    reviews: 75,
  },
  {
    category: 'Handyman',
    providerName: 'Fix-It Pete',
    rating: 4.2,
    serviceCharge: 60,
    reviews: 210,
  },
  {
    category: 'Personal Training',
    providerName: 'Peak Performance Fitness',
    rating: 4.9,
    serviceCharge: 1000,
    reviews: 120,
  },
  {
    category: 'Catering',
    providerName: 'Delicious Delights',
    rating: 4.6,
    serviceCharge: 20000,
    reviews: 280,
  },
  {
    category: 'Appliance Repair',
    providerName: 'Tech Fixers',
    rating: 4.3,
    serviceCharge: 1900,
    reviews: 150,
  },
  {
    category: 'Computer Repair',
    providerName: 'Byte Doctors',
    rating: 4.7,
    serviceCharge: 3500,
    reviews: 360,
  },
];
