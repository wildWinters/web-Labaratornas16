import useEditMode from "../Store/useEdit";

export default function Edit() {
    const isEditMode = useEditMode(state => state.isEditMode);
    const toggleEditMode = useEditMode(state => state.toggleEditMode);

    return ( 
        <button 
            className="relative w-[160px] h-[48px] shrink-0 flex text-white items-center justify-center bg-[#324381] text-[16px] rounded-[20px] group"
            onClick={() => {
                toggleEditMode();
                setTimeout(() => console.log("Updated Edit Mode:", useEditMode.getState().isEditMode), 100);
            }}>   
            Edit
        </button>
    );
}
