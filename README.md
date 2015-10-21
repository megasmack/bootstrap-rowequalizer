# Bootstrap RowEqualizer

A jQuery plugin that dynamically clears rows with uneven columns in Bootstrap 3 grids.

## Requirements

- jQuery 1.11.0 or higher
- Bootstrap 3.x.x

## Usage

Just load the script before the end of `body` tag and call the script using a selector on your Bootstrap row. You can optionally pass the column count if you have customized your columns. The default is `12`.

```javascript
	$(selector).rowequalizer(columns);
```

NOTE: You may want to avoid selecting the class `row` as it may affect grids you may not want cleared. I suggest adding a class specifically for clearing. Like `row-eq` for example.

## Example

Here's a typical Bootstrap grid:
```html
<div class="row row-eq">
	<div class="col-sm-3"></div>
	<div class="col-sm-3"></div>
	<div class="col-sm-3"></div>
	<div class="col-sm-3"></div>
	<div class="col-sm-3"></div>
</div>
```

To clear these rows on a typical 12 column grid, just run this script:
```html
<script src="bootstrap-rowequalizer.js"></script>
<script>
	$('.row-eq').rowequalizer();
</script>
```

Which will output this in the browser:
```html
<div class="row row-eq">
	<div class="col-sm-3"></div>
	<div class="col-sm-3"></div>
	<div class="col-sm-3"></div>
	<div class="clearfix visible-sm-block visible-md-block visible-lg-block"></div>
	<div class="col-sm-3"></div>
	<div class="col-sm-3"></div>
</div>
```

### More complex example

Where bootstrap-rowequalizer shines is when you're setting multiple col sizes at different query levels. For example, here is a more exciting grid:
```html
<div class="row row-eq">
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
</div>
```

Which will output this in the browser:
```html
<div class="row row-eq">
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="clearfix visible-sm-block"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="clearfix visible-md-block"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="clearfix visible-sm-block"></div>
	<div class="clearfix visible-lg-block"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="clearfix visible-sm-block"></div>
	<div class="clearfix visible-md-block"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="clearfix visible-sm-block"></div>
	<div class="clearfix visible-lg-block"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="clearfix visible-md-block"></div>
	<div class="col-sm-6 col-md-4 col-lg-3"></div>
	<div class="clearfix visible-sm-block"></div>
</div>
```

So now if you have uneven content in your columns and have multiple column sizes, you can still clear each of them as though they’re a row.

## Notes

- If you need the column heights to be equal (for different background colors for example), checkout [Bootstrap ColEqualizer](https://github.com/gsmke/bootstrap-colequalizer). Instead of clearing "rows", it can make all of the `col` elements heights equal.

## Known Issues

- This will only work with Bootstrap’s default class names. If you are making your own class names via LESS or SASS, you’ll need to find other means of clearing rows.
- I'm assuming Bootstrap 4’s Flexbox support may make this script obsolete. At the time of writing this, I haven't had a chance to work with Bootstrap 4 to see if this is the case. Given that there are new breakpoints in Bootstrap 4, I can say this script likely won't work at this time.
- May support older versions of jQuery. Untested.
