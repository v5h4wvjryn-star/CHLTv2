import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award, Star, CheckCircle, Menu, X, ChevronRight, Leaf, Scissors, TreeDeciduous, Droplets, AlertTriangle, Calendar } from 'lucide-react';

const CircleHWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    propertySize: '',
    message: '',
    urgency: 'routine'
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <TreeDeciduous className="w-12 h-12" />,
      title: "Tree Services",
      subtitle: "Expert Care & Removal",
      description: "Professional tree removal, trimming, pruning, and health assessments by ISA Certified Arborists.",
      features: ["Emergency Storm Damage", "Tree Removal & Stump Grinding", "Crown Thinning & Shaping", "Disease Diagnosis & Treatment"],
      priceRange: "$$$"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Lawn Care",
      subtitle: "Year-Round Excellence",
      description: "Comprehensive lawn maintenance programs designed for Texas climate and soil conditions.",
      features: ["Fertilization Programs", "Weed & Pest Control", "Aeration & Overseeding", "Seasonal Treatments"],
      priceRange: "$$"
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Landscape Maintenance",
      subtitle: "Keep It Beautiful",
      description: "Regular maintenance to keep your property looking pristine year-round.",
      features: ["Shrub Trimming & Shaping", "Mulching & Bed Maintenance", "Seasonal Cleanup", "Commercial Services"],
      priceRange: "$$"
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Irrigation Services",
      subtitle: "Smart Water Management",
      description: "Professional irrigation system installation, repair, and optimization for water efficiency.",
      features: ["System Installation", "Repair & Maintenance", "Winterization", "Smart Controller Upgrades"],
      priceRange: "$$-$$$"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "North Richland Hills",
      rating: 5,
      text: "Circle H removed two massive oak trees that were threatening my roof. Professional, fast, and cleaned up everything perfectly. Best tree service in DFW!",
      service: "Tree Removal"
    },
    {
      name: "Mike Torres",
      location: "Keller",
      rating: 5,
      text: "Been using them for lawn care for 3 years. My yard has never looked better. They actually care about the results, not just showing up.",
      service: "Lawn Care"
    },
    {
      name: "Jennifer Martinez",
      location: "Southlake",
      rating: 5,
      text: "Emergency tree service after the storm. They came out same day and handled everything with our insurance. True professionals.",
      service: "Emergency Service"
    }
  ];

  const beforeAfter = [
    { before: "Overgrown, diseased tree threatening property", after: "Safe removal, stump ground, area restored" },
    { before: "Patchy, weed-infested lawn", after: "Thick, green, healthy turf" },
    { before: "Storm-damaged trees and debris", after: "Clean, safe, landscape restored" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would submit to your backend/CRM
    alert('Quote request submitted! We\'ll contact you within 2 hours during business hours.');
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar - Contact Info */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-gray-200">
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-600" />
                <span>Mon-Sat: 7AM-7PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Serving DFW Metroplex</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:817-555-TREE" className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold">
                <Phone className="w-4 h-4" />
                <span>(817) 555-TREE</span>
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                <TreeDeciduous className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Circle H</h1>
                <p className="text-xs text-gray-600">Tree & Lawn Professionals</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-600 font-medium transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium transition">Reviews</a>
              <a href="#gallery" className="text-gray-700 hover:text-green-600 font-medium transition">Gallery</a>
              <a href="#contact" className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 font-semibold transition shadow-lg shadow-green-600/30">
                Get Free Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Services</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Reviews</a>
              <a href="#gallery" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Gallery</a>
              <a href="tel:817-555-TREE" className="flex items-center space-x-2 py-2 text-green-600 font-semibold">
                <Phone className="w-5 h-5" />
                <span>(817) 555-TREE</span>
              </a>
              <a href="#contact" className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold">
                Get Free Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                <span>ISA Certified Arborists • Fully Insured</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Tree & Lawn Care
                <span className="text-green-600"> You Can Trust</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Serving North Texas for over 15 years with expert tree services, comprehensive lawn care, and landscape maintenance. Same-day emergency response available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact" className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 font-semibold text-lg transition shadow-xl shadow-green-600/30 group">
                  Get Free Quote
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </a>
                <a href="tel:817-555-TREE" className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-lg transition border-2 border-gray-200">
                  <Phone className="w-5 h-5 mr-2" />
                  (817) 555-TREE
                </a>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-600 to-green-800 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                  <div>
                    <TreeDeciduous className="w-32 h-32 mx-auto mb-4 opacity-20" />
                    <p className="text-lg opacity-75">[Professional work photo placeholder]</p>
                    <p className="text-sm opacity-50 mt-2">Team working on tree removal or lawn maintenance</p>
                  </div>
                </div>
              </div>
              
              {/* Trust Badges Floating */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-xl">
                    <Star className="w-8 h-8 text-yellow-500 fill-current" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">500+ Reviews</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Years Serving DFW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-3 mb-3 md:mb-0">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
              <span className="font-semibold text-lg">Storm Damage? Tree Emergency?</span>
            </div>
            <a href="tel:817-555-TREE" className="bg-white text-red-600 px-6 py-2 rounded-lg hover:bg-gray-100 font-bold transition">
              24/7 Emergency Response: (817) 555-TREE
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tree and lawn care solutions backed by ISA certified arborists and industry-leading equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-green-600 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-green-100 p-4 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
                    {service.icon}
                  </div>
                  <span className="text-lg font-bold text-green-600">{service.priceRange}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-green-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Request Quote
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Circle H?
            </h2>
            <p className="text-xl text-gray-600">
              More than just a tree and lawn company
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "ISA Certified Arborists",
                description: "Our team includes ISA Certified Arborists with extensive knowledge of tree biology, proper care techniques, and safety protocols."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Fully Licensed & Insured",
                description: "$2M liability insurance and workers' comp coverage. Your property and our team are protected on every job."
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Same-Day Emergency Service",
                description: "Storm damage? Dangerous tree? We offer 24/7 emergency response to protect your property when you need it most."
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "500+ Five-Star Reviews",
                description: "Consistently rated as one of DFW's top tree and lawn services. Our reputation speaks for itself."
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "Satisfaction Guaranteed",
                description: "We don't just show up - we deliver results. If you're not completely satisfied, we'll make it right."
              },
              {
                icon: <TreeDeciduous className="w-12 h-12" />,
                title: "15+ Years Experience",
                description: "Serving North Texas since 2008. We understand local climate, soil conditions, and native species."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                <div className="bg-green-100 w-20 h-20 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real customers in your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 hover:shadow-xl transition">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                
                <div className="border-t border-green-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-green-600 font-semibold mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg group">
              Read All 500+ Reviews on Google
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-300">
              See the Circle H difference in action
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden hover:bg-white/20 transition">
                <div className="aspect-video bg-gray-700 flex items-center justify-center">
                  <p className="text-center px-4 text-sm">[Before photo placeholder]</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">BEFORE</span>
                  </div>
                  <p className="text-gray-300 mb-4">{item.before}</p>
                </div>
                <div className="aspect-video bg-green-700 flex items-center justify-center">
                  <p className="text-center px-4 text-sm">[After photo placeholder]</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">AFTER</span>
                  </div>
                  <p className="text-gray-300">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-gray-600">
              Response within 2 hours during business hours • No obligation • Fully transparent pricing
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:outline-none transition"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:outline-none transition"
                    placeholder="(817) 555-1234"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="tree-removal">Tree Removal</option>
                    <option value="tree-trimming">Tree Trimming/Pruning</option>
                    <option value="stump-grinding">Stump Grinding</option>
                    <option value="lawn-care">Lawn Care Program</option>
                    <option value="landscape-maintenance">Landscape Maintenance</option>
                    <option value="irrigation">Irrigation Services</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Size *
                  </label>
                  <select
                    name="propertySize"
                    required
                    value={formData.propertySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:outline-none transition"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (< 1/4 acre)</option>
                    <option value="medium">Medium (1/4 - 1/2 acre)</option>
                    <option value="large">Large (1/2 - 1 acre)</option>
                    <option value="xlarge">Extra Large (1+ acres)</option>
                    <option value="commercial">Commercial Property</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Urgency
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'emergency', label: 'Emergency (ASAP)', color: 'red' },
                    { value: 'urgent', label: 'Urgent (This Week)', color: 'orange' },
                    { value: 'routine', label: 'Routine (This Month)', color: 'green' },
                    { value: 'planning', label: 'Just Planning', color: 'blue' }
                  ].map(option => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, urgency: option.value })}
                      className={`px-4 py-2 rounded-lg font-semibold transition ${
                        formData.urgency === option.value
                          ? `bg-${option.color}-600 text-white`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us More About Your Project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:outline-none transition resize-none"
                  placeholder="Describe what you need help with, any specific concerns, preferred timeline, etc."
                />
              </div>

              <div className="flex items-start space-x-3 bg-green-50 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">What happens next?</p>
                  <p>We'll review your request and call you within 2 hours (during business hours) to discuss your needs and schedule a free on-site estimate.</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 font-bold text-lg transition shadow-xl shadow-green-600/30 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-6 h-6" />
                <span>Request Free Quote</span>
              </button>

              <p className="text-center text-sm text-gray-600">
                Or call us directly: <a href="tel:817-555-TREE" className="text-green-600 font-semibold hover:text-green-700">(817) 555-TREE</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                  <TreeDeciduous className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Circle H</h3>
                  <p className="text-sm text-gray-400">Tree & Lawn Professionals</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional tree and lawn care serving the DFW Metroplex since 2008.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition">Tree Removal</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Tree Trimming & Pruning</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Stump Grinding</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Lawn Care Programs</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Landscape Maintenance</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Emergency Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-green-400 transition">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-green-400 transition">Reviews</a></li>
                <li><a href="#gallery" className="hover:text-green-400 transition">Gallery</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">(817) 555-TREE</p>
                    <p className="text-sm">24/7 Emergency Line</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>info@circleh.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>Serving DFW Metroplex</p>
                    <p className="text-sm">North Richland Hills, TX</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Circle H Tree & Lawn. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="tel:817-555-TREE"
          className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full shadow-2xl hover:bg-green-700 transition animate-pulse"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default CircleHWebsite;