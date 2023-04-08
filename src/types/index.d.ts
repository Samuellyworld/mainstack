// declare module that don't have inbuilt typings;
declare module "country-flags-svg";
declare module "react-flags";

// declare jpgs/pngs/svgs
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

// interface view type
export interface ViewType {
    name: string;
    pv: number;
    uv: number;
  }