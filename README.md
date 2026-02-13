# 🗺️ Delivery Zone Management System with H3 Geospatial Indexing

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

A powerful, interactive delivery zone management system that leverages **Uber's H3 hexagonal hierarchical geospatial indexing** to create, visualize, and manage custom delivery areas through an intuitive map interface.

---

## 🚀 Overview

This project was scaffolded using the Shadcn CLI's `create` command with a custom preset for Vite + React + TypeScript. The preset configures theming (purple theme on neutral base), icons (Lucide), font (DM Sans), and other styles (Vega style, subtle menu accents, default radius).

The structure starts minimal but is enhanced with modular folders for better organization. Decisions follow React best practices like separation of concerns and feature-based grouping, while leveraging Shadcn's CLI for easy component additions.

---

## ✨ Features

### 🗺️ Interactive Map Selection

Click on H3 hexagons to add/remove them from delivery zones with **real-time visual feedback**

### 🎨 Visual Feedback System

- 🔵 **Blue**: Unselected hexagons
- 🟣 **Purple**: Selected hexagons
- 🟠 **Orange**: Adjacent zones

### 📦 Complete CRUD Operations

Create, read, update, and delete delivery zones with **localStorage persistence**

### ⚡ Real-time Synchronization

Custom event system ensures **all components stay in sync** across the application

### 📱 Responsive Design

Mobile-friendly grid layout with beautiful **shadcn/ui components**

### 🔒 Type Safety

Full **TypeScript** implementation with proper schema validation

---

## 📸 Screenshots

<div align="center">
  
### 🆕 Create Delivery Zone
![Create Delivery Zone](/public/screenshots/createDeliveryZone.png)
*Click on hexagons to select/deselect delivery areas with real-time color feedback*

---

### 📋 Delivery Zone List

![Delivery Zone List](/public/screenshots/deliveryZonesList.png)
_View and manage all your delivery zones in a responsive grid_

---

### ✏️ Edit Delivery Zone

![Edit Zone Form](/public/screenshots/updateDeliveryZone.png)
_Update zone names and modify hexagon selections on the map_

</div>

---

## 🛠️ Tech Stack

| Category             | Technology                                                |
| -------------------- | --------------------------------------------------------- |
| **Framework**        | React 18 with TypeScript                                  |
| **Build Tool**       | Vite                                                      |
| **Styling**          | Tailwind CSS + shadcn/ui                                  |
| **Mapping**          | React Leaflet                                             |
| **Geospatial**       | H3-js (Uber's Hexagonal Hierarchical Geospatial Indexing) |
| **Icons**            | Lucide React                                              |
| **Font**             | DM Sans                                                   |
| **State Management** | React Hooks + Custom Event System                         |
| **Storage**          | localStorage with event-driven synchronization            |
| **Package Manager**  | pnpm                                                      |

---

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```
