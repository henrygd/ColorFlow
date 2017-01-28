# ColorFlow

[Check out an example here](https://henrygd.me/ColorFlow)

Smoothly cycle between many background and/or text colors on any element. Around 550 bytes minified & gzipped with no library / framework dependencies. Inspired by the header effect at [clrs.cc](http://clrs.cc/).

Note: the original jQuery plugin is still available ([dist/colorflow.jquery.js](dist/colorflow.jquery.js)). Instructions for that are at the bottom, but there's really no reason to use it at this point.

## Instructions

## 1. Load ColorFlow

Install via npm or add a script from the [dist](dist) directory to your page.

```
npm install colorflow
```

```javascript
var ColorFlow = require('colorflow');
```

Or with a script tag:

```html
<script src="colorflow.js"></script>
```

## 2. Initialize ColorFlow

```javascript
var colorflow1 = new ColorFlow({
    element: ['body'],
    background: ['#85144b', '#F012BE', '#FFBC00', '#7FDBFF', '#01FF70'],
    text: ['#CF5D94', '#EFA9FA', '#665800', '#004966', '#00662C'],
    time: 25
});
```
You may include multiple tags or basic css element selectors -- for example `['.class', '#id', 'div']` --in the `element` array. `time` and at least one of `background` or `text` is also required.

The effect is CSS-based and colors can be provided in any regular CSS format. They will be displayed in the order given before looping back to the first color after the specified amount of time (number of seconds). If you use background and text in the same object, the colors of each index are tied together. If one array is shorter, the last color will just take longer to transition into the first as the other finishes.

## Options

### Access object variables

Examples below using the instance created above.

```javascript
> colorflow1.element
["body"]
> colorflow1.background
["#85144b", "#F012BE", "#FFBC00", "#7FDBFF", "#01FF70"]
> colorflow1.text
["#CF5D94", "#EFA9FA", "#665800", "#004966", "#00662C"]
> colorflow1.time
25
> colorflow1.thisClass // returns the currently active (or last active) colorflow class
"colorflow-ituaxyldi"
```

### Modify and restart ColorFlow instance

Restart with the `flow` method.

```javascript
> colorflow1.element.push('.example-class')
["body", ".example-class"]
> colorflow1.background.push('#000')
> colorflow1.text.push('#fff')
> colorflow1.time = 30
// new options are set. instead of appending, you can also set a new array using, for example, colorflow1.text = ['#000', '#fff']
> colorflow1.flow() // restarts the colorflow instance with the new variables - in this case, the revised effect will also be applied to example-class.
> colorflow1.thisClass // a new class containing the animation info has been created and applied to the elements
"colorflow-llxfuwtmkji"
```

### Get rid of ColorFlow

```javascript
colorflow1.disable();
```
This will remove all colorflow classes from the elements in the element array, reverting them to their default color state. The `colorflow1` object will still exist and the flow method will wake it up. Or simply add the disabled class, still stored in `colorflow1.thisClass`, back to the element.


# jQuery Plugin

## 1. Load jQuery and ColorFlow

```html
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="js/colorflow.jquery.js"></script>
```

## 2. Initialize ColorFlow

```javascript
$("body").colorFlow({
    background: ['#85144b', '#F012BE', '#FFBC00', '#7FDBFF', '#01FF70'],
    text: ['#CF5D94', '#EFA9FA', '#665800', '#004966', '#00662C'],
    time: 25
});
```

### Get rid of ColorFlow

```javascript
$("body").colorFlow("destroy");
```

---

License: MIT
