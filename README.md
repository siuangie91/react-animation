# React Banner Ad 
A thought experiment to explore CSS animations in React and [React hooks](https://reactjs.org/docs/hooks-intro.html).

**Demo** http://projects.angiesiudevworks.com/reactanimation/

## Purpose
In the real world, there really isn't any reason to build a simple 300x600 banner ad using React; it can easily be done with raw CSS and JavaScript in many different ways, such as by doing a bunch of `setTimeout`s that add classes to HTML elements. However, I thought it would be an interesting thought experiment to make a banner ad using React to learn how to do animations in that environment and also learn about hooks along the way.

All styling in this project was done using CSS and **_zero_** image assets were used. All animations were done in CSS as well. No JavaScript was used to position, animate, or otherwise manipulate the styling of the components. CSS is very powerful! (Pseudo elements are magical :sparkles:)

## Styling Dependencies
In this project, I used the [React Transition Group](http://reactcommunity.org/react-transition-group/) and [Emotion](https://emotion.sh/docs/introduction) libraries to animate and style my components. (Emotion in particular was chosen because it is what we use at The New York Times, and a secondary goal of this project was to see how I could incorporate animations into our app.)

## Setup
This was scaffolded with `create-react-app`, so simply

1. Clone and `npm install`.
2. `npm start`.
