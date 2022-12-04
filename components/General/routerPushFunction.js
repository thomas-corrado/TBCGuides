

export default function routerPushFunc(pageHref) {
    if (pageHref === "home") {
      return "/";
    } else {
      return pageHref;
    }
}