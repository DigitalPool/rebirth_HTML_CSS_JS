# readme 
for many things HTML, CSS and JS
    
```html    
    <!-- web app capable -->
    <!-- <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="MLW" />
    <meta name="application-name" content="MLW" /> -->


        <!-- skip to content link -->
         <a href="#main" class="skip-link button">Skip to main</a>
```

<!-- sync css with tailwind -->
**npx tailwindcss -i ./styles/styles.css -o ./styles/output.css --watch**

The table's children are, in order:

```HTML
<table>
    <caption> element
    <colgroup> elements
    <thead> elements = (<tr> = <th> - <td>)
    <tbody> elements = (<tr> = <th> - <td>)
    <tfoot> elements = (<tr> = <th> - <td>)
</table>
```

form
method defines HTTP protocol - ie GET or POST
action is set to the URL that processes the form
if form is within a dialog, you want to include formmethod="dialog"

To capture which button was used to submit a form, give the button a name. 
no name Buttons - not submitted.
once submit button clicked - name and values of revevant suubmitted, 
the value of <text area> is its inner Text, <select> is the picked <option>'s value,
if not value, defaults to its inner text

HTML Elements API
querySelector

****************************


CSS

One way to prevent this overflow is to let the box be intrinsically
sized by either not setting the width, or in this case, 
setting the width to <min-content>

Key term: Overflow happens when content is too big for the box it's in. 
You can manage how an element handles overflow content using the <overflow> property.

content box
Padding (If the box has overflow rules set, such as <overflow: auto> or <overflow: scroll>, the scrollbars also occupy this space.)


Box defaults displays are set
<div> - Block
<li> - list-item
<span> - inline

<box sizing> - is default at "content box", when you then set the width, height, padding, border, they are added to content box
alternatively, you cna appply the dimentions to <box sizing> - "border box.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

[data-type='primary'] {
  color: red;
}

```
This CSS looks for all elements that have an attribute of data-type with a value of primary, like this:

<div data-type="primary"></div>
Instead of looking for a specific value of data-type, you can also look for elements with the attribute present, regardless of its value.

```css

[data-type] {
  color: red;
}
```

add s to ensure case sensitivity, and i for case insensitivity.

****************************

Along with case operators, you have access to operators that match portions of strings inside attribute values.

/* A href that contains "example.com" */
[href*='example.com'] {
  color: red;
}

/* A href that starts with https */
[href^='https'] {
  color: green;
}

/* A href that ends with .com */
[href$='.com'] {
  color: blue;
}

*****************************

HTML pseudo-classes :

```css
/* Our link is hovered */
a:hover {
  outline: 1px dotted green;
}

/* Sets all even paragraphs to have a different background */
p:nth-child(even) {
  background: floralwhite;
}
```
*******************************

pseudo-elements are different ::
because instead of responding to the platform state,
they act as if they are inserting a new element with CSS

```css
.my-element::before {
  content: 'Prefix - ';
}

/* Your list will now either have red dots, or red numbers */
li::marker {
  color: red;
}

::selection {
  background: black;
  color: white;
}
```

*******************************

To target a child element, use space in between parent and child

```css
p strong {
  color: blue;
}

Subsequent sibling combinator
:checked ~ .toggle__decor .toggle__thumb {
  transform: translateX(var(--metric-toggle-thumb-size)) rotate(270deg);
}

better still use a  Next sibling selector - controlled with child combinator
.top > * + * {
  position: relative;
}

.top > * + *::before {
  content: "";
  width: 100%;
  height: 1.5em;
  background: #ff807b;
  position: absolute;
  bottom: 100%;
  left: 0;
}

```
********************************

compound selectors

to target <a> elements, that also have a class of .my-class, write the following:
```css
a.my-class {
  color: red;
}
```
*******************************

CSS - Cascading Styled sheet.
Determined by
* Position and order of appearance
* Sepcificity
* Origin
* Importance

Styles can come from various sources on 
* an HTML page, such as a <link> tag, 
* an embedded <style> tag, 
* an @import rule, 
* and inline CSS as defined in an element's style attribute.

************************************
Being able to specify two values for the same property can be a simple way to create fallbacks
e.g here only for browsers that support clamp

```css
.my-element {
  font-size: 1.5rem;
  font-size: clamp(1.5rem, 1rem + 3vw, 2rem);
}
```
************************************

Specificity:

CSS targeting a class on an element will make that rule more specific,
and therefore seen as more important to be applied, than CSS targeting the element alone
here

```css
.my-element {
  color: red;
}

h1 {
  color: blue;
}
```

the h1 will be colored red even though both rules match
and the rule for the h1 selector comes later in the style sheet.

An id makes the CSS even more specific, so styles applied to an ID will override those applied many other ways. 
This is one reason why it is generally not a good idea to attach styles to an id.
It can make it difficult to overwrite that style with something else.

************************************

origin:

The order of specificity of these origins, from least specific, to most specific is as follows:

* User agent base styles. These are the styles that your browser applies to HTML elements by default.
* Local user styles. These can come from the operating system level, such as a base font size, or a preference of reduced motion. They can also come from browser extensions, such as a browser extension that allows a user to write their own custom CSS for a webpage.
* Authored CSS. The CSS that you author.
* Authored !important. Any !important that you add to your authored declarations.
* Local user styles !important. Any !important that come from the operating system level, or browser extension level CSS.
* User agent !important. Any !important that are defined in the default CSS, provided by the browser.


************************************

importance:

The order of importance, from least important, to most important is as follows:

* normal rule type, such as font-size, background or color
* animation rule type
* !important rule type (following the same order as origin)
* transition rule type


************************************

specificity calculation
The specificity is not a decimal number but a triad that consists of three components: A, B, and C.

A: id-like specificity
B: class-like specificity
C: element-like specificity
It is often represented using the (A,B,C) notation. For example: (1,0,2). The alternative A-B-C notation is also commonly used.

For example, (1,0,0) is considered a higher specificity than (0,4,3) because the A value in (1,0,0) (which is 1) is greater than the A value from (0,4,3) (which is 0).

***CSS applied directly to the style attribute of an element, does not affect specificity***
***An !important at the end of a CSS declaration does not affect specificity but puts the declaration in a different origin, namely Authored !important.***
The specificity of the selector is not relevant for the !important declaration to win

************************************

Inheritance

<html>
  <body>
    <article>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  </body>
</html>

You can make any property inherit its parent's computed value with the inherit keyword

* inherit 
* initial
* unset - The unset property behaves differently if a property is inherited by default or not. If a property is inherited by default, the unset keyword will be the same as inherit. If the property is not inherited by default, the unset keyword is equal to initial
***you can also use the <all: unset> to  unset all styles***

************************************
Sizing

The <ch> unit allows you to control the size of text based on its <actual contextual size—the width of a 0 character>

number without units, defaults to percentage of the parent body.

```css
p {
  font-size: 2;
  line-height: 1.3;
}

is different from

p {
  font-size: 2px;
  line-height: 1.3;
}
```

************************************

Dimensions and lengths

If you attach a unit to a number, it becomes a dimension
Lengths are dimensions that refer to distance and they can either be absolute or relative.

Absolute lenghts
Unit	Name	Equivalent to
cm	Centimeters	1cm = 96px/2.54
mm	Millimeters	1mm = 1/10th of 1cm
Q	Quarter-millimeters	1Q = 1/40th of 1cm
in	Inches	1in = 2.54cm = 96px
pc	Picas	1pc = 1/6th of 1in
pt	Points	1pt = 1/72th of 1in
px	Pixels	1px = 1/96th of 1in

Relative lengths
A relative length is calculated against a base value, much like a percentage


************************************

Resolution units
In the previous example the value of min-resolution is 192dpi. The dpi unit stands for dots per inch. A useful context for this is detecting very high resolution screens, such as Retina displays in a media query and serving up a higher resolution image.

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  div {
    background-image: url('a-high-resolution-image.jpg');
  }
}
```

************************************

Layout

display: inline;
display: block;
display: flex;
display: grid;

flexbox will align the element's children next to each other, in the inline direction, 
and stretch them in the block direction, so they're all the same height.

The align-items, justify-content and flex-wrap properties allow you to control how 
flex children elements behave with and around their sibling elements.

```css
.my-element div {
    flex: 1 0 auto;
}

The flex property is a shorthand for flex-grow, flex-shrink and flex-basis. You can expand the above example like this:


.my-element div {
 flex-grow: 1;
 flex-shrink: 0;
 flex-basis: auto;
}
```

Positioning
position: relative;
position: absolute;
position: sticky;
position: static;

************************************

Flexbox
The main axis and the cross axis
The key to understanding flexbox is to understand the concept of a main axis and a cross axis. The main axis is the one set by your flex-direction property. 
If that is row your main axis is along the row, then cross axis runs along the column.
if it is column your main axis is along the column then cross axis runs along the row.

The end of that axis is main-end. The start of the cross axis is cross-start and the end cross-end.

************************************

parent containers

| Property                       | Description                                               | Common Values / Options                                                                  |
| ------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `display`                      | Enables flex layout                                       | `flex`, `inline-flex`                                                                    |
| `flex-direction`               | Defines the main axis direction                           | `row` (default), `row-reverse`, `column`, `column-reverse`                               |
| `flex-wrap`                    | Controls whether items wrap                               | `nowrap` (default), `wrap`, `wrap-reverse`                                               |
| `flex-flow`                    | Shorthand for `flex-direction` + `flex-wrap`              | Any combination, e.g. `row wrap`, `column nowrap`                                        |
| `justify-content`              | Aligns items along the main axis (horizontal if `row`)    | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`      |
| `align-items`                  | Aligns items on the cross axis (vertical if `row`)        | `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`                      |
| `align-content`                | Aligns multiple lines (in multi-line/wrapping containers) | `stretch` (default), `flex-start`, `flex-end`, `center`, `space-between`, `space-around` |
| `gap`, `row-gap`, `column-gap` | Adds spacing between flex items (overall or per axis)     | Any length unit: `10px`, `1rem`, `5%`, etc.                                              |

************************************

child boxes
| Property                    | Description                                            | Common Values / Options                                                     |
| --------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| `flex`                      | Shorthand for grow, shrink, basis                      | `flex: 1`, `flex: 1 0 auto`, etc.                                           |
| `flex-grow`                 | Defines how much the item will grow relative to others | Unitless number, e.g. `0` (default), `1`, `2`                               |
| `flex-shrink`               | Defines how much the item will shrink                  | Unitless number, e.g. `1` (default), `0`, `2`                               |
| `flex-basis`                | Defines the initial size before growing/shrinking      | `auto` (default), `0`, `100px`, `20%`, etc.                                 |
| `align-self`                | Overrides `align-items` for this specific item         | `auto` (default), `stretch`, `flex-start`, `flex-end`, `center`, `baseline` |
| `order`                     | Controls visual order of items                         | Integer: `0` (default), `1`, `-1`, `999`, etc.                              |
| `min-width` / `max-width`   | Constrains how wide an item can be                     | Any length unit or `auto`                                                   |
| `min-height` / `max-height` | Constrains how tall an item can be                     | Any length unit or `auto`                                                   |


The set of properties can be placed into two groups. Properties for space distribution, and properties for alignment.

***Space distribution***
* justify-content
* align-content
<!-- * place-content: a shorthand for setting both of the above properties. -->

***alignment***
* align-self
* align-items

************************************

Grid
A track is the space between two grid lines
A grid cell is the smallest space on a grid defined by the intersection of row and column tracks
Grid areas are created by causing an item to span over multiple tracks.
Gaps: A gutter or alley between tracks. You can't place content into a gap but you can span grid items across it.

Grid container
.container {
  display: grid;
}

************************************

TRouBLe

************************************

Links: LVHA
a:link {}
a:visited {}
a:hover {}
a:active {}

************************************

Button: focus : focus-visible : disabled

************************************

Checkbox: check :indeterminate == check

************************************

Forms: :placeholder-shown :disabled :enabled

************************************

Selecting elements by their indexes

:first-child  :last-child  :only-child (if they have no siblings)
:first-of-type and :last-of-type

<div class="my-parent">
    <p>A paragraph</p>
    <div>A div</div>
    <div>Another div</div>
</div>

And this CSS:

.my-parent div:first-child { XXX dosent work
    color: red;
}

.my-parent div:first-of-type {
    color: red;
}


li:nth-child(2) {
  background: yellow;
}

:nth-child(even)

************************************

```css
.post h2,
.post li,
.post img {
    …
}

better to write as
.post :is(h2, li, img) {
    …
}
```

************************************

image not having alt

```css
img:not([alt]) {
    outline: 10px red;
}
```

************************************
Pseudo elements

```css
.my-element::before {
    content: "";
}

.my-element::after {
    content: "";
}

p::first-letter {
  color: goldenrod;
  font-weight: bold;
}
```
************************************

```css
p::first-line {
  color: goldenrod;
  font-weight: bold;
}

video::backdrop {
  background-color: goldenrod;
}

::marker {
  color: hotpink;
}

ul ::marker {
  font-size: 1.5em;
}

ol ::marker {
  font-size: 1.1em;
}

summary::marker {
  content: '\002B'' '; /* Plus symbol with space */
}

details[open] summary::marker {
  content: '\2212'' '; /* Minus symbol with space */
}

