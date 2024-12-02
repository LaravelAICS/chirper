import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)

export default function Dashboard() {

    const featuredProductsRef = useRef(null); // Create a ref for the Featured Products section

    const scrollToFeaturedProducts = () => {
        if (featuredProductsRef.current) {
            featuredProductsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Bike Parts" />

            <div className="container-main">

                {/* Hero Section with Static Carousel */}
                <section className="hero text-center">
                    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="10000">
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active first-line:text-center">
                                <img src="/images/bike-banner.jpg" className="d-block w-100" alt="" />
                                <div className="carousel-caption">
                                    <h1 className="hero-title">Discover Top Bike Parts</h1>
                                    <p className="hero-description">Enhance your riding experience with the best components. Explore our collection of bike parts designed for durability and performance.</p>
                                    <button className="btn btn-primary hero-btn" onClick={scrollToFeaturedProducts}>Find Out More</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/bike2.jpeg" className="d-block w-100" alt="Bike 2" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h1 className="hero-title">Performance at Its Best</h1>
                                    <p className="hero-description">Ride with confidence using top-tier bike components tailored for performance and reliability.</p>
                                    <button className="btn btn-primary hero-btn" onClick={scrollToFeaturedProducts}>Find Out More</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/bike3.jpeg" className="d-block w-100" alt="Bike 3" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h1 className="hero-title">Custom Build Your Ride</h1>
                                    <p className="hero-description">Personalize your bike with premium components and accessories for the perfect fit.</p>
                                    <button className="btn btn-primary hero-btn" onClick={scrollToFeaturedProducts}>Find Out More</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/bike2.jpeg" className="d-block w-100" alt="Bike 2" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h1 className="hero-title">Performance at Its Best</h1>
                                    <p className="hero-description">Ride with confidence using top-tier bike components tailored for performance and reliability.</p>
                                    <button className="btn btn-primary hero-btn" onClick={scrollToFeaturedProducts}>Find Out More</button>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/bike3.jpeg" className="d-block w-100" alt="Bike 3" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <h1 className="hero-title">Custom Build Your Ride</h1>
                                    <p className="hero-description">Personalize your bike with premium components and accessories for the perfect fit.</p>
                                    <button className="btn btn-primary hero-btn" onClick={scrollToFeaturedProducts}>Find Out More</button>
                                </div>
                            </div>
                        </div>


                        {/* Carousel Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                <div className="container-main">
                        <section className="intro-section">
                            <div className="intro-header">
                                <h1>Welcome to Bike Parts Classification Webpage</h1>
                                <div className="header-underline"></div>
                            </div>

                            <div className="intro-content">
                                <p>
                                    Bike parts classification plays a vital role in cycling, influencing performance, comfort, and overall experience. Each component is designed to enhance bike efficiency and help riders navigate various terrains.
                                </p>
                                <div className="feature-cards">
                                    <div className="feature-card">
                                        <img src="/images/suspension.jpg" alt="Suspension Forks" />
                                        <h3>Suspension Forks</h3>
                                        <p>Absorb shocks and smooth out rough trails, providing better control during rugged rides.</p>
                                    </div>
                                    <div className="feature-card">
                                        <img src="/images/group.jpg" alt="Groupset" />
                                        <h3>Groupset</h3>
                                        <p>Essential for smooth and efficient shifting, contributing to the overall performance of the bike.</p>
                                    </div>
                                    <div className="feature-card">
                                        <img src="/images/brake.jpg" alt="Braking Systems" />
                                        <h3>Braking Systems</h3>
                                        <p>Hydraulic brakes offer exceptional stopping power and control, ensuring rider safety.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>





                {/* Product Categories */}
                <section className="categories">
                    <h2 className="section-title">Product Categories</h2>
                    <div className="header-underline"></div>
                    <div className="category-list">
                        <div className="category-item">
                            <img src="/images/bike-frame.jpeg" alt="Frames" className="category-image" />
                            <h3>Frames</h3>
                        </div>
                        <div className="category-item">
                            <img src="/images/bike-wheels.jpeg" alt="Wheels" className="category-image" />
                            <h3>Wheels</h3>
                        </div>
                        <div className="category-item">
                            <img src="/images/accessories.jpg" alt="Accessories" className="category-image" />
                            <h3>Accessories</h3>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                    <section className="text-center featured-products">
                        <h2 className="section-title">Featured Products</h2>
                        <div className="header-underline"></div>
                        <div className="product-list">
                            {[
                                {
                                    id: "shimano",
                                    name: "Shimano Groupset",
                                    price: "$200",
                                    image: "/images/shimano.jpg",
                                    details: "Shimano Groupset is known for its high performance and durability. Ideal for road and mountain biking.",
                                },
                                {
                                    id: "rockshox",
                                    name: "Rockshox Fork",
                                    price: "$300",
                                    image: "/images/rockshox.jpeg",
                                    details: "Rockshox Fork offers superior shock absorption and control, perfect for rugged terrains.",
                                },
                                {
                                    id: "fox",
                                    name: "Fox Suspension",
                                    price: "$350",
                                    image: "/images/fox.jpeg",
                                    details: "Fox Suspension provides unparalleled stability and performance on challenging trails.",
                                },
                                {
                                    id: "ragusa",
                                    name: "Ragusa Parts",
                                    price: "$200",
                                    image: "/images/ragusa.jpeg",
                                    details: "Ragusa Parts are lightweight, durable, and perfect for enhancing bike efficiency.",
                                },
                                {
                                    id: "dartmoor",
                                    name: "Dartmoor",
                                    price: "$300",
                                    image: "/images/dartmoor.jpeg",
                                    details: "Dartmoor components offer a great balance of style and functionality for freestyle biking.",
                                },
                                {
                                    id: "meroca",
                                    name: "Meroca",
                                    price: "$350",
                                    image: "/images/meroca.jpeg",
                                    details: "Meroca provides premium-quality bike components for both professionals and enthusiasts.",
                                },
                                {
                                    id: "maxxis",
                                    name: "Maxxis",
                                    price: "$300",
                                    image: "/images/maxxis.jpeg",
                                    details: "Maxxis tires are designed for maximum grip and durability across diverse terrains.",
                                },
                                {
                                    id: "ixfjiangkun",
                                    name: "IXF Jiangkun",
                                    price: "$350",
                                    image: "/images/IXFJiangkun.jpeg",
                                    details: "IXF Jiangkun is known for its lightweight and precise engineering, perfect for high-performance bikes.",
                                },
                            ].map((product) => (
                                <div key={product.id} className="product-item">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                    <h3>{product.name}</h3>
                                    <p>From {product.price}</p>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#${product.id}Modal`}
                                    >
                                        View Product
                                    </button>

                                    {/* Product Modal */}
                                    <div
                                        className="modal fade"
                                        id={`${product.id}Modal`}
                                        tabIndex="-1"
                                        aria-labelledby={`${product.id}Label`}
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id={`${product.id}Label`}>
                                                        {product.name}
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src={product.image} alt={product.name} className="img-fluid mb-3" />
                                                    <p>{product.details}</p>
                                                    <p>
                                                        <strong>Price:</strong> {product.price}
                                                    </p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>



                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <p>© 2024, Asumbrado, Baguio, Loren | Professional Elective 4 Compliance | All Rights Reserved</p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        </AuthenticatedLayout>
    );
}
