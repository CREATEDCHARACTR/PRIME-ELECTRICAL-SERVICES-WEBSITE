
import React from 'react';
import type { Service, Testimonial, NavLink, Project, ServiceCategory, BlogPost } from './types';
import { BoltIcon, HomeModernIcon, WrenchScrewdriverIcon, LightBulbIcon, ShieldCheckIcon, SunIcon } from './components/icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    icon: BoltIcon,
    title: 'EV Charger Installation',
    description: 'Expert installation of all major brands of electric vehicle chargers for your home or business.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Electrical Panel Upgrades',
    description: 'Modernize your electrical system for safety and capacity, accommodating new appliances and technology.',
  },
  {
    icon: HomeModernIcon,
    title: 'Custom Residential Wiring',
    description: 'Comprehensive wiring solutions for new constructions, remodels, and additions, built to code.',
  },
  {
    icon: LightBulbIcon,
    title: 'Lighting Solutions',
    description: 'Design and installation of stylish and efficient indoor/outdoor lighting, including LED retrofits.',
  },
   {
    icon: ShieldCheckIcon,
    title: 'Safety Inspections',
    description: 'Thorough electrical safety inspections to identify potential hazards and ensure code compliance.',
  },
  {
    icon: SunIcon,
    title: 'Generator & Backup Power',
    description: 'Installation of standby generators and backup power solutions to keep you running during outages.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Prime Electrical was fantastic. The master electrician was professional, on-time, and did a flawless job on our panel upgrade. Highly recommend this family business!",
    author: 'Sarah J.',
    location: 'Denver, CO',
  },
  {
    quote: "They installed our EV charger quickly and for a fair price. The process was smooth from the initial quote to the final inspection. Great service!",
    author: 'Mike R.',
    location: 'Aurora, CO',
  },
  {
    quote: "As a contractor, I need reliable electricians. Prime Electrical is my go-to. They are licensed, insured, and their work is always top-notch. True professionals.",
    author: 'David Chen',
    location: 'Boulder, CO',
  },
];

