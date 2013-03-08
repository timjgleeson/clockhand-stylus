# clockhand-stylus

Stylus mixin for parsing clockhand syntax


## Install/Use:
```
npm install clockhand-stylus
```

## Examples:

#### Sides only:
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

#### Sides with another property:
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

#### Omissions `_` (new concept, allow skipping of any side)
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



## Raison d'être
- Low-level abstract mixin especially useful for higher-level mixins



## Limitations

- This mixin does not support property-style invocation

```
//  Don't do:

.foo
  clockhand 1 2 3 4, 'bar'


//  Do:

.foo
  clockhand(1 2 3 4, 'bar')
```
