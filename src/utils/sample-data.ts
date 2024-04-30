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

export type Service = {
  category: string;
  providerName: string;
  rating: number;
  serviceCharge: number;
  reviews: number;
  id: string;
};

export const recommendedServices: Service[] = [
  {
    category: 'appliance',
    providerName: 'Reliable Electric Co.',
    rating: 4.7,
    serviceCharge: 80,
    reviews: 180,
    id: 'reliable-electric-co',
  },
  {
    category: 'cleaning',
    providerName: 'Sparkling Clean Homes',
    rating: 4.9,
    serviceCharge: 50,
    reviews: 320,
    id: 'sparkling-clean-homes',
  },
  {
    category: 'cleaning',
    providerName: 'Green Thumb Gardens',
    rating: 4.5,
    serviceCharge: 125,
    reviews: 100,
    id: 'green-thumb-gardens',
  },
];

export const discoveredServices: Service[] = [
  {
    category: 'movers',
    providerName: 'Quicker',
    rating: 5.0,
    serviceCharge: 30,
    reviews: 75,
    id: 'quicker',
  },
  {
    category: 'painting',
    providerName: 'A&C Builders',
    rating: 5.0,
    serviceCharge: 30,
    reviews: 75,
    id: 'a&c-builders',
  },
  {
    category: "men's salon",
    providerName: "Harry's Cutz",
    rating: 5.0,
    serviceCharge: 30,
    reviews: 75,
    id: 'harry-cut',
  },
  {
    category: 'repairing',
    providerName: 'Fix-It Pete',
    rating: 4.2,
    serviceCharge: 60,
    reviews: 210,
    id: 'fix-it-pete',
  },
  {
    category: 'plumbing',
    providerName: 'Pipers',
    rating: 4.9,
    serviceCharge: 1000,
    reviews: 120,
    id: 'pipers',
  },
  {
    category: 'laundry',
    providerName: 'J & D Washers',
    rating: 4.6,
    serviceCharge: 20000,
    reviews: 280,
    id: 'jd-washers',
  },
  {
    category: 'cleaning',
    providerName: 'Sam Cleans',
    rating: 4.3,
    serviceCharge: 1900,
    reviews: 150,
    id: 'sam-cleans',
  },
  {
    category: 'appliance',
    providerName: 'Byte Doctors',
    rating: 4.7,
    serviceCharge: 3500,
    reviews: 360,
    id: 'byte-doctors',
  },
];

export const specialOffer = [
  {
    title: 'today special',
    description: 'Get discount for every order, only valid for today',
    type: '30%',
  },
  {
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders over $50. Stock up on your favorites!',
    type: '🚚',
  },
  {
    title: 'Flash Sale',
    description: 'An extra 15% off already discounted clearance items! Limited quantities available, hurry!',
    type: '15%',
  },
];
