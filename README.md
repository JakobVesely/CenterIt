CenterIt
========

A jQuery Plugin to center a container within another

# How to use

```javascript
$('#element_to_center').centerIt();
```

## You have following options:
```javascript
$('#element_to_center').centerIt({
  parent: '#container' /* Parent container; default value: 'body'  */,
  vertical: true, /* center vertical, default value: true */
  horizontal: true, /* center horizontal, default value: true */
  autoListener: true, /* Listener for auto centering on window resize; default: true */
  position: 'fixed' /* which position you want to display the element; default: 'absolute' */
});
```
