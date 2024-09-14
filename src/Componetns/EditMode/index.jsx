
// eslint-disable-next-line react/prop-types
export default function EditingMode({value,setStrings,cancel,clicked}) {
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
        <button onClick={cancel}
        className="
           mx-2
          bg-red-600
          p-2
          text-red-800
          rounded
          hover:text-white
        
        "
        >
            Cancel
        </button>
        </>
  )
}
