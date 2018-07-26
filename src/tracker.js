export const pageview = title => {
  window._ha &&
    _ha('send', 'pageview', {
      title: title || document.title,
      url: document.location.href
    });
};
