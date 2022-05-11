import * as React from 'react'

// type DailyProps = {
//     post: React.ReactNode
// }

// eslint-disable-next-line react/prop-types
const DailyLink = (props) => {
  return (
    <div className="pb-12 border-b-[1px] border-black flex justify-items-center flex-col">
            <h1 className="text-[40px] mb-4 mt-8">{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.body }} className="w-96 text-[21px]"></div>
      </div>
  )
}

export default DailyLink
