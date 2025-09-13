import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    ChefHat,
    Calendar,
    Star,
    Phone,
    Mail,
    MapPin,
    Clock,
    Heart,
    Instagram,
    Facebook,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Users,
    Award,
    Camera
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    // Carrusel de imágenes principales
    const heroImages = [
        "/images/hero-1.jpg",
        "/images/hero-2.jpg",
        "/images/hero-3.jpg"
    ];

    // Servicios principales
    const services = [
        {
            icon: ChefHat,
            title: "Almuerzos & Pastelería",
            subtitle: "Adaptados a tus necesidades",
            description: "Preparamos almuerzos personalizados y pastelería de especialidad con ingredientes frescos y presentación única.",
            image: "/images/almuerzos-1.jpg",
            features: ["Menús personalizados", "Pastelería artesanal", "Ingredientes frescos"]
        },
        {
            icon: Calendar,
            title: "Eventos & Celebraciones",
            subtitle: "Cócteles, coffees y más",
            description: "Organizamos cócteles, coffees, cumpleaños y todo tipo de celebraciones especiales con atención al detalle.",
            image: "/images/eventos-1.jpg",
            features: ["Cumpleaños únicos", "Cócteles elegantes", "Coffee breaks"]
        }
    ];

    // Galería completa - 16 fotos simétricas (4 por categoría)
    const gallery = [
        { src: "/images/almuerzos-1.jpg", alt: "Almuerzo especial", category: "Almuerzos" },
        { src: "/images/almuerzos-2.jpg", alt: "Almuerzo casero", category: "Almuerzos" },
        { src: "/images/almuerzos-3.jpg", alt: "Plato del día", category: "Almuerzos" },
        { src: "/images/almuerzos-4.jpg", alt: "Almuerzo gourmet", category: "Almuerzos" },
        { src: "/images/pasteleria-1.jpg", alt: "Torta de cumpleaños", category: "Pastelería" },
        { src: "/images/pasteleria-2.jpg", alt: "Torta especialidad", category: "Pastelería" },
        { src: "/images/pasteleria-3.jpg", alt: "Postres variados", category: "Pastelería" },
        { src: "/images/pasteleria-4.jpg", alt: "Pastelería artesanal", category: "Pastelería" },
        { src: "/images/eventos-1.jpg", alt: "Evento familiar", category: "Eventos" },
        { src: "/images/eventos-2.jpg", alt: "Celebración", category: "Eventos" },
        { src: "/images/eventos-3.jpg", alt: "Cóctel", category: "Eventos" },
        { src: "/images/eventos-4.jpg", alt: "Evento especial", category: "Eventos" },
        { src: "/images/coffees-1.jpg", alt: "Coffee break", category: "Coffees" },
        { src: "/images/coffees-2.jpg", alt: "Mesa de café", category: "Coffees" },
        { src: "/images/coffees-3.jpg", alt: "Coffee empresarial", category: "Coffees" },
        { src: "/images/coffees-4.jpg", alt: "Servicio de café", category: "Coffees" }
    ];

    const categories = ['Todos', 'Almuerzos', 'Pastelería', 'Eventos', 'Coffees'];

    const filteredGallery = selectedCategory === 'Todos'
        ? gallery
        : gallery.filter(item => item.category === selectedCategory);

    // Testimonios
    const testimonials = [
        {
            name: "María Hernández",
            text: "Los profiteroles de Emporio Gourmet son una obra de arte. El cumpleaños de mi hija fue perfecto gracias a ellos.",
            rating: 5,
            event: "Cumpleaños"
        },
        {
            name: "Carlos González",
            text: "El coffee break que organizaron para nuestra reunión familiar superó todas nuestras expectativas. Todo delicioso.",
            rating: 5,
            event: "Coffee Break"
        },
        {
            name: "Ana Rodríguez",
            text: "Sus almuerzos son únicos en La Unión. La presentación y el sabor son excepcionales.",
            rating: 5,
            event: "Almuerzo Especial"
        }
    ];

    // Funciones para enlaces
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const openWhatsApp = (message) => {
        const phoneNumber = "56950251021";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    // Carrusel automático
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
            {/* Header Elegante */}
            <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-rose-100">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-2 rounded-full">
                                <ChefHat className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                                    Emporio Gourmet
                                </h1>
                                <p className="text-sm text-gray-600 font-medium">La Unión, Los Ríos</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#inicio" onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group cursor-pointer">
                                Inicio
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#servicios" onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group cursor-pointer">
                                Servicios
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#galeria" onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group cursor-pointer">
                                Galería
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#nosotros" onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group cursor-pointer">
                                Nosotros
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
                            </a>
                            <button
                                onClick={() => scrollToSection('contacto')}
                                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-pink-600 transition-all font-medium shadow-lg"
                            >
                                Contacto
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-rose-100 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6 text-rose-600" /> : <Menu className="w-6 h-6 text-rose-600" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 pb-4 border-t border-rose-100">
                            <div className="flex flex-col space-y-4 pt-4">
                                <a href="#inicio" className="text-gray-700 hover:text-rose-600 transition-colors font-medium" onClick={() => { setIsMenuOpen(false); scrollToSection('inicio'); }}>Inicio</a>
                                <a href="#servicios" className="text-gray-700 hover:text-rose-600 transition-colors font-medium" onClick={() => { setIsMenuOpen(false); scrollToSection('servicios'); }}>Servicios</a>
                                <a href="#galeria" className="text-gray-700 hover:text-rose-600 transition-colors font-medium" onClick={() => { setIsMenuOpen(false); scrollToSection('galeria'); }}>Galería</a>
                                <a href="#nosotros" className="text-gray-700 hover:text-rose-600 transition-colors font-medium" onClick={() => { setIsMenuOpen(false); scrollToSection('nosotros'); }}>Nosotros</a>
                                <a href="#contacto" className="text-gray-700 hover:text-rose-600 transition-colors font-medium" onClick={() => { setIsMenuOpen(false); scrollToSection('contacto'); }}>Contacto</a>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section con Carrusel Mejorado */}
            <section id="inicio" className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <div className="relative w-full h-full">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 ${
                                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                        >
                            <img
                                src={image}
                                alt={`Emporio Gourmet ${index + 1}`}
                                className="w-full h-full object-cover"
                                style={{ objectPosition: 'center' }}
                            />
                        </div>
                    ))}

                    {/* Gradient Overlay Elegante */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-900/30 to-pink-900/20" />

                    {/* Controles del carrusel */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicadores Elegantes */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-12 h-1.5 rounded-full transition-all ${
                                    index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Contenido del Hero */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4 max-w-5xl">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              <span className="bg-gradient-to-r from-white to-rose-200 bg-clip-text text-transparent">
                Emporio
              </span>{' '}
                            <span className="text-amber-300 drop-shadow-lg">Gourmet</span>
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                            Almuerzos adaptados a tus necesidades, pastelería de especialidad y eventos únicos en La Unión
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => scrollToSection('servicios')}
                                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center cursor-pointer"
                            >
                                Ver Especialidades <ArrowRight className="ml-3 w-5 h-5" />
                            </button>
                            <button
                                onClick={() => openWhatsApp('Hola! Me interesa reservar un evento con Emporio Gourmet')}
                                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-10 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm cursor-pointer"
                            >
                                Reservar Evento
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section Mejorada */}
            <section id="servicios" className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nuestros Servicios
            </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Experiencias <span className="text-rose-600">Únicas</span>
                        </h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Combinamos tradición familiar con técnicas gourmet para crear momentos inolvidables
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-gradient-to-br from-white to-rose-50/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100">
                                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        style={{ objectPosition: 'center' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                <div className="flex items-center mb-4">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-800">{service.title}</h4>
                                        <p className="text-rose-600 font-medium">{service.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>

                                <div className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-3"></div>
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Camera className="w-4 h-4 inline mr-2" />
              Nuestros Trabajos
            </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Galería de <span className="text-rose-600">Creaciones</span>
                        </h3>
                        <p className="text-xl text-gray-600 mb-8">
                            Cada imagen cuenta una historia de sabor y dedicación
                        </p>

                        {/* Filtros de categoría */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
                                        selectedCategory === category
                                            ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg transform scale-105'
                                            : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 border border-rose-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredGallery.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-lg hover:shadow-xl transition-all duration-500">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    style={{ objectPosition: 'center' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="text-sm font-bold bg-gradient-to-r from-rose-400 to-pink-400 px-3 py-1 rounded-full inline-block mb-2">
                                        {item.category}
                                    </div>
                                    <div className="text-lg font-semibold">{item.alt}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="nosotros" className="py-20 bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50/30 to-pink-50/30 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
              <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Nuestra Historia
              </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                                Una Familia de <span className="text-rose-600">La Unión</span>
                            </h3>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Somos una empresa familiar de La Unión que comenzó con la pasión por crear experiencias gastronómicas únicas.
                                Nuestra historia nació en la cocina de casa, donde cada receta se preparaba con amor y dedicación.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Hoy, Emporio Gourmet se ha convertido en el lugar de confianza para almuerzos personalizados,
                                pastelería artesanal y eventos memorables en nuestra querida ciudad de La Unión.
                            </p>

                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="text-center bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800">3+</div>
                                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                                </div>
                                <div className="text-center bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800">100%</div>
                                    <div className="text-sm text-gray-600">Familiar</div>
                                </div>
                                <div className="text-center bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800">Local</div>
                                    <div className="text-sm text-gray-600">De La Unión</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/nosotros-1.jpg"
                                    alt="Emporio Gourmet familia"
                                    className="w-full h-[500px] object-cover"
                                    style={{ objectPosition: 'center' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-rose-100">
                                <div className="flex items-center">
                                    <Heart className="w-8 h-8 text-red-500 mr-3" />
                                    <div>
                                        <div className="font-bold text-gray-800 text-lg">Hecho con Amor</div>
                                        <div className="text-sm text-gray-600">Tradición Familiar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Testimonios
            </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Lo que Dicen Nuestros <span className="text-rose-600">Vecinos</span>
                        </h3>
                        <p className="text-xl text-gray-600">
                            La confianza de las familias de La Unión es nuestro mayor logro
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100">
                                <div className="flex mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <div className="border-t border-rose-100 pt-4">
                                    <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                                    <div className="text-rose-600 font-medium">{testimonial.event}</div>
                                    <div className="text-sm text-gray-500">Vecina de La Unión</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-20 bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Hablemos
            </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            <span className="text-rose-600">Contáctanos</span>
                        </h3>
                        <p className="text-xl text-gray-700">
                            Estamos aquí para hacer realidad tus celebraciones soñadas
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-8">Información de Contacto</h4>

                            <div className="space-y-6">
                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-lg">WhatsApp</div>
                                        <div className="text-gray-600 text-lg">+56 9 5025 1021</div>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-lg">Email</div>
                                        <div className="text-gray-600 text-lg">contacto@emporiogourmetchile.cl</div>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-lg">Dirección</div>
                                        <div className="text-gray-600">Pasaje Los Aromos 255, Sector Casas Azules</div>
                                        <div className="text-gray-600">La Unión, Los Ríos</div>
                                    </div>
                                </div>

                                <div className="flex items-center group">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800 text-lg">Horarios</div>
                                        <div className="text-gray-600">Lun - Sáb: 10:00 AM - 7:00 PM</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h5 className="font-semibold text-gray-800 mb-4 text-lg">Síguenos</h5>
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 p-3 rounded-full transition-all transform hover:scale-110 shadow-lg">
                                        <Facebook className="w-6 h-6 text-white" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/blackypanter/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                                    >
                                        <Instagram className="w-6 h-6 text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white to-rose-50/50 p-8 rounded-3xl shadow-xl border border-rose-100">
                            <h4 className="text-2xl font-bold text-gray-800 mb-8">Escríbenos</h4>

                            <div className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    id="contact-name"
                                    className="w-full px-6 py-4 rounded-2xl border border-rose-200 focus:border-rose-500 focus:outline-none transition-colors bg-white shadow-sm"
                                />

                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    id="contact-email"
                                    className="w-full px-6 py-4 rounded-2xl border border-rose-200 focus:border-rose-500 focus:outline-none transition-colors bg-white shadow-sm"
                                />

                                <input
                                    type="text"
                                    placeholder="Asunto"
                                    id="contact-subject"
                                    className="w-full px-6 py-4 rounded-2xl border border-rose-200 focus:border-rose-500 focus:outline-none transition-colors bg-white shadow-sm"
                                />

                                <textarea
                                    placeholder="Cuéntanos sobre tu evento o consulta..."
                                    rows={5}
                                    id="contact-message"
                                    className="w-full px-6 py-4 rounded-2xl border border-rose-200 focus:border-rose-500 focus:outline-none transition-colors resize-none bg-white shadow-sm"
                                />

                                <button
                                    onClick={() => {
                                        const name = document.getElementById('contact-name').value || '[Nombre]';
                                        const email = document.getElementById('contact-email').value || '';
                                        const subject = document.getElementById('contact-subject').value || '';
                                        const message = document.getElementById('contact-message').value || '';
                                        const fullMessage = `Hola! Soy ${name} ${email ? `(${email})` : ''} y me interesa contactar con Emporio Gourmet.${subject ? `\n\nAsunto: ${subject}` : ''}${message ? `\n\nMensaje: ${message}` : ''}`;
                                        openWhatsApp(fullMessage);
                                    }}
                                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer"
                                >
                                    Enviar por WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Elegante */}
            <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-2 rounded-full">
                                <ChefHat className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Emporio Gourmet
              </span>
                        </div>
                        <p className="text-gray-300 mb-6 text-lg max-w-2xl mx-auto">
                            Creando momentos especiales en La Unión con sabores únicos y atención personalizada
                        </p>
                        <div className="flex justify-center space-x-8 text-gray-400 mb-6">
                            <span className="hover:text-rose-400 transition-colors">WhatsApp: +56 9 5025 1021</span>
                            <span>•</span>
                            <span className="hover:text-rose-400 transition-colors">La Unión, Los Ríos</span>
                        </div>
                        <div className="border-t border-gray-700 pt-6 text-gray-500">
                            <p>© 2025 Emporio Gourmet La Unión. Hecho con ❤️ para nuestra comunidad.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
