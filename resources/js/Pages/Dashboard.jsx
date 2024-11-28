import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import './Dashboard.css';  // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';

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
                        Bike parts classification plays a vital role in cycling, influencing performance, comfort, and overall experience. Each component is designed to enhance bike efficiency and help riders navigate various terrains. Suspension forks, for example, absorb shocks and smooth out rough trails, providing better control during rugged rides.
                        The groupset is essential for smooth and efficient shifting, contributing to the overall performance of the bike. A quality groupset ensures reliability and precision, whether for road cycling or mountain biking.
                        In terms of braking systems, hydraulic brakes offer exceptional stopping power and control, ensuring rider safety in all conditions.
                        For bike frames, manufacturers focus on creating lightweight yet durable options made from materials like carbon fiber and aluminum, offering strength and performance for various cycling needs.
                        Choosing the right parts ensures optimal performance, comfort, and safety, making every ride a better experience.
                    </p>
                </div>
            </div>

            <div className="body">
                <div className="manufacturers">
                    <div className="manufacturer-item">Shimano</div>
                    <div className="manufacturer-item">Magura</div>
                    <div className="manufacturer-item">Ragusa</div>
                    <div className="manufacturer-item">IXF Jiangkun</div>
                    <div className="manufacturer-item">Maxxis</div>
                    <div className="manufacturer-item">Meroca</div>
                    <div className="manufacturer-item">FOX</div>
                    <div className="manufacturer-item">Rockshox</div>
                    <div className="manufacturer-item">Dartmoor</div>
                    <div className="manufacturer-item">Mountainpeak</div>
                </div>
            </div>

            <footer>
                <p> © 2024, Asumbrado, Baguio, Loren | Professional Elective 4 compliance </p>
            </footer>
        </AuthenticatedLayout>
    );
}
