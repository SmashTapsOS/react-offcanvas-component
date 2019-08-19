[![Build Status](https://travis-ci.org/samAbeywickrama/react-offcanvas-component.svg?branch=master)](https://travis-ci.org/samAbeywickrama/react-offcanvas-component)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# React Offcanvas Component

Create Off-canvas Sidebars with React and Popmotion's pose

## [**Demo**](https://samabeywickrama.github.io/roc-examples/)

## Development

This repo uses `Commitizen` for git commit conventions.

Run `yarn commit` or `npm run commit`

You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards

## Installation

This npm module utilizes `react-pose` for animations.

#### yarn

`yarn add react-pose react-offcanvas-component`

#### npm

`npm i -S react-pose react-offcanvas-component`

## Basic usage

Please visit this [Repo](https://github.com/samAbeywickrama/roc-examples) for examples.

```js
import ReactOffcanvasComponent from "react-offcanvas-component";
import "./Basic.css";

const { Menu, DropdownMenu, CloseButton } = ReactOffcanvasComponent;

const openAnimation = {
  x: 0,
  transition: {
    duration: 200
  }
};

<ReactOffcanvasComponent
  className="wrapper"
  open={visibility}
  openAnimation={openAnimation}
>
  <CloseButton onClick={handleClick} style={{ right: 10 }}>
    x
  </CloseButton>
  <div className="logo">ROC</div>
  <Menu>
    <MenuItem className="menu-item">Home</MenuItem>
    <MenuItem className="menu-item">Another Menu Item</MenuItem>
    <MenuItem hasDropdown name="dropdown-b" className="dropdown">
      Dropdown
      <DropdownMenu>
        <MenuItem className="dropdown-item">Abc</MenuItem>
        <MenuItem className="dropdown-item">Abc</MenuItem>
        <MenuItem className="dropdown-item">Abc</MenuItem>
      </DropdownMenu>
    </MenuItem>
    <MenuItem className="menu-item">Is n't it awesome</MenuItem>
  </Menu>
</ReactOffcanvasComponent>;
```

```css
.wrapper {
  width: 400px;
  background: #fff;
  padding: 20px;
}
.menu-item {
  margin-bottom: 20px;
}
.dropdown {
  cursor: pointer;
  margin-bottom: 20px;
}
.dropdown-item {
  padding: 10px;
  margin-top: 20px;
  background: #e2e2e2;
}
.logo {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
  width: 200px;
}
```

## API

#### ReactOffcanvasComponent

| Prop             | Type      | Default                                       | Required | Description                                                                   |
| ---------------- | --------- | --------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| open             | `Boolean` | `false`                                       | yes      | Setting values as `true` will Reveal Sidebar and `false` will Hide Sidebar    |
| className        | `String`  | no                                            | no       | Override the styles applied to the component with css                         |
| style            | `Object`  | no                                            | no       | Override the styles applied to the component with inline styles               |
| openAnimation    | `Object`  | [See Default Animations](#default-animations) | no       | Override the default open animation                                           |
| closeAnimation   | `Object`  | [See Default Animations](#default-animations) | no       | Override the default close animation                                          |
| overlay          | `Boolean` | false                                         | no       | Show / Hide background overlay                                                |
| overlayClassName | `String`  | no                                            | no       | Override the default styles applied to the Overlay component with css classes |

#### AnimatedPanel

| Prop           | Type     | Default                                       | Required | Description                                                     |
| -------------- | -------- | --------------------------------------------- | -------- | --------------------------------------------------------------- |
| className      | `String` | no                                            | no       | Override the styles applied to the component with css           |
| style          | `Object` | no                                            | no       | Override the styles applied to the component with inline styles |
| openAnimation  | `Object` | [See Default Animations](#default-animations) | no       | Override the default open animation                             |
| closeAnimation | `Object` | [See Default Animations](#default-animations) | no       | Override the default close animation                            |

#### CloseButton

| Prop      | Type       | Default | Required | Description                                                     |
| --------- | ---------- | ------- | -------- | --------------------------------------------------------------- |
| onClick   | `Function` | no      | no       | `function(event: object) => void`                               |
| style     | `Object`   | no      | no       | Override the styles applied to the component with inline styles |
| className | `String`   | no      | no       | Override the styles applied to the component with css           |

#### DropdownMenu

| Prop      | Type     | Default | Required | Description                                                     |
| --------- | -------- | ------- | -------- | --------------------------------------------------------------- |
| style     | `Object` | no      | no       | Override the styles applied to the component with inline styles |
| className | `String` | no      | no       | Override the styles applied to the component with css           |

#### DropdownMenu

| Prop      | Type     | Default | Required | Description                                           |
| --------- | -------- | ------- | -------- | ----------------------------------------------------- |
| className | `String` | no      | no       | Override the styles applied to the component with css |

#### MenuItem

| Prop                  | Type       | Default | Required | Description                                                       |
| --------------------- | ---------- | ------- | -------- | ----------------------------------------------------------------- |
| style                 | `Object`   | no      | no       | Override the styles applied to the component with inline styles   |
| className             | `String`   | no      | no       | Override the styles applied to the component with css             |
| onClick               | `Function` | no      | no       | `function(event: object) => void`                                 |
| dropdownIconClassName | `String`   | no      | no       | Override the styles applied to the dropdown menu icon with css    |
| hasDropdown           | `Boolean`  | no      | no       | If the MenuItem contains a dropdown menu set this value to `true` |

### Default Animations

I have used [react-pose](https://popmotion.io/pose/) to create the animations. A tons of customization possible via pose api.

#### ReactOffcanvasComponent

**Open**

```js
{
  x: "-100px",
  transition: {
    ease: [0.175, 0.885, 0.32, 1.275],
    duration: 300
  },
  delayChildren: 150,
  staggerChildren: 100
}
```

**Close**

```js
{
  x: "-100%",
  transition: {
    duration: 100
  },
  afterChildren: true
}
```

#### AnimatedPanel

**Open**

```js
{
  x: "0%",
  transition: {
    ease: [0.175, 0.885, 0.32, 1.275],
    duration: 300
  },
  delayChildren: 300,
  staggerChildren: 100
}
```

**Close**

```js
{
  x: "-100%",
  transition: {
    duration: 100
  },
  afterChildren: true
}
```

#### Todo:

- Add tests and coverage reports
