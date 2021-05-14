import PropTypes from 'prop-types'

const IframeLoader = (props) => (
  <iframe
    src={props.url}
    style={props.style || { border: 0}}
    name="aquarelaFrame"
    scrolling={props.scroll || 'yes'}
    frameBorder="0"
    marginHeight="0px"
    marginWidth="0px"
    height="100%"
    width="100%"
    title={props.title || 'AQUARELA'}
    allowFullScreen
  ></iframe>
)

IframeLoader.propTypes = {
  url: PropTypes.string.isRequired,
  scroll: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
}

export default IframeLoader
