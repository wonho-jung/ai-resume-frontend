import React from "react";

// Define colors
export const colors = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
};

// Define typography
export const typography = {
  fontFamily: "Arial, sans-serif",
  fontSize: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
};

// Define spacing
export const spacing = {
  small: "8px",
  medium: "16px",
  large: "24px",
};

// Define button styles
export const buttonStyles = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.light,
    padding: `${spacing.small} ${spacing.medium}`,
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.light,
    padding: `${spacing.small} ${spacing.medium}`,
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
};

// Define input styles
export const inputStyles = {
  backgroundColor: colors.light,
  color: colors.dark,
  padding: `${spacing.small} ${spacing.medium}`,
  borderRadius: "4px",
  border: `1px solid ${colors.secondary}`,
  fontSize: typography.fontSize.medium,
  fontWeight: typography.fontWeight.regular,
  width: "100%",
  boxSizing: "border-box",
};

// Define label styles
export const labelStyles = {
  fontSize: typography.fontSize.medium,
  fontWeight: typography.fontWeight.bold,
  marginBottom: spacing.small,
};

// Define heading styles
export const headingStyles = {
  h1: "text-4xl font-bold mb-4",
  h2: "text-3xl font-bold ",
  h3: "text-2xl font-bold ",
  h4: "text-xl font-bold ",
  h5: "text-lg font-bold ",
  h6: "text-base font-bold ",
};

// Define paragraph styles
export const paragraphStyles = {
  p: "text-base leading-7",
  label: "text-base font-bold mb-1",
};
