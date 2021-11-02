import { useMap } from "react-leaflet";

export const SetView = ({position}) => {
  const map = useMap()
  map.setView(position);
  return null;
};