::selection {
  background: green;
  color: white;
}
```

************************************
Border:
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

To set border style on each side of your box, you can use 
border-top-style, border-right-style, border-left-style, and border-bottom-style.
<makes no sense to me, why would you>

border-color
if you only declare border properties, like width, the color of the box or element will be that computed value unless you explicitly set it
To set a border color on each side of your box, use border-top-color, border-right-color, border-left-color and border-bottom-color.
<again, no sense at all>

Width:
border-width: thin;
border-width: medium;
border-width: thick;

Make round edges
border-radius: 1em;
border-radius: 1em 2em 3em 4em; (different roundness on each edge)

To make a head with different curves
.my-element {
    border: 2px solid;
  border-radius: 95px 155px 148px 103px / 48px 95px 130px 203px;
}

You can put image in border also
```css
.my-element {
  border-image-source: url(https://assets.codepen.io/174183/border-image-frame.jpg);
  border-image-slice: 61 58 51 48;
  border-image-width: 20px 20px 20px 20px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
}
```
************************************

Shadow = HVBSC = horizontal, vertical, Blur, Spread, color

image (figure)

<figure>
  <img src="https://assets.codepen.io/174183/isolated-tshirt.png?width=1200&format=auto&quality=60" alt="A white t-shirt, isolated, on a hanger" />
  <figcaption>A cool, white t-shirt</figcaption>
</figure>

```css
figure {
  max-width: 25rem;
  margin: 2em auto;
  padding: 1em;
  border: 1px solid #718093;
  border-radius: 0.5em;
}

figcaption {
  font-style: italic;
  text-align: center;
}

figure img {
  filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%))
}
```

************************************

Focus
all form elements, buttons and links
<a>, <button>, <input> and <select>

************************************

If you set tabindex to -1, it can only receive focus programmatically, 
which means only when a JavaScript event happens or a hash change
(matching the element's id in the URL) occurs

an element with tabindex="1"

will receive focus before an element with tabindex="2

************************************

z-index
Elements will appear above another element if they have a higher z-index value
if not set, elements further down the document sit on top
Flexbox and grid do not need to set the position before z-index works

************************************

Functions
Custom properties and var()
<!-- The var() function takes one required argument: the custom property that you are trying to return as a value. -->
:root {
    --base-color: #ff00ff;
}

.my-element {
    background: var(--base-color);
}

<!-- you can provide fallback -->
.my-element {
    background: var(--base-color, hotpink);
}

attr() and url()
a::after {
  content: attr(href);
}
The attr() function here is taking the content of the <a> element's href attribute and setting it as the content of the ::after pseudo-element.

.my-element {
    background-image: url('/path/to/image.jpg');
}

<!-- Mathematical -->
.my-element {
    width: calc(100% - 2rem);
}
<!-- fill all of my parent space except for 2rem -->

:root {
  --root-height: 5rem;
}

.my-element {
  width: calc(calc(10% + 2rem) * 2);
  height: calc(var(--root-height) * 3);
}

.my-element {
  width: min(20vw, 30rem);
  height: max(20vh, 20rem);
}

************************************

Gradient:

background: linear-gradient(black, white);
background: linear-gradient(to top, #3c006b, #9948d9);
background: linear-gradient(to right, black, white);
background: linear-gradient(45deg, darkred 30%, crimson); angle first-color where-to-stop other color
background: linear-gradient(45deg, darkred 20%, crimson, darkorange 60%, gold, bisque);

background: radial-gradient(darkred 20%, crimson, darkorange 60%, gold, bisque);
background: conic-gradient(white, black);
background: conic-gradient(from 10deg at 20% 30%, white, black);
background: conic-gradient(gold 20deg, lightcoral 20deg 190deg, mediumturquoise 190deg 220deg, plum 220deg 320deg, steelblue 320deg);
background: repeating-linear-gradient(45deg,red,red 30px,white 30px,white 60px);
background: linear-gradient(-45deg, blue -30%, transparent 80%), linear-gradient(45deg, darkred 20%, crimson, darkorange 60%, gold, bisque);


************************************
Animation

.pulser::after {
  animation: pulse 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite;
}

<Keyframes>

@keyframes my-animation {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes my-animation {
    0% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0px);
    }
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.4;
  }
}

animation-duration: 10s;
animation-timing-function: ease-in-out; linear, ease, ease-in, ease-out, ease-in-out;
animation-timing-function: cubic-bezier(.42, 0, .58, 1);
animation-timing-function: steps(10, end);
animation-iteration-count: 10;
animation-direction: reverse; normal; alternate; alternate-reverse.
animation-delay: 5s;
animation-play-state: paused;

animation shorthand
.my-element {
    animation: my-animation 10s ease-in-out 1s infinite forwards forwards running;
}

Users can set their operating system to prefer reduced motion when interacting with applications and websites. 
You can detect this preference using the prefers-reduced-motion media query:

@media (prefers-reduced-motion) {
  .my-autoplaying-animation {
    animation-play-state: paused;
  }
}


************************************
Filters

filter: blur(0.2em);
filter: brightness(80%);
filter: contrast(160%);
filter: grayscale(80%);
filter: invert(1);
filter: opacity(0.3);
filter: saturate(155%);
filter: sepia(70%);
filter: hue-rotate(120deg);
filter: drop-shadow(5px 5px 10px orange);
filter: url(#pink-filter); --- svg filter


to make a glass effect use backdrop filter
backdrop-filter: blur(10px);
************************************

blent Modes
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: soft-light;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: saturation;
mix-blend-mode: color;
mix-blend-mode: luminosity;

isolation: isolate == to prevent from blending with the backdrop

background-blend-mode: Overlay
You use background-blend-mode when you have multiple backgrounds on an element and want them all to blend into each other.
************************************

Lists
li
ol
ul 
***the bullets are called <markers>***
And description lists are created with <dl>

<dl>
  <dt>oat milk</dt>
  <dd>- non dairy trendy drink</dd>
  <dt>cereal</dt>
  <dd>- breakfast food</dd>
</dl>

list-style-type: "🛒";

::marker {
  color: plum;
}

************************************

Transitions:
  transition: transform 150ms ease-in-out
  transition-property: background-color, transform;
  transition-duration: 200ms;

************************************
Overflow

p {
    text-overflow: ellipsis;  <!-- or clip -->
    overflow: hidden;
    white-space: nowrap;
}

<!-- to have a scroll bar -->

overflow: visible;

.parent {
  overflow-x: scroll;
  overflow-y: scroll;
}

If two keywords are specified, the first applies to overflow-x and the second to overflow-y.
Otherwise, both overflow-x and overflow-y use the same value.

overflow: hidden scroll;
<!-- visible-hidden-scroll-clip-auto -->
************************************

scrolling and overflow

To allow a scrolling box to accept focus add tabindex="0", a name with the aria-labelledby attribute,
and an appropriate role attribute. For example:

<div tabindex="0" role="region" aria-labelledby="id-of-descriptive-text">
    content
</div>

[role][aria-labelledby][tabindex] {
  overflow: auto;
}

[role][aria-labelledby][tabindex]:focus {
  outline: .1em solid blue;
}

scroll-behavior: auto;
scroll-behavior: smooth;

************************************
overscroll-behavior

If you’ve ever reached the end of a modal overlay, then continued scrolling and had the page behind the overlay move,
this is the scroll chaining, or bubbling up to the parent scroll container. The overscroll-behavior property allows
you to prevent overflow scrolling leaking into a parent container (called scroll chaining).

overscroll-behavior: contain (or none)


************************************

Background

background-position: top left 20%;
background-position: top 20% left;
background-position: top 20% left 20%;

background-size: contain
background-size: cover
background-size: auto

background-size: cover;
background-attachment: fixed;
background-attachment: local;

background-clip: padding-box
background-clip: content-box
background-clip: border-box

background-origin: border-box
background-origin: content-box
background-origin: padding-box


************************************

Font


Descriptors
ascent-override
descent-override
font-display
font-family
font-stretch
font-style
font-weight
font-feature-settings
font-variation-settings
line-gap-override
size-adjust
src
unicode-range

Font face and Font family

<table>
  <thead>
    <tr>
      <th><p><pre>
@font-face {
  font-family: "CustomFont";
  src: url("customfont.woff2") format("woff2");
}

body {
  font-family: "CustomFont", Arial, sans-serif;
}

shorthand

font: normal normal bold 14px/1.4 serif
font: italic 1.1em monospace
font: normal small-caps 18px/1 sans-serif
font: 20px cursive

case
.capitalize {
  text-transform: capitalize;
}

.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}



line decoration

.a {
  text-decoration-line: underline;
  text-decoration-color: coral;
  text-decoration-thickness: 2px;
}

.b {
  text-decoration-line: line-through;
  text-decoration-color: slateblue;
}

.c {
  text-decoration-line: overline;
  text-decoration-color: lime;
}

.d {
  text-decoration-line: underline overline line-through;
  text-decoration-color: aqua;
}



.a {
  text-decoration: underline 2px red wavy;
}

.b {
  text-decoration: line-through rgba(255, 180, 0, 0.4) 1.4ex;
}

.c {
  text-decoration: underline 8px dotted rgba(0, 0, 50, 0.5);
}

.d {
  text-decoration: line-through 4px solid rgba(70, 70, 70, 0.9);
}

alighnment
.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.align-start {
  text-align: start;
}

.align-end {
  text-align: end;
}

.align-center {
  text-align: center;
}

.align-justify {
  text-align: justify;
}


text wrap (or justification)

p.tw-wrap {
  text-wrap: wrap;
}

p.tw-nowrap {
  text-wrap: nowrap;
}

p.tw-balance {
  text-wrap: balance;
}

p.tw-stable {
  text-wrap: stable;
}


***<Javascript>***

***<There are 12 node types>***

<!-- most important -->
* document – the “entry point” into DOM.
* element nodes – HTML-tags, the tree building blocks.
* text nodes – contain text.
* comments – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.

[Exposed=Window]
interface Node : EventTarget {
  const unsigned short ELEMENT_NODE = 1;
  const unsigned short ATTRIBUTE_NODE = 2;
  const unsigned short TEXT_NODE = 3;
  const unsigned short CDATA_SECTION_NODE = 4;
  const unsigned short ENTITY_REFERENCE_NODE = 5; // legacy
  const unsigned short ENTITY_NODE = 6; // legacy
  const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
  const unsigned short COMMENT_NODE = 8;
  const unsigned short DOCUMENT_NODE = 9;
  const unsigned short DOCUMENT_TYPE_NODE = 10;
  const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
  const unsigned short NOTATION_NODE = 12; // legacy
  readonly attribute unsigned short nodeType;
  readonly attribute DOMString nodeName;

  readonly attribute USVString baseURI;

  readonly attribute boolean isConnected;
  readonly attribute Document? ownerDocument;
  Node getRootNode(optional GetRootNodeOptions options = {});
  readonly attribute Node? parentNode;
  readonly attribute Element? parentElement;
  boolean hasChildNodes();
  [SameObject] readonly attribute NodeList childNodes;
  readonly attribute Node? firstChild;
  readonly attribute Node? lastChild;
  readonly attribute Node? previousSibling;
  readonly attribute Node? nextSibling;

  [CEReactions] attribute DOMString? nodeValue;
  [CEReactions] attribute DOMString? textContent;
  [CEReactions] undefined normalize();

  [CEReactions, NewObject] Node cloneNode(optional boolean subtree = false);
  boolean isEqualNode(Node? otherNode);
  boolean isSameNode(Node? otherNode); // legacy alias of ===

  const unsigned short DOCUMENT_POSITION_DISCONNECTED = 0x01;
  const unsigned short DOCUMENT_POSITION_PRECEDING = 0x02;
  const unsigned short DOCUMENT_POSITION_FOLLOWING = 0x04;
  const unsigned short DOCUMENT_POSITION_CONTAINS = 0x08;
  const unsigned short DOCUMENT_POSITION_CONTAINED_BY = 0x10;
  const unsigned short DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
  unsigned short compareDocumentPosition(Node other);
  boolean contains(Node? other);

  DOMString? lookupPrefix(DOMString? namespace);
  DOMString? lookupNamespaceURI(DOMString? prefix);
  boolean isDefaultNamespace(DOMString? namespace);

  [CEReactions] Node insertBefore(Node node, Node? child);
  [CEReactions] Node appendChild(Node node);
  [CEReactions] Node replaceChild(Node node, Node child);
  [CEReactions] Node removeChild(Node child);
};

dictionary GetRootNodeOptions {
  boolean composed = false;
};

Selecting

The topmost tree nodeas are available directle

document.documentElement
document.head
document.body

…And descendants of <body> are not only direct children <div>, <ul> but also more deeply nested elements, such as <li> (a child of <ul>) and <b> (a child of <li>) – the entire subtree.

elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

for (let node of document.body.childNodes) {
  alert(node);  <!-- shows all nodes from the collection -->
}
<!-- Array methods won’t work, because it’s not an array: -->

***************************************

* DOM collections are read-only
* DOM collections are live
* Don’t use for..in to loop over collections
Collections are iterable using <for..of> not [for..in]

***************************************

Siblings are nodes that are children of the same parent.
For instance,  <head> and <body> are siblings of <html>
<body> is said to be the “next” or “right” sibling of <head>,
<head> is said to be the “previous” or “left” sibling of <body>.

The next sibling is in <nextSibling> property, and the previous one – in <previousSibling>

The parent is available as <parentNode>.

***Element-only navigation***
<children> – only those children that are element nodes.
<firstElementChild>, <lastElementChild> – first and last element children.
previousElementSibling, <nextElementSibling> – neighbor elements.
<parentElement> – parent element.

***************************************

Table Links

table.rows – the collection of <tr> elements of the table.
table.caption/tHead/tFoot – references to elements <caption>, <thead>, <tfoot>.
table.tBodies – the collection of <tbody> elements (can be many according to the standard, but there will always be at least one – even if it is not in the source HTML, the browser will put it in the DOM).
<thead>, <tfoot>, <tbody> elements provide the rows property:

tbody.rows – the collection of <tr> inside.
<tr>:

tr.cells – the collection of <td> and <th> cells inside the given <tr>.
tr.sectionRowIndex – the position (index) of the given <tr> inside the enclosing <thead>/<tbody>/<tfoot>.
tr.rowIndex – the number of the <tr> in the table as a whole (including all table rows).
<td> and <th>:

td.cellIndex – the number of the cell inside the enclosing <tr>.

***************************************
document.getElementById(id)
or in html id='elem' then in javascript elem.style.background = red.
but if we declare a javascript variable with the same name elem, the variable takes precedence
<!-- Only <document.getElementById>, not anyElem.getElementById -->

elem.querySelectorAll(css) returns the first element for the given CSS selector
let elements = document.querySelectorAll('ul > li:last-child');

others- rarely used
elem.getElementsByClassName(className) returns elements that have the given CSS class.
document.getElementsByName(name)

***************************************

document.body.innerHTML
Beware: “innerHTML+=” does a full overwrite
We can write to elem.outerHTML, but should keep in mind that it doesn’t change the element we’re writing to (‘elem’)
 It puts the new HTML in its place instead. We can get references to the new elements by querying the DOM.

 <body>
  Hello
  <!-- Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // Hello

    let comment = text.nextSibling;
    alert(comment.data); // Comment
  </script>
</body>


***************************************
<textContent>

The <textContent> provides access to the text inside the element: only text, minus all <tags>

***************************************

to hide element
elem.hidden = true;

***************************************

DOM elements also have additional properties, in particular those that depend on the class:

value – the value for <input>, <select> and <textarea> [HTMLInputElement] [HTMLSelectElement…].
href – the “href” for <a href="..."> [HTMLAnchorElement].
id – the value of “id” attribute, for all elements (HTMLElement).
…and much more…

***************************************

elem.hasAttribute(name) – checks for existence.
elem.getAttribute(name) – gets the value.
elem.setAttribute(name, value) – sets the value.
elem.removeAttribute(name) – removes the attribute.

***************************************

node.append(...nodes or strings) – append nodes or strings at the end of node,
node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
node.before(...nodes or strings) –- insert nodes or strings before node,
node.after(...nodes or strings) –- insert nodes or strings after node,
node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.

***************************************

div.before('<p>Hello</p>', document.createElement('hr'));

***************************************

Mouse events:

click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
contextmenu – when the mouse right-clicks on an element.
mouseover / mouseout – when the mouse cursor comes over / leaves an element.
mousedown / mouseup – when the mouse button is pressed / released over an element.
mousemove – when the mouse is moved.
Keyboard events:

keydown and keyup – when a keyboard key is pressed and released.
Form element events:

submit – when the visitor submits a <form>.
focus – when the visitor focuses on an element, e.g. on an <input>.
Document events:

DOMContentLoaded – when the HTML is loaded and processed, DOM is fully built.
CSS events:

transitionend – when a CSS-animation finishes.
There are many other events. We’ll get into more details of particular events in upcoming chapters.



***************************************

elem.addEventListener( "click" , () => alert('Thanks!'));
// ....
elem.removeEventListener( "click", () => alert('Thanks!'));

***************************************

JS Immediately Invoked Function Expression (IIFE)
(function(){
  //...
})();

(f(){//..})();

***************************************

caching be be done on the server side
using Redis or Memcached

Or be on the seerver side

Cching loccations:
Browser Cache - on the user's broser - Depends on the HTTP headers
Proxy Ccahe = Proxy and reversr proxy = Catched by the ISP or organization you working with
Reverse Proxy = Proxy close to the server, setup by the server administrators

Terminologies
Client
Origin server
Stale content
Fresh content
Cache validation
Cache invalidation - removing stale content

How does caching work
HTTP headers are sent by the Server to the client, who then uses it to cache the content

so what is in the HTTP headers
They are: 
* Expires
* pragma
**cache control -now the most used one has possiblities of bot expires and pragma**

Also there are validator headers used by the client to make sure the cached content is still usable
Validator headers are:
* etag
* if-none-match
* last-modified
* if-modified-since

Expires Header:
Value for expires header is the absolute expiry date, till which the header can be cached
cant be more than a year. clocks have to be in sync

Pragma Haader
only possible value is no-cache. 
It is used to prevent caching. especially for clients which do not support caching


[[[[Cache-Contrl]]]]
Private: cached only in the client
Public: available to multiple users, and can be cached in multiple cache places
no-store: cant be cached no where
no-cache: can be cached but has to be first revalidated.
max-age=seconds: content can be cached at the give number of seconds
max-age-seconds, private: max age on client 
s-max-age-seconds: s tands for shared, gives maximumduration for the caching in the shared places
max-age-seconds, s-max-age-second: would take max for client, and s-max-age=seconds for shared places
must-revalidate = must not allow to use stale content. if max-age is added and server is not reacheable, without must-revalidate, it will keep using the stale content.
proxy-revalidate = same as must-revalidate but only apply to the proxies or shared contents

[[[[Client-Validation]]]]
for client to validate the content, the Server serves one or more request to the server which the cleint uses to validate the server

Etag - entity Tags (e.g ETag: "jvjds9nnfj83484mfdmc8r32")
Client send content with Etage, if client needs to revalidate, client send If-None-Match: "jvjds9nnfj83484mfdmc8r32", Then server responses with new content with new Etag
If server desent neet modtify the conent, server responses with status **<304>** - which means ***"not modified"***

There are two types of Etags: 
Strong = Means Two Etags are exactly same and no difference at all = "jvjds9nnfj83484mfdmc8r32"
Weak = are prefixed with W = Means two resorces are althought not strictly the same, but can be considered same (W/"jvjds9nnfj83484mfdmc8r32")

Last-Modified: which includes the date and time he Content was Last Modidied: Sun, 3 Aug 2020 20:54:47 GMT
Client the use **If-Modified-Since: Sun, 3 Aug 2020 20:54:47 GMT** header

If both Etag and Last Modified are in the header, Server sends both

If server doesnt return, then no caching

What caching to use 
Light Caching: E.g HTML - for dynamic content, it depends on your need === cache-control: private, no-cache
Agressive caching: e.g css, javascript, images  === cache-control: public, max-age=31556926

[[[[Debugging]]]]
To debug the HTTP headers you can use 
curl -I http://some-url.com or do ti from the dev tools in the network tab

***************************************
***************************************


To pull up your package.json 
npm init
can use with --yes
this will contain details about your ptoject


{
  "name": "metaverse", // The name of your project
  "version": "0.92.12", // The version of your project
  "description": "The Metaverse virtual reality. The final outcome of all virtual worlds, augmented reality, and the Internet.", // The description of your project
  "main": "index.js"
  "license": "MIT" // The license of your project
}


then to install dependencies do
npm install | npm i
can use with --save

Having dependencies in your project's package.json allows the project to install the versions of the modules it depends on. By running an install command (see the instructions for npm install below) inside of a project, you can install all of the dependencies that are listed in the project's package.json - meaning they don't have to be (and almost never should be) bundled with the project itself.

Second, it allows the separation of dependencies that are needed for production and dependencies that are needed for development. In production, you're likely not going to need a tool to watch your CSS files for changes and refresh the app when they change. But in both production and development, you'll want to have the modules that enable what you're trying to accomplish with your project - things like your web framework, API tools, and code utilities.

"devDependencies": {
    "mocha": "~3.1",
    "native-hello-world": "^1.0.0",
    "should": "~3.3",
    "sinon": "~1.9"
  },
  "dependencies": {
    "fill-keys": "^1.0.2",
    "module-not-found-error": "^1.0.0",
    "resolve": "~1.1.7"
  }

One key difference between the dependencies and the other common parts of a package.json is that they're both objects, with multiple key/value pairs. Every key in both dependencies and devDependencies is a name of a package, and every value is the version range that's acceptable to install (according to Semantic Versioning - to learn more about Semantic Versioning, also known as semver, check out our primer on semver).

When you're running npm install to install a module, you can add the optional flag --save to the command. This flag will add the module as a dependency of your project to the project's package.json as an entry in dependencies.

To install a module from npm globally, you'll simply need to use the --global flag when running the install command to have the module install globally, rather than locally (to the current directory).


Run: npm prune

When you run prune, the npm CLI will run through your package.json and compare it to your project’s /node_modules directory. It will print a list of modules that aren’t in your package.json.

The npm prune command then strips out those packages, and removes any you haven't manually added to package.json or that were npm installed without using the --save flag.

Running npm prune on a Node project

Update: Thanks to @EvanHahn for noticing a personal config setting that made npm prune provide a slightly different result than the default npm would provide!
***************************************

we need webpack also
$ npm install webpack webpack-cli --save-dev

we use require('package');
we use require('moment');

npm repo express = open the package's repo

***************************************

$ npm install @babel/core @babel/preset-env babel-loader --save-dev
makes javascript more readable

module: {  
    rules: [  
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env']  
          }  
        }  
      }  
    ]  
  }

  now we use
  import package from 'package';
  import moment from 'moment';

  console.log("Hello from JavaScript!");  
console.log(moment().startOf('day').fromNow());
var name = "Bob", time = "today";  
so indtead of
console.log('Hello' + name +  ', how are you' + time + '?');

we can do

console.log(`Hello ${name}, how are you ${time}?`);

***************************************

You can add some scripts in the package.json file to make working with npm easier

"scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1",  
    "build": "webpack --progress --mode=production",  
    "watch": "webpack --progress --watch" 
  },

  $ npm run build
This will run webpack (using configuration from the webpack.config.js we made earlier) with the --progress option to show the percent progress and the --mode=production option to minimize the code for production. To run the watch script:

$ npm run watch
This uses the --watch option instead to automatically re-run webpack each time any JavaScript file changes, which is great for development.


We can make things even sweeter by installing webpack-dev-server, a separate tool which provides a simple web server with live reloading

$ npm install webpack-dev-server --save-dev

and then add to the script

  "serve": "webpack-dev-server --open"

Then you can start your dev server by running the command:

$ npm run serve


Conclusion
Even better for beginners and experienced developers alike is that frameworks these days often come with tools to make the process easier to get started. Ember has ember-cli, which was hugely influential on Angular’s angular-cli, React’s create-react-app, Vue’s vue-cli, etc. All these tools will set up a project with everything you need — all you need to do is start writing code. However, these tools aren’t magic, they simply set everything up in a consistent and working fashion — you may often get to a point where you need to do some extra configuration with webpack, babel, etc. So it’s still very critical to understand what each piece does as we’ve covered in this article.

***************************************

ExpressJS

Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies the process of building server-side applications and APIs by providing a robust set of features for handling HTTP requests, routing, middleware, and more. Built on top of Node.js, Express allows developers to create scalable and maintainable web applications using JavaScript quickly.

helping manage routes, requests, and responses efficiently

how to use express

$ npm install express

/ Import the express module 
const express = require('express'); 

// Create an Express application 
const app = express(); 

// Define a route 
app.get('/', (req, res) => { 
  res.send('Hello, World!'); 
}); 

// Start the server on port 3000 
app.listen(3000, () => { 
  console.log('Server is running on http://localhost:3000'); 
}); 

Then run the application
$ node app.js

Using Express and React
Express handles the backend (API, server logic), and React manages the frontend (user interface).



// Import the express library here
const express = require("express");
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;

// Invoke the app's `.listen()` method below:

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

To GET

Express uses app.get() to register routes to match GET requests. Express routes (including app.get()) usually take two arguments, a path (usually a string), and a callback function to handle the request and send a response.

app.get('/expressions', (req, res, next) => {
  console.log(req);
});


***************************************

API allows clients to Create, Read, Update, and Delete Expressions

Databases
The acronym CRUD refers to the major operations which are implemented by databases. Each letter in the acronym can be mapped to a standard Structured Query Language (SQL) statement.[3]

CRUD	SQL
Create	INSERT
Read	SELECT
Update	UPDATE
Delete	DELETE


RESTful APIs
The acronym CRUD also appears in the discussion of RESTful APIs. Each letter in the acronym may be mapped to a Hypertext Transfer Protocol (HTTP) method:

CRUD	HTTP
Create	POST, PUT if we don't have `id` or `uuid`
Read	GET
Update	PUT to replace, PATCH to modify
Delete	DELETE

***************************************

const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if(foundExpression){
    res.send(foundExpression);
  } else {
    res.status(404).send('Expression not found');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.put(), app.post(), and app.delete().
app.get(route expression)
PUT  requests. are used for updating existing resources
app.put uses req.query and req.send

***************************************

responsive websites

name="viewport" content="width=device-width initial-scale=1.0"

***************************************

body {
  background-color = gey;
}
@media print {
  background-color = transparent;
}

@media with no css defaults to all.

or use it in the head like
<link rel="stylesheet" href="media.css" media="all">
***************************************

@media="type and (feature)"

<link rel="stylesheet" href="specific.css" media="type and (feature)">

@media all and (orientation: landscape) {
   // Styles for landscape mode.
}
@media all and (orientation: portrait) {
   // Styles for portrait mode.
}

<link rel="stylesheet" href="landscape.css" media="all and (orientation: landscape)">
<link rel="stylesheet" href="portrait.css" media="all and (orientation: portrait)">

***************************************
For different viewports

@media (min-width: 400px) {
  // Styles for viewports wider than 400 pixels.
}

@media (max-width: 400px) {
  // Styles for viewports narrower than 400 pixels.
}

<!-- any css unit is allowed -->

@media (min-width: 25em) {
  // Styles for viewports wider than 25em.
}

@media (min-width: 50em) and (max-width: 60em) {
  // Styles for viewports wider than 50em and narrower than 60em.
}


@media (min-width: 50em) and (max-width: 60em) {
  body {
    background-color: var(--color-mid-dark);
    color: var(--color-light);
  }
}

***************************************

Think internationally

Avoid directional propertyes like <text-align: right>
rather do <text-align: end;>

<margin-inline-start corresponds to "left"> 
<margin-inline-end corresponds to "right">

<inline-start corresponds to "left"> 
<inline-end corresponds to "right">
 
<block-start corresponds to "top">
<block-end corresponds to "bottom">

***************************************

language

<html lang="en-us">

The lang attribute can go on any HTML element, not just html. If you switch languages in your web page, indicate that change. In this case, one word is in German:

<p>I felt some <span lang="de">schadenfreude</span>.</p>

***************************************

choosing fonts. use woff2

@font-face {
  font-family: Roboto;
  src: url('/fonts/roboto-regular.woff2') format('woff2');
}
body {
  font-family: Roboto, sans-serif;
}

***************************************

<link href="/fonts/roboto-regular.woff2" type="font/woff2" 
  rel="preload" as="font" crossorigin>

<preload>: mean prioritize this, as <font>: means use as font, <type>: be even more specific the font type
& You need to include the <crossorigin> attribute even if you are hosting the font files yourself.

***************************************

Use a <font-display> value of <swap> if you still want the web font to replace the system font 
whenever the web font finally loads.

<body {
  font-family: Roboto, sans-serif;
  font-display: swap;
}>


Use a <font-display> value of <fallback> if you want to stick with the system font once text has been rendered.

<body {
  font-family: Roboto, sans-serif;
  font-display: fallback;
}>

***************************************


@media (min-width: 45em) {
  <main {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }>
}


@media (min-width: 45em) {
  <main {
    display: flex;
    flex-direction: row;
  }

  <main article {
    flex: 2;
  }>

  <main aside {
    flex: 1;
  }>
}

***************************************

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 1em;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
}
.cards .card {
  flex-basis: 15em;
  flex-grow: 1;
}



***************************************

for text use, px
**or better still use calc + vw, so text adjusts with the viewer's screen view**
do not use only vw

html {
  <font-size: calc(0.75rem + 1.5vw);>
}

The clamp() function is like the calc() function but it takes three values. 
The middle value is the same as what you pass to calc(). 
The opening value specifies the minimum size, in this case 1rem so as to not go below the user's preferred font size. 
The closing value specifies the maximum size.


<html {
  font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
}>



***************************************

You can't set a line length directly in CSS. There is no line-length property. 
But you can stop text from getting too wide by limiting how wide the container can be. 
The <max-inline-size> property is perfect for this.

<article {
  max-inline-size: 66ch;
}>

***************************************

images: always put max inline size

In your style sheet, you can use max-inline-size to declare that images can never be 
rendered at a size wider than their containing element.

<img {
  max-inline-size: 100%;
  block-size: auto;
}>

You can apply the same rule to other kinds of embedded content too, like videos and iframes.

<img,
video,
iframe {
  max-inline-size: 100%;
  block-size: auto;
}>

***************************************

Adding a <block-size> value of auto means the browser preserves your images' aspect ratio as it resizes them.

<img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
}>

***************************************

To prevent squashing and stretching, use the <object-fit> property.

<img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
  object-fit: contain;
}>

An <object-fit> value of <cover> tells the browser to preserve the image's aspect ratio, cropping the image if needed.

contain - preserve === cover - full and stretch if needed


***************************************

<object-position> property adjusts the focus of the crop, so you can 
make sure the most important part of the image is still visible.

<img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
  object-fit: cover;
  object-position: top center;
}>

***************************************

If you know your image's dimensions, always include <width> and <height> attributes in HTML
<img
 src="image.png"
 alt="A description of the image."
 width="300"
 height="200"
>

***************************************

Use the <loading> attribute to tell the browser whether to delay loading the image until it's in or near the viewport

<img
 src="image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
>

For a hero image above the fold, don't use <loading>. If your site automatically applies the loading="lazy" 
attribute, you can usually set loading to the default value of <eager> to prevent images from being lazy loaded:

<img
 src="hero.jpg"
 alt="A description of the image."
 width="1200"
 height="800"
 loading="eager"
 fetchpriority="high" [<!-- to proritisze a loading -->] <Only set fetchpriority="high" on an image if it's truly vital.>
>


***************************************

There's also a <decoding> attribute you can add to img elements. 
You can tell the browser that the image can be decoded asynchronously, 
so it can prioritize processing other content.

<img
 src="image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
 decoding="async"
>

***************************************

You can use the <sync> value if the <image> itself **is the most important** piece of content to prioritize.


<img
 src="hero.jpg"
 alt="A description of the image."
 width="1200"
 height="800"
 loading="eager"
 decoding="sync"
>


***************************************

With <max-inline-size: 100%> your images can't break out of their containers

you can add multiple versions of the same image for users with smaller screens with <srcset> attribute

<img
 src="small-image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
 decoding="async"
* srcset="small-image.png 300w, medium-image.png 600w, large-image.png 1200w"
>

**Note: You still need to have a valid src attribute**

***************************************

Sizes
If you're using the width descriptor, you must also use the sizes attribute to give the browser more information.

<img
 src="small-image.png"
 alt="A description of the image."
 width="300"
 height="200"
 loading="lazy"
 decoding="async"
 srcset="small-image.png 300w, medium-image.png 600w, large-image.png 1200w"
 sizes="(min-width: 66em) 33vw,(min-width: 44em) 50vw, 100vw"
>


***************************************
In CSS
The <image-set> function in CSS works a lot like the srcset attribute in HTML. 
Provide a list of images with a pixel density descriptor for each one.

<element {
  background-image: image-set(
    small-image.png 1x,
    medium-image.png 2x,
    large-image.png 3x
  );
}
>

***************************************

An empty <alt> attribute is used ot tell the reader that the image is just presentational
If you embed an image that's decorative, without any meaningful content, you can use an empty alt attribute.
<img
 src="flourish.png"
 alt=""
 width="400"
 height="50"
>

***************************************

Using <picture> element


<!-- suggest different formats and a fall back if none works -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="A description of the image." 
    width="300" height="200" loading="lazy" decoding="async">
</picture>

<!-- can also be used for media query, and even cropping -->
<picture>
  <source srcset="full.jpg" media="(min-width: 75em)" width="1200" height="500">
  <source srcset="regular.jpg" media="(min-width: 50em)" width="800" height="400">
  <img src="cropped.jpg" alt="A description of the image." width="400" height="400" loading="eager" decoding="sync">
</picture>

***************************************

Icons with SVG

<img src="image.svg" alt="A description of the image." width="25" height="25">
<img src="image.svg" alt="A description of the image." width="250" height="250">

***************************************

Theme Color

<meta name="theme-color" content="#00D494">

You can also specify a theme color in a **web app manifest file**

<link rel="manifest" href="/manifest.json">

{
  "short_name": "MDN",
  "name": "MDN Web Docs",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}


***************************************

**For Dark Mode**

@media (prefers-color-scheme: dark) {
  // Styles for a dark theme.
}

<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">

Use variables to make it easier

<html {
  --page-color: white;
  --ink-color: black;
}>
@media (prefers-color-scheme: dark) {
  <html {
    --page-color: black;
    --ink-color: white;
  }>
}
<body {
  background-color: var(--page-color);
  color: var(--ink-color);
}>
<input {
  background-color: var(--page-color);
  color: var(--ink-color);
  border-color: var(--ink-color);
}>
<button {
  background-color: var(--ink-color);
  color: var(--page-color);
}
>
***************************************

with SVG, you can change colors too

<svg {
  stroke: var(--ink-color);
  fill: var(--page-color);
}>

***************************************

You might need to tone down brightness of images in darkmode
use CSS <brightness> and <contrast> filters

@media (prefers-color-scheme: dark) {
  <img {
    filter: brightness(.8) contrast(1.2);
  }>
}

You might want to swap an image out completely in dark moder, use the source attribute in picture element

<picture>
  <source srcset="darkimage.png" media="(prefers-color-scheme: dark)">
  <img src="lightimage.png" alt="A description of the image.">
</picture>

***************************************

Browsers provide default color palete for <forms>, add this to your styles

html {
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}

***************************************

It's common for dark themes to have subdued brand colors. 
You can update the accent-color value for dark mode.

<html {
  accent-color: red;
}>
@media (prefers-color-scheme: dark) {
  <html {
    accent-color: pink;
  }>
}

***************************************

In summary

html {
  color-scheme: light;
  --page-color: white;
  --ink-color: black;
  --highlight-color: red;
}
@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
    --page-color: black;
    --ink-color: white;
    --highlight-color: pink;
  }
}
html {
  accent-color: var(--highlight-color);
}
body {
  background-color: var(--page-color);
  color: var(--ink-color);
}

***************************************

Assessibility
Firefox's Accessibility tab includes a dropdown labeled Simulate with a list of options.
In Chrome DevTools, the rendering tab allows you to emulate vision deficiencies.

<use well contrating colors for buttons etc>
<avoid using px for fonts, rather use ch>
<add focus so that forms and liks are noticable when tabed with the keyboard>

<a:focus,
a:hover {
  outline: 1px dotted;
}
a:focus-visible {
  outline: 3px solid;
}>

ensure orderliness
In the Accessibility panel of the Firefox browser's developer tools there's an option to Show Tabbing Order. 
Enabling this will overlay numbers on each focusable element.


There's a feature query that communicates whether the user would prefer less motion. 
It's called <prefers-reduced-motion>. 
Include it wherever you are using CSS transitions or animations.

<a:hover {
  transform: scale(150%);
}
@media (prefers-reduced-motion: no-preference) {
  a {
    transition-duration: 0.4s;
    transition-property: transform;
  }
}>

***************************************
<ARIA stands for Accessible Rich Internet Application>
***************************************

Designing for differnt interection types on screen, keyboard, touch and mouse

***pointer none -  keyboard***
***pointer coarse -  touch***
***pointer fine -  mouse***

<button {
  padding: 0.5em 1em;
}
@media (pointer: coarse) {
  button {
    padding: 1em 2em;
  }
}>

***************************************

<Hover> accessibility 
The hover media feature reports on whether the primary input mechanism can hover over elements

<button .extra {
  visibility: visible;
}
@media (hover: hover) {
  button .extra {
    visibility: hidden;
  }
  button:hover .extra {
    visibility: visible;
  }
}>

<button .extra {
  visibility: visible;
}
@media (hover: hover) {
  button .extra {
    visibility: hidden;
  }
  button:is(:hover, :focus) .extra {
    visibility: visible;
  }
}>

***************************************

Virtual keyboards
HTML5 input types are a great way of describing your input elements. 
The <type> attribute accepts values such as <email>, <number>, <tel>, <url>, etc.

<label for="email">Email</label>
<input type="email" id="email">

***************************************

The <inputmode> attribute gives you fine-grained control over virtual keyboards. 
For example, whereas there’s one input type with a value of number, you can use the 
<inputmode> attribute to differentiate between whole numbers and decimals.

<label for="age">Age</label>
<input type="number" id="age" inputmode="numeric">

<label for="price">Price</label>
<input type="number" id="price" inputmode="decimal">

***************************************

Autocomplete

Nobody likes filling in forms. As a designer, you can improve the experience for your users 
by enabling them to automatically fill in form fields. The <autocomplete> attribute provides 
you with a host of options for improving contact forms, log-in forms, and checkout forms.

<label for="name">Name</label>
<input type="text" id="name" autocomplete="name">

<label for="country">Country</label>
<input type="text" id="country" autocomplete="country">

<label for="email">Email</label>
<input type="email" id="email" autocomplete="email">

***************************************

A carousel is a common method of hiding content away

Use overflow-x: auto

@media (max-width: 50em) {
  .cards {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: inline mandatory;
    scroll-behavior: smooth;
  }
  .cards .card {
    flex-shrink: 0;
    flex-basis: 15em;
    scroll-snap-align: start;
  }
}


***************************************

***Sass***


nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}




// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}


// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}



***************************************

Mixins

@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}



***************************************

Extend

/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}


***************************************

Math and Operators

@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}

***************************************






To vertically center the contents inside your section, you need to set the height of the parent and apply **items-center** on a **flex** or **grid** container with full height.

Your layout is already using grid, so here's how to center everything vertically inside the .h-64 section:

✅ Fix: Add h-full to the container grid and place-items-center
html
Copy
Edit
<section class="h-64 w-full bg-accent">
	<div class="grid grid-cols-2 max-w-7xl mx-auto h-full place-items-center px-4">
		<div>
			<p class="text-white font-medium text-xl italic">24 hours Available</p>
			<h2 class="text-white font-medium text-4xl">Any Emergency? Call us Any Time</h2>
		</div>
		<button class="bg-orange-400 justify-self-end h-12 w-40 md:w-64 rounded-md cursor-pointer text-primary text-sm md:text-md font-bold">
			Book an Appointment Now
		</button>
	</div>
</section>
✅ Explanation:
**h-64** gives the section a fixed height

**h-full** on the inner container allows it to span the section's height

**place-items-center** centers both columns (text + button) vertically and horizontally inside the grid cells



 <!-- *********************************
***************************************
*********** JAVASCRIPT ****************
***************************************
***************************************
**********************************8 -->




<!-- should return true if the parameter is an array -->
Array.isArray(anArray);

<!-- returns index of the array member -->
Array.indexOf('arrayMember')

***************************************

<!-- Destructuring -->

const person = {
firstName: 'John', lastName:
'Doe',
age: 30, 
hobbies: ['music', 'movies', 'sports'],
address: {
    street: '50 main st', 
    city: 'Boston', 
    state: 'MA'
  }
}

const { firstName, lastName, address: { city }} = person;
console. log (city):

can also add to this object

person.email = 'john@gmail.com';

***************************************

***When sending data to the server, you send in Json format and receive in json format***

const todos = [
{
  id: 1, 
  text: 'Take out trash',
  isCompleted: true
}, {
  id: 2, 
  text: 'Meeting with boss',
  isCompleted: true
}, {

    id: 3, 
    text: 'Dentist appt', 
    isCompleted: false
}
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON) ;


***************************************

iterators

for( let i = 0; i < todos.length; i++){
  console.log(`For Loop Number: todos[i].text`);
}

let i = 0
while (i < 10){
  console.log(`Loop Number: todos[i]`);
  i++;
}

<!-- For of loop -->
for( let lodo of todos){
  console.log(todo.text);
}


<!-- forEach, map, Filter -->
todos.forEach(function(todo){
  console.log(todo.text);
})


For map, it returns an array, so we have to assign it to a new array

cosnts todoText = todos.map(function(todo){
  return(todo.text);
})
console.log(todoText);

For filter, we can return the todo that has a particular condition
cosnts todoCompleted = todos.filter(function(todo){
  return(todo.isCompleted === true);
})
console.log(todoCompleted);


We can also chain on two or more methods

For filter, we can return the todo that has a particular condition
cosnts todoCompleted = todos.filter(function(todo){
  return(todo.isCompleted === true);
}).map(function(todo){
  return todo.text;
})


console.log(todoCompleted);


***************************************

Constructors in JS

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this. lastName = lastName;
    this.dob = new Date(dob) ;

}

Person.prototype.getBirthYear = function (){
  return this.dob.getFullYear();
}


Person. prototype-getFullName = function () {
  return '${this.firstName} ${this. lastName}*;
}

// Instantiate object
const person1 = new Person ('John', 'Doe', '4-3-1980');
const person2 = new Person( 'Mary', 'Smith', '3-6-1970');
console. log (person2.getFullName());
console. log (person1);


***************************************

Selectors

<!-- Single element -->
console.log (document.getElementById ('my-form' ));
console.log (document. querySelector ('h1'));

<!-- Multiple element -->
console.log (document querySelectorAll('.item'));
console.log (document.getElementsByClassName('item"));
console.log (document.getElementsByTagName('li'));



const ul = document querySelector('.items');
ul.remove();
ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children [1]. innerText = 'Brad';
ul.lastElementChild. innerHTML = `<h1>Hello</h1>`;

const btn = document. querySelector('.btn');
btn.style.background = 'red';


***************************************

default behaviour of a button is to send the contents of the form to the document. 
So you have to prevent default behaviour so the content can be submitted to deired place

const btn = document. querySelector('.btn');

btn. addEventListener( 'click', (e) => {
  e.preventDefault();

  document.querySelector('#my-form').style.background = '#ccc';

  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('items').lastElementChild.innerHTML = `<h1>Hello</h1>`;
}) ;


***************************************

const myForm = document querySelector ('#my-form');
const nameInput = document. querySelector ('#name');
const emailInput = document. querySelector ('#email');
const msg = document, querySelector ('-msg');
const userList = document querySelector ('#users');
myForm-addEventListener( 'submit', onSubmit);

function onSubmit (e) {

  e-preventDefault();
  if(nameInput.value == '' || emailInput.value == '') {
    msg-classList.add ('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
} else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    <!-- Clear fields -->
    nameInput.value = '';
    emailInput.value = '';
  } 
}

***************************************


Keep in mind that JavaScript numbers are based on the IEEE-754 format, and so the maximum number possible to be represented in the language is roughly less than 1.8e308.

Creating a number larger in value than this maximum limit (or even equal to it) would result in it being replaced with the special value Infinity (more on this below) as shown below:

5e1000
Infinity
1e310
Infinity
1e100 * 2e250
Infinity
1.8e308
Infinity


***************************************

Unary plus (+) operator
Apart from the three functions shown above, there is yet an even simpler way to convert a given value into a number.

That is using the unary plus (+) operator.

The unary plus (+) operator takes an expression, converts it into a number and returns back the number.
Here's its syntax:

+expression
The unary plus operator is basically a shorthand notation for calling Number() on a given value. The rules for conversion are exactly the same as for Number().

Let's see it in action:

+'20'
20
+'10.123'
10.123
+'-5.1'
-5
+'NaN'
NaN
+'Infinity'
Infinity
+'20a'
NaN
+true
1

***************************************

JavaScript
var num = NaN;
console.log(num === NaN); // false
Extremely surprisingly, the last statement here logs false, even though both the values being compared are equal to NaN.

Why? Why does NaN === NaN return false?

This is part of the IEEE-754 spec which states that two 'nan' values aren't equal to one another.

***************************************

Infinity could be compared manually
Unlike NaN, the special number Infinity could be compared manually to a given value to determine whether that value is equal to Infinity or not.

An example follows:

JavaScript
var num = Infinity;
console.log(num === Infinity); // true

***************************************

58 .toPrecision(2)
'58'
58 .toPrecision(3)
'58.0'
124 .toPrecision(3)
'124'
124 .toPrecision(4)
'124.0'

58 .toPrecision(1)
'6e+1'
124 .toPrecision(1)
'1e+2'
124 .toPrecision(2)
'1.2e+2'
178 .toPrecision(2)
'1.8e+2'
17000 .toPrecision(1)
'2e+4'
17000 .toPrecision(2)
'1.7e+4'
17000 .toPrecision(3)
'1.70e+4'
17000 .toPrecision(4)
'1.700e+4'
17000 .toPrecision(5)
'17000'


decimal place

1 .toFixed()
'1'
1 .toFixed(0)
'1'
1 .toFixed(1)
'1.0'
1 .toFixed(2)
'1.00'
1 .toFixed(5)
'1.00000'
1.1286.toFixed()
'1'
1.1286.toFixed(0)
'1'
1.1286.toFixed(1)
'1.1'
1.1286.toFixed(2)
'1.13'
1.1286.toFixed(3)
'1.129'


***************************************

to scientific notation

152 .toExponential(0)
'2e+2'
152 .toExponential(1)
'1.5e+2'
152 .toExponential(2)
'1.52e+2'
152 .toExponential()
'1.52e+2'



***************************************
to string or to base
Although toString() merely converts a number into a string when called with no arguments, 
if it is provided with an argument, it converts the number into the given base n representation.

avaScript
var num = 15;

// Conversion to binary
var binNum = num.toString(2); // '1111'

// Conversion to octal
var octNum = num.toString(8); // '17'

// Conversion to hexadecimal
var hexNum = num.toString(16); // 'f'

Since we can't have the bases 0 or 1 to represent numbers, calling toString(0) or toString(1) will throw errors.

In hexadecimal, f stands for the number 15.
Since we can't have the bases 0 or 1 to represent numbers, calling toString(0) or toString(1) will throw errors.
These three conversions are by far the most common out there, but you can still experiment with other bases. See what each one returns!

And once again, note that this method also converts the number into a string; in effect, that is the sole purpose of toString().

Therefore, before we can work with the converted number (which is a string), we ought to parse it into a number using parseInt() and the respective base of the number.

Following we have a task for you to exercise this number conversion logic.

Convert the binary string '10110' into hexadecimal representation (as a string), and save the result in a variable hexNum.

The following code has been set up for you to start with:

JavaScript
var binNum = '10110';
var hexNum = // put the result here
Note that the final result should be a string.

Hide solution

First we'll need to parse binNum into a number before we can convert this number into a hexadecimal number string.

To parse binNum, we'll use parseInt(binNum, 2). Then, to convert its output into hexadecimal, we'll use toString(16).

Combining both these functions, we have the following code:

JavaScript
var binNum = '10110';
var hexNum = parseInt(binNum, 2).toString(16); // '16'
hexNum turns out to be '16' which represents the decimal number 22. This is correct — the binary string '10110' also represents 22 in decimal format


***************************************

Useful mathematical constants


Math.PI

3.141592653589793

Math.E
Math.E holds the value of the mathematical constant 
e, known as Euler's number.

Math.E
2.718281828459045

***************************************

Math.min(0, 1)
0
Math.min(-Infinity, Infinity)
Infinity
Math.min(-1, 0, 10, 20, -5)
-5
Math.min(3, 2, 1)
1


***************************************

Math.min(...[0, 1])
0
Math.min(...[-Infinity, Infinity])
-Infinity
Math.min(...[-1, 0, 10, 20, -5])
-1

***************************************

Math.round(num)

***************************************

Math.trunc(1)
1
Math.trunc(1.4)
1
Math.trunc(1.7)
1
Math.trunc(-1.4)

***************************************

Useful mathematical functions


Math.abs(2); // returns 2
Math.abs(-2); // returns 2
Math.abs(-2.5); // returns 2.5

***************************************

Math.random()
0.6657972268679888
Math.random()
0.4394964707564588
Math.random()
0.10890352976104811

***************************************

// same as sin(0.5π) in maths
Math.sin(0.5 * Math.PI); // returns 1

Math.cos(0.5 * Math.PI); // returns 6.123233995736766e-17 that's almost 0

// Trick to return calculator value
Math.round(Math.cos(0.5 * Math.PI)); // returns 0

Math.tan(0.25 * Math.PI); // returns 0.9999999999999999
         
// Same trick
Math.round(Math.tan(0.25 * Math.PI)); // returns 1


***************************************

String

Escaping
Escaping a character in a string means to precede it with backslash character (\) so that the parsing engine doesn't treat the character literally.

Template literal
A template literal, denoted using a pair of backticks (``), represents a string that could span multiple lines and contain JavaScript code.

var s = `This is line 1,
and this is line 2.`;

console.log(s);
This is line 1,
and this is line 2.


***************************************

There is a special notation to represent a piece of code inside a template literal, shown as follows:

${expression}

var lang = 'JavaScript';
var s = `You are learning ${lang}.`;

console.log(s);
You are learning JavaScript.

***************************************

Modifying a given character in a string

avaScript
var s = 'Good';

var i = 0; // The index of the character to replace
s = s.slice(0, i) + 'F' + s.slice(i + 1);

console.log(s);

***************************************

The String() constructor returns back a String object, NOT a string primitive.

This object has multiple properties and methods available on it, such as length, toLowerCase(), toUpperCase(), slice(), and so on and so forth.

Below we create a String object and convert it into all uppercase characters:

JavaScript
var strObj = new String('Hello World!');
console.log(strObj.toUpperCase());
HELLO WORLD!


***************************************

In case index is omitted, it defaults to 0.

Consider the code below:

JavaScript
var str = 'abc';

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));
97
98
99

var str = 'abc';

console.log(str.charCodeAt(3));
NaN


***************************************

ar str = '🙂';

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));

55357
56898

Coming back to the code above, the 🙂 character is comprised of two code units that together represent a surrogate pair. The first code unit is the high surrogate with the value 55,357 while the second one is the low surrogate with the value 56,898. Together, these two code units form the 🙂 character in UTF-16.

This code unit–oriented, instead of character-oriented, treatment of strings doesn't just happen in charCodeAt() — it's essentially the very design of JavaScript.

For example, if we access the first or the second character of the string '🙂' using bracket notation, we get the same behavior:

var str = '🙂'
undefined
str[0]
'\uD83D'
str[1]
'\uDE42'


The string '\uD83D' returned by str[0] is a Unicode escape sequence (denoted by \u). It's simply used to denote a character in a string with a particular code, in hexadecimal. We'll explore it later on in this chapter.

The hexadecimal number D83D represents the decimal number 55,357 while DE42 represents 56,898, resembling the values emitted by the charCodeAt(0) and charCodeAt(1) calls above, respectively.

If we know that the given string has a character with a code point beyond the 16-bit range (i.e. 65,535), represented using 2 code units, then we must use the codePointAt() method to retrieve the entire code point.

The codePointAt() method


var str = '🙂';

console.log(str.codePointAt(0));
console.log(str.codePointAt(1));
128578
56898
Notice the first log here. Since the character '🙂' comprises of two code units, and in str.codePointAt(0) we inspect the first code unit which is a high surrogate, the method combines the next code unit (whose value is 56,898) along with the high surrogate to produce 128,578 (the code point of '🙂' in Unicode).

But also notice the second log.

If the inspected code unit doesn't represent a high surrogate, codePointAt() returns the unit as it is. Likewise, for the string '🙂', both str.codePointAt(1) and str.charCodeAt(1) return the same thing.

Apart from this, if the inspected code unit doesn't exist in the given string, where charCodeAt() returns NaN, codePointAt() returns undefined.

***************************************

length
'abc'.length
3
'🙂'.length
2
'Smile 🙂'.length
8
'🙂🙁'.length
4

***************************************

The string iterator

To perform iteration over a string using the string iterator, there are a couple of ways:

Use the @@iterator string method (@@iterator means that we are referring to the string method whose key is stored in Symbol.iterator).
Use the for...of loop

var str = 'abc';
var arr = [...str];

console.log(arr);
['a', 'b', 'c']

***************************************

What's remarkable about this method, as stated before, is that it distinguishes between individual 'characters'.

This means that we don't need to worry about high surrogate and low surrogate code units — the method will do all the heavy-lifting on its own.

var str = 'Smile 🙂';

console.log(str.length);
console.log([...str].length);
8
7

str.length returns the total number of code units in str, which are 8 in total (6 for 'Smile ' and 2 for '🙂'). 
However, [...str].length returns the number of elements in the array [...str] which altogether has 7 elements.

[...str]
['S', 'm', 'i', 'l', 'e', ' ', '🙂']

var chars = [...str]
undefined
chars[0]
'S'
chars[chars.length - 1]
'🙂'

***************************************

String Methods

string.toLowerCase()
string.toUpperCase()


var str = 'JavaScript';
var lang = prompt();

if (lang.toLowerCase() === str.toLowerCase()) {
   console.log('You know JavaScript');
}

***************************************

The trim() method removes whitespace characters from both ends of a given string.

string.trim()

to remove from only one end, use
trimStart() and trimEnd().
***************************************


searching for substring

indexOf() and lastIndexOf().

string.indexOf(substring[, index])

var str = 'Hello World!';
console.log(str.indexOf('World'));

6

The second parameter of indexOf() is handy when we want to search again, beyond the index of the first occurrence of a substring

var str = 'Hello';

var i = str.indexOf('l');
console.log(i);

i = str.indexOf('l', i + 1);
console.log(i);

console.log(str.indexOf('l', i + 1));

2
3
-1

***************************************

Splitting strings

The split() method splits a string apart at every occurrence of a given separator, and returns back an array containing the leftover substrings.




string.split([separator[, limit]])

'Hello'.split()
["Hello"]
'H e l l o'.split(' ')
["H", "e", "l", "l", "o"]
'H,e,l,l, o'.split(',')
["H", "e", "l", "l", " o"]



using the split and join to modify a string

var str = 'Good';
var strArr = str.split('');
strArr[0] = 'F';

console.log(strArr.join(''));



'Hello'.split('')
['H', 'e', 'l', 'l', 'o']
'Hello'.split('', 10)
['H', 'e', 'l', 'l', 'o']
'Hello'.split('', 2)
['H', 'e']
'Hello'.split('', 0)
[]
***************************************


Slicing string

The slice() method slices a string from a starting position to an ending position, and returns back the slice.

string.slice([start[, end]])

start specifies the index where to begin the slicing. It defaults to 0.
end specifies the index where to end the slicing. This is exclusive. It defaults to the length of the string.

'Hello'.slice()
'Hello'
'Hello'.slice(1)
'ello'
'Hello'.slice(1,2)
'e'

Note that the end argument is exclusive, that is, slicing ends right before the given end index.

-1 points to the last character, -2 points to the second last character, and so on and so forth.

'Coding'.slice(-2)
'ng'
'Coding'.slice(-2, -1)
'n'
'Coding'.slice(0, -1)
'Codin'

***************************************

substring()
Akin to slice(), the substring() method slices a string from a starting position to an ending position and returns back the slice.

If the start argument to substring() is greater than end, the arguments are swapped. This doesn't happen with slice().
Moreover, if a given argument to substring() is negative, it is taken to be 0 unlike slice() which starts counting from the end of the string.

'Hello'.slice(2, 0)
''
'Hello'.substring(2, 0)
'He'


And now for the second case:


'Hello'.slice(-2, -1)
'l'
'Hello'.substring(-2, -1)
''


***************************************


String replacement

The string methods replace() and replaceAll() allow us to perform replacements of given substrings within a string in JavaScript.



replace()
The replace() string method replaces a substring inside a string with a given value.

string.replace(searchStr, replaceStr)

'Hello World!'.replace('World', 'Programmer')
'Hello Programmer!'
'Good'.replace('G', 'F')
'Food'
'Good'.replace('GOOD', 'FOOD') //Since 'Good' doesn't contain 'GOOD' in it (case-sensitively), replace() call has no effect.
'Good'
'3 x 3 = 9'.replace('3', '4') // replace() only replaces the first occurrence of searchStr inside the main string — in this case, only the first occurrence of '3' to give '4 x 3 = 9'
'4 x 3 = 9'


+++++++++++++
Even the replace() method could replace all occurrences of a given substring in a main string
but only if the first argument is a regular expression with the global (g) flag set.

var str = '3 x 3 = 9';
var newStr = str.replace(/3/g, '4'); // Replace all 3's with 4's

console.log(newStr);
'4 x 4 = 9'

+++++++++++++

***************************************


To replace all occurrences, we could use the replaceAll() method.

string.replaceAll(searchStr, replaceStr)


'Food'.replaceAll('o', 'e')
'Feed'
'3 x 3 = 9'.replaceAll('3', '4')
'4 x 4 = 9'
'Hello'.replaceAll('a', 'e')
'Hello'


***************************************

Boolean

str
!str
!!str


***Rule for numbers***
All numbers except for 0 and NaN get converted to the Boolean value true. 
The numbers 0 and NaN get converted to false. Quite basic, ain't it?

Boolean(0)
false
Boolean(-0)
false
Boolean(0.001)
true
Boolean(-0.5)
true
Boolean(1000)
true
Boolean(Infinity)
true
Boolean(NaN)
false


***Rule for strings***
All strings except for the empty string ('', "", ``) get converted to true. 
The empty string gets converted to false:

Boolean('0')
true
Boolean(' ')
true
Boolean('')
false

***Rules for undefined and null***
Expectedly, both undefined and null convert to the Boolean false:

Boolean(undefined)
false
Boolean(null)
false

***Rules for objects***
It's very easy with converting objects in JavaScript to Booleans 
— every object gets converted to true, even the one without any properties:

Boolean([])
true
Boolean({})
true
Boolean({ x: 0 })
true
Boolean(new Boolean(false))
true


***************************************

Array Methods

Joining multiple arrays together
To join — or better to say, concatenate — two or more arrays together into a single array, we use the concat() method.

concat() method does NOT modify the original array; instead, it returns a new array composed of all the individual arrays together.

let a = [75, 54, 70];
let b = [94, 60, 78];
let c = [67, 80, 81];

let allNums = a.concat(b, c);

<!-- remember this sort function -->
console.log(allNums.sort(function(a, b) { return a - b; }));


***************************************

Fill method

[1, 2, 3, 4].fill(0)
[0, 0, 0, 0]
[1, true, Infinity].fill(100)
[100, 100, 100]


let nums = new Array(100).fill(0);

console.log(arr[0]);
console.log(arr[50]);
console.log(arr[99]);
0
0
0


***************************************


slice (not splice)
slice is to isolate a sequence of numbers from an array

let nums = [1, 2, 3, 4, 5];

console.log(nums.slice(0, 0)); // []
console.log(nums.slice(0, 1)); // [1]
console.log(nums.slice(1, 4)); // [2, 3, 4]


***************************************

splice (not slice)
slice is to remove a sequence of numbers from an array.
splice() is meant to add/remove elements from an array, in-place, starting from a given index.

let nums = [1, 50, -6, -20, 22];
let deletedNums = nums.splice(1, 1);

console.log(nums);
console.log(deletedNums);

<!-- *************************************** -->

***What if we want to remove nothing from an array, but rather add two elements at the second position? Hmm..***

We'll call nums.splice(1, 0, ele1, ele2).

let nums = [1, 50, -6, -20, 22];
let deletedNums = nums.splice(1, 0, Infinity, NaN);

console.log(nums);
console.log(deletedNums);
[1, Infinity, NaN, 50, -6, -20, 22]
[]

***************************************

Adding/removing elements at the end

push / pop

Adding/removing elements from the front

***************************************

shift / unshift

Adding/removing elements at arbitrary indexes

***************************************

Reversing an array

arr.reverse()

let subs = ["Chemistry", "Physics", "Math"];

console.log(subs.reverse());
console.log(subs);
['Math', 'Physics', 'Chemistry']
['Math', 'Physics', 'Chemistry']


***************************************

Finding index of an element in array

[1, 2, 3, 4].indexOf(1)
0
[1, 2, 3, 4].indexOf(4)
3
[1, 2, 3, 4].indexOf(5)
-1
[1, 2, 3, 4].indexOf("1")
-1
[1, true, true, false].indexOf(true)
1

***************************************

Similar to indexOf(), which finds the first match for a given value, the lastIndexOf() method finds the index of the last match of a given value.

Consider the snippet below:

[1, 2, 3, 4].lastIndexOf(1)
0
[1, 2, 3, 4].lastIndexOf(4)
3
[1, 2, 3, 4].lastIndexOf(5)
-1
[1, 2, 3, 4].lastIndexOf("1")
-1
[1, true, true, false].lastIndexOf(true)
2
[1, 1, 0, 1].lastIndexOf(1)
3

***************************************


These ideas of checking whether in a set of items, at least one or all elements meet a certain condition are present in JavaScript arrays as well. 
They are exposed by the some() and every() methods, respectively.

some() takes a function and returns true if the function evaluates to true for at least one element in the calling array.


arr.some(callbackFn)


some() takes a function and returns true if the function evaluates to true for at least one element in the calling array.

JavaScript
function isSquare(element) {
   return Number.isInteger(element ** 0.5);
}

let nums = [1, 2, 3];
console.log(`Square in ${nums}`, nums.some(isSquare));

nums = [2, 3, 4];
console.log(`Square in ${nums}`, nums.some(isSquare));

nums = [2, 3, 5, 7];
console.log(`Square in ${nums}`, nums.some(isSquare));

nums = [2, 3, 5, 7, 49, 100];
console.log(`Square in ${nums}`, nums.some(isSquare));
Square in 1,2,3: true
Square in 2,3,4: true
Square in 2,3,5,7: false
Square in 2,3,5,7,49,100: true


***************************************

Joining elements

we can call the toString() method or even just use the array in the context of a string, e.g. in a string concatenation operation.

[1, 2, 3, 4].toString()
'1,2,3,4'
[1, 2, 3, 4] + ''
'1,2,3,4'
'The numbers are: ' + [1, 2, 3, 4]
'The numbers are: 1,2,3,4'

arr.join([separator])

let nums = [1, 2, 10, 50, 100];

console.log(nums.join(' '));
1 2 10 50 100



***************************************


arr.map(mappingFn)
Let's now talk about the syntax of this mapping function, mappingFn. It's similar to the callback function provided to some(), every(), and filter().

mappingFn(element, index, arr)

element is the element of arr currently under inspection.
index is the index of this element.
arr holds a reference to the array in question.
Let's consider a couple of examples...

Below we have an array ints which is used to create two more arrays squares and cubes by means of square and cube functions, respectively:

JavaScript
function square(int) { return int ** 2 };
function cube(int) { return int ** 3 };

let ints = [0, 1, 2, 3, 4, 5];

let squares = ints.map(square);
console.log(squares);

let cubes = ints.map(cube);
console.log(cubes);

// Let's see if `ints` has been modified
console.log(ints);
[0, 1, 4, 9, 16, 25]
[0, 1, 8, 27, 64, 125]
[0, 1, 2, 3, 4, 5]
The last log here confirms the fact that calling map() on an array does not mutate it.

Going ahead, a common practice you'll see in coding competitions out there is to use this notion of mapping to convert a list of stringified numbers into a list of numbers.

In the code below, we convert a string of space-delimited numbers into an array of numbers using a couple of handy methods, including map():

JavaScript
let str = '10 -5 40 1 0 0 3';

let nums = str.split(' ').map(Number);
console.log(nums);
[10, -5, 40, 1, 0, 0, 3]
Time to understand what's happening over here...

str.split(' ') breaks apart str at each space (' ') character and returns back an array of the left-over strings, as follows:

str.split(' ')
['10', '-5', '40', '1', '0', '0', '3']
Next up, map(Number) goes over this array of strings and runs the Number() function over each string. Recall that, given an argument, Number() converts it into a number.

['10', '-5', '40', '1', '0', '0', '3'].map(Number)
[10, -5, 40, 1, 0, 0, 3]
All in all, this is an elegant way to convert a string of numbers into an array of numbers, without having to spin up a complex piece of code containing a loop.


***************************************


Filtering elements
To obtain only those elements from an array that meet a given condition, we use the filter() method.

filter() takes in a callback function and returns an array containing all the elements in the calling array for which the callback function returns a truthy value.

arr.filter(callbackFn)
The syntax of this callback is the same as the one provided to the some() and every() methods discussed above. That is:

callbackFn(element, index, arr)

where element is the current element under consideration, index is its index in the array, and arr is the array.

If you think for a second, the word 'filter' is quite a sensible name for this method. It says to 'filter in' elements from an array based on a given condition.

I use the phrase 'filter in' because the callback provided to filter() specifies which elements we are interested in, NOT those elements that we wish to filter out, i.e. ignore.
Pretty clever naming!

Say we want to extract out all positive values from an array of numbers. For this we'll set up the callback function as follows:

JavaScript
function positiveNumber(num) {
   return num > 0;
}
This would return true only for those numbers that are greater than 0. Let's use this function along with filter() on a couple of arrays and see the outcome in each case:

JavaScript
function positiveNumber(num) {
   return num > 0;
}

let nums = [10, 5, -4, -1, 50, 34, -27];
console.log(nums.filter(positiveNumber));

nums = [0, 15, 0, -6, -1, -4, -0.5, 3.1, 10.5];
console.log(nums.filter(positiveNumber));
[10, 5, 50, 34]
[15, 3.1, 10.5]
This feature of filtering out elements from an array could also be accomplished using loops, but at the cost of longer and more complicated code. The filter() method is no doubt very quick and concise.
Create an array evens by filtering out all the even-indexed elements from the following nums array:

JavaScript
let nums = [1, 10, 5, 33, 198, 0, 5, 8];
Your evens array shall be equal to [1, 5, 198, 5] as these elements have even indexes in nums — 0, 2, 4, and 6 respectively.

Think of the second parameter of the callback function passed to filter().

***************************************

Sorting an array

arr.sort([comparisonFn])

The optional comparisonFn argument specifies a function to use in comparing two values together to determine which one should come first and which one should come second.



Sort has some errors, cause it sorts lexicologically

>> ['a', 'Bother', 'call', 'Lost', 'lost', 'News'].sort()
["Bother", "Lost", "News", "a", "call", "lost"]
>> ['Python', 'Perl', 'Apache', 'PHP'].sort()
["Apache", "PHP", "Perl", "Python"]

>> [100, 25, 3, 70, 8, 10].sort()
[10, 100, 25, 3, 70, 8]

This is why we need a comparison callback function



function comparisonFn(a, b) {
   // Compare a and b
}

If comparisonFn returns a value less than 0, a is put before b.
If comparisonFn returns a value greater than 0, b is put before a.
If comparisonFn returns 0, the order of a and b is kept intact.


function compareNums(a, b) {
   if (a < b) return -1;
   if (a > b) return 1;
   return 0;
}


***There is a shortcut***

function compareNums(a, b) {
   return a - b;
}

let nums = [100, 25, 3, 70, 8, 10];

console.log(nums.sort(compareNums));
[3, 8, 10, 25, 70, 100]


***************************************

thus, to sort in reversing order,

sort first, then reverse the array
nums.sort(sortFunction(a, b) )
nums.reverse();

or better still, change the sortFunction to return the bigger numbers first

function compareNums(a, b) {
   if (a < b) return 1;
   if (a > b) return -1;
   return 0;
}
<!-- or switch the < and  > -->

***************************************

Sorting objects based on property value

let langs = [
   {name: 'JavaScript', year: 1995},
   {name: 'Python', year: 1991},
   {name: 'Java', year: 1995},
   {name: 'C++', year: 1989}
];

function compareYears(lang1, lang2) {
   if (lang1.year < lang2.year) return -1;
   if (lang1.year > lang2.year) return 1;
   return 0;
}

let langs = [
   {name: 'JavaScript', year: 1995},
   {name: 'Python', year: 1991},
   {name: 'Java', year: 1995},
   {name: 'C++', year: 1989}
];

console.log(langs.sort(compareYears));


***************************************

<Sparse array>

A sparse array, also known as a holey array, is an array where elements don't exist at contiguous positions; 
they have empty holes between them.

It can be caused using delete, Delete can delete a property from an object, or an element from an array

delete obj[prop]
delete arr[index]


However, using delete creates empty holes in arrays and doesn't modify its length property

$ 
  let arr = [1, 2, 3];
  delete arr[1];

  >> console.log(arr);
  [1, empty, 3]
$

This is the opposite of <Dense array>

A dense array, also known as a packed array, is an array where elements exist at contiguous positions, 
without any empty holes in between.

<The problem>
now happens that arr.length() still counts and sparce/holey spaces in the array

access and holey element retruns <undefined>

***Checking for an empty slot***

* 1 The in operator
$ 
  let arr = [1, undefined, , 2];

  >> console.log(1 in arr);
  >> console.log(2 in arr);
  true
  false
$ 

* 2 The hasOwnProperty() method
$
  let arr = [1, undefined, , 2];

  >> console.log(arr.hasOwnProperty(1));
  >> console.log(arr.hasOwnProperty(2));
  true
  false
$
***************************************


Maps vs Objects

* Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
* Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
* Use objects when there is logic that operates on individual elements.

Sets
Set objects are collections of unique values. 
You can iterate its elements in insertion order. 
A value in a Set may only occur once; it is unique in the Set's collection.

creating a set from an array
Array.from(mySet);
[...mySet2];

cretaing an ***<array>*** from a set
$
  mySet2 = new Set([1, 2, 3, 4]);

  let set = new Set([9, 15, "a string", {"objectKey": "objectValue"}]);
  set.add(true);

  let arr = [...set]; // destructuring

  console.log(arr);
  // Outputs [9, 15, "a string", {objectKey: "objectValue"}, true]
$

Converting an array to a ***<set>***

$
  let arr2 = [9, 15, "a string", {"objectKey": "objectValue"}];

  let arr2converted = [...new Set(arr2)];

  console.log(arr2converted);

  // Outputs [9, 15, "a string", {objectKey: "objectValue"}, true]
$



***************************************

Maps are so useful

let users = [{
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Murray'
  },
  {
    id: 3,
    name: 'Jane'
  },
  {
    id: 4,
    name: 'Jane'
  },
  {
    id: 5,
    name: 'Anne'
  }
]

let userNames = users.map(function(user) {
  console.log(user.name)
});

Maps use methods similar to those used by sets: <clear, delete, has, values, entries, forEach>

***************************************



class Dog {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }
  tellUsAboutYourSelf() {
    return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
  }

  woof() {
    return "WOOF!!!"
  }
}

let fido = new Dog("Fido", 3, "dachshund")
fido.tellUsAboutYourSelf()
//=> 'My name is Fido. I am a dachshund and I am 3 years old.'


***************************************

class Cat {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }

  meow() {
    return "MEOW!!!"
  }
}

let sparkles = new Cat("Sparkles", 5, "Siamese")
sparkles.tellUsAboutYourSelf()
//=>TypeError: sparkles.tellUsAboutYourSelf is not a function

***************************************


Function Borrowing


class Dog {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }
  tellUsAboutYourSelf() {
    return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
  }

  woof() {
    return "WOOF!!!"
  }
}

let fido = new Dog("Fido", 3, "dachshund")
fido.tellUsAboutYourSelf()
//=> 'My name is Fido. I am a dachshund and I am 3 years old.'


***************************************

fido.tellUsAboutYourSelf.call(sparkles)
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’
fido.tellUsAboutYourSelf.apply(sparkles)
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’
const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles)
describeSparkles()
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’


***************************************

Each of these examples work because this, when referenced inside a method, refers to the object that received the method call. 
.call(), .apply(), and .bind() work by allowing us to alter the object to which this refers inside of the .tellUsAboutYourSelf() method. 
Whereas .call() and .apply() immediately execute the function call, .bind() saves the function for later. 
Once we’ve saved the borrowed function into the variable describeSparkles, we can call invoke describeSparkles one hundred lines later
and still see the same output.

The central benefit of function borrowing is that it allows you to forego inheritance.
There’s no reason for you to force a class to inherit from another if you’re only doing so in order to grant instances
of the child class access to a single metho

***************************************

Typed Arrays in JavaScript
Int8Array - https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
-128 to 127
Uint8Array - https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_0bjects/Uint8Array
0 - 255
Uint8ClampedArray - https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Clamp
edArray
0 - 255
Int16Array - Like IntArray but 16 bits in length
-32768 to 32767
Uint16Array - like Uint8Array but 16 bits in length
0 to 65535.
Int32Array - like Int8Array but 32 bits in length
-2147483648 to 2147483647|
Uint32Array - like Uint8Array but 32 bits in length
0 to 4294967295
Float32Array - https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Float32Arr
ay
1.2x10-38 to 3.4x1038

Float64Array - https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_0bjects/Float64Arr
ay
5.0x10 -324 to 1.8x10 308
ArrayBuffer - https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffe
- used to represent a generic, fixed-length raw binary data buffer.
DataView - https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/DataView
I
Typed Arrays are used by: WebGL, Canvas, Web Audio API,
XMLHttpRequests, Fetch API,
WebSockets, Web Workers,
Media Source API and File APIs.


***************************************

Function Declaration vs Function Expression

***Function Declaration***

function sum(a, b) {
   return a + b;
}

***Function expression***
refers to a function definition that exists as an expression and not as a standalone statement.
it can define a function without a name. Such a function is usually called an anonymous function.

var identifierName = function [functionName](param1, param2, ..., paramN) {
   // Function's body
}

var sum = function(a, b) {
  return a + b;
}
assigned to the variable sum. Since, sum points to a function object in memory, we could use the expression sum()

***Good usage***

var utils = [
   function(a, b) { return a + b; },
   function(a, b) { return a - b; }
];

console.log(utils[0](10, 20));
console.log(utils[1](50, 5));
30
45

<!-- We can also thus assign the functions to a variable -->
var utils = {
   add: function(a, b) { return a + b; },
   diff: function(a, b) { return a - b; }
}
console.log(utils.add(10, 20));
console.log(utils.diff(50, 5));
30
45

<!-- we can assign a function to an object. In that class the function is called a method -->
$
  function execute(fn) {
    fn();
  }

  execute(function() { console.log('Hello World!'); })
$

<!-- a function assigned to another function is the callback function -->
the function created and passed to execute(), is the callback function.

***Another differene between functions declarations and expressions is that***

Function Declarations are <hoisted>
Function Expressions are not <hoisted>

***************************************

There is a clever trick that can be done to denote a function as an expression statement 
and thus prevent the need of having to assign the function to some variable or other identifier.

It could be invoked immediately after it's defined, in which case it's called an 
***Immediately Invoked Function Expression***, or simply <IIFE>.

(function(a, b) {
   return a + b;
})();


***************************************

***When used inside a function, "this" refers to the object that called the function.***

this and strict mode
As we have seen above, when a function is called directly, not as part of an object, its this resolves down to the global window object. Now this holds only as long as the script or function is running in non-strict mode.

In strict mode, when a function is called directly, not as part of an object, its this value is set to undefined.

Frankly speaking, the strict mode behavior seems to be more appropriate — when a function is NOT called as part of an object, i.e. there is no calling object for the function, its this is undefined.

Shown below is an example:

JavaScript
'use strict'

function f() {
   console.log(this);
}

f();
undefined


***************************************

To know the number of arguments a given function expects, we cna call length on it. 
This number of arguments is also known as the <arity>

function sum(a, b) {
   return a + b;
}

console.log('Arity:', sum.length);
Arity: 2

***************************************

Rest Argument

function showStudentInfo(name, ...marksList) {
   console.log('Student name:', name);
   console.log('Marks obtained:', marksList.join(', '));
   console.log('-----'); // a divider line
}

showStudentInfo('Alice', 67, 80, 80, 91);
showStudentInfo('Bob', 85, 90, 95);



***************************************

The spread operator
ES6 provides an operator that works opposite to how the rest param works. It's called the spread operator.

It's idea is pretty apparent in its name. Let's see it...

The spread operator converts an iterable sequence into a list of arguments.
It's denoted as ...iterable, where iterable is the iterable sequence to spread into a list of arguments.

...iterable


var nums = [1, 50, 9, -4, -50, 0, 0, 10, 15, 13];
var min = Math.min(nums);

console.log('The minimum number is:', min);
The minimum number is: NaN
The minimum value output here is NaN although there is no such value in the array. 
This is because the Math.min() method never goes inside the array — it converts each of its arguments 
into a number and then throws out the minimum value amongst them.



var nums = [1, 50, 9, -4, -50, 0, 0, 10, 15, 13];
var min = Math.min(...nums);

console.log('The minimum number is:', min);

***************************************

Default value syntax

function function_name(param1, param2 = defaultValue, param3, ...) {
   // code
}

function createMatrix(rows, cols = rows) {
   return new Array(rows).fill(0).map(function(e) {
      return new Array(cols).fill(0);
   });
}

console.log(createMatrix(3));
console.log(createMatrix(2, 4));

function f(a, b, c = a * 5) {
   console.log(a, b, c);
}

f(100, 200, 300);
f(100, 200);
***************************************


Objects property attributes

Properties can be
* data property  -  value and writable 
* accessor property  - set and get

Both also have - ***iteratable <for..in loop>*** and ***confugirable <delete>***

***************************************

**The Object.defineProperty() method**
to create a property on an object with given internal attributes.

$
  Object.defineProperty(object, propertyName, propertyDescriptor)
$

The propertyDescriptor object could have the following properties:

value — specifes a value for the [[Value]] internal attribute.
writable — specifes a Boolean for the [[Writable]] internal attribute.
get — specifes a zero-arg function for the [[Get]] internal attribute.
set — specifes a one-arg function for the [[Set]] internal attribute.
enumerable — specifes a Boolean for the [[Enumerable]] internal attribute.
configurable — specifes a Boolean for the [[Configurable]] internal attribute.


***************************************

Now defining data attributes

$
  var obj = { a: 'old' };
  obj.b = 'old';

  Object.defineProperty(obj, 'c', {
    value: 'old',
    writable: false
  });
$

console.log(obj.c);
[[[Uncaught TypeError: Cannot redefine property: id
   at Function.defineProperty (<anonymous>)
   at <anonymous>:11:8]]]

Setting writable to be false would make this property unwritable (unchangeable)

this error is not caused because of [[Writable]] set to false, but rather because of both[[Writable]] set to falseand[[Configurable]] set to false.


***************************************

Accessor property

$
  var point = { x: 0, y: 0 };

  Object.defineProperty(point, 'distanceFromOrigin', {
    get: function() {
      return (this.x ** 2 + this.y ** 2) ** 0.5;
    }
  });

  point.x = 4;
  point.y = 3;

  console.log(point.distanceFromOrigin);
  5
$


***************************************

Another example
$
  var item = {
    sellingPrice: 100,
    discountPrice: 60
  };

  Object.defineProperty(item, 'discount', {
    get: function() {
        return Math.round(
          (this.sellingPrice - this.discountPrice)
          / this.sellingPrice * 100
        );
    }
  });
$

console.log(item.discount + '% discount offered.');
40% discount offered.

***************************************


Aborting a request

var controller = new AbortController();
var signal = controller.signal;

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
        .then(response => {
            console.log('success!');
        })
        .catch(error => {
            console.log('API failure' + error);
        });

    return () => {
        // Abort if the component is unmounted.
        controller.abort();
    }
}, []);


***************************************

Object constructors


The [[Call]] of object is executed with its ***"this"***
***new F()*** executes the internal [[Construct]]

function Point(x, y) {
   this.x = x;
   this.y = y;
}

// Create a point on (5, 10)
var p1 = new Point(5, 10);

console.log(p1);

new Point(50, 1)
Point { x: 50, y: 1 }
new Point(-2, -3)
Point { x: -2, y: -3 }
new Point(6, 0)
Point { x: 6, y: 0 }


function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;
}

var p1 = new Point();
console.log(p1);

var p2 = new Point(-2, 8);
console.log(p2);
Point { x: 0, y: 0 }Point { x: -2, y: 8 }


***on old browsers***

function Point(x, y) {
   this.x = x !== undefined ? x : 0;
   this.y = y !== undefined ? y : 0;
}

var p1 = new Point();
console.log(p1);

var p2 = new Point(-2, 8);
console.log(p2);
Point { x: 0, y: 0 }Point { x: -2, y: 8 }

***re-assigning the values***

function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;

   this.setTo = function(x, y) {
      this.x = x;
      this.y = y;
   }
}

var p1 = new Point(-2, 8);

// Reposition p1 to (1, 5)
p1.setTo(1, 5);

console.log(p1);

Like this, pur code is not DRY. if every object has its own method, that are doing the same, 
it can lead to high memoty usage. the best thing is create a seperate global method and let
all the methods then point to it.

function pointSetTo(x, y) {
   this.x = x;
   this.y = y;   
}

function Point(x = 0, y = 0) {
   this.x = x;
   this.y = y;

   this.setTo = pointSetTo;
}

var p1 = new Point(-2, 8);
var p2 = new Point();

console.log(p1.setTo === p2.setTo);

But, nonetheless, this still doesn't solve all of our problems...

***************************************

inheritnace / contructor stealing

function Rect(length, height, fill, x, y) {
   // Initialize this Shape
   this.parent = Shape;
   this.parent(fill, x, y);

   this.length = length;
   this.height = height;
}
As before, let's test this:

var r1 = new Rect(20, 10, '#000', 0, 0)
undefined
r1.length
20
r1.height
10
r1.fill
'#000'
r1.x
0
r1.y
0


Using call

avaScript
function Rect(length, height, fill, x, y) {
   // Initialize this Shape
   Shape.call(this, fill, x, y);

   this.length = length;
   this.height = height;
}
Time for the testing:

var r1 = new Rect(20, 10, '#000', 0, 0)
undefined
r1.length
20
r1.height
10
r1.fill
'#000'
r1.x
0
r1.y
0

This is how to implement parent class constructor


***************************************

Object Prototypes

For a given object o, the object from which oinherits properties is called the prototype of o.

An object inherits data from its prototype

Every object in JavaScript has an internal [[Prototype]] attribute which contains a reference to its prototype.

ar a = { x: 10, y: 20 };
var b = { p: 100, q: 200 };
where b's prototype is a, the object b would internally look something like this:

JavaScript
// internal representation of b
b: {
    p: 100,
    q: 200,
    [[Prototype]]: a
}


You can create the prototype also by doing

Object.create(prototype[, propsObj])

var a = { x: 10, y: 20 };

// make a as the prototype
var b = Object.create(a);

console.log(b);

console.log('b.x:', b.x);
console.log('b.y:', b.y);

// add the properties one-by-one
b.p = 100;
b.q = 200;

console.log('b.p:', b.p);
console.log('b.q:', b.q);
{}
b.x: 10
b.y: 20
b.p: 100
b.q: 200


Object.create() could be called with null as an arg as well.

var o = Object.create(null);

o.x = 10;
o.y = 20;

console.log(o);
{x: 10, y: 20}
the prototype of any given object is also an object at the end of the day

***************************************

Property retrieval mechanism

Whenever a property is accessed on a given object in JavaScript, if that property exists on the object, then it's used to resolve the property-access expression.

Otherwise, the property is searched for on the prototype. If it exists there, the original property-access expression of the object is resolved with that value. Otherwise, searching moves to the next prototype down the chain, and then the next, and so on.

This searching stops when the property is ultimately found on a prototype or when the null prototype is reached while traversing the prototype chain. When the null prototype is reached, that means that the property wasn't found anywhere, and likewise undefined is returned.
***************************************

Own vs inherited porperty

For a given object, any property that's defined directly on the object is called its own property.

For a given object, any property that's defined somewhere in its prototype chain, but not on the object itself, is called its inherited property.

The hasOwnProperty() method of objects helps us determine whether a given property is an object's own property.

***obj.hasOwnProperty(propName)***

var a = { x: 0, y: 0 };

console.log(a.hasOwnProperty('x'));
console.log(a.hasOwnProperty('y'));
console.log(a.hasOwnProperty('z'));
true
true
false

***************************************

var proto = { z: 0 };

var a = Object.create(proto);
a.x = 0;
a.y = 0;

console.log(a.hasOwnProperty('x'));
console.log(a.hasOwnProperty('y'));
console.log(a.hasOwnProperty('z'));

console.log(proto.hasOwnProperty('z'));


true
true
false
true

***************************************

Prototypes and the "in" operator

var proto = { y: 0 }

var o = Object.create(proto);
o.x = 0;

console.log('x' in o);
console.log('y' in o);

console.log('hasOwnProperty' in o);

console.log('nonExistent' in o);


Starting from the object itself, it effectively traverses the whole prototype chain of that objet in search of the property, until it's found.


var proto = { y: 0 }

var o = Object.create(proto);
o.x = 0;

console.log('x' in o);
console.log('y' in o);
console.log('hasOwnProperty' in o);
console.log('nonExistent' in o);

true
true
true
false


***************************************

The prototype property

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Point.prototype.setTo = function(x, y) {
    this.x = x;
    this.y = y;
}

var p1 = new Point();
undefined
p1.x
0
p1.y
0
p1.setTo(5, 15)
undefined
p1.x
5
p1.y
15


***************************************

Retrieving the prototype

if the object is an instance of a constructor F, 
then the prototype of that object is simply equal to F.prototype.

So it turns out that a long time ago, JavaScript engine developers realized that retrieving the prototype of a given object is not a very uncommon thing to desire in an application and thus came up with a non-standard way to retrieve the prototype of an object — 
the __proto__ property.

For a given object o, its __proto__ property simply ***returns a reference to the prototype of o***.

For a function F, F.__proto__ holds the prototype of the function object F which turns out to be Function.prototype, 
whereas F.prototype holds the prototype of all instances of F().

***************************************

In place of __proto__, a much cleaner and sophisticated utility was drafted: 
the static ***Object.getPrototypeOf()*** method.

For a given object o, **Object.getPrototypeOf(o)** simply returns **a reference to the prototype of o**.



***************************************

Setting an object's prototype

there are two ways to accomplish this:

* Assign a value to the object's __proto__ property.
* Call the Object.setPrototypeOf() method.

* *bj.__proto__ = value
* Object.setPrototypeOf(obj, proto)

var a = { x: 10, y: 20 };
var b = { p: 100, q: 200 };

b.__proto__ = a;

console.log('b.x:', b.x);
console.log('b.y:', b.y);

console.log('b.p:', b.p);
console.log('b.q:', b.q);
b.x: 10
b.y: 20
b.p: 100
b.q: 200

***Now, using the Object.setPrototypeOf() method:***


var a = { x: 10, y: 20 };
var b = { p: 100, q: 200 };

Object.setPrototypeOf(b, a);

console.log('b.x:', b.x);
console.log('b.y:', b.y);

console.log('b.p:', b.p);
console.log('b.q:', b.q);
b.x: 10
b.y: 20
b.p: 100
b.q: 200


***************************************

There are potential performance concerns using it. 
Note that it's not to say that it's fatal t use Object.setPrototypeOf() but rather only that it should be avoided as much as desired.

The best way is to use 

***Object.create()***
 since it doesn't modify an existing object but rather introduces a new object into the code with a given prototype

***************************************

***JavaScript Object Methods***
Learning outcomes:

The hasOwnProperty() instance method
The isPrototypeOf() instance method
The propertyIsEnumerable() instance method
Merging objects via Object.assign()
The Object.create() method
The Object.defineProperty() and Object.defineProperties() methods
Retrieving all own properties via Object.getOwnPropertyNames()
The Object.getPrototypeOf() and Object.setPrototypeOf() methods


***************************************

Exceptions


**Error** — a generic class that represents all errors.
**SyntaxError** — means that there is a problem in the syntax of the code.
**TypeError** — means that a value is used in a way in which it can't be used.
**ReferenceError** — means that a reference to a non-existent value is made.
**RangeError** — means that a given value is out of range.
**URIError** — means that a URI-processing function was used in the wrong way.
**EvalError** — means that a problem was encountered while running the global eval() function.
**AggregateError** — serves to group multiple errors as thrown in a chain of promises.

we can even define our own custom error classes

Each of these classes defines the following two properties:

***name*** — a string representing the name of the error class. For example, the Error class's name is simply 'Error'.
***message*** — a string describing the error.

***************************************

***Try, catch, finally***

The finally statement is used to execute a piece of code at the end of a try...catch statement.

try {
   // Code to test for errors.
}
catch (errorObject) {
   // Code to handle any errors thrown in the try block above.
}
finally {
   // Code to execute in the end.
}

* try doesn't entertain syntax errors - it will show its own error for it first
* catch and finally are optional
* finally can come immediately after try


***************************************

HTML DOM
Attributes

The classList property

The classList property returns back an instance of the DOMTokenList interface. 
DOMTokenList is a means of working with a given attribute in terms of a set of tokens which are simply strings.

length — the total number of tokens in the underlying token set.
value — the stringified value of the underlying token set.
add() — adds a new token to the underlying token set.
remove() — removes a given token from the underlying token set.
toggle() — adds or removes a token based on its existence in the underlying token set.
contains() — checks whether the underlying token set contains a particular token.
forEach() — iterates over all the tokens in the underlying token set, invoking the callback function provided as an argument.


In the code below, we add a new class to the <h1> element by calling the add() method on its classList property:

HTML
<h1 id="h1">A heading</h1>
CSS
.text-blue {
   color: blue
}
JavaScript
var h1Element = document.getElementById('h1');

// Add the class 'text-blue'.
h1Element.classList.add('text-blue');
A heading <!-- here is blue-->
Even though there is no class attribute present on <h1> before calling classList.add(), the method takes care of that itself.

In the second example below, we remove the class 'text-blue' from <h1> by calling classList.remove():

HTML
<h1 id="h1" class="text-blue">A heading</h1>
CSS
.text-blue {
   color: blue
}

JavaScript
var h1Element = document.getElementById('h1');

// Remove the class 'text-blue'.
h1Element.classList.remove('text-blue');
A heading <!-- here is white-->



***************************************

A closer look


var h1Element = document.getElementById('h1');
undefined
h1Element.classList.contains('text-blue')
true
h1Element.classList.contains('TEXT-BLUE')
false
h1Element.classList.contains('LARGE')
true
h1Element.classList.contains('large')
false
h1Element.classList.contains('padded')
true
h1Element.classList.contains(' padded   ')
false
h1Element.classList.contains('text-red')
false
h1Element.classList.contains('class')
false


***************************************

Pre-defined DOM collections

document.documentElement selects the <html> element.
document.head selects the <head> element.
document.body selects the <body> element.
document.scripts selects all <script> elements.
document.links selects all the <a> elements.
document.forms selects all the <form> elements.
document.images selects all the <img> elements.


***************************************

The querySelector() and the querySelectorAll() methods, of the document object, select elements based on a given CSS selector.

var eleList = document.querySelectorAll(".main .small");
// all paragraphs returned

var ele = document.querySelector(".main .small");
//first paragran returned


***************************************

**document fragments**
groups nodes to a single fragment of the DOM (another node) before adding it to the DOM itself

Method	Purpose
append()	Works the same way as the append() method available on the Element interface. (Note that it's not the same method.)
prepend()	Works the same way as the prepend() method available on the Element interface. (Note that it's not the same method.)
insertBefore()	The insertBefore() method of the Node interface.
appendChild()	The appendChild() method of the Node interface.
replaceChild()	The replaceChild() method of the Node interface.
removeChild()	The removeChild() method of the Node interface.



***************************************

Events

left click - click
right click - contextmenu

The target is simply an object on which the event takes place.
For instance, if we click on a <div> element, then the target of the click event would be that <div> element. 
Similarly, if a given <script> loads completely, then the target of the consequently occuring load event would be that <script> element.

An event's handler function, or simply handler, is a function set up by the developer to handle the event, when it occurs.

Use event-handling properties
Use the EventTarget interface
Use event-handling HTML attributes

onClick
onContextmenu


var buttonElement = document.querySelector('button');

function handler1() { /* ... */ }
function handler2() { /* ... */ }

buttonElement.onclick = function() {
   handler1();
   handler2();
}

<!-- addEventListener -->

Better to use EventTarget

targetObj.addEventListener(name, listener)

var buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function() {
   alert('You clicked the button!');
});

<!-- removeEventListener -->
targetObj.removeEventListener(name, listener)

<!-- in html -->
<button onclick="alert('Button clicked')">Click me</button>

***************************************

event this handler

when JavaScript calls an event handler, it sets its this value to the object on which the event handler was set up, initially.

***************************************

Event Object

An event object refers to the argument sent into an event handler function.

 It contains contextual information regarding the event that caused a given handler to be invoked

 can include 
* time event occured
* or name - eg click
* or tagrt on which event occured

heo to use it

$
    // Assume target is already defined.

  target.onclick = function(e) {
    // The event object is: e
  }
$

$
  target.addEventListener('click', function(event) {
    // The event object is: event
  });
$
$

  function clickHandler(nameItAsYouLike) {
    // The event object is: nameItAsYouLike
  }

  target.addEventListener('click', clickHandler);
$

in the normal HTML, the event hadnler doesent have an object, so it cannot be added 

<!-- Works -->
<div onclick="console.log(event)"></div>

<!-- Error: e doesn't exist! -->
<div onclick="console.log(e)"></div>

***************************************

Event object methods

There are numerous methods you can use with this event object, examples are

* preventDefault(), 
* stopPropagation(), 
* stopImmediatePropagation()


**Property/Method	                 | Purpose**
* target	                         | The precise object on which the event occurred.
* type	                           | The type of the event, also known as the name of the event, denoted as a string. For example, 'click'.
* time	                           | A number representing the time at which the event occurred. It holds the number of milliseconds elapsed since the underlying document loaded.
* cancelable	                     | A Boolean indicating whether or not the event's default action could be prevented.
* defaultPrevented	               | A Boolean indicating whether or not the event's default action has been prevented.
* preventDefault()	               | Prevents the default action associated with the event.
* stopPropagation()	               | Stops the event from propagating.
* stopImmediatePropagation()	-


***************************************

MouseEvent -> UIEvent -> Event -> Object
KeyboardEvent -> UIEvent -> Event -> Object
TouchEvent -> UIEvent -> Event -> Object
PointerEvent -> UIEvent -> Event -> Object

***************************************

preventDefault
* preventDefault() isn't just limited to click events
* use defaultPrevented to check if preventDefault() has been invocked on an event

***Cancelable property***
When the cancelable property of an  event is true, applications could invoke preventDefault() on the event.
Events whose cancelable property is false, calling preventDefault() has absolutely no effect on them. An example would be the blur event.
To state it even more precisely, invoking preventDefault() on a non-cancelable event doesn't change the value of the event's internal canceled flag.
Cancelable only specifies whether or not an event's internal canceled flag could be set


***************************************

Event propagation 

is the process of transmitting an event across a series of objects.

The path of an event is computed right when the event occurs. It's simply a list of the ancestors of the target of the event, including the target itself.
As per the standard, the first element of the path is the event's target. The second element is then the parent of this target; the third element is the parent of this parent; and so on and so forth.

Capturing is when an event is dispatched starting from its top-most ancestor, and then being propagated all the way down to the very target of the event.

Bubbling is the reverse

addEventListener() is the only way to register an event handler for the capturing stage.\

stopPropagation() puts a halt to the whole propagation chain.

***************************************

Mouse Events

* screenX / screenY	S    |    Specify the x and y coordinates of the pointer relative to the screen, respectively.
* clientX / clientY	     |    Specify the x and y coordinates of the pointer relative to the browser window, respectively.
* pageX / pageY	         |    Specify the x and y coordinates of the pointer relative to the webpage, respectively.
* x / y	                 |    Alias of clientX and clientY, respectively.
* altKey	               |    Return a Boolean specifying whether or not the Alt key is pressed.
* metaKey	               |    Return a Boolean specifying whether or not the meta key is pressed.  ⊞ - Windows key, Mac - ⌘ (Command).
* ctrlKey	               |    Return a Boolean specifying whether or not the Ctrl key is pressed.
* shiftKey	             |    Return a Boolean specifying whether or not the Shift key is pressed.
* button	               |    Returns a number representing the last button currently pressed on the mouse.
* buttons	               |    Returns a number representing all of the buttons currently pressed on the mouse.
* relatedTarget	         |    Returns the target related to the current event.

***************************************

An element gets '***clicked***' when the preceding mousedown and mouseup events both occur on that same element


***************************************

Load event

When a resource has been completely fetch, the load event is dispatched

var img = document.getElementsByTagName("img")[0];
img.onload = function() {
    console.log("Image completely loaded");
}

for the html/body, it dispatches the load event when all it resources, imagesm, styles, scripts etc are done loading.
One can implement a spinning bar to indicate the browser is laoding. However, website that takes to long on the spining bar is bad ux - so use lazy-laod. 

Secondly, the load event doesn't fire on every HTML element - it works only on resource-fetching tags like <link>, <script>, <img>, <iframe>, <audio>, <video> and so on.


***************************************

If you want to do something when the document is loaded, even though if all underlying resources are stillbeing loaded

DOMContentLoaded fires when a webpage's DOM tree is fully constructed.

***************************************

onbeforeunload

onbeforeunload occurs just before the browser is closed. It can be used, for an example, to ask a confirmation from the user whether he really wants to exit the page or not.

window.onbeforeunload = function(e) {
    e.preventDefault(); // cancel default action
    e.returnValue = ""; // cancel default action and show a confirm dialog
}

***************************************

Load Handling errors
For a given resource-fetching element, the error event fires when somehow the underlying resource can't be fetched, because the user's network is disabled, or the server returns a error response, or some other reason.

<img src="nonExistentImage.png">
JavaScript
var img = document.getElementsByTagName("img")[0];

// Handing the error case for the img
img.onerror = function() {
    alert("An error occured!");
}

***************************************

Scroll Event

When the <overflow> CSS style property of any HTML element is set to <scroll> or <auto> 
and the content within that element overflows its dimensions, the browser automatically 
adds a scroll bar to enable viewing that overflowing content.

***************************************

History API

pushState()
replaceState()
popState()


pushState()
The pushState() method adds a new entry in the current session's history stack i.e. the collection of all the pages visited in the current browser tab.

syntax
history.pushState(state, title[, URL]);

replaceState()
replaceState() method replaces the current entry in the current session's history stack with a new entry.

popState()
The popstate event fires whenever the browser is navigated to a page with the same document object as the current page.
popstate only fires, when we navigate to a new page or traverse up or down the history stack — not in any other case.
The popstate event fires when we navigate to a page without a page reload.
the simplest case is when we visit a link with a hash in its href attribute
popstate event only fires on one target and that is <window>


***************************************

Drag and Drop

By default, only the following items are draggable on a webpage:

Links (given by <a> with an href attribute)
Images (given by <img>)
Text selections

Any element where we can drop stuff is called a dropzone.
Only the following are considered dropzones by default:

Text input boxes (given by <input type="text">)
Textarea boxes (given by <textarea>)
Any element with contenteditable set to "true".

<div draggable="true">Drag and Drop</div>


***************************************

Avoiding memory leaks

1. Circular references should be freed to avoid mem leaks

 function f() {
  const x = {};
  const y = {};
  x.a = y; // x references y
  y.a = x; // y references x

  return "azerty";
}

f();

However, the inability to manually control garbage collection remains. 
There are times when it would be convenient to manually decide when and what memory is released

Some causes of Memory leaks

* Accidental global variables
* Out of DOM references
* Closure
* Timers


***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
***************************************