export const PROJECTS: Project[] = [
  {
    image: 'https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/e00484c856b4d343994ed4bcd92f7129027375d8/78264FE6-6EF4-448B-B644-FCFC3F68E935.png',
    title: 'Commercial LED Lighting Retrofit',
    location: 'Denver, CO',
    category: 'Commercial',
    description: 'Upgraded the entire lighting system for a downtown office building to energy-efficient LEDs, reducing their energy costs by 40%.',
    path: '#',
    alt: 'Brightly lit commercial office space after an energy-efficient LED lighting retrofit.'
  },
  {
    image: 'https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/bd78920e337541b74808b8b1fb6fda493563ce91/ABA9E50A-D5DF-4792-94FF-FFFA7EF9E614.png',
    title: 'Full Home Rewire & Panel Upgrade',
    location: 'Boulder, CO',
    category: 'Residential',
    description: 'Completed a full rewire for a historic home, bringing it up to modern code while preserving its character. Installed a new 200A panel.',
    path: '#',
    alt: 'A modern, safe 200A electrical panel installed during a full home rewire in a historic Boulder house.'
  },
  {
    image: 'https://raw.githubusercontent.com/CREATEDCHARACTR/PRIME-ELECTRICAL-SERVICES-WEBSITE/main/9D320616-829A-4460-86B2-9CCF026DC4AA.png',
    title: 'EV Charging Station Installation',
    location: 'Aurora, CO',
    category: 'Residential',
    description: 'Installed a Level 2 EV charging station in a garage, including a dedicated circuit for fast, reliable charging.',
    path: '#',
    alt: 'A professional electrician installing a Tesla wall connector for a home EV charging station.'
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        emoji: '🏠',
        title: 'Residential Electrical Services',
        description: 'For homeowners, remodels, and general service work:',
        services: [
            'Electrical troubleshooting & repairs',
            'Panel upgrades & circuit breaker replacement',
            'Lighting design & installation (indoor, outdoor, landscape)',
            'Ceiling fan, outlet, and switch installation',
            'Whole-home surge protection',
            'Smart home wiring & automation setup',
            'Home inspections & code corrections',
            'Remodel and renovation wiring',
            'EV (electric vehicle) charger installation',
            'Generator hookup & transfer switch installation',
        ],
    },
    {
        emoji: '🏢',
        title: 'Commercial Electrical Services',
        description: 'For small businesses, offices, retail spaces, and new builds:',
        services: [
            'Tenant improvements and build-outs',
            'Electrical design & layout for new construction',
            'LED retrofits & lighting upgrades',
            'Dedicated circuits for machinery or HVAC systems',
            'Emergency lighting & exit signs',
            'Electrical maintenance contracts',
            'Energy efficiency upgrades',
            'Power distribution and load balancing',
            'Service panel installs and replacements',
            'Safety inspections and compliance testing',
        ],
    },
    {
        emoji: '☀️',
        title: 'Solar & Energy Solutions',
        description: 'For property owners looking to save on energy:',
        services: [
            'Residential & commercial solar panel installation',
            'Backup battery systems (Tesla Powerwall, Enphase, etc.)',
            'Off-grid and hybrid system wiring',
            'Solar maintenance and troubleshooting',
            'System monitoring and optimization',
            'EV charger and solar integration',
        ],
    },
    {
        emoji: '🏗️',
        title: 'Construction & Remodeling',
        description: 'For GCs, builders, and large-scale renovations:',
        services: [
            'Full wiring for remodels and additions',
            'New construction wiring (residential & commercial)',
            'Rough-in & final trim electrical work',
            'Lighting control system setup',
            'Project coordination with GCs and other trades',
        ],
    },
    {
        emoji: '⚙️',
        title: 'Specialized Services',
        description: 'For unique and technology-focused electrical needs:',
        services: [
            'Data & communication cabling (CAT5/CAT6/CAT8, security cameras)',
            'Low-voltage wiring for alarms, audio, and video',
            'Temporary power setup for construction sites',
            'Grounding and bonding solutions',
            'Infrared testing and system diagnostics',
        ],
    },
    {
        emoji: '🔧',
        title: 'Emergency & Maintenance',
        description: 'For urgent repairs and proactive system care:',
        services: [
            '24/7 emergency electrical service',
            'Storm or power surge repair',
            'Preventive maintenance programs',
            'Regular safety and compliance inspections',
        ],
    },
];


