/* eslint-disable react/prop-types */
export default function InpuElement({value,onChange,onClick}) {
  return (
    <>
    <div className="flex items-center justify-center">
    <input type="text" 
    className="bg-yellow-950 text-2xl m-2 text-white border-4 border-yellow-700"
    value={value}
    onChange={onChange} />
    <button className="p-4 bg-yellow-800 text-yellow-950 hover:text-white m-2 rounded"
     onClick={onClick}>Add</button>
    </div>
    </>
  )
}
