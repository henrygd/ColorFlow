# ColorFlow

[Check out an example here](https://henrygd.me/colorflow)

Smoothly transition between many background and/or text colors on any element. 1.2 KB. No framework dependencies. Inspired by the header effect at [clrs.cc](http://clrs.cc/).

Note: the original 867 byte jQuery plugin is still available -- see `js/colorflow.jquery.js`. Instructions for that are at the bottom.

## Instructions

## 1. Load ColorFlow

```html
<script src="js/colorflow.min.js"></script>
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
You may include multiple tags or basic css element selectors - like `'.class'` or `'#id'` - in the `element` array. `time` and at least one of `background` or `text` is also required.

The effect is CSS-based and colors can be provided in hex, rgb, or hsl. They will be displayed in the order provided before looping back to the first color after the specified amount of time (number of seconds). If you use background and text in the same object, the number of colors should be the same.

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

### Note on compatibility

Should work with all browsers that support CSS3 animation (pretty much everything except IE 9 and below).


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
