"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Lightbulb, Navigation, Trash2 } from "lucide-react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;


const ManholeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3" />
    <rect x="8" y="8" width="8" height="1" fill="currentColor" />
    <rect x="8" y="10" width="8" height="1" fill="currentColor" />
    <rect x="8" y="14" width="8" height="1" fill="currentColor" />
    <rect x="8" y="16" width="8" height="1" fill="currentColor" />
  </svg>
);


function LocationMarker({
  setLatitude,
  setLongitude,
}: {
  setLatitude: any;
  setLongitude: any;
}) {
  useMapEvents({
    click(e) {
      setLatitude(e.latlng.lat.toFixed(6));
      setLongitude(e.latlng.lng.toFixed(6));
    },
  });
  return null;
}

export default function SnapFixReport() {
  const [selectedIssueType, setSelectedIssueType] = useState("");
  const [title, setTitle] = useState("");
  const [latitude, setLatitude] = useState("28.6139"); 
  const [longitude, setLongitude] = useState("77.2090");
  const [pincode, setPincode] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const issueTypes = [
    { id: "streetlight", icon: Lightbulb, label: "Streetlight" },
    { id: "pothole", icon: Navigation, label: "Pothole" },
    { id: "waste", icon: Trash2, label: "Waste" },
    { id: "manhole", icon: ManholeIcon, label: "Manhole" },
  ];

  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);

  // 🔎 Search by Pincode
  const handlePincodeSearch = async () => {
    if (!pincode) return;
    try {
      const response = await fetch(
       ` https://nominatim.openstreetmap.org/search?q=${pincode},India&format=json&limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        setLatitude(data[0].lat);
        setLongitude(data[0].lon);
      } else {
        alert("No location found for this pincode");
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching location");
    }
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <main>
      <div className="section1 min-h-[135vh] bg-slate-100 p-6 relative">
        {/* Navbar */}
        <nav className="h-[13vh] w-full flex items-center bg-transparent z-20">
          <img src="/Logo.png" alt="" className="w-[54vh] h-[16vh] mr-[40vh]" />
          <div className="flex justify-between w-[45vh] mr-[65vh] text-1xl">
            <Link href="/"><h4 className="cursor-pointer">Home</h4></Link>
            <Link href="/issues"><h4 className="cursor-pointer">Issues</h4></Link>
            <Link href="/report"><h4 className="cursor-pointer">Report</h4></Link>
          </div>
          
        </nav>

        {/* Layout: Form + Map */}
        <div className="absolute flex h-[79vh] w-[190vh] top-[19vh] left-[13vh] gap-6">
          {/* White Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg w-[90vh] h-[107vh]">
            {/* Title */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-300 transition-colors"
              />
            </div>

            {/* Issue Type */}
            <div className="mb-5">
              <div className="flex gap-4 flex-wrap">
                {issueTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedIssueType(type.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                      selectedIssueType === type.id
                        ? "bg-purple-200 text-purple-700"
                        : "bg-purple-100 text-purple-600 hover:bg-purple-150"
                    }`}
                  >
                    <type.icon className="w-8 h-8" />
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Image */}
            <div className="mb-4">
              <label className="flex items-center gap-3 px-6 py-3 bg-purple-200 text-purple-700 rounded-2xl hover:bg-purple-300 transition-colors font-medium cursor-pointer">
                <span className="text-lg">📷</span>
                {image ? image.name : "Upload image"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {/* Pincode Input */}
            <div className="mb-6 flex gap-3">
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="flex-1 px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none"
                placeholder="Enter pincode"
              />
              <button
                onClick={handlePincodeSearch}
                className="px-6 py-3 bg-purple-300 rounded-2xl text-white font-medium hover:bg-purple-400 transition-colors"
              >
                Go
              </button>
            </div>

            {/* Latitude & Longitude */}
            <div className="mb-6 flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Latitude
                </label>
                <input
                  type="text"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Longitude
                </label>
                <input
                  type="text"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  className="w-full px-4 py-3 bg-purple-50 border-2 border-purple-200 rounded-2xl focus:outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button className="w-full py-4 bg-gradient-to-r from-purple-300 to-pink-200 text-white font-semibold rounded-2xl hover:from-purple-400 hover:to-pink-300 transition-all shadow-lg">
              Submit
            </button>
          </div>

          {/* Map Div */}
          <div className="flex-1 rounded-3xl overflow-hidden shadow-lg h-[107vh]">
            <MapContainer
              center={[lat, lng]}
              zoom={13}
              key={`${lat}-${lng}`} // 🔑 re-render map when coords change
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={[lat, lng]}>
                <Popup>Issue Location</Popup>
              </Marker>
              <LocationMarker setLatitude={setLatitude} setLongitude={setLongitude} />
            </MapContainer>
          </div>
        </div>
      </div>
    </main>
  );
}