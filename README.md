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
  parent: '#container', /* Parent container; Default value: 'body'  */
  autoListener: true, /* Listener for auto centering on window resize; Default: true */
  position: 'fixed' /* which position you want to display the element; Deflaut: 'absolute' */
});
```
