# Basic Calculator
![Calculator Preview](Mycalculator-preview.jpg)

> A modern, responsive calculator built with HTML, CSS, and JavaScript, featuring dark/light mode toggle and interactive 3D button effects.

---

## 📖 Project Overview

This is a feature-rich calculator web application created for practice purposes. It includes the four standard mathematical operations (addition, subtraction, multiplication, and division) with additional functionality like percentage calculations, sign toggle, and clear operations. The project features a sleek, modern UI with a dark/light mode toggle and realistic 3D button press effects that simulate physical button interaction.

> ‼️ This project is created purely for educational purposes. The layout and style are designed by me on Figma, and the interface is built using **custom design** decisions to practice front-end development techniques.

---

## 🚀 Features

### Core Functionality
- **Basic mathematical operations**: addition (+), subtraction (-), multiplication (×), division (÷)
- **Advanced operations**: percentage (%), sign toggle (+/-), all clear (AC)
- **Decimal point support** with validation to prevent multiple decimal points
- **Error handling** for division by zero
- **Persistent calculations** with proper operation chaining

### User Interface
- **Dark/Light mode toggle** with persistent preference storage
- **3D button effects** with realistic press animations
- **Responsive design** optimized for mobile, tablet, and desktop
- **Smooth transitions** and hover effects
- **Modern typography** using Pixelify Sans and DotGothic16 fonts

### Technical Features
- **Local storage integration** for theme persistence
- **Dynamic button styling** based on button type and theme
- **Mobile-optimized interactions** with touch-friendly design
- **Accessible design** with proper contrast ratios

---

## 🎨 Design Highlights

- **3D Visual Effects**: Buttons feature realistic depth with bottom borders that disappear on press, simulating physical button interaction
- **Adaptive Theming**: Different color schemes for number buttons, operation buttons, and function buttons in both light and dark modes
- **Responsive Layout**: Seamlessly adapts from desktop (600px max-width) to mobile (375px min-width)
- **Interactive Feedback**: Hover effects, press animations, and smooth transitions enhance user experience

---

## 🛠️ Technologies

- **HTML5** — semantic structure and accessibility
- **CSS3** — advanced styling with Flexbox, Grid, transitions, and responsive design
- **JavaScript (ES6)** — DOM manipulation, event handling, local storage, and calculator logic
- **Google Fonts** — custom typography integration

---

## 📱 Responsive Breakpoints

- **Desktop**: 600px+ (full feature set with hover effects)
- **Tablet**: 480px - 599px (adapted button sizes and spacing)
- **Mobile**: 375px - 479px (optimized for touch interaction)
- **Small Mobile**: <375px (compact layout with minimal margins)

---

## 🔧 Key Implementation Details

### Dynamic Button Creation
- Buttons are dynamically generated from arrays for maintainable code
- Each button type (numbers, operators, functions) has distinct styling
- Event listeners are attached programmatically for consistent behavior

### Theme Management
- localStorage integration for persistent dark/light mode preference
- Dynamic style application based on current theme
- Smooth transitions between theme changes

### 3D Button Effects
- Custom press animation that removes bottom border and translates button position
- Data attributes store original colors for proper restoration
- Mouse event handling for press/release/leave states

---

## 📂 Repository Structure

```
basic-calculator/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling and responsiveness
├── script.js           # JavaScript logic and interactions
├── README.md           # Project documentation
├── assets/
│   └── Backgrounds/    # Background images for light/dark modes
└── Mycalculator-preview.jpg  # Project preview image
```

---

## 🎯 Learning Objectives Achieved

- **DOM Manipulation**: Dynamic element creation and style management
- **Event Handling**: Mouse events, resize events, and user interactions
- **Local Storage**: Persistent user preferences
- **Responsive Design**: Mobile-first approach with media queries
- **CSS Grid & Flexbox**: Modern layout techniques
- **JavaScript ES6**: Arrow functions, template literals, and modern syntax
- **Data Attributes**: Using HTML5 data-* attributes for state management

---

_Designed & coded by Justin Mora for practice._ 💚👨🏻‍💻
