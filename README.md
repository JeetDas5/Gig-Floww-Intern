# GigFloww - Gig Worker Platform

**GigFloww** is a modern platform for gig workers, designed to connect high-quality clients with skilled professionals across various fields. This web application allows gig workers to easily sign up, showcase their portfolios, and connect with clients looking for their expertise.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Sign-Up Form](#sign-up-form)
7. [Button Component Library](#button-component-library)
8. [File Structure](#file-structure)
9. [Contributing](#contributing)
10. [License](#license)

---

## Project Overview

GigFloww is a fully responsive platform that offers gig workers a professional environment to find job opportunities and showcase their portfolios. The platform includes the following features:
- **Sign-Up Form**: Allows users to create an account with fields like Name, Email, Skill Category, and Portfolio Link.
- **Features Section**: Displays key features of GigFloww, including Verified Gigs, Skill Matching, Secure Payments, and Portfolio Tools.
- **Testimonial Slider**: Displays testimonials from users who have experienced success on the platform.
- **Navbar**: A sticky and responsive navigation bar that provides easy access to different sections of the site.

## Features

- **Sign-Up Form** with basic validation (Name, Email, Skill Category, and Portfolio Link).
- **Responsive Navbar** that hides on scroll and reveals itself when scrolling up.
- **Testimonial Slider** using Swiper.js, which auto-slides or allows manual navigation.
- **Scroll-to-Section Navigation**: Clicking on navigation links smoothly scrolls to the respective section on the page.
- **Button Component Library**: A reusable set of buttons that includes primary, secondary, and disabled states.
  
---

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
  - Framer Motion (for animations)
  - Swiper.js (for testimonial slider)
  
- **Development Tools**:
  - Vite (for fast build and development)
  - React Icons (for menu icons)
  - JavaScript (ES6+)

---

## Installation

Follow these steps to run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/gigfloww.git
   cd gigfloww

2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Start the development server**:

   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to `http://localhost:3000` to view the application.


## Usage
- **Sign Up**: Fill in the sign-up form with your details and click "Sign Up" to create an account.
- **Explore Features**: Scroll down to see the key features of GigFloww.
- **View Testimonials**: Check out the testimonials from other users to see their experiences with the platform.
- **Navigate**: Use the navigation bar to jump to different sections of the page.
- **Responsive Design**: Resize your browser window to see how the layout adapts to different screen sizes.
- **Button Component**: Use the button component library to create buttons with different styles and states.    
- **Testimonial Slider**: Use the testimonial slider to view user testimonials. You can manually navigate through the testimonials or let it auto-slide.

## Sign-Up Form
The sign-up form is a key feature of GigFloww, allowing users to create an account and showcase their skills. The form includes the following fields:
- **Name**: A text input field for the user's name.
- **Email**: A text input field for the user's email address.
- **Skill Category**: A dropdown select field for the user to choose their skill category.
- **Portfolio Link**: A text input field for the user to provide a link to their portfolio.
- **Submit Button**: A button to submit the form.
- **Validation**: Basic validation is implemented to ensure that all fields are filled out before submission. If any field is empty, an alert will be displayed.
- **Success Message**: Upon successful submission, a success message will be displayed, and the form will reset.

## Testimonial Slider
- Swiper.js is used to display customer testimonials in a slider format.
- The slider is responsive and allows users to navigate through testimonials using arrows or dots.
- The slider can be set to auto-slide or allow manual navigation.

## Button Component Library
The button component library provides reusable button components with different styles and states. The buttons can be used throughout the application for various actions. The library includes:
- **Primary Button**: A button with a solid background color, used for primary actions.
- **Secondary Button**: A button with a transparent background and border, used for secondary actions.
- **Disabled Button**: A button that is disabled and cannot be clicked.
- **Button Sizes**: The buttons can be customized with different sizes (small, medium, large).
- **Button States**: The buttons can have different states (default, hover, active) to provide visual feedback to the user.

## File Structure
The file structure of the GigFloww project is organized as follows:
```plaintext
gigfloww/
├── public/
│   ├── logo.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   ├── sections/
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Hero.jsx
│   │   ├── SignUpForm.jsx
│   │   ├── About.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.js
│   ├── index.css
├── package.json
└── README.md
```