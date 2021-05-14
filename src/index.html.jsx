import IframeLoader from './components/IframeLoader'
import { GlobalStyle } from './styles/global'


export default () => (
  <html>
  <head>
      <title>AQUARELA - Reservas Online</title>
      <meta name="title" content="AQUARELA - Reservas Online"/>
      <meta name="description" content="Reserve e agende uma reunião conosco."/>

      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="theme-color" content="#ffffff"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://booking.aquarela.io/"/>
      <meta property="og:title" content="AQUARELA - Reservas Online"/>
      <meta property="og:description" content="Reserve e agende uma reunião conosco."/>
      <meta property="og:image" content="https://aquarela.simplybook.me/uploads/aquarela/image_files/background/d86f0e0ec4bc2af12052dc91981def8b.jpg"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://booking.aquarela.io/"/>
      <meta property="twitter:title" content="AQUARELA - Reservas Online"/>
      <meta property="twitter:description" content="Reserve e agende uma reunião conosco."/>
      <meta property="twitter:image" content="https://aquarela.simplybook.me/uploads/aquarela/image_files/background/d86f0e0ec4bc2af12052dc91981def8b.jpg"/>
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
