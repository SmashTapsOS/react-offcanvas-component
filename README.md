# React Offcanvas Component

Create Off-canvas Sidebars with React and Popmotion's pose

## Installation

This npm module utilizes `react-pose` for animations.

#### yarn

`yarn add react-pose react-offcanvas-component`

#### npm

`npm i -S react-pose react-offcanvas-component`

## [**Demo**](https://samabeywickrama.github.io/roc-examples/)

## Basic usage

Please visit this [Repo](https://github.com/samAbeywickrama/roc-examples) for examples.

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
