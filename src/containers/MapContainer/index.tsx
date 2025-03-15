import { FC } from 'react';
import { MapLocation } from '@/components/sections';

type MapContainerProps = {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

const MapContainer: FC<MapContainerProps> = ({ address, coordinates }) => {
  return <MapLocation address={address} coordinates={coordinates} />;
};

export default MapContainer; 