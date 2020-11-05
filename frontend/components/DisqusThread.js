import { DISQUS_SHORTNAME, DOMAIN } from '../config';

const SHORTNAME = DISQUS_SHORTNAME;
const WEBSITE_URL = DOMAIN;

function renderDisqus() {
  if (window.DISQUS === undefined) {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://' + SHORTNAME + '.disqus.com/embed.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  } else {
    window.DISQUS.reset({ reload: true });
  }
}

class DisqusThread extends React.Component {

  shouldComponentUpdate(nextProps) {
    return (
      this.props.id !== nextProps.id || // string
      this.props.title !== nextProps.title || // string
      this.props.path !== nextProps.path // string
    );
  }

  componentDidMount() {
    renderDisqus();
  }

  componentDidUpdate() {
    renderDisqus();
  }

  render() {
    let { id, title, path, ...other } = this.props;

    if (process.env.BROWSER) {
      window.disqus_shortname = SHORTNAME;
      window.disqus_identifier = id;
      window.disqus_title = title;
      window.disqus_url = WEBSITE_URL + path;
    }

    return <div {...other} id="disqus_thread" />;
  }
}

export default DisqusThread;