import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Footer } from './Footer';
const blogPosts = [
    {
        id: 1,
        title: "The Future of Electric Vehicles in India",
        excerpt: "Exploring how EVs are transforming urban transportation and contributing to a greener future.",
        author: "Go Ride Pe Team",
        date: "December 15, 2024",
        readTime: "5 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=400&fit=crop",
        content: `
      <p>India stands at a pivotal moment in its transportation evolution. As urban centers grapple with mounting pollution challenges and traffic congestion, electric vehicles emerge as a beacon of hope for sustainable mobility.</p>
      
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop" alt="Electric vehicle charging station in India" />
      
      <h3>The Current Landscape</h3>
      <p>The Indian EV market has witnessed exponential growth, with government initiatives like FAME II scheme and state-level subsidies accelerating adoption. Cities like Delhi, Bangalore, and Mumbai are leading the charge with supportive infrastructure development.</p>
      
      <p>Go Ride Pe has been at the forefront of this revolution, providing accessible electric mobility solutions across NCR. Our fleet of eco-friendly vehicles has helped reduce carbon emissions by over 75,000 kg in 2024 alone.</p>
      
      <h3>Infrastructure Development</h3>
      <p>The backbone of EV adoption lies in robust charging infrastructure. India has seen a 300% increase in public charging stations over the past two years. Major players including Tata Power, BPCL, and emerging startups are creating an extensive network.</p>
      
      <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=400&fit=crop" alt="Modern EV charging infrastructure" />
      
      <h3>Economic Impact</h3>
      <p>Electric vehicles offer significant cost advantages over traditional fuel-powered vehicles. With operational costs 60-70% lower than petrol scooters, EVs present compelling economics for both individual users and fleet operators like Go Ride Pe.</p>
      
      <h3>Environmental Benefits</h3>
      <p>Transportation accounts for nearly 18% of India's total CO₂ emissions. The shift to electric mobility could reduce urban air pollution by up to 37% in major metro cities. This translates to better health outcomes and improved quality of life for millions.</p>
      
      <h3>Challenges and Solutions</h3>
      <p>While range anxiety and charging time remain concerns, technological advancements in battery technology are rapidly addressing these issues. Lithium-ion batteries now offer 150+ km range on single charge, suitable for most urban commuting needs.</p>
      
      <img src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800&h=400&fit=crop" alt="EV battery technology advancement" />
      
      <h3>The Road Ahead</h3>
      <p>With India targeting 30% EV penetration by 2030, the future looks promising. Government support, decreasing battery costs, and increasing environmental awareness are driving this transformation. Go Ride Pe is committed to being part of this sustainable future.</p>
    `
    },
    {
        id: 2,
        title: "Safety First: EV Riding Guidelines",
        excerpt: "Essential safety tips and guidelines for electric vehicle riders in NCR region.",
        author: "Safety Team",
        date: "December 12, 2024",
        readTime: "3 min read",
        category: "Safety",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
        content: `
      <p>Safety is paramount when it comes to electric vehicle riding. At Go Ride Pe, we prioritize the well-being of our riders and have compiled comprehensive safety guidelines to ensure secure and enjoyable rides.</p>
      
      <img src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=400&fit=crop" alt="Electric scooter safety equipment" />
      
      <h3>Pre-Ride Safety Checks</h3>
      <p>Before starting your journey, always perform these essential checks:</p>
      <ul>
        <li>Verify battery charge level (minimum 20% for safety margin)</li>
        <li>Check tire pressure and tread condition</li>
        <li>Test brakes for proper functioning</li>
        <li>Ensure all lights and indicators work correctly</li>
        <li>Adjust mirrors for optimal visibility</li>
      </ul>
      
      <h3>Riding Gear Essentials</h3>
      <p>Proper protective equipment significantly reduces injury risk:</p>
      <ul>
        <li><strong>Helmet:</strong> Always mandatory - choose ISI marked helmets</li>
        <li><strong>Protective Clothing:</strong> Long pants and closed shoes minimum</li>
        <li><strong>Reflective Gear:</strong> Especially important during early morning or evening rides</li>
        <li><strong>Gloves:</strong> Improves grip and protects hands</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=400&fit=crop" alt="Motorcycle safety gear and helmet" />
      
      <h3>Traffic Rules and Regulations</h3>
      <p>Electric vehicles must follow all standard traffic regulations. Key points to remember:</p>
      <ul>
        <li>Maintain speed limits (25 km/h for e-scooters without license)</li>
        <li>Use designated bike lanes where available</li>
        <li>Signal clearly when changing lanes or turning</li>
        <li>Maintain safe following distance</li>
        <li>Never ride under influence of alcohol or drugs</li>
      </ul>
      
      <h3>Weather Considerations</h3>
      <p>Different weather conditions require adapted riding techniques:</p>
      <ul>
        <li><strong>Rain:</strong> Reduce speed, increase following distance, avoid sudden movements</li>
        <li><strong>Hot Weather:</strong> Stay hydrated, take breaks, avoid peak sun hours</li>
        <li><strong>Winter:</strong> Allow extra battery warm-up time, dress appropriately</li>
      </ul>
      
      <h3>Emergency Procedures</h3>
      <p>Know what to do in case of emergencies:</p>
      <ul>
        <li>Keep emergency contact numbers accessible</li>
        <li>Use Go Ride Pe app's emergency feature</li>
        <li>Move to safe location if vehicle breaks down</li>
        <li>Contact nearest police station for accidents</li>
      </ul>
      
      <p>Remember, safety is a shared responsibility. By following these guidelines, you contribute to making roads safer for everyone.</p>
    `
    },
    {
        id: 3,
        title: "Sustainable Urban Mobility Solutions",
        excerpt: "How electric vehicle sharing is creating sustainable transportation options.",
        author: "Sustainability Team",
        date: "December 10, 2024",
        readTime: "4 min read",
        category: "Environment",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=400&fit=crop",
        content: `
      <p>Urban mobility is undergoing a revolutionary transformation. As cities grow denser and environmental concerns intensify, sustainable transportation solutions have become critical for urban planning and daily commuting.</p>
      
      <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop" alt="Sustainable urban transportation" />
      
      <h3>The Sharing Economy Revolution</h3>
      <p>Vehicle sharing platforms like Go Ride Pe represent a paradigm shift from ownership to access-based mobility. This model offers multiple benefits:</p>
      <ul>
        <li>Reduced vehicle manufacturing demand</li>
        <li>Lower individual carbon footprint</li>
        <li>Optimized vehicle utilization rates</li>
        <li>Decreased urban parking requirements</li>
      </ul>
      
      <h3>Environmental Impact Analysis</h3>
      <p>Our sustainability metrics demonstrate significant environmental benefits:</p>
      <ul>
        <li><strong>Carbon Reduction:</strong> Each shared EV replaces 8-10 private vehicles</li>
        <li><strong>Emission Savings:</strong> 75,000+ kg CO₂ prevented in 2024</li>
        <li><strong>Energy Efficiency:</strong> 85% better energy utilization vs private vehicles</li>
        <li><strong>Resource Conservation:</strong> Reduced manufacturing materials by 60%</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop" alt="Green energy and environment" />
      
      <h3>Smart City Integration</h3>
      <p>Go Ride Pe's platform integrates with smart city initiatives:</p>
      <ul>
        <li>Real-time traffic management systems</li>
        <li>IoT-enabled charging infrastructure</li>
        <li>Data-driven route optimization</li>
        <li>Integration with public transportation networks</li>
      </ul>
      
      <h3>Social Benefits</h3>
      <p>Beyond environmental impact, shared mobility creates social value:</p>
      <ul>
        <li><strong>Accessibility:</strong> Affordable transportation for all income levels</li>
        <li><strong>Employment:</strong> Driver partner opportunities</li>
        <li><strong>Urban Planning:</strong> Reduced need for parking infrastructure</li>
        <li><strong>Health:</strong> Reduced air pollution improves public health</li>
      </ul>
      
      <h3>Technology Enablers</h3>
      <p>Advanced technology makes sustainable mobility possible:</p>
      <ul>
        <li>Mobile app-based access and payment</li>
        <li>GPS tracking for optimal fleet distribution</li>
        <li>Predictive maintenance using IoT sensors</li>
        <li>Battery management systems for longevity</li>
      </ul>
      
      <h3>Future Roadmap</h3>
      <p>Our vision for 2025-2030 includes:</p>
      <ul>
        <li>Expanding to 10+ cities across North India</li>
        <li>Deploying 5,000+ electric vehicles</li>
        <li>Solar-powered charging stations</li>
        <li>Integration with metro and bus systems</li>
      </ul>
      
      <p>Sustainable urban mobility isn't just about technology—it's about creating a better future for our cities and communities. Join us in this green revolution!</p>
    `
    },
    {
        id: 4,
        title: "Go Ride Pe's Impact on Local Communities",
        excerpt: "Creating employment opportunities and supporting local driver partnerships.",
        author: "Community Team",
        date: "December 8, 2024",
        readTime: "6 min read",
        category: "Community",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
        content: `
      <p>At Go Ride Pe, we believe that sustainable mobility should also drive social impact. Our platform has become more than just a transportation service—it's a catalyst for community empowerment and economic growth across NCR.</p>
      
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop" alt="Community partnership and teamwork" />
      
      <h3>Driver Partner Program</h3>
      <p>Our driver partner program has created sustainable livelihood opportunities:</p>
      <ul>
        <li><strong>Earnings Potential:</strong> Partners earn ₹30,000 - ₹50,000+ monthly</li>
        <li><strong>Flexible Working:</strong> Choose your own hours and locations</li>
        <li><strong>Skill Development:</strong> Regular training on EV technology and customer service</li>
        <li><strong>Insurance Coverage:</strong> Comprehensive health and vehicle insurance</li>
      </ul>
      
      <h3>Local Employment Generation</h3>
      <p>Since our launch, Go Ride Pe has directly and indirectly created over 2,000 jobs:</p>
      <ul>
        <li>1,500+ active driver partners</li>
        <li>300+ technical and support staff</li>
        <li>200+ maintenance and charging station personnel</li>
        <li>100+ customer service and admin staff</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop" alt="Women empowerment in workplace" />
      
      <h3>Women Empowerment Initiative</h3>
      <p>Our "Women on Wheels" program specifically focuses on female empowerment:</p>
      <ul>
        <li>25% of our driver partners are women</li>
        <li>Special safety training and support systems</li>
        <li>Flexible timing to accommodate family responsibilities</li>
        <li>Women-only rides during late hours</li>
      </ul>
      
      <h3>Student Partnership Program</h3>
      <p>Collaborating with local colleges and universities:</p>
      <ul>
        <li>Discounted rides for students</li>
        <li>Campus ambassador programs</li>
        <li>Internship opportunities in tech and operations</li>
        <li>EV awareness workshops and seminars</li>
      </ul>
      
      <h3>Local Business Support</h3>
      <p>Go Ride Pe actively supports local ecosystem:</p>
      <ul>
        <li>Partnerships with local charging station vendors</li>
        <li>Sourcing from neighborhood maintenance shops</li>
        <li>Collaboration with local restaurants for delivery services</li>
        <li>Supporting small-scale EV parts manufacturers</li>
      </ul>
      
      <h3>Community Outreach Programs</h3>
      <p>Regular initiatives to give back to the community:</p>
      <ul>
        <li><strong>Green Awareness Campaigns:</strong> Environmental education in schools</li>
        <li><strong>Road Safety Workshops:</strong> Free training for local communities</li>
        <li><strong>Skill Development:</strong> Technical training for unemployed youth</li>
        <li><strong>Emergency Services:</strong> Free rides during natural disasters</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p><strong>Rajesh Kumar, Driver Partner:</strong> "Go Ride Pe changed my life. From earning ₹15,000 as a delivery boy, I now make ₹45,000 monthly. I've been able to support my children's education and buy a small house."</p>
      
      <p><strong>Priya Sharma, Women Driver:</strong> "The flexible timing allows me to work while my children are at school. The platform gave me financial independence and confidence."</p>
      
      <h3>Future Community Initiatives</h3>
      <p>Our 2025 roadmap includes:</p>
      <ul>
        <li>Expanding driver partner base to 5,000+</li>
        <li>Launching micro-entrepreneurship program</li>
        <li>Setting up skill development centers</li>
        <li>Partnering with NGOs for social impact projects</li>
      </ul>
      
      <p>We're not just building a transportation platform—we're building stronger, more sustainable communities. Every ride you take with Go Ride Pe contributes to this positive impact.</p>
    `
    },
    {
        id: 5,
        title: "EV Maintenance Tips for Riders",
        excerpt: "Best practices to keep your electric vehicle in optimal condition.",
        author: "Technical Team",
        date: "December 5, 2024",
        readTime: "4 min read",
        category: "Maintenance",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=400&fit=crop",
        content: `
      <p>Proper maintenance is crucial for maximizing your electric vehicle's performance, safety, and lifespan. Follow these comprehensive guidelines to keep your EV running smoothly and efficiently.</p>
      
      <img src="https://images.unsplash.com/photo-1607891041768-57064c2e4bfe?w=800&h=400&fit=crop" alt="EV maintenance and service" />
      
      <h3>Battery Care and Management</h3>
      <p>The battery is the heart of your EV. Proper care ensures longevity and optimal performance:</p>
      <ul>
        <li><strong>Charging Habits:</strong> Maintain battery level between 20-80% for daily use</li>
        <li><strong>Temperature Control:</strong> Avoid extreme hot or cold charging conditions</li>
        <li><strong>Regular Use:</strong> Don't let battery sit idle for extended periods</li>
        <li><strong>Full Discharge:</strong> Completely drain battery once monthly for calibration</li>
        <li><strong>Storage:</strong> Store at 50-60% charge if not using for weeks</li>
      </ul>
      
      <h3>Tire Maintenance</h3>
      <p>Proper tire care improves safety, range, and riding comfort:</p>
      <ul>
        <li><strong>Pressure Check:</strong> Inspect weekly, maintain manufacturer recommended PSI</li>
        <li><strong>Tread Inspection:</strong> Replace when tread depth falls below 1.6mm</li>
        <li><strong>Rotation:</strong> Rotate tires every 5,000 km for even wear</li>
        <li><strong>Alignment:</strong> Check wheel alignment if vehicle pulls to one side</li>
        <li><strong>Balancing:</strong> Balance wheels if experiencing vibrations</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop" alt="Vehicle tire and wheel maintenance" />
      
      <h3>Brake System Care</h3>
      <p>Electric vehicles use regenerative braking, but traditional brakes need attention:</p>
      <ul>
        <li><strong>Brake Pads:</strong> Inspect every 3 months, replace when worn</li>
        <li><strong>Brake Fluid:</strong> Check level monthly, replace annually</li>
        <li><strong>Brake Cables:</strong> Ensure proper tension and lubrication</li>
        <li><strong>Regular Testing:</strong> Test brake effectiveness before each ride</li>
      </ul>
      
      <h3>Electrical System Maintenance</h3>
      <p>Keep electrical components in perfect condition:</p>
      <ul>
        <li><strong>Connection Cleaning:</strong> Clean battery terminals monthly</li>
        <li><strong>Wire Inspection:</strong> Check for damage, wear, or corrosion</li>
        <li><strong>Lighting:</strong> Test all lights weekly, replace bulbs immediately</li>
        <li><strong>Charging Port:</strong> Keep charging port clean and dry</li>
        <li><strong>Fuse Check:</strong> Inspect fuses during regular service</li>
      </ul>
      
      <h3>Physical Inspection Routine</h3>
      <p>Regular visual inspections prevent major issues:</p>
      <ul>
        <li><strong>Frame Check:</strong> Look for cracks, rust, or damage</li>
        <li><strong>Fastener Tightness:</strong> Check bolts and screws monthly</li>
        <li><strong>Suspension:</strong> Inspect shocks and springs for wear</li>
        <li><strong>Chain/Belt:</strong> Maintain proper tension and lubrication</li>
        <li><strong>Body Panels:</strong> Check for loose or damaged parts</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1550837368-6594235de85c?w=800&h=400&fit=crop" alt="Professional vehicle maintenance service" />
      
      <h3>Cleaning and Protection</h3>
      <p>Proper cleaning extends vehicle life and maintains appearance:</p>
      <ul>
        <li><strong>Regular Washing:</strong> Clean weekly with mild soap and water</li>
        <li><strong>Avoid High Pressure:</strong> Don't spray directly on electrical components</li>
        <li><strong>Dry Thoroughly:</strong> Prevent water damage by complete drying</li>
        <li><strong>Wax Protection:</strong> Apply protective coating quarterly</li>
        <li><strong>Storage:</strong> Park in covered areas when possible</li>
      </ul>
      
      <h3>Seasonal Maintenance</h3>
      <p>Adapt maintenance routine based on seasons:</p>
      <ul>
        <li><strong>Summer:</strong> Extra attention to battery cooling and tire pressure</li>
        <li><strong>Monsoon:</strong> Waterproofing checks and brake maintenance</li>
        <li><strong>Winter:</strong> Battery performance monitoring and heater checks</li>
      </ul>
      
      <h3>Professional Service Schedule</h3>
      <p>Regular professional maintenance ensures safety and warranty compliance:</p>
      <ul>
        <li><strong>Monthly:</strong> Basic inspection and cleaning</li>
        <li><strong>Quarterly:</strong> Comprehensive electrical and mechanical check</li>
        <li><strong>Annually:</strong> Complete overhaul and component replacement</li>
      </ul>
      
      <h3>Troubleshooting Common Issues</h3>
      <p>Know when to seek professional help:</p>
      <ul>
        <li>Sudden range reduction</li>
        <li>Unusual sounds or vibrations</li>
        <li>Charging problems</li>
        <li>Dashboard warning lights</li>
        <li>Performance degradation</li>
      </ul>
      
      <p>Remember, proper maintenance not only ensures safety but also maximizes your investment's value. When in doubt, consult Go Ride Pe's technical support team for expert guidance.</p>
    `
    }
];
const categories = ["All", "Technology", "Safety", "Environment", "Community", "Maintenance"];
export function BlogPage({ onNavigate, user }) {
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    const [selectedBlog, setSelectedBlog] = React.useState(null);
    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);
    const handleBlogClick = (blogId) => {
        setSelectedBlog(blogId);
    };
    const handleBackToBlogList = () => {
        setSelectedBlog(null);
    };
    if (selectedBlog) {
        const blog = blogPosts.find(post => post.id === selectedBlog);
        if (!blog)
            return null;
        return (<div className="min-h-screen">
        {/* Blog Header */}
        <div className="relative h-96 bg-cover bg-center" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${blog.image}')`
            }}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-4xl">
              <Button variant="secondary" onClick={handleBackToBlogList} className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30">
                <ArrowLeft className="w-4 h-4 mr-2"/>
                Back to Blog
              </Button>
              <Badge className="mb-4 bg-green-100 text-green-800">
                {blog.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
              <div className="flex items-center gap-6 text-lg opacity-90">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5"/>
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5"/>
                  {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5"/>
                  {blog.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              {/* Share buttons */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b">
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen className="w-5 h-5"/>
                  <span>{blog.readTime}</span>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2"/>
                  Share
                </Button>
              </div>

              {/* Blog content */}
              <div className="prose prose-lg max-w-none blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} style={{
                lineHeight: '1.8',
                color: '#374151'
            }}/>

              {/* Author info */}
              <div className="mt-12 pt-8 border-t bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-green-600"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{blog.author}</h4>
                    <p className="text-gray-600">Go Ride Pe Team Member</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-16">
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts
                .filter(post => post.category === blog.category && post.id !== blog.id)
                .slice(0, 2)
                .map((relatedPost) => (<Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => handleBlogClick(relatedPost.id)}>
                      <div className="relative overflow-hidden">
                        <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                        <Badge className="absolute top-4 left-4 bg-green-100 text-green-800">
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-2 group-hover:text-green-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{relatedPost.author}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>))}
              </div>
            </motion.div>
          </div>
        </div>

        <Footer onNavigate={onNavigate}/>
      </div>);
    }
    return (<div className="min-h-screen">
      {/* Hero Section with EV Background */}
      <div className="relative h-96 bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop')`
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"/>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Go Ride Pe Blog</h1>
            <p className="text-xl opacity-90">
              Stay updated with the latest news, insights, and stories from the world of electric mobility
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (<Button key={category} variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className="rounded-full">
                {category}
              </Button>))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="w-full h-64 md:h-full object-cover"/>
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-green-100 text-green-800">
                    {filteredPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4"/>
                      {filteredPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4"/>
                      {filteredPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4"/>
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <Button className="group" onClick={() => handleBlogClick(filteredPosts[0].id)}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>)}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (<motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.1 }}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => handleBlogClick(post.id)}>
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                  <Badge className="absolute top-4 left-4 bg-green-100 text-green-800">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3"/>
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3"/>
                      {post.readTime}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </CardContent>
              </Card>
            </motion.div>))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-16">
          <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter for the latest updates on electric mobility
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg text-gray-900"/>
                <Button variant="secondary">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer onNavigate={onNavigate}/>
    </div>);
}
