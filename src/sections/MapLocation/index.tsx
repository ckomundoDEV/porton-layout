"use client";

import { useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { darkMapStyles, mapStyles } from "@/mocks/mapLocation";

type MapLocationProps = {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};



const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
};

const MapLocation: React.FC<MapLocationProps> = ({ coordinates, address }) => {
  // Carga de la API de Google Maps
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  // Detectar modo oscuro
  const isDarkMode = (): boolean => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  };

  // Callback cuando el mapa se carga
  const onLoad = useCallback((map: google.maps.Map) => {
    // Configurar el mapa
    map.setOptions({
      styles: isDarkMode() ? darkMapStyles : mapStyles,
      disableDefaultUI: false,
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
    });
  }, []);

  // Limpiar al desmontar
  const onUnmount = useCallback(() => {
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker 
          position={coordinates} 
          title={address}
          animation={google.maps.Animation.DROP}
        />
      </GoogleMap>
    </div>
  );
};

export default MapLocation; 