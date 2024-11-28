import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { usePage, Head } from '@inertiajs/react';
import './Index.css';

export default function Index() {
    const { resources } = usePage().props;
    const [formData, setFormData] = useState({ name: '', type: '', description: '', image: null });
    const [imagePreview, setImagePreview] = useState(null); // For image preview
    const [isModalVisible, setModalVisible] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [currentResourceId, setCurrentResourceId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleCreate = (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) form.append(key, value); // Append only non-null values
        });

        Inertia.post(route('resources.store'), form, {
            onSuccess: () => resetForm(),
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) form.append(key, value); // Append only non-null values
        });

        // Add the method override for PUT
        form.append('_method', 'PUT');

        Inertia.post(route('resources.update', currentResourceId), form, {
            onSuccess: () => resetForm(),
        });
    };

    const resetForm = () => {
        setFormData({ name: '', type: '', description: '', image: null });
        setImagePreview(null);
        setModalVisible(false);
        setEditMode(false);
        setCurrentResourceId(null);
    };

    const handleEdit = (resource) => {
        setFormData({
            name: resource.name,
            type: resource.type,
            description: resource.description,
            image: null, // Reset file input
        });
        setImagePreview(resource.image_url || null); // Use the current image URL for preview
        setCurrentResourceId(resource.id);
        setEditMode(true);
        setModalVisible(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });

        // Generate a local preview URL
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImagePreview(null);
        }
    };

    const handleDelete = (id) => {
        Inertia.delete(route('resources.destroy', id));
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            resetForm();
        }
    };

    const filteredResources = resources.filter(resource =>
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
    const displayedResources = filteredResources.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bike Parts Classification</h2>}
        >
            <Head title="Bike Part Classification" />

            <div className="container">
                <div className="header-actions">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button className="add" onClick={() => setModalVisible(true)}>
                        Add New Data
                    </button>
                </div>

                {isModalVisible && (
                    <div className="modal-overlay" onClick={handleModalClick}>
                        <div className="modal-content">
                            <h2>{isEditMode ? 'Edit Resource' : 'Add New Bike Part'}</h2>
                            <form onSubmit={isEditMode ? handleUpdate : handleCreate} encType="multipart/form-data">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Type"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    required
                                />
                                <textarea
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                                <div className="modal-buttons">
                                    <button type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <table>
                    <thead>
                        <tr>
                            <th>Bike Part Name</th>
                            <th>Type</th>
                            <th>Manufacturer</th>
                            <th>Date Added</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedResources.map(resource => (
                            <tr key={resource.id}>
                                <td>{resource.name}</td>
                                <td>{resource.type}</td>
                                <td>{resource.description}</td>
                                <td>{formatDate(resource.created_at)}</td>
                                <td>
                                    {resource.image_url && (
                                        <img src={resource.image_url} alt="Resource" style={{ width: '50px', height: '50px' }} />
                                    )}
                                </td>
                                <td>
                                    <div className="button-container">
                                        <button className="edit" onClick={() => handleEdit(resource)}>Edit</button>
                                        <button className="delete" onClick={() => handleDelete(resource.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        &larr; Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={nextPage} disabled={currentPage === totalPages}>
                        Next &rarr;
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
