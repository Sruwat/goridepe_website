import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Footer } from './Footer';
import { Zap, Battery, Gauge, Shield, Users, ArrowRight, CheckCircle, Bike, Award, Truck } from 'lucide-react';

// Simple carousel component for vehicle images
function VehicleCarousel({ vehicleId }) {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const imageCount = 3;

  useEffect(() => {
    let mounted = true;
    // helper: try to load first available URL from candidate list
    const loadFirst = (cands) => new Promise(resolve => {
      let i = 0;
      const tryNext = () => {
        if (i >= cands.length) return resolve(null);
        const img = new Image();
        img.onload = () => resolve(cands[i]);
        img.onerror = () => { i++; tryNext(); };
        img.src = cands[i];
      };
      tryNext();
    });

      const build = async () => {
      const baseNames = [];
      baseNames.push(vehicleId);
      baseNames.push(vehicleId.replace(/-/g, ' '));
      baseNames.push(vehicleId.replace(/(-pro|-hs|-dx)$/i, ''));
      baseNames.push(vehicleId.replace(/(-pro|-hs|-dx)$/i, '').replace(/-/g, ' '));

      const results = [];
      for (let n = 1; n <= imageCount; n++) {
        const cands = [];
        // For trike, only attempt the known trik.jpg to keep showcase strict
        if (vehicleId === 'trike') {
          cands.push(`/png/trike/trik.jpg`);
        } else {
          for (const name of baseNames) {
            // Prefer bundler-resolved assets under src/assets/<vehicleName>/ to ensure they are included in build
            try {
              cands.push(new URL(`../assets/${name}/${n}.png`, import.meta.url).href);
            } catch (e) {
              // fallback to runtime paths
              cands.push(`/png/${name}/${n}.png`);
              cands.push(`/png/${name.replace(/ /g, '-')}/${n}.png`);
              cands.push(`/png/${name.toLowerCase()}/${n}.png`);
            }
          }
        }
        // finally try the placeholder
        cands.push(new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href);
        const found = await loadFirst(cands);
        results.push(found || cands[cands.length - 1]);
      }
      if (mounted) setImages(results);
    };
    build();
    return () => { mounted = false; };
  }, [vehicleId]);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, [images]);

  return (<div className="relative w-full h-64 md:h-72 lg:h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
    {images && images.length > 0 ? images.map((src, i) => (<img key={i} src={src} alt={`${vehicleId}-${i}`} className={`w-full h-full object-contain transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'} absolute inset-0`} />)) : (<div className="w-full h-full bg-gray-200" />)}
  </div>);
}

// CardImage: show exactly one preloaded image for vehicle cards (no overlap)
function CardImage({ vehicleId }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let mounted = true;
    const baseNames = [];
    baseNames.push(vehicleId);
    baseNames.push(vehicleId.replace(/-/g, ' '));
    baseNames.push(vehicleId.replace(/(-pro|-hs|-dx)$/i, ''));

    // special-case mappings
    if (vehicleId === 'evita') {
      baseNames.unshift('evita pro');
    }

    const candidates = [];
    // For trike, strictly use trik.jpg so the showcase only shows the trike image
    if (vehicleId === 'trike') {
      candidates.push(`/png/trike/trik.jpg`);
    } else {
    for (const name of baseNames) {
      try {
        candidates.push(new URL(`../assets/${name}/1.png`, import.meta.url).href);
      } catch (e) {
        candidates.push(`/png/${name}/1.png`);
        candidates.push(`/png/${name.replace(/ /g, '-')}/1.png`);
      }
    }
    }
    candidates.push(new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href);

    const img = new Image();
    let i = 0;
    const tryNext = () => {
      if (i >= candidates.length) return setSrc(candidates[candidates.length - 1]);
      img.onload = () => { if (mounted) setSrc(candidates[i]); };
      img.onerror = () => { i++; tryNext(); };
      img.src = candidates[i];
    };
    tryNext();
    return () => { mounted = false; };
  }, [vehicleId]);

  // make card images smaller to match updated designs
  return (<div className="w-full h-28 md:h-32 lg:h-36 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
    {src ? (<img src={src} alt={vehicleId} className="object-contain max-w-[60%] md:max-w-[45%] lg:max-w-[35%] max-h-[80%]"/>) : (<div className="w-full h-full bg-gray-200"/> ) }
  </div>);
}

