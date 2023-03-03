import React from "react";

// Atoms Components Props

export interface TextProps {
  children: React.ReactNode;
  [x: string]: any;
}

export interface ButtonProps {
  children: React.ReactNode;
  [x: string]: any;
}

export interface ImgProps {
  src: string;
  alt: string;
  [x: string]: any;
}

export interface InputProps {
  type: string;
  [x: string]: any;
}

// Molecules Components Props

export interface SkillsItemProps {
  img: string;
  deadline: string;
  description: string;
  languages?: {
    title: string;
    items: Array<string>;
  };
  knowledge?: {
    title: string;
    items: Array<string>;
  };
  tools?: {
    title: string;
    items: Array<string>;
  };
}

// Organisms Components Props

// Templates Components Props
