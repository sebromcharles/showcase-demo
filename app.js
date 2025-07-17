const { useEffect, useState } = React;

function Banner() {
  return React.createElement('div', { className: 'banner' }, 'Welcome to the Showcase Demo');
}

function Carousel({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return React.createElement(
    'div',
    { className: 'carousel' },
    images.map((src, i) =>
      React.createElement('img', {
        key: src,
        src,
        className: i === index ? 'active' : '',
        alt: `slide-${i + 1}`,
      })
    )
  );
}

function MasonryArticles({ articles }) {
  return React.createElement(
    'div',
    { className: 'masonry' },
    articles.map((art, i) =>
      React.createElement(
        'div',
        { key: i, className: 'article' },
        React.createElement('h3', null, art.title),
        React.createElement('p', null, art.excerpt)
      )
    )
  );
}

function App() {
  const images = [
    'https://via.placeholder.com/800x200?text=Slide+1',
    'https://via.placeholder.com/800x200?text=Slide+2',
    'https://via.placeholder.com/800x200?text=Slide+3',
  ];

  const articles = Array.from({ length: 6 }).map((_, i) => ({
    title: `Article ${i + 1}`,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  }));

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Banner, null),
    React.createElement(Carousel, { images }),
    React.createElement(MasonryArticles, { articles })
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
