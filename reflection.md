### What did you learn about CSS padding, borders, and margin by doing this challenge?  

I learned that margins are also a way to increase an element's size if they are thick enough.  Also, just because they are called "margins" & "borders", if the browser window is resized and the word is too long, the word will still spill out and not be bound by the "margins" & "borders" despite what their names sound like.  

Anyway, this challenge re-inforced what I previously learned:
* `margin` = distance between the child elements & text that live inside an element to the edge of the element.  (Inside distance.)  
* `border` = the outline of an element.  
* `padding` = distance between the edge of the selected element and the elements surrounding it.  If there's no element surrounding it, distance between the selected element and the element/container that it stays in.  (Outside distance.)  

### What did you learn about CSS positioning?  

This activity re-inforced the ideas learned from the Mandatory Pairing Challenges 3.3 and 3.4, and I get to practice some more.  

These are what the challenge re-inforced:
* `static` = default positioning style, if no `position` attribute is specified.  Element flows on the page as it normally would, based on its sequence in the HTML file.  
* `absolute` = element will be placed exactly where you tell it to go.  This works because it is positioned in relation to the first parent element that is NOT `position: static;`. If there's no such parent element, the element with `position: absolute;` gets positioned relative to the 
`<html>` node.  
* `fixed` = it will always be in the same place relative to the browser window.  If the user scrolls up and down, the fixed element stays put even as other elements scroll past.  Nice for headers, footers, or sidebar/navigation that need to be displayed prominently, but might be troublesome if the window resizes or in smaller screens.  
* `relative` = elements move _relative to where it would have been_ if it just had the default static positioning.  `relative` works with other properties/attribues like `top`, `right`, `bottom`, `left` attributes.  For example, if the element has the attribute `top: 10px;`, this element will shift it's position 10 pixels DOWN from where it would NORMALLY be.  The `z-index` of a `relative`-ly positioned element will always trump a `static`-ally positioned element.  `relative` elements can have `absoulte`-positioned child elements inside it, and this `absolute` child element will behave as if it is inside its own browser window.  

### What aspects of your design did you find easiest to implement? What was most difficult?

The easiest things for me to implement were the colors, font-colors, background, background-colors, and the pseudo-classes for specific states (for example, `a:hover` or `a:active`).  

The most difficult things for me to implement were the paddings and margins and positions.  They are not difficult in and of themselves, but they become difficult when I test re-sizing the browser windows and looking at my site on my phone.  When I test them, the sizes become funky for these reasons:
    * The words don't fit, so they spill over the outsides of the container that I want them to stay.  This was problematic for long words.  
    ** Possible solution?  I'll check if <h1> can be resizable.  If that doesn't work, I'll take it off.
    * I want all the <nav>-bar items and all the things inside the footer-bar to fit in one line, but when I resize the window, the links and the icons spill out from the "bars" where I want them to appear.  The other thing I tried was making the bars a fixed width, but this causes other issues, like their background colors spilling over the sides when I shrink/resize the browser windows.  Also, supposedly it's not good to use fixed units.  
    ** Possible solution?  To-do.
The second-most-difficult is using rem & em, because I was not familiar with how big they are supposed to look like.  But I found these helpful websites when I did a search for "convert px to % or rem or em":
    - http://stackoverflow.com/questions/7240654/how-to-convert-px-into-like-we-convert-px-to-em-for-font-size
    - http://yuilibrary.com/yui/docs/cssfonts/cssfonts-size.html
    - https://offroadcode.com/prototypes/rem-calculator/
    - http://pxtoem.com/
There are also some that talk about the difference between using rem and em as units:
    - https://j.eremy.net/confused-about-rem-and-em/
    - http://stackoverflow.com/questions/13941275/rem-in-css-in-what-way-it-differs-from-em
The 3rd-most difficult is suddenly getting a new idea about the layout while in the middle of writing the code, and resisting the urge to make too much drastic changes.  

### What did you learn about adding and formatting elements with CSS in this challenge?

I learned that if I'm not careful, I can accidentally have the child elements inherit attributes/properties from their parent elements, that I didn't intend.  

Also, I'm learning more and more about `rem` & `em`, and trying to manually make my webpage designed more responsively.  (For example, it looks great on my desktop browser, but looks funky if the browser window is resized, and looks funky on the phone.)  For this reason, I learned that sometimes the idea on the prototype/wireframe sometimes look good on paper (literally), but might be different in practice.  (Possible solution?  Make many wireframes for many possibilities?)  