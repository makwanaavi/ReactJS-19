/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData, updateApiData, setupdateApiData, isEditing, handleUpdatePost, setIsEditing }) => {
  const [addData, setaddData] = useState({
    title: "",
    body: ""
  });

  useEffect(() => {
    if (updateApiData && updateApiData.id) {
      setaddData({
        id: updateApiData.id,
        title: updateApiData.title || "",
        body: updateApiData.body || "",
      });
    } else {
      setaddData({ title: "", body: "" });
    }
  }, [updateApiData]);

  const handleInputChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setaddData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing && addData.id) {
      handleUpdatePost(addData);
      setaddData({ title: "", body: "" });
      setupdateApiData({});
      setIsEditing(false);
    } else {
      addPostData();
    }
  };

  const addPostData = async () => {
    const response = await postData(addData);
    if (response.status === 201) {
      setData([...data, response.data]);
      setaddData({ title: "", body: "" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-10">
      <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-4 bg-[#232e3c] p-6 rounded-lg shadow-lg border border-[#232e3c]">
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add title"
          value={addData.title}
          onChange={handleInputChnage}
          className="flex-1 px-4 py-2 bg-[#1a222d] text-white rounded border border-gray-600 focus:outline-none focus:border-[#20c997]"
        />
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add post"
          value={addData.body}
          onChange={handleInputChnage}
          className="flex-1 px-4 py-2 bg-[#1a222d] text-white rounded border border-gray-600 focus:outline-none focus:border-[#20c997]"
        />
        <button
          type="submit"
          className={`px-6 py-2 ${isEditing ? "bg-yellow-500 hover:bg-yellow-600" : "bg-[#20c997] hover:bg-[#17a589]"} text-white rounded font-semibold transition-colors duration-150`}
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

// export default Form;
