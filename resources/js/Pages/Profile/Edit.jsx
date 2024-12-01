import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import ProfileForm from './ProfileForm'; // Import the ProfileForm component
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Edit({ mustVerifyEmail, status }) {
    const { props } = usePage();
    const { success } = props;

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            {/* Display success message */}
            {success && (
                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100" role="alert">
                    {success}
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    {/* Update Profile Information */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    {/* Update Profile Image */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <ProfileForm user={props.auth.user} className="max-w-xl" />
                    </div>

                    {/* Update Password */}
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
