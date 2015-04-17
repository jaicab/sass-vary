# [sass-vary](http://jaicab.com/vary/)
>vary is a Sass mixin that creates consistent variations of your modules with BEM modifiers or body classes

##Features
* Keeps enviroment oriented changes consistent
* Writes .is-foo classes for you
* Writes .element--foo modifiers for you


##Quick example

Your `$vary-map` lists all the values for each variation. As seen in the example, they can be any kind of data that can be stored in a Sass variable.
```sass
$vary-map: (
  user: (
    'color-primary': #333,
    'color-secondary': #069,
    'color-tertiary': red,
    'border-box': 1px solid #ff0
  ),
  admin: (
    'color-primary': #f0f,
    'color-secondary': #000,
    'color-tertiary': red,
    'border-box': 10px solid red
  )
);
```

Then you can start using it. The most common scenario is body classes, for which the most common pattern is as `.is-foo`.
```sass
.foo{
  font-size: .9em;
    
  @include vary {
    color: vary-get('color-primary');
  }
}
```

This code would compile into:
```css
.foo{
  font-size: .9em;
}
.is-user .foo{
  color: #333;  
}
.is-admin .foo{
  color: #f0f;  
}
```

For BEM modifier usage, more specific examples and options please [go to the site](http://jaicab.com/vary/).

