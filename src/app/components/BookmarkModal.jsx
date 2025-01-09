import React, { useState } from "react";

    const BookmarkModal = ({ open, setOpen }) => {
        const [folderName, setFolderName] = useState("Favorite");
        const [newFolderName, setNewFolderName] = useState("");
        const [selectedColor, setSelectedColor] = useState("#1fa35a");

        const colors = [
            "#1fa35a", // Green
            "#ffc108", // Yellow
            "#9b27b0", // Purple
            "#2294f2", // Light Blue
            "#e91e63", // Pink
            "#3f51b5", // Indigo
            "#00bbd4", // Cyan
            "#8ac24a", // Lime Green
        ];

        if (!open) return null;

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={() => setOpen(false)}
                ></div>
                <div className="w-96 p-6 bg-white rounded-2xl shadow-lg z-10">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h5 className="text-lg font-bold text-gray-800">Favorite</h5>
                    </div>

                    {/* Folder Name Section */}
                    <div className="mt-6">
                        <label className="block font-medium text-base mb-2">Folder Name</label>
                        <select
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={folderName}
                            onChange={(e) => setFolderName(e.target.value)}
                        >
                            <option value="Favorite">Favorite</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                        </select>
                    </div>

                    {/* New Folder Section */}
                    <div className="mt-4">
                        <p className="font-medium text-base mb-2">Or,</p>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Create New Bookmark Folder"
                            maxLength="15"
                            value={newFolderName}
                            onChange={(e) => setNewFolderName(e.target.value)}
                        />
                    </div>

                    {/* Color Picker Section */}
                    <div className="mt-4">
                        <span className="block font-medium text-base mb-2">
                            Change Folder Color
                        </span>
                        <div className="grid grid-cols-8 gap-2">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    className={`w-9 h-9 rounded-md flex justify-center items-center ${
                                        selectedColor === color ? "ring-2 ring-offset-2 ring-blue-500" : ""
                                    }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {selectedColor === color && (
                                        <span className=" text-xl text-white">🗸</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-end gap-4">
                        <button
                            className="px-6 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            onClick={() => console.log("Save")}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        );
    };


export default BookmarkModal;
