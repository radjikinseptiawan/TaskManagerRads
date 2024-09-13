
// eslint-disable-next-line react/prop-types
export default function EditingMode({value,setStrings,clicked}) {
  return (
    <>
                
    <input value={value} onChange={setStrings}
        className="
        bg-amber-950
        text-white
        mx-2
        "
        />
        <button onClick={clicked}
        className="
          bg-blue-600
          p-2
          text-blue-800
          rounded
          hover:text-white
          "
 >
          Save Edit
        </button>
        </>
  )
}
