# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Hope you like my re-made solution for this challenge!

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview


### Screenshot

Mobile view:

![Mobile size](./Mobile.png)

Tablet view:

![Tablet size](./Tablet.png)

Desktop view:

![Desktop size](./Desktop.png)


### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/landing-page-dropdown-navigation-with-html-css-and-js-kC2FPDbm-E)
- Live Site URL: [Vercel live site](https://intro-section-dropdown-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

- Learnt the hard way that you can't stack `a` tags inside `ul` lists, you always have to wrap them on `li` elements.

- How to use Pseudoelements to create fancy borders 

```css
@media (min-width: 1440px) {
  .section__btn {
    align-self: flex-start;
    cursor: pointer;
    position: relative;
    z-index: 15;
    transition: background-color 1s ease, color 1s ease;
  }
  .section__btn:hover {
    background-color: var(--White);
    color: var(--Black);
  }
  .btn__wrapper {
    position: relative;
  }
  .btn__wrapper::after {
    content: '';
    display: block;

    position: absolute;
    width: 0;
    height: 0;
    top: -0.2rem;
    left: -0.2rem;
  }
  .btn__wrapper:hover::after {
    border-radius: 1.5rem;
    border: 2px solid var(--Black);
    width: 100%;
    height: 100%;
    transition: width 1s ease, height 0.5s ease;
  }
}
```

Typewriter animation on load:

```js
function typeWriter(el) {
  const textArray = el.innerHTML.split('');
  el.innerHTML = '';
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 95 * i)
  );
}
```

### Continued development

Will use this project when I need to refresh some CSS tricks with pseudoelements, and to remember how unorders list semantic works.


## Author

- Website - [In construction](https://github.com/DavidMorgade)
- Frontend Mentor - [@DavidMorgade](https://www.frontendmentor.io/profile/DavidMorgade)
- Twitter - [@mesabeagridulce](https://www.twitter.com/mesabeagridulce)


## Acknowledgments

Thanks as always, to all the FEM community and also to my wife and little baby who are making my dreams come true! Love
