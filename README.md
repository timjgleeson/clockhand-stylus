# clockhand-stylus

Stylus mixin for parsing clockhand syntax


### Install/Use:
```
npm install clockhand-stylus
```
.  
.  
. 
### Highlights:
- 1 2 3 and 4up
- `_` support (omissions, new concept)
- `!important` support
- Consistent with existing CSS behaviour:
  - https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties
  - http://reference.sitepoint.com/css/importantdeclarations
- Built with `clockhand`:
  - https://github.com/jasonkuhrt/shorthand-edge-omissions-stylus

.  
.  
. 
### Examples:

##### Sides only:
```
.foo
  clockhand(1)
  clockhand(1 2)
  clockhand(1 2 3)
  clockhand(1 2 3 4)

.foo {
  top: 1; right: 1; bottom: 1; left: 1;
  top: 1; right: 2; bottom: 1; left: 2;
  top: 1; right: 2; bottom: 3; left: 2;
  top: 1; right: 2; bottom: 3; left: 4;
}
```
##### Sides with another property:
```
.foo
  clockhand(1, 'bar')
  clockhand(1 2, 'bar')
  clockhand(1 2 3, 'bar')
  clockhand(1 2 3 4, 'bar')

.foo {
  bar-top: 1; bar-right: 1; bar-bottom: 1; bar-left: 1;
  bar-top: 1; bar-right: 2; bar-bottom: 1; bar-left: 2;
  bar-top: 1; bar-right: 2; bar-bottom: 3; bar-left: 2;
  bar-top: 1; bar-right: 2; bar-bottom: 3; bar-left: 4;
}
```
##### Omissions `_` (new concept, allow skipping of any side)
```
.foo
  clockhand(_ 2)
  clockhand(1 _ 3)
  clockhand(1 2 _ 4)

.foo {
  right: 2; left: 2;
  top: 1; bottom: 3;
  top: 1; right: 2; left: 4;
}
```
##### `!important` declaration
```
.foo
  clockhand(1 !important)
  clockhand(1 2 !important)
  clockhand(1 2 3 !important)
  clockhand(1 2 3 4 !important)

.foo {
  top: 1 !important; right: 1 !important; bottom: 1 !important; left: 1 !important;
  top: 1 !important; right: 2 !important; bottom: 1 !important; left: 2 !important;
  top: 1 !important; right: 2 !important; bottom: 3 !important; left: 2 !important;
  top: 1 !important; right: 2 !important; bottom: 3 !important; left: 4 !important;
}
```
.  
.  
.  
### Limitations
##### Does not support property-style invocation

```
// Don't do:
.foo
  clockhand 1 2 3 4, 'bar'


// Do:
.foo
  clockhand(1 2 3 4, 'bar')
```
