import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import TimeSinkGif from '../images/timesinkpresents.gif'

const TimeSinkPage = () => {
    return (
    <Layout>
  {/* <a href="https://www.timesinkpresents.com/"> */}
  <div className="flex flex-col justify-center items-center">
<img src={TimeSinkGif} height={400} width={400} className="mt-12" />
<div className="mt-6">
  <p>Established in 2021.</p>
  <p>A cinema platform for supporting great filmmakers and connecting audiences.</p>
    <p><a href="https://www.timesinkpresents.com">www.timesinkpresents.com</a></p>
            <a class="twitter-timeline" data-width="282" data-height="120" data-theme="light" href="https://twitter.com/timesink_?ref_src=twsrc%5Etfw">Tweets by timesink_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            </div>

    </Layout>
)
     
}

export default TimeSinkPage