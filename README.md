
# 🌌 Star Wars Data Viewer

This project is a simple application built with HTML, CSS, and JavaScript that consumes the [Star Wars API (SWAPI)](https://swapi.dev/) to display information about characters and movies from the Star Wars universe.

## 🖼️ Overview

The application dynamically loads:
- Character information (name, height, weight, hair, and skin colors).
- Movie details (title, director, producer, release date, and the iconic "opening crawl").

Everything is presented with a Star Wars-themed design.



---

## 🚀 Features

- **Characters Page:**
  - Lists Star Wars franchise characters.
  - Detailed information: height, weight, hair, and skin colors.
  - Data dynamically fetched from the SWAPI API.

- **Movies Page:**
  - Lists Star Wars movies with details such as:
    - Title
    - Director
    - Producer
    - Release date
    - Opening Crawl.
  - Responsive layout for various screen sizes.

- **Simple Navigation:** Switch between characters and movies pages.

---

## 📂 Project Structure

```plaintext
.
├── assets/
│   ├── css/
│   │   └── styles.css        # Global styles
│   ├── favicons/
│   │   └── favicon-16x16.png # Website icons
│   ├── js/
│   │   └── films.js          # Movies page script
├── characters.html           # Characters page
├── films.html                # Movies page
├── index.html                # Home page
├── README.md                 # This file
└── LICENSE                   # Project license
```

---

## 🔧 Technologies Used

- **HTML5:** Semantic page structure.
- **CSS3:** Responsive styling and custom theme.
- **JavaScript:** DOM manipulation and API consumption.
- **SWAPI:** Public API for Star Wars data.

---

## 🌈 Color Palette

The application uses a thematic color palette to capture the Star Wars spirit:

| Color             | Hex       | Description                  |
|-------------------|-----------|------------------------------|
| **Golden Yellow** | `#FFD700` | Inspired by the opening text.|
| **Deep Black**    | `#121212` | Space-themed background.     |
| **Space Gray**    | `#333333` | Style of ships and uniforms. |
| **Rebel Beige**   | `#F5DEB3` | Neutral Rebel tones.         |

---

## ⚙️ How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/hughguzman/CTD.git
   ```

2. Navigate to the project folder:
   ```bash
   cd CTD
   ```

3. Open the `index.html` file in a browser:
   - To test locally, double-click the file.
   - Or use an extension like "Live Server" in VS Code.

---

## 📚 Learnings

This project covers the following concepts:
- DOM manipulation in JavaScript.
- Consuming REST APIs with `fetch`.
- File organization and structuring in front-end projects.
- Responsive design with CSS.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it.

---

## 🤝 Contributions

Contributions are always welcome! If you find issues or wish to add new features:

1. Fork the repository.
2. Create a branch for your feature or fix:
   ```bash
   git checkout -b my-new-feature
   ```
3. Submit a pull request.

---

## 🛠️ Future Features

- **Search Bar:** Allow searching for specific characters and movies.
- **Advanced Filters:** Add filtering options by attributes (e.g., height or director).
- **Design Enhancements:** Incorporate animations and a more immersive theme.

---

## 👾 Author

**Hugh Guzman**  
🌐 [Portfolio]((https://github.com/hughguzman))  
📧 Email: hg.guzman23@gmail.com

May the Force be with you! ✨

## 🔗 References

The following resources were helpful for learning and consultation during the development of this project:

- [W3Schools - HTML Tutorial](https://www.w3schools.com/html/default.asp): Comprehensive guide to HTML5.
- [W3Schools - CSS Tutorial](https://www.w3schools.com/css/default.asp): Resources for styling and responsive design.
- [W3Schools - JavaScript Tutorial](https://www.w3schools.com/js/default.asp): Insights into DOM manipulation and API usage.
- [Github - README template](https://github.com/othneildrew/Best-README-Template):README template .

---
