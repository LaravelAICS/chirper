import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './Dashboard.css';  // Import the CSS file

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Bike Parts" />

            <div className="container-main">
                <div className="Header">
                    <h1>Welcome to Bike Parts Classification Webpage</h1>
                </div>

                <div className="description">
                    <p>
                        Bike parts classification is an essential part of the cycling world, influencing performance, comfort, and overall riding experience. Each component serves a specific function, contributing to the bike’s efficiency and your ability to navigate diverse terrains. Take, for instance, suspension forks, which are critical for absorbing shocks and providing a smoother ride over rugged terrain. FOX and RockShox are renowned for their high-performance suspension systems that keep riders in control, whether charging downhill or tackling technical trails. These brands have designed forks that combine cutting-edge technology with precision engineering, ensuring that each ride feels smooth and stable, no matter how challenging the trail.
                        Then there’s the groupset, the heart of any bike's drivetrain. A quality groupset is key to efficient shifting, reliability, and overall bike performance. Leading brands like SRAM and Shimano offer a range of groupsets, from entry-level to high-end, that cater to different cycling needs. SRAM’s innovative technologies, such as the Eagle™ 12-speed system, bring unparalleled shifting precision and a wide gear range, perfect for mountain biking. Shimano, on the other hand, is known for its durability and smooth performance, offering groupsets designed to make shifting effortless, whether on the road or off the beaten path.
                        In the world of braking systems, Magura stands out with its hydraulic brakesets, offering unmatched stopping power and control in all conditions. Whether you're racing down a mountain or navigating tight turns, Magura's brakes ensure you maintain full control, even in the most demanding situations.
                        When it comes to bike frames, manufacturers like Elves, Mountainpeak, Sagmit, Diamondback, and Polygon push the boundaries of frame design, combining lightweight materials and durability to create bikes that can handle anything from extreme mountain biking to everyday commuting. These brands offer a range of frames made from materials like carbon fiber and aluminum, each designed to provide the perfect balance of strength and weight. Diamondback offers rugged yet lightweight options, ideal for tough trails, while Polygon focuses on bikes that are both high-performing and accessible to a wide range of cyclists.
                        Ultimately, choosing the right bike parts from these top-tier manufacturers ensures that every aspect of your ride – from handling and comfort to safety and speed – is optimized. Whether you’re outfitting a mountain bike for aggressive trail riding or a road bike for long-distance cruising, the components from SRAM, Shimano, Magura, FOX, RockShox, and other premium brands guarantee performance you can rely on, turning every ride into an adventure.
                    </p>
                </div>
            </div>

            <div classname="container-images">
                
            </div>

            <footer>
                <p> © 2024, Asumbrado, Baguio, Loren | Professional Elective 4 compliance </p>
            </footer>
        </AuthenticatedLayout>
    );
}
