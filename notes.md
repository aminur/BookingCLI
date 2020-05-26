# JS notes

## Wrappers

1. Wrapper functions can help reduce verbose code, whilst still allowing the core code to remain clear and easy to maintain.
2. Wrappers typically do not do anything new
3. Productivity benefit:
- you forget the real call so you wrap it
- you need shorter code
4. Don't use a wrapper when it does not add value
- because IDE's can auto-complete so you don't really save time typing these days

```php
PHPExcel.printCellNumberWithCoords
PHPExcel.addBordertoCell

class ExcelWrap {

  function cellout(x) {
    PHPExcel.placeNumberinCell(x);
  }

  function border(coords) {

  }
}

ExcelWrap::border

cellout(837892);
```

## Hoisting

1. `function` declarations are hoisted to the top of the scope they are declared in.

# Coding styles

1. Code over comments
- self-explanatory code with clear nomenclature
> If you use comments, they must make sense particularly in the local context, not be dependent on anything outside e.g. where the function is called
> Do not let your comments be dependent on other comments, dependencies can change

2. Decide when and how to use `return` over 'side effects'
- Think about how you will test your code!

3. Parentheses and spaces
- `func(func( func( vari ) ))`


# IDE features

## Refactoring code

1. Global rename is important to be able to refactor easily, especially renaming a variable that was not named with clarity
- In an editor this is "Find and Replace"

# Todo

## Team

1. Look at a library that can automatically generate your documentation for your code e.g. a static site such as Docusaurus.

## Learn

1. TDD

2. OOP