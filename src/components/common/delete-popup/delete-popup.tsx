/** Components */
import Spinner from "../spinner/spinner";

/** Icons */
import DeleteIcon from "../../../assets/icons/delete.svg?react";

/** Props */
type Props = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    loading?: boolean;
};

/** Main Export */
const DeletePopup = ({
    isOpen,
    onConfirm,
    onCancel,
    loading,
}: Props) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white w-[380px] rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col items-center text-center">
                    <div className="w-18 h-18 rounded-full bg-white border-3 border-red/10 flex items-center justify-center mb-5">
                        <p className="w-10 h-10 rounded-full bg-red p-2 flex items-center justify-center flex-shrink-0">
                            <DeleteIcon className="w-4 h-4 fill-white" />
                        </p>
                    </div>
                    <p className="w-65 text-xl font-semibold text-black leading-tight">
                        Are you sure you want to delete this user?
                    </p>
                    <p className="text-sm text-gray-dark mt-2">
                        This action cannot be undone.
                    </p>
                </div>
                <div className="flex justify-end gap-3 mt-6 border-t border-black/10 pt-4">
                    <button
                        onClick={onCancel}
                        className="w-[150px] bg-transparent text-black py-2.5 rounded-3xl cursor-pointer border border-black/20"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="w-[150px] py-2 rounded-3xl bg-red-600 text-white justify-center inline-flex items-center disabled:opacity-70 cursor-pointer"
                    >
                        {loading ? <Spinner /> : "Delete"}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DeletePopup;