// ColorFlow | MIT license | henrygd.me/ColorFlow
module.exports = (function() {

	var ColorFlow = function(opts) {
		this.element = opts.element;
		this.background = opts.background;
		this.text = opts.text;
		this.time = opts.time;
		this.flow();
	};

	// start animation
	ColorFlow.prototype.flow = function() {
		var newClass = this.thisClass = makeClass(this);
		[].forEach.call(document.querySelectorAll(this.element), function(el) {
			el.className += ' ' + newClass;
		})
		return this;
	};

	// stop animation
	ColorFlow.prototype.disable = function() {
		var thisClass = ' ' + this.thisClass;
		[].forEach.call(document.querySelectorAll(this.element), function(el) {
			el.className = el.className.replace(thisClass, '');
		})
		return this;
	};

	// create animation style and add to DOM
	function makeClass(cf) {
		var background = cf.background,
			text = cf.text,
			time = cf.time,
			styleTag = document.createElement('style'),
			transitionContainer = [],
			newClass = 'colorflow-' + Math.random().toString(36).replace(/[^a-z]+/g, ""),
			transitions,
			style;

		// get number of transitions (longest color length - 1)
		transitions = background && text ? (
			Math.max(background.length, text.length)
		) : (
			background ? background.length : text.length
		) - 1;


		// add transition styles to array (to be combined in style tag)
		for (var i = 0; i < transitions; i++) {
			var currentTransition = '';
			currentTransition += background && background[i] ?
				"background:" + background[i] + ';' : '';
			currentTransition += text && text[i] ?
				"color:" + text[i] : '';
			transitionContainer[i] = currentTransition;
		}

		// create innerHTML string for style tag
		style = "keyframes " + newClass + "{0%{" + transitionContainer[0] + "}";

		for (i = 1; i < transitions; i++) {
			style += Math.floor(100 / (transitions / i)) + "%{" + transitionContainer[i] + "}";
		}

		styleTag.innerHTML = "@-webkit-" + style + "100%{" + transitionContainer[0] +
			"}}@" + style + "100%{" + transitionContainer[0] + "}}." +
			newClass + "{-webkit-animation:" + newClass + " " + time +
			"s linear infinite;animation:" + newClass + " " + time + "s linear infinite}";

		// add style tag to page
		document.head.appendChild(styleTag);

		return newClass;
	};

	return ColorFlow;

})();
