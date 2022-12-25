import React from "react";

const LegalModal = ({ handleTitle, handleSaveTitle }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-legal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="bg-white p-8 rounded-lg w-2/4 mx-auto">
          <h3 className="text-center py-2">Add Lead Status</h3>
          <hr />
          <div className="mt-6 w-full">
            <div className="div">
              <h2>Title</h2>
              <input
                onChange={handleTitle}
                type="text"
                name="title"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="mt-6">
              <h2>Comment</h2>
              <input
                onChange={handleTitle}
                name="comment"
                type="text"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-6 mt-8">
            <label
              htmlFor="my-modal-legal"
              className="border-2 cursor-pointer border-primary py-2 px-8 rounded-lg"
            >
              Cancel
            </label>

            <label
              htmlFor="my-modal-legal"
              onClick={handleSaveTitle}
              className="border-2 cursor-pointer bg-primary text-white border-primary py-2 px-8 rounded-lg"
            >
              ADD
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalModal;
