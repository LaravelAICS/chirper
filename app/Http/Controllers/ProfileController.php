<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function edit()
    {
        return inertia('Profile/Edit', [
            'user' => auth()->user(),
        ]);
    }
    
    public function update(Request $request)
    {
        $request->validate([
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        $user = auth()->user();
    
        if ($request->hasFile('profile_image')) {
            $image = $request->file('profile_image');
            $imagePath = $image->store('profile_images', 'public');
    
            if ($user->profile_image) {
                Storage::disk('public')->delete($user->profile_image);
            }
    
            $user->profile_image = $imagePath;
        }
    
        $user->save();
    
        return back()->with('success', 'Profile updated successfully!');
    }
    
}
