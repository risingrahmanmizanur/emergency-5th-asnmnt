# Assignment Q&A

# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- `getElementById()` selects only one element using its **unique id** thus we can identify it as unique.  
- `getElementsByClassName()` selects all the collection of elements with the same class(wherever it is) in the html file.  
- `querySelector()` selects only the first matching element by CSS selector, on the otherhand `querySelectorAll()` returns all matches as NodeList.

# 2. How do you create and insert a new element into the DOM?
- First we need to use `document.createElement("tagName")` to create an element.  
- Then we have to set its properties/text using `element.textContent` or `setAttribute()`.  
- And finally, insert it with `appendChild()` or `insertBefore()` to the parent node.

# 3. What is Event Bubbling and how does it work?
- Event bubbling means an event which starts with a child element and can **propagates upward** to its parent elements.  
- Such as, if we click on a button inside a div, this click event can propgate to its parent div and also to its document unless stopped.  
- This goes like (`child → parent → document`).

# 4. What is Event Delegation in JavaScript? Why is it useful?
- Event delegation means attaching a single event listener to its **parent element** , so that it can get access to its child elements event also .  
- It works because of event bubbling: the parent can detect events coming from its children.  
- It is useful for good performance and handling dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- `preventDefault()` stops the **default action** of an element (like form submit or link navigation).  
- `stopPropagation()` stops the **event from bubbling** up to parent elements.  
- They solve different problems: one controls default behavior, the other controls event flow.
