# Cheatsheet

## Module 1

### 1. Create a React App

```bash
npm create vite@latest reactProject -- --template react
cd reactProject
npm install
npm run dev
```

### 2. Components

Components are the building blocks of a React application. They are reusable and can be nested inside each other.
Each component starts with a capital letter and need a folder with the same name.

```jsx
// src/components/App/App.jsx
const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
};
```

## Module 2

### 1. useState

``useState`` is as hook and it is used to manage the state of a component. It returns an array with two elements.
The first element ``state`` is the current state and the second element ``setState`` is a function that allows you to update the state. (You can create you own custom hooks)

```jsx
const [state, setState] = useState(0);
```

### 2. Props

Props are used to pass data and functions from a parent component to a child component.

```jsx
//App.jsx
const App = () => {
    const sayHello = => console.log('Hello World!');
    const textValue = 'Hello World!';

    return (
        <div>
            <Display text={textValue} method={sayHello} />
        </div>
    );
};

//Display.jsx
const Display = ({text, method}) => {
    return (
        <div>
            <h1>{text}</h1>
            <button 
                onClick={method}>Click me!
            </button>
        </div>
    );
};
```

## Module 3

### 1. useState 2nd

``useState`` can create more than one state. In this case, setClicks needs to be called with an object that has the same properties as the initial state.

```jsx
const [clicks, setClicks] = useState({
    left: 0, right: 0
});

const newClicks = {
    left: 3,
    right: 2
}

setClicks(newClicks);
```

### Spread operator

``Spread operator`` is used to copy the properties of an object or an array into another object or array. And you can change the properties that you want.

```jsx
const clicks1 = {
    left: 1,
    right: 2
}

console.log(clicks1) // {left: 1, right: 2}

const clicks2 = {
    ...clicks1,
    right: 3
}

console.log(clicks2) // {left: 1, right: 3}
```

### Snippets

A ``Snippet`` is a small piece of reusable code. You can create your own snippets or use the ones that are already available in your code editor.

On VScode

MacOS -> Code -> Settings -> User Snippets -> JavaScript React

Windows -> File -> Preferences -> User Snippets -> JavaScript React


```json
{
    "Print to console": {
        "prefix": "clog",
        "body": [
            "console.log('$1');",
        ],
        "description": "Log output to console"
    }
}
```
