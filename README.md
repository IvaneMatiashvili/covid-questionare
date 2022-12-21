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

#

### Prerequisites

- <img src="readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> _npm@6 and up_

#

### Tech Stack

- <img src="readme/assets/react-icon.svg.png" height="18" style="position: relative; top: 4px" /> [React@18.2.0](https://reactjs.org/) - front-end framework
- <img src="readme/assets/react-router-icon.png" height="18" style="position: relative; top: 4px" /> [React-router@v6](https://reactrouter.com/en/main) - React Router is a standard library for routing in React.
- <img src="readme/assets/vite.svg" height="18" style="position: relative; top: 4px" /> [Vite](https://vitejs.dev/guide/) - helps to bundle application's CSS and JavaScript files into production ready assets.
- <img src="readme/assets/tailwind.svg.png" height="19" style="position: relative; top: 4px" /> [Tailwind CSS](https://tailwindcss.com/) - makes it quicker to write and maintain the code of your application
- <img src="readme/assets/react-hook-form.png" height="19" style="position: relative; top: 4px" /> [React hook form](https://react-hook-form.com/) - package for form validation

#

### Getting Started

1\. First of all you need to clone Covid Questionnaire repository from github:

```sh
git clone https://github.com/RedberryInternship/ivane-covid-questionare.git
```

2\. Next step requires you to run _npm install_ in order to install all the dependencies.

```sh
npm install
```

and also:

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