// Gallery used on the detail page: left side main image + thumbnails
function VehicleGallery({ vehicleId }) {
  const [index, setIndex] = useState(0);
  const [imgs, setImgs] = useState([]);
  const count = 4;

  useEffect(() => {
    let mounted = true;
    const loadFirst = (cands) => new Promise(resolve => {
      let i = 0;
      const tryNext = () => {
        if (i >= cands.length) return resolve(null);
        const img = new Image();
        img.onload = () => resolve(cands[i]);
        img.onerror = () => { i++; tryNext(); };
        img.src = cands[i];
      };
      tryNext();
    });

      const build = async () => {
      const baseNames = [];
      baseNames.push(vehicleId);
      baseNames.push(vehicleId.replace(/-/g, ' '));
      baseNames.push(vehicleId.replace(/(-pro|-hs|-dx)$/i, ''));
      baseNames.push(vehicleId.replace(/(-pro|-hs|-dx)$/i, '').replace(/-/g, ' '));

      const results = [];
      for (let n = 1; n <= count; n++) {
        const cands = [];
        // trike: use only the trik.jpg as the strict showcase
        if (vehicleId === 'trike') {
          cands.push(`/png/trike/trik.jpg`);
        } else {
          for (const name of baseNames) {
            cands.push(`/png/${name}/${n}.png`);
            cands.push(`/png/${name.replace(/ /g, '-')}/${n}.png`);
            cands.push(`/png/${name.toLowerCase()}/${n}.png`);
            cands.push(`/assets/png/${name}/${n}.png`);
            cands.push(`/assets/png/png/${name}/${n}.png`);
          }
        }
        // placeholder at the end
        cands.push(new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href);
        const found = await loadFirst(cands);
        results.push(found || cands[cands.length - 1]);
      }
      if (mounted) setImgs(results);
    };
    build();
    return () => { mounted = false; };
  }, [vehicleId]);

  return (<div className="w-full">
    <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden flex">
      <div className="w-full">
        {imgs && imgs.length > 0 ? (
          <div className="w-full h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center bg-white p-4">
            {/* center main image and make it smaller (approx 30% width) */}
            <img src={imgs[index]} alt={`vehicle-${index}`} className="h-auto object-contain" style={{width: '30%'}} onClick={() => setIndex((index + 1) % imgs.length)} />
          </div>
        ) : (
          <div className="w-full h-[420px] bg-gray-200" />
        )}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {imgs.slice(0,4).map((s, i) => (<button key={i} onClick={() => setIndex(i)} className={`border rounded overflow-hidden ${i === index ? 'ring-2 ring-green-500' : ''}`}>
              <img src={s} alt={`thumb-${i}`} className="w-full h-20 object-contain bg-white p-1" />
            </button>))}
        </div>
      </div>

  <div className="hidden lg:block absolute left-0 top-20 -translate-x-28 w-56 bg-white border rounded-lg shadow p-4">
        <div className="text-sm text-gray-500 mb-2">0-80 %</div>
        <div className="text-xs text-gray-400 mb-4">in 2 hrs 15 mins</div>
        <div className="text-lg font-bold mb-1">70 km/h</div>
        <div className="text-xs text-gray-400 mb-4">top speed</div>
        <div className="text-sm font-semibold">100 kms</div>
        <div className="text-xs text-gray-400">per charge (eco mode)</div>
      </div>
    </div>
  </div>);
}
export function BuyVehiclesPage({ onNavigate, user }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showDetailPage, setShowDetailPage] = useState(false);
    const [bookingData, setBookingData] = useState({
        name: '',
        mobile: '',
        email: '',
        state: '',
        city: '',
        dealerHub: '',
        referralCode: ''
    });
  // Demo data for selects
  const demoStates = [
    { id: 'up', name: 'Uttar Pradesh', cities: ['Noida', 'Ghaziabad', 'Lucknow'] },
    { id: 'mh', name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur'] },
    { id: 'dl', name: 'Delhi', cities: ['New Delhi'] }
  ];
  const demoHubs = ['Sector 18 Hub', 'Connaught Place Hub', 'Cyber City Hub'];
  const [selectedStateObj, setSelectedStateObj] = useState(demoStates[0]);
    const vehicles = [
        // Low Speed Vehicles
        {
            id: 'winner',
            name: 'Winner',
            category: 'low-speed',
            price: '₹65,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Premium build quality', 'Advanced BLDC technology', 'Auto cut-off charging']
        },
        {
            id: 'winner-pro',
            name: 'Winner Pro',
            category: 'low-speed',
            price: '₹72,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Enhanced performance', 'Premium features', 'Extended warranty'],
            popular: true
        },
        {
            id: 'glide',
            name: 'Glide',
            category: 'low-speed',
            price: '₹58,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Smooth riding experience', 'Efficient motor', 'Comfortable design']
        },
        {
            id: 'energy',
            name: 'Energy',
            category: 'low-speed',
            price: '₹62,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Energy efficient', 'Long lasting battery', 'Eco-friendly']
        },
        {
            id: 'energy-pro',
            name: 'Energy Pro',
            category: 'low-speed',
            price: '₹68,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Professional grade', 'Enhanced battery life', 'Superior performance']
        },
        {
            id: 'energy-dx',
            name: 'Energy DX',
            category: 'low-speed',
            price: '₹75,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Deluxe model', 'Premium features', 'Advanced technology']
        },
        {
            id: 'zenith',
            name: 'Zenith',
            category: 'low-speed',
            price: '₹69,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Peak performance', 'Stylish design', 'Comfortable ride']
        },
        {
            id: 'evita-pro',
            name: 'Evita Pro',
            category: 'low-speed',
            price: '₹71,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Professional series', 'Enhanced durability', 'Modern features']
        },
        {
            id: 'evita',
            name: 'Evita',
            category: 'low-speed',
            price: '₹64,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Disc',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Elegant design', 'Reliable performance', 'User-friendly']
        },
        // High Speed Vehicles
        {
            id: 'prince-hs',
            name: 'Prince HS',
            category: 'high-speed',
            price: '₹95,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60 V',
                motorType: 'BLDC Hub Motor',
                motorPower: '1500 W',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Drum',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Royal performance', '1500W power', 'Dual tube suspension']
        },
        {
            id: 'grace-hs',
            name: 'Grace HS',
            category: 'high-speed',
            price: '₹92,000',
            image: new URL('../assets/0e8156ef0eda994e60ba2744c68fa19ab070cdc9.png', import.meta.url).href,
            specifications: {
                voltage: '60 V',
                motorType: 'BLDC Hub Motor',
                motorPower: '1500 W',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Drum',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Graceful performance', 'High-speed capability', 'Advanced features']
        },
        // Handicapped Vehicle
    {
      id: 'trike',
      name: 'Trike',
      category: 'handicapped',
      price: '₹85,000',
      // runtime png trike image
      image: `/png/trike/trik.jpg`,
            specifications: {
                voltage: '48-60-72 V',
                motorType: 'BLDC Hub Motor',
                chargerType: 'Micro Charger with Auto Cut off',
                frontBrake: 'Disc',
                rearBrake: 'Drum',
                headlight: 'LED',
                wheelType: 'Alloy Wheel',
                usbCharging: 'Available'
            },
            features: ['Three-wheeler design', 'Flexible voltage options', 'Accessible for all']
        }
    ];
    const categories = [
        { id: 'all', name: 'All Vehicles', icon: Bike },
        { id: 'low-speed', name: 'Low Speed', icon: Zap },
        { id: 'high-speed', name: 'High Speed', icon: Gauge },
        { id: 'handicapped', name: 'Accessible', icon: Users }
    ];
    const filteredVehicles = selectedCategory === 'all'
        ? vehicles
        : vehicles.filter(vehicle => vehicle.category === selectedCategory);
  const handleBookVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedVehicleId(vehicle.id);
    // open full-page detail + booking form (right side)
    setShowDetailPage(true);
  };
  const handleBookingSubmit = ({ paymentType, amount }) => {
    if (!selectedVehicle) return;
    console.log('Booking submitted:', {
      vehicle: selectedVehicle,
      customer: bookingData,
      paymentType,
      amount
    });
    // In a real app you'd call an API here. We'll navigate to the payment screen.
    onNavigate('payment');
  };

  // confirmation modal state
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingPayment, setPendingPayment] = useState(null);

  const openConfirm = (paymentType, amount) => {
    setPendingPayment({ paymentType, amount });
    setShowConfirm(true);
  };

  const confirmAndSubmit = () => {
    if (pendingPayment) {
      handleBookingSubmit(pendingPayment);
    }
    setShowConfirm(false);
    setPendingPayment(null);
  };
    return (<div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-96 bg-cover bg-center pt-16" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1920&h=600&fit=crop')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Buy Your Electric Vehicle</h1>
            <p className="text-xl opacity-90 mb-6">
              Choose from our premium collection of electric vehicles. Own your eco-friendly ride today!
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5"/>
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5"/>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5"/>
                <span>Free Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (<Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} onClick={() => setSelectedCategory(category.id)} className="flex items-center gap-2 px-6 py-3 rounded-full">
                <category.icon className="w-5 h-5"/>
                {category.name}
              </Button>))}
          </div>
        </motion.div>

        {/* Vehicles Grid */}
        {selectedCategory === 'handicapped' ? (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">No bikes available</h3>
            <p className="text-sm text-gray-500 mt-2">We currently don't have accessible vehicles available. Please check other categories or contact support.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div key={vehicle.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="relative bg-gray-100">
                    <CardImage vehicleId={vehicle.id} />
                    {vehicle.popular && (<Badge className="absolute top-4 left-4 bg-green-600 text-white">Most Popular</Badge>)}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                      <Badge className="bg-white text-gray-900 font-bold text-lg">{vehicle.price}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{vehicle.name}</h3>
                      <Badge variant="outline" className="capitalize">{vehicle.category.replace('-', ' ')}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Battery className="w-5 h-5 text-green-600 mx-auto mb-1"/>
                        <div className="text-sm font-semibold">{vehicle.specifications.voltage}</div>
                        <div className="text-xs text-gray-600">Voltage</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Zap className="w-5 h-5 text-blue-600 mx-auto mb-1"/>
                        <div className="text-sm font-semibold">{vehicle.specifications.motorPower || 'BLDC'}</div>
                        <div className="text-xs text-gray-600">Motor</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500"/>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleBookVehicle(vehicle)}>
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2"/>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Detail overlay: show when a vehicle is selected */}
        {showDetailPage && selectedVehicle && (
          <div className="fixed inset-0 z-50 bg-white overflow-auto">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="mb-4">
                <button onClick={() => setShowDetailPage(false)} className="text-sm bg-white border px-3 py-2 rounded">← Back to list</button>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">

                {/* Left: gallery */}
                <div className="lg:w-1/2 w-full flex items-center justify-center relative">
                  <div className="absolute left-6 top-8 text-5xl font-extrabold text-green-200 select-none">GO RIDE PE</div>
                  <div className="absolute left-6 top-20 text-2xl font-bold text-blue-600">+ KWICK</div>
                  <div className="w-full px-2">
                    <VehicleGallery vehicleId={selectedVehicleId || selectedVehicle?.id} />
                  </div>
                </div>

                {/* Right: booking form */}
                <div className="lg:w-1/2 w-full flex items-start justify-center">
                  <div className="sticky top-6 bg-white border rounded-lg shadow p-6 w-full max-w-md">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">Book your {selectedVehicle.name}</h2>
                      <div className="text-sm text-gray-500">{selectedVehicle.category.replace('-', ' ')}</div>
                    </div>

                    <div className="mb-2">
                      <div className="text-sm text-gray-600">Select vehicle details and fill customer info to book.</div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} placeholder="Name" />
                      </div>
                      <div>
                        <Label htmlFor="mobile">Mobile</Label>
                        <Input id="mobile" value={bookingData.mobile} onChange={(e) => setBookingData({ ...bookingData, mobile: e.target.value })} placeholder="Mobile" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} placeholder="Email" />
                      </div>

                      <div className="flex gap-2">
                        <Select value={bookingData.state} onValueChange={(v) => {
                          const s = demoStates.find(ds => ds.id === v) || demoStates[0];
                          setSelectedStateObj(s);
                          setBookingData({ ...bookingData, state: v, city: s.cities[0] });
                        }}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose State" />
                          </SelectTrigger>
                          <SelectContent>
                            {demoStates.map(s => (<SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>))}
                          </SelectContent>
                        </Select>

                        <Select value={bookingData.city} onValueChange={(v) => setBookingData({ ...bookingData, city: v })}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose City" />
                          </SelectTrigger>
                          <SelectContent>
                            {(selectedStateObj?.cities || demoStates[0].cities).map(c => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Select value={bookingData.dealerHub} onValueChange={(v) => setBookingData({ ...bookingData, dealerHub: v })}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Dealer Hub" />
                        </SelectTrigger>
                        <SelectContent>
                          {demoHubs.map(h => (<SelectItem key={h} value={h}>{h}</SelectItem>))}
                        </SelectContent>
                      </Select>

                      <Select value={bookingData.referralCode} onValueChange={(v) => setBookingData({ ...bookingData, referralCode: v })}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Where did you hear about us?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="friend">Friend</SelectItem>
                          <SelectItem value="ad">Advertisement</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                        </SelectContent>
                      </Select>

                      <div>
                        <Label htmlFor="ref">Referral Code</Label>
                        <Input id="ref" value={bookingData.referralCode} onChange={(e) => setBookingData({ ...bookingData, referralCode: e.target.value })} placeholder="Referral Code" />
                      </div>

                      <div className="flex gap-3 mt-4">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold" onClick={() => openConfirm('advance', 5000)}>Book now (Pay 5,000 advance)</button>
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold" onClick={() => openConfirm('hub', 0)}>Book now (Pay from Hub)</button>
                      </div>

                      <div className="mt-3">
                        <button className="w-full border rounded-md py-3" onClick={() => setShowDetailPage(false)}>Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* confirmation modal */}
        {showConfirm && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-2">Confirm Booking</h3>
              <p className="text-sm text-gray-600 mb-4">You are about to {pendingPayment?.paymentType === 'advance' ? 'pay an advance of ₹' + pendingPayment?.amount : 'book and pay from hub'} for <strong>{selectedVehicle?.name}</strong>.</p>
              <div className="flex gap-3 justify-end">
                <button className="px-4 py-2 border rounded" onClick={() => setShowConfirm(false)}>Cancel</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={confirmAndSubmit}>Confirm</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
