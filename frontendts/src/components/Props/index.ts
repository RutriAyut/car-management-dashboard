/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type StyParagrafProps = {
  weight: string;
  height: string;
  size: string;
  margin: string;
  color: string;
};

export type MapStyleProps = {
  [key: string]: string;
};

export type StyButtonProps = {
  bgcolor: string;
  color: string;
  border: string;
  width: string;
};

export type TextProps = {
  children: React.ReactNode;
  weight: string;
  height: string;
  size: string;
  margin: string;
  color: string;
  variant: number;
};

export interface ChildrenProps {
  children: React.ReactNode;
}

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  color: string;
  children: React.ReactNode;
  onClick(): any;
  border: string;
  width: string;
  variant: number;
  bgcolor: string;
};

export type LogoProps = {
  color: string;
  variant: number;
};

export type InputProps = {
  type: string;
  id: string;
  placeholder: string;
  required: string;
  value: string | number;
};

export type SelectProps = {
  children: React.ReactNode;
  id: string;
  required: string;
  value?: number;
};

export type IconProps = {
  icon: string;
  title: string;
  text: string;
};

export type LinkProps = {
  links: Array<{
    link: string;
    name: string;
    active?: string;
  }>;
};

export type ContextProps = {
  level: string;
  children: React.ReactNode;
};

export type CarsMainProps = {
  tittle: string;
  id: number;
  description: string;
  capacity: number;
  transmission: string;
  year: number;
  rentPerDay: number;
};

export type DataCars = Array<{
  id: number;
  manufacture: string;
  model: string;
  rent_per_day: number;
  image: string;
  type: number;
  description: string;
  available_at: string;
  available: boolean;
  capacity: number;
  driver: boolean;
  transmission: string;
  isDeleted: boolean;
  year: number;
}>;

export type DataTypes = Array<{
  id: number;
  name: string;
}>;

export type DataType = {
  id: number;
  name: string;
};

export type CarsAdminProps = {
  tittle: string;
  id: number;
  rentPerDay: number;
  updateAt: string;
  image: string;
};

export type DataCarsAdmin = {
  getCars: Array<{
    id: number;
    manufacture: string;
    model: string;
    rent_per_day: number;
    image: string;
    type: number;
    description: string;
    available_at: string;
    available: boolean;
    capacity: number;
    driver: boolean;
    transmission: string;
    isDeleted: boolean;
    year: number;
  }>;
  getTypes: Array<{
    id: number;
    name: string;
  }>;
  getLogs: Array<{
    id: number;
    create_at: string;
    create_by: number;
    update_by: number;
    update_at: string;
    delete_by: number;
    delete_at: string;
  }>;
};

export type PostCars = {
  manufacture: string;
  model: string;
  rent: number;
  picture: string;
  type: number;
  description: string;
  availableAt: string;
  available: boolean;
  capacity: number;
  driver: boolean;
  transmission: string;
};

export type PostLogin = {
  email: string;
  password: string;
};

export type DataCarById = {
  filterById: Array<{
    id: number;
    manufacture: string;
    model: string;
    rent_per_day: number;
    image: string;
    type: number;
    description: string;
    available_at: string;
    available: boolean;
    capacity: number;
    driver: boolean;
    transmission: string;
    isDeleted: boolean;
    year: number;
  }>;
  log: Array<{
    id: number;
    create_at: string;
    create_by: number;
    update_by: number;
    update_at: string;
    delete_by: number;
    delete_at: string;
  }>;
};
