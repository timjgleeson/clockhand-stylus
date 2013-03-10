# clockhand-stylus [![Build Status](https://travis-ci.org/jasonkuhrt/clockhand-stylus.png)](https://travis-ci.org/jasonkuhrt/clockhand-stylus)

Stylus mixin for parsing clockhand syntax

### Preview
```
.foo { clockhand(4 8 _ 1 !important); }

.foo { top: 4 !important; right: 8 !important; left: 1 !important; }
```
### Summary
- [Stylus](https://github.com/learnboost/stylus) [mixin](https://github.com/LearnBoost/stylus/blob/master/docs/mixins.md) (not [function](https://github.com/LearnBoost/stylus/blob/master/docs/functions.md))
- Support for CSS box-edge-shorthand
  - https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties
- Support for `!important`
  - http://reference.sitepoint.com/css/importantdeclarations
- Introduces `_` omissions
- Used by:
  - https://github.com/jasonkuhrt/shorthand-edge-omissions-stylus
  - https://github.com/jasonkuhrt/shorthand-position-stylus
  - Fork + add your package here

.  
.  
.  

### Install:
```
npm install clockhand-stylus --save
```
.  
.  
.  

### Documentation:

```
clockhand(<stylus-clockhand-shorthand>, [<String>property-name])

eg: clockhand(1 3 _ 1, 'margin') || clockhand(4)
```

##### `<stylus-clockhand-shorthand>`
```
val||_  [val||_]  [val||_]  [val||_]

eg: 3 || 3 2 || 4 4 4 || 98 45 2 1 || _ 2 || 4 _ || 45 !important || 1 3 _ !important
```
Everything native CSS box-edge-shorthand does: https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties is supported.
See section "Shorthands handling properties related to edges of a box ..."

`_` permits you to opt out of an edge (examples illustrate below)

##### property-style invocation
```
// Don't do:
.foo
  clockhand 1 2 3 4, 'bar'


// Do:
.foo
  clockhand (1 2 3 4) 'bar'
```


##### `<String>property-name`
```
eg: 'foo' || 'margin' || 'padding'

```
.  
.  
.  
### Examples:

##### Edges only:
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
##### Edges with another property:
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
##### Omissions `_` (omit value for a particular edge)
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
