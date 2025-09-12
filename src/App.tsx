import  { useState } from 'react';
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
    ArrowRight
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const services = [
        {
            icon: ChefHat,
            title: "Comida Casera Premium",
            description: "Preparamos platos tradicionales chilenos con un toque gourmet, usando ingredientes frescos de la región.",
            image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop"
        },
        {
            icon: Calendar,
            title: "Eventos Familiares",
            description: "Organizamos tus celebraciones especiales: cumpleaños, aniversarios, graduaciones y reuniones familiares.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
        }
    ];

    const testimonials = [
        {
            name: "María Hernández",
            text: "Emporio Gourmet hizo que el cumpleaños de mi mamá fuera perfecto. La comida estaba deliciosa y el servicio muy atento.",
            rating: 5
        },
        {
            name: "Carlos González",
            text: "Para nuestra celebración de aniversario, nos prepararon un menú increíble. Todo muy rico y bien presentado.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-amber-50">
            {/* Header Simple */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <ChefHat className="w-8 h-8 text-amber-600" />
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">Emporio Gourmet</h1>
                                <p className="text-sm text-gray-600">La Unión, Chile</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6">
                            <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors">Inicio</a>
                            <a href="#servicios" className="text-gray-700 hover:text-amber-600 transition-colors">Servicios</a>
                            <a href="#nosotros" className="text-gray-700 hover:text-amber-600 transition-colors">Nosotros</a>
                            <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors">Contacto</a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-3 pt-4">
                                <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
                                <a href="#servicios" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                                <a href="#nosotros" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
                                <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section Simple */}
            <section id="inicio" className="bg-gradient-to-br from-amber-100 to-orange-100 py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                        Sabores de <span className="text-amber-600">La Unión</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Comida casera con toque gourmet y organización de eventos familiares.
                        Llevamos el sabor tradicional chileno a tu mesa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                            Ver Menú <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Contactar
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nuestros Servicios
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Especialistas en comida casera con calidad gourmet y organización de eventos familiares
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <div className="flex items-center mb-4">
                                    <service.icon className="w-8 h-8 text-amber-600 mr-3" />
                                    <h4 className="text-xl font-bold text-gray-800">{service.title}</h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="nosotros" className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Una Familia de <span className="text-amber-600">La Unión</span>
                            </h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Somos una pequeña empresa familiar de La Unión que comenzó con la pasión
                                por cocinar y compartir los sabores tradicionales de nuestra región.
                                Lo que empezó en nuestra cocina familiar, hoy se ha convertido en
                                Emporio Gourmet.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Nos especializamos en preparar comida casera con un toque especial,
                                usando ingredientes frescos de productores locales. También ayudamos
                                a las familias de La Unión a celebrar sus momentos más importantes.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-2xl font-bold text-amber-600">3+</div>
                                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                                </div>
                                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-2xl font-bold text-amber-600">100%</div>
                                    <div className="text-sm text-gray-600">Familiar</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop"
                                alt="Cocinando en familia"
                                className="rounded-xl shadow-lg"
                            />
                            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-center">
                                    <Heart className="w-6 h-6 text-red-500 mr-2" />
                                    <div>
                                        <div className="font-bold text-gray-800">Hecho con Amor</div>
                                        <div className="text-sm text-gray-600">Tradición Familiar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Lo que Dicen Nuestros Vecinos
                        </h3>
                        <p className="text-gray-600">
                            Testimonios de familias de La Unión que han confiado en nosotros
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-amber-50 p-6 rounded-xl">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">
                                    "{testimonial.text}"
                                </p>
                                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                                <div className="text-sm text-gray-600">Vecina de La Unión</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-16 bg-gradient-to-br from-amber-100 to-orange-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Contáctanos
                        </h3>
                        <p className="text-gray-700">
                            Estamos aquí para hacer de tu evento algo especial
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div>
                            <h4 className="text-xl font-bold text-gray-800 mb-6">Información de Contacto</h4>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <Phone className="w-5 h-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">WhatsApp</div>
                                        <div className="text-gray-600">+56 9 8765 4321</div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <Mail className="w-5 h-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Email</div>
                                        <div className="text-gray-600">contacto@emporiogourmet.cl</div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <MapPin className="w-5 h-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Ubicación</div>
                                        <div className="text-gray-600">La Unión, Región de Los Ríos</div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-amber-200 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                        <Clock className="w-5 h-5 text-amber-700" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-800">Horarios</div>
                                        <div className="text-gray-600">Lun - Sáb: 10:00 AM - 7:00 PM</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h5 className="font-semibold text-gray-800 mb-3">Síguenos</h5>
                                <div className="flex space-x-3">
                                    <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors">
                                        <Facebook className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors">
                                        <Instagram className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-6">Escríbenos</h4>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none transition-colors"
                                />

                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none transition-colors"
                                />

                                <input
                                    type="text"
                                    placeholder="Asunto"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none transition-colors"
                                />

                                <textarea
                                    placeholder="Cuéntanos sobre tu evento o consulta"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                                />

                                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <ChefHat className="w-6 h-6 text-amber-400" />
                            <span className="text-xl font-bold">Emporio Gourmet</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Sabores tradicionales de La Unión con toque gourmet
                        </p>
                        <div className="flex justify-center space-x-6 text-sm text-gray-400">
                            <span>WhatsApp: +56 9 8765 4321</span>
                            <span>•</span>
                            <span>La Unión, Chile</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-500">
                            © 2025 Emporio Gourmet La Unión. Hecho con ❤️ para nuestra comunidad.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
