# Lazy Load Observer

A library to help lazy load images on the page. This version is supposed to use in the html file directly.
Images that have not been visible (not in the current visible area) will use a placeholder. When a user naviage close to images, the real images' url will be replaced.
This can help your website save loading time and bandwith by deferring images' loading time.
A user may never see some of your big pictures under the bottom section. Why load them?

# Usage

1. Download the file
Download the LazyLoadObserver.min.js file and save it under your html project.

2. Put the code in your html file
Add this in the end of the body section
```
<script src="yourPath/LazyLoadObserver.min.js"></script>
```

3. Update your img tags to put a placeholder image url to src attribute and more the real image url to the data-src attribute
```
<img src="placeholder image url" data-src="real image url" />
```

That's it. This library will show the placeholder images and replace them with the real images when a user navigate close to the img tag.
For the browsers that does not support IntersectionObserver, the library will automaticall replace the src with the real image url.

# Example

You can find one example of the usage in example.html file.

![alt text](https://github.com/PengWang0316/LazyLoadObserver/blob/master/example.gif "Example Picture")

# License

Log is licensed under MIT License - see the [License file](https://github.com/PengWang0316/LazyLoadObserver/blob/master/LICENSE).