export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'signs-your-panel-needs-upgrade',
    title: '5 Signs Your Electrical Panel Needs an Upgrade',
    author: 'John Doe, Master Electrician',
    date: 'July 15, 2024',
    image: 'https://picsum.photos/seed/blog1/1200/800.webp',
    alt: 'An old, outdated electrical panel with fuses.',
    excerpt: 'Your electrical panel is the heart of your home\'s electrical system. But how do you know when it\'s time for a vital upgrade? Here are five key signs to watch out for...',
    content: React.createElement('div', null,
      React.createElement('p', null, "Your electrical panel, or breaker box, is the heart of your home's electrical system. It takes power from the utility company and distributes it throughout your house. But an outdated or overworked panel isn’t just an inconvenience—it’s a major safety hazard. How do you know when it's time for this vital upgrade? Here are five key signs to watch out for."),
      React.createElement('h3', null, "1. Constantly Tripping Breakers"),
      React.createElement('p', null, "A circuit breaker trips to prevent overheating when a circuit is overloaded. While occasional trips are normal, frequent tripping is a red flag. It means your panel is struggling to keep up with your home's electricity demands. This is common in older homes that weren't designed for the dozens of electronic devices we use today."),
      React.createElement('h3', null, "2. Flickering or Dimming Lights"),
      React.createElement('p', null, "If your lights dim every time you turn on a major appliance like the microwave or A/C, it's a sign that your electrical system is strained. This indicates an inconsistent power supply from the panel, which can damage sensitive electronics over time and points to a system that needs modernization."),
      React.createElement('h3', null, "3. Your Home Still Uses a Fuse Box"),
      React.createElement('p', null, "If your home has a fuse box instead of a circuit breaker panel, it's a clear sign you need an upgrade. Fuse boxes are an outdated technology and are not designed to handle the electrical loads of modern homes. They also pose a greater fire risk, and many insurance companies will charge higher premiums for homes with them."),
      React.createElement('h3', null, "4. You're Planning Major Renovations or New Appliances"),
      React.createElement('p', null, "Adding a new room, a hot tub, an electric vehicle (EV) charger, or a modern HVAC system will significantly increase your home's power needs. An older 60-amp or 100-amp panel may not have the capacity to handle this new load safely. Upgrading to a 200-amp panel is often a necessary part of any major home improvement project."),
      React.createElement('h3', null, "5. Signs of Electrical Damage"),
      React.createElement('p', null, "Look for physical signs of wear and tear on your panel. A persistent burning smell near the panel, rust or corrosion on the breakers, or scorch marks are all urgent warning signs. If you notice any of these, contact a licensed electrician immediately as you could be at risk of an electrical fire."),
      React.createElement('p', null,
        React.createElement('strong', null, "Conclusion:"),
        " Upgrading your electrical panel is a crucial investment in your home's safety and functionality. If any of these signs sound familiar, don't wait. Contact Prime Electrical Services for a professional inspection and a free quote on a panel upgrade."
      )
    ),
  },
  {
    slug: 'guide-to-installing-ev-charger',
    title: 'The Ultimate Guide to Installing an EV Charger at Home',
    author: 'John Doe, Master Electrician',
    date: 'July 10, 2024',
    image: 'https://picsum.photos/seed/blog2/1200/800.webp',
    alt: 'A sleek, modern EV charger mounted on a garage wall next to an electric car.',
    excerpt: 'Thinking about buying an electric vehicle? One of the first questions you\'ll have is about charging. Here’s what you need to know about installing an EV charger at home...',
    content: React.createElement('div', null,
      React.createElement('p', null, "Congratulations on considering an electric vehicle (EV)! They're great for the environment and can save you money on fuel. But to get the most out of your EV, you'll want the convenience of charging it at home. This guide will walk you through the basics of home EV charger installation."),
      React.createElement('h3', null, "Understanding Charger Levels"),
      React.createElement('p', null, "There are three main levels of EV charging:"),
      React.createElement('ul', null,
        React.createElement('li', null,
          React.createElement('strong', null, "Level 1:"),
          " This is the simplest option. It uses a standard 120-volt wall outlet, the same kind you use for your phone or TV. While it requires no special installation, it's very slow, providing only 3-5 miles of range per hour of charging. It's a decent backup but not a practical primary solution."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Level 2:"),
          " This is the sweet spot for home charging. Level 2 chargers use a 240-volt circuit, similar to an electric dryer or oven. They provide 25-40 miles of range per hour, meaning you can fully charge your EV overnight. This is the type of charger we almost always recommend and install."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Level 3 (DC Fast Charging):"),
          " These are the superchargers you see at public stations. They are prohibitively expensive and require a commercial-grade power supply, making them unsuitable for home installation."
        )
      ),
      React.createElement('h3', null, "Why Professional Installation is Crucial"),
      React.createElement('p', null, "Installing a Level 2 charger is not a DIY project. It involves running a new, dedicated 240-volt circuit from your electrical panel to the charger's location (usually the garage). A licensed electrician is required to:"),
      React.createElement('ul', null,
        React.createElement('li', null,
          React.createElement('strong', null, "Assess Your Electrical Panel:"),
          " We'll determine if your current panel has enough capacity to handle the new circuit. If not, a panel upgrade may be necessary."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Ensure Code Compliance:"),
          " We ensure the installation meets all local and National Electrical Code (NEC) requirements for safety."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Handle Permitting:"),
          " Most municipalities require a permit for this type of work. We handle the paperwork and inspections for you."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Install the Right Wiring and Breaker:"),
          " Using the correct gauge of wire and the proper circuit breaker is critical for preventing overheating and fire hazards."
        )
      ),
      React.createElement('h3', null, "The Installation Process"),
      React.createElement('p', null, "Here’s what you can expect when you hire us:"),
      React.createElement('ol', null,
        React.createElement('li', null,
          React.createElement('strong', null, "Consultation:"),
          " We discuss your needs, vehicle, and desired charger location. We provide a free, upfront quote."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Installation:"),
          " Our master electrician installs the new circuit, outlet, and mounts the charger."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Inspection:"),
          " We coordinate the final inspection with your local building department."
        ),
        React.createElement('li', null,
          React.createElement('strong', null, "Demonstration:"),
          " We walk you through how to use your new charger and answer any questions."
        )
      ),
      React.createElement('p', null,
        "Ready to enjoy the convenience of fast, reliable home charging? ",
        React.createElement('a', { href: "/contact", className: "text-prime-gold underline" }, "Contact Prime Electrical Services today"),
        " to schedule your EV charger installation."
      )
    ),
  },
  {
    slug: 'why-switch-to-led-lighting',
    title: 'Why You Should Switch to LED Lighting Today',
    author: 'John Doe, Master Electrician',
    date: 'July 5, 2024',
    image: 'https://picsum.photos/seed/blog3/1200/800.webp',
    alt: 'A modern kitchen with bright, energy-efficient LED recessed lighting.',
    excerpt: 'Still using old incandescent bulbs? Making the switch to LED lighting is one of the smartest upgrades you can make for your home. Here’s why it’s a bright idea...',
    content: React.createElement('div', null,
      React.createElement('p', null, "If you're still using old-fashioned incandescent or even CFL bulbs in your home, you're missing out on significant benefits. Light Emitting Diode (LED) technology has revolutionized the lighting industry, and making the switch is one of the easiest and most impactful upgrades for any homeowner. Here’s why switching to LED lighting is such a bright idea."),
      React.createElement('h3', null, "1. Incredible Energy Efficiency"),
      React.createElement('p', null, "This is the number one reason to switch. LEDs are dramatically more efficient than other types of lighting. They use up to 80% less energy than incandescent bulbs to produce the same amount of light (lumens). This isn't just a small saving; it translates directly into a lower monthly electric bill."),
      React.createElement('h3', null, "2. Unbeatable Lifespan"),
      React.createElement('p', null, "Are you tired of constantly changing lightbulbs? An average LED bulb can last 25,000 hours or more—that's over 20 years with typical home use! Compare that to the 1,000-hour lifespan of an incandescent bulb. You'll save money on replacement bulbs and the hassle of getting out the ladder."),
      React.createElement('h3', null, "3. Superior Light Quality and Design Flexibility"),
      React.createElement('p', null, "Gone are the days of harsh, blue-toned LEDs. Modern LEDs are available in a full spectrum of colors and temperatures, from cozy warm whites to crisp, energizing daylight tones. Their compact size allows for incredible design flexibility, enabling sleek and modern fixtures like recessed lighting, under-cabinet strips, and landscape lighting that were previously impossible."),
      React.createElement('h3', null, "4. Enhanced Safety"),
      React.createElement('p', null, "Incandescent bulbs waste most of their energy as heat. They can get extremely hot, posing a burn and fire risk. LEDs, on the other hand, run significantly cooler to the touch, making them a much safer choice, especially in homes with children and pets or in enclosed fixtures."),
      React.createElement('h3', null, "5. Environmentally Friendly"),
      React.createElement('p', null, "Because they use less energy, LEDs reduce your carbon footprint. Their long lifespan also means fewer bulbs end up in landfills. Unlike CFL bulbs, LEDs contain no mercury, making them easier and safer to dispose of at the end of their long life."),
      React.createElement('p', null,
        React.createElement('strong', null, "Ready to make the switch?"),
        " From replacing a few bulbs to designing a full home lighting retrofit, Prime Electrical Services can help you harness the power of LED technology. Contact us today for a lighting consultation."
      )
    ),
  },
];
