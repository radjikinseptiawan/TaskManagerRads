
/* eslint-disable react/prop-types */
export default function TaskChild({thisKey,val,onClickCompleted,onClickDeleted,onClickEdited,el,id,childrenCompleteButton,textColor,bgColor}) {
  return (
    <>
                <li key={thisKey} 
            className=" list-none  m-2 p-2 odd:bg-yellow-950 font-medium odd:text-yellow-900 text-yellow-950 text-center">
            <input type="text" value={val}
            className="text-sm bg-yellow-700"
            id={id} 
            ref={el}
            />
            <button className={` m-2 ${bgColor}  p-1 ${textColor} hover:text-white  rounded `}
            onClick={onClickCompleted}
            >
                {childrenCompleteButton}
            </button>
            <button className="m-2 bg-blue-500  p-1 text-blue-600 hover:text-white  rounded "
            onClick={onClickEdited}>edit</button>
            <button className=" m-2 bg-red-800  p-1 text-red-900 hover:text-white  rounded " onClick={onClickDeleted}>deleted</button>
            </li>

    </>
  )
}
