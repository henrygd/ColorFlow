# ColorFlow

[Check out an example here](https://henrygd.me/colorflow)

jQuery plugin, under 1kB in size, smoothly transitions between multiple background colors and/or text colors on any element. Inspired by the header effect at [clrs.cc](http://clrs.cc/).

## Instructions

## 1. Load jQuery and ColorFlow

```html
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="js/colorFlow.js"></script>
```

## 2. Initialize ColorFlow

```javascript
$("body").colorFlow({
    background: ['#85144b', '#F012BE', '#FFBC00', '#7FDBFF', '#01FF70'],
    text: ['#CF5D94', '#EFA9FA', '#665800', '#004966', '#00662C'],
    time: 25
});
```
The effect is CSS-based and colors can be provided in hex, rgb, or hsl. They will be displayed in the order provided before looping back to the first color after the specified amount of time.

Time and at least one of background or text is required.

### Optionally, get rid of ColorFlow

```javascript
$("body").colorFlow("destroy");
```
This will remove all instances of ColorFlow on an element, reverting it to its default color state.

Go crazy (responsibly)!
