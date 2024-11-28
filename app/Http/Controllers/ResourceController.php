<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ResourceController extends Controller
{
    public function index()
    {
        return Inertia::render('Resources/Index', [
            'resources' => Resource::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048', // Validate the image file
        ]);

        $imagePath = $request->file('image') ? $request->file('image')->store('resources', 'public') : null;

        Resource::create([
            'name' => $request->name,
            'type' => $request->type,
            'description' => $request->description,
            'image' => $imagePath,
        ]);

        return redirect()->route('resources.index');
    }

    public function update(Request $request, $id)
    {
        $resource = Resource::findOrFail($id);

        // Validate the request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048', // Ensure image validation
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('resources', 'public');
            $validatedData['image'] = $path;
        }

        // Update the resource
        $resource->update($validatedData);

        return redirect()->route('resources.index')->with('success', 'Resource updated successfully!');
    }


    public function destroy(Resource $resource)
    {
        // Delete the associated image
        if ($resource->image) {
            Storage::disk('public')->delete($resource->image);
        }

        $resource->delete();

        return redirect()->route('resources.index');
    }
}
