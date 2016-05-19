// ColorFlow | MIT license | henrygd.me/colorflow
window.ColorFlow = function(opts) {
    this.element = opts.element;
    this.background = opts.background;
    this.text = opts.text;
    this.time = opts.time;
    this.flow();
};

ColorFlow.prototype.flow = function() {
    var x = this.makeClass();
    this.thisClass = x;
    for(var i in this.element) {
        var elems = document.querySelectorAll(this.element[i]);
        elems[i].className += ' ' + x;
    }
    return this;
};

ColorFlow.prototype.makeClass = function() {
    var timingIncrement,
        background = this.background,
        text = this.text,
        time = this.time,
        styleContainer = [],
        randomString = Math.random().toString(36).replace(/[^a-z]+/g, "");
    if (background && text)
        if (background.length > text.length)
            timingIncrement = background.length;
        else
            timingIncrement = text.length;
    else if (background)
        timingIncrement = background.length;
    else
        timingIncrement = text.length;
    var currentPercent = 100 / timingIncrement,
        incrementAmount = currentPercent;
    if (background)
        for(i = 0; timingIncrement > i; i++)
            styleContainer[i] = "background:" + background[i] + ";";
    if (text)
        for(i = 0; i < text.length; i++)
            if (styleContainer[i])
                styleContainer[i] += "color:" + text[i];
            else
                styleContainer[i] = "color:" + text[i];
    var ourStyle = "keyframes " + randomString + "{0%{" + styleContainer[0] + "}";
    for(i = 1; timingIncrement > i; i++){
        ourStyle += Math.floor(currentPercent) + "%{" + styleContainer[i] + "}";
        currentPercent += incrementAmount;
    }
    var style = document.createElement('style');
    style.innerHTML = "@-webkit-" + ourStyle + "100%{" + styleContainer[0] +
        "}}@" + ourStyle + "100%{" + styleContainer[0] + "}}.colorflow-" +
        randomString + "{-webkit-animation:" + randomString + " " + time +
        "s linear infinite;animation:" + randomString + " " + time + "s linear infinite}";
    document.head.appendChild(style);
    return 'colorflow-' + randomString;
};

ColorFlow.prototype.disable = function() {
    [].forEach.call(document.querySelectorAll('.' + this.thisClass), function(el) {
        el.className = el.className.replace(/colorflow-\S+/g, "");
    });
    return this;
};
