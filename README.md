# Product Card & Slide-Out Cart Demo

This project is a small front-end UI demo showcasing a product card and a slide-out shopping cart.  
It focuses on layout, styling, animation, and interaction, rather than full e-commerce logic.

---

## ✨ Features

- Product card built from a provided Figma design
- Slide-out cart drawer from the right
- Smooth open and close animations
- Overlay and loading state before the cart opens
- Cart footer pinned to the bottom with scrollable content
- Responsive layout for mobile and desktop
- Reusable and readable CSS structure
- Pre-populated cart content (as per brief)

---

## 🛒 Cart Behaviour (As Per Brief)

- Cart content is **pre-populated**
- No implementation for:
  - adding or removing products
  - calculating totals dynamically
  - updating a cart counter
- Clicking **“Add to bag”** opens the cart drawer with existing content

The focus of the implementation is on **UI behaviour and visual interaction**, not business logic.

---

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)

---

## ⚙️ Tooling Notes

This project is intentionally built without a task runner or CSS preprocessor.

Given the scope of the task, the focus was placed on:
- accurately translating the Figma design into code
- implementing smooth animations and transitions
- keeping the setup simple and easy to run
- maintaining clear and maintainable CSS

The project structure allows for easy integration of tools such as SCSS or a task runner in the future if required.

---

## 🚀 Getting Started

### Run locally

Open `index.html` directly in the browser, or use a simple local server if preferred.

No build step is required.

---

## 📁 Project Structure (simplified)

```text
├── index.html
├── style.css
├── app.js
├── assets/
└── README.md
