// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

plugins: [ RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight, RevealChalkboard],

// Factor of the display size that should remain empty around the content
margin: 0.1,

// Display controls in the bottom right corner
controls: true,

// Display a presentation progress bar
progress: true,

// Display the page number of the current slide
slideNumber: true,

// Push each slide change to the browser history
history: true,

// Enable keyboard shortcuts for navigation
keyboard: true,

// Enable the slide overview mode
overview: true,

// Vertical centering of slides
center: false,

// Enables touch navigation on devices with touch input
touch: true,

// Loop the presentation
loop: false,

// Change the presentation direction to be RTL
rtl: false,

// Turns fragments on and off globally
fragments: true,

// Make fragments print all at once, and at one page per slide
pdfSeparateFragments: false,
pdfMaxPagesPerSlide: 1,

// Options which are passed into marked
// See https://marked.js.org/#/USING_ADVANCED.md#options
markdown: {
    // Turns all lists into animated fragments
    animateLists: true
},

// Flags if the presentation is running in an embedded mode,
// i.e. contained within a limited portion of the screen
embedded: false,
maxScale: 10.0,
// Number of milliseconds between automatically proceeding to the
// next slide, disabled when set to 0, this value can be overwritten
// by using a data-autoslide attribute on your slides
autoSlide: 0,

// Stop auto-sliding after user input
autoSlideStoppable: true,

// The "normal" size of the presentation, aspect ratio will be preserved
// when the presentation is scaled to fit different resolutions. Can be
// specified using percentage units.
width: "120%",
    
// Enable slide navigation via mouse wheel
mouseWheel: false,

// Hides the address bar on mobile devices
hideAddressBar: true,

// Opens links in an iframe preview overlay
previewLinks: false,


// Transition style
transition: 'none', // default/cube/page/concave/zoom/linear/fade/none

// Transition speed
transitionSpeed: 'fast', // default/fast/slow

// Transition style for full page slide backgrounds
backgroundTransition: 'default', // default/none/slide/concave/convex/zoom

// Number of slides away from the current that are visible
    viewDistance: 4,
	keyboard: {
	    67: function() { RevealChalkboard.toggleNotesCanvas() },	// toggle notes canvas when 'c' is pressed
	    66: function() { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
	    46: function() { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
	     8: function() { RevealChalkboard.reset() },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
	    68: function() { RevealChalkboard.download() },	// downlad recorded chalkboard drawing when 'd' is pressed
	    88: function() { RevealChalkboard.colorNext() },	// cycle colors forward when 'x' is pressed
	    89: function() { RevealChalkboard.colorPrev() },	// cycle colors backward when 'y' is pressed
      40: 'next',
      38: 'prev'
	}
});

function playCurrentFragment() {
  [].slice.call( document.querySelectorAll( '.fragment' ) ).forEach( function( fragment ) {
    var audio = fragment.querySelector( 'audio' );
    if( audio ) {
      if( fragment.classList.contains( 'current-fragment' ) ) {
        audio.play();
      }
      else {
        audio.pause();
      }
    }
  } );
}
Reveal.addEventListener( 'fragmentshown', playCurrentFragment );
Reveal.addEventListener( 'fragmenthidden', playCurrentFragment );

