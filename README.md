# Covid Questionnaire

---

Covid Questionnaire - is an application that new employees of Redberry have to fill out to find out how they feel about
the Covid situation and how Redberry can improve and support the company's internal Covid policy.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Resources](#resources)

#

### Prerequisites

- <img src="readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> _npm@6 and up_

#

### Tech Stack

- <img src="readme/assets/react-icon.svg.png" height="18" style="position: relative; top: 4px" /> [React@18.2.0](https://reactjs.org/) - front-end framework.
- <img src="readme/assets/react-router-icon.png" height="18" style="position: relative; top: 4px" /> [React-router@v6](https://reactrouter.com/en/main) - React Router is a standard library for routing in React.
- <img src="readme/assets/vite.svg" height="18" style="position: relative; top: 4px" /> [Vite@4.0.1](https://vitejs.dev/guide/) - helps to bundle application's CSS and JavaScript files into production ready assets.
- <img src="readme/assets/tailwind.svg.png" height="19" style="position: relative; top: 4px" /> [Tailwind CSS@3.2.4](https://tailwindcss.com/) - is a utility-first CSS framework designed to enable users to create applications faster and easier.
- <img src="readme/assets/react-hook-form.png" height="19" style="position: relative; top: 4px" /> [React hook form@6](https://react-hook-form.com/) - package for form validation.

#

### Getting Started

1\. First of all you need to clone Covid Questionnaire repository from github:

```sh
git clone https://github.com/RedberryInternship/ivane-covid-questionare.git
```

2\. Next step requires you to run `npm install` in order to install all the dependencies.

```sh
npm install
```

3\. Finally, you can run application locally with:

```sh
npm run dev
```

in order to build and watch your JS/tailwind resources.

---

##### Now, you should be good to go!

#

### Development

You can run Vite's built-in development server by executing:

```sh
  npm run dev
```

it builds your js files into executable scripts.
It also watches and generates your tailwind properties in app.css

#

### Project Structure

```bash
├─── public
├─── readme
├─── src
│   ├─── components
│   ├─── context
│   ├─── css
│   ├─── hooks
│   ├─── pages
│   ├─── services
│   ├─── App.jsx
│   ├─── index.css
│   ├─── main.jsx
- index.html
- jsconfig.json
- package.json
- package-lock.json
- postcss.config.cjs
- README.md
- tailwind.config.js
- vite.config.js
```

---

#

### Resources

- [Application Design [Figma]](https://www.figma.com/file/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3&t=DFt3wUtX8d0xV0cP-0)
- [Application Design Prototype](https://www.figma.com/proto/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?node-id=37%3A3&starting-point-node-id=1%3A2&scaling=contain)
- [API Specification](https://covid19.devtest.ge/api-specs)
- [Font [BPG Arial]](https://fonts.ge/ka/font/13/BPG-Arial)

#
