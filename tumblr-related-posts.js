(function(config) {
  var scripts = document.getElementsByTagName('script');
  var target = scripts[scripts.length-1];
  window['tumblrrelatedpost'] = (function(data) {
    for (var ul = document.createElement('ul'), i = 0; i < data.posts.length; i++)
      if (data.posts[i]['url-with-slug'] !== location.href)
        ul.innerHTML += '<li><a href="{{link}}">{{title}}</a></li>'.replace('{{link}}', data.posts[i]['url-with-slug']).replace('{{title}}', data.posts[i]['regular-title']);
    target.parentNode.replaceChild(ul, target);
  });
  var script = document.createElement('script');
  script.src = '/api/read/json?tagged={{tags}}&type=text&num={{num}}&start=0&callback={{callback}}'.replace('{{tags}}', ('{block:Tags}{Tag},{/block:Tags}'.split(',')[0] || '')).replace('{{num}}', config.num).replace('{{callback}}', 'tumblrrelatedpost');
  document.head.appendChild(script);
})({num: 6});