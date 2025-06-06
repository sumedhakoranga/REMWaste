# RemWaste - Skip Selection Application

A modern, responsive React application for selecting waste disposal skips with an intuitive user interface and seamless booking experience.

## Overview

This application provides a streamlined skip selection process for waste disposal services, featuring real-time data integration, responsive design, and an enhanced user experience optimized for both desktop and mobile devices.

### Key Highlights:
- **Customer-Centric Design**: Focused on user experience with intuitive navigation and clean visuals.
- **Enhanced Skip Details on Click**: When a customer clicks on any skip, a dedicated view opens showing detailed information helping them choose more confidently.
- **Responsive Layout**: Fully optimized for both desktop and mobile screens.

This design ensures that users can easily explore their options and proceed through the booking process with clarity.

## Technical Approach

### Key Features & Implementation

#### 2. **Dynamic Data Integration**
- **API Integration**: Real-time data fetching from WeWantWaste API endpoint
- **Data Enhancement**: Combines API data with additional skip options for comprehensive selection
- **Automatic Sorting**: Skip sizes are automatically sorted from smallest to largest

#### 3. **Responsive Grid System**
- **CSS Grid Layout**: Flexible grid system that adapts to different screen sizes
- **Mobile-First Design**: Optimized layouts for both desktop and mobile experiences

#### 4. **Interactive Skip Selection**
- **Card-Based Layout**: Each skip displayed as an interactive card with hover effects
- **Modal Detail View**: Clicking any skip opens a detailed modal with comprehensive information

#### 5. **Advanced Styling & UX**
- **Custom Color Palette**: Warm, earth-tone color scheme for waste management branding
- **Backdrop Blur Effects**: Modern modal overlays with blur effects for focused content viewing
- **Smooth Animations**: CSS transitions and transforms for polished interactions

### Technical Dependencies

#### Core Libraries
- **React & React-DOM**: Core framework for component rendering
- **FontAwesome**: Professional icon library for UI elements
- **React-Responsive**: Media query management for responsive design

### Component Structure

```
src/
├── App.js
├── SkipSelection.js
├── SkipSelection.css
├── ProgressBar/
│   ├── ProgressBar.js
│   └── ProgressBar.css
```

### Data Flow & State Management

1. **Initial Load**: Application fetches skip data from external API
2. **Data Processing**: Combines API data with additional skip options and sorts by size
3. **State Management**: Uses React hooks (useState, useEffect) for local state management
4. **User Interaction**: Click events trigger modal displays with detailed skip information
5. **Responsive Rendering**: Media queries determine mobile vs desktop layouts


### Mobile Optimization

The application implements comprehensive mobile optimization:

- **Adaptive Grid**: 2-column layout on mobile vs multi-column on desktop
- **Scalable Elements**: Reduced sizing and spacing for mobile screens
- **Touch-Friendly**: Optimized button sizes and tap targets
- **Modal Positioning**: Adjusted modal placement for mobile viewing

This approach ensures a consistent, high-quality experience across all devices while maintaining the professional appearance expected in a commercial waste management application.
