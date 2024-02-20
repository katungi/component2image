# Component TO Image

## How it works

This is just a demo. Converting a component to an image can be a pain in the a\*\*. Especially when you have to deal with a lot of components. This is a simple solution to convert a component to an image.

First install the package html2canvas.

```bash
npm install html2canvas
```

Then import the package in your component.

```javascript
import html2canvas from "html2canvas";
```

Then create a function to convert the component to an image.

```javascript
const convertToImage = () => {
  const component = document.getElementById("component");
  html2canvas(component).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = img;
    link.download = "component.png";
    link.click();
  });
};
```

Then create a button to call the function.

```javascript
<button onClick={convertToImage}>Convert to Image</button>
```

That's it. Now you can convert your component to an image and download it.
