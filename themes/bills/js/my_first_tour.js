(function($){
var tour = {
  id: "hello-hopscotch",
  showPrevButton: true,
  showCloseButton : true,
  steps: [
    {
      title: "Banner",
      content: "This is the banner of my site that is Bills management system.",
      target: "header",
      placement: "bottom",
      zindex: 999999,
      yOffset: 0,
    },
    {
      title: "Main Menu",
      content: "This is the main menu to navigate throughout the site.",
      target: "menu",
      placement: "bottom",
      zindex: 999999,
      yOffset: 0,
      xOffset: 300,
    },
    {
      title: "Content",
      content: "This is the main content region showing Bills uploaded by the employees.",
      target: "content",
      placement: "right",
      zindex: 999999,
      yOffset: 200,
      xOffset: -100,
    },
    {
      title: "Sidebar",
      content: "This is the sidebar to filter bills according to bill categories.",
      target: "sidebar",
      placement: "left",
      zindex: 999999,
      yOffset: 250,
      xOffset: 100,
    },
    {
      title: "Footer",
      content: "This is the footer of my site.",
      target: "main_footer",
      placement: "top",
      zindex: 999999,
      xOffset: 100,
    },
    {
      title: "Banner",
      content: "This was all about the site.",
      target: "header",
      placement: "bottom",
      zindex: 999999,
      yOffset: 0,
      xOffset:400,
    },
  ],
};
hopscotch.startTour(tour);
})(jQuery);

