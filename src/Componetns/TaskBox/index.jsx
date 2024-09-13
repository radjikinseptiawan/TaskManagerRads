/* eslint-disable react/prop-types */

export default function TaskBox(props) {
    const {children} = props
  return (
    <>
    <div className="flex justify-center">
            <div className="h-96 w-11/12 bg-yellow-600 p-5 overflow-auto">
                {children}
        </div>
        </div>
    </>
  )
}
