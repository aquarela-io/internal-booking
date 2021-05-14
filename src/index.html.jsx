import IframeLoader from './components/IframeLoader'
import { GlobalStyle } from './styles/global'


export default () => (
  <html>
  <head>
    <style>{GlobalStyle}</style>
  </head>
    <body>
          <IframeLoader
          url="https://aquarela.simplybook.me/v2/"
          scroll="yes"
          style={{ border: 0, minHeight: '100%', height: '100vh' }}
          title="AQUARELA Booking"
              />
    </body>
  </html>
)
