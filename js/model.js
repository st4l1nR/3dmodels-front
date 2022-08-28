const iframe = document.createElement("iframe");
iframe.src =
  `https://3dviewer.net/embed.html#model=${window.location.href.split('#')[1]}`;
iframe.style.width = "100%";
iframe.style.height = "100vh";

document.body.appendChild(iframe);
