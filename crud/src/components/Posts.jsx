import React, { useEffect, useState } from "react";
import { deletPost, getPost } from "../api/PostApi";
import { data } from "react-router";

function Posts() {
  const [Post, setPost] = useState([]);
  const getPostData = async () => {
    const res = await getPost();
    setPost(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const res = await deletPost(id);
      if (res.status === 200) {
        const newUpdaedPost = data.filter((curPost) => {
          console.log(newUpdaedPost)
          setPost(newUpdaedPost)
          return curPost.id !== id;

        });
        setPost(newUpdaedPost);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="py-10 px-4 bg-[#1a222d] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-white drop-shadow-lg tracking-wide">
          🚀 Awesome Posts
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Post.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li
                key={id}
                className="bg-[#232e3c] w-full h-full rounded-lg shadow-lg p-7 flex flex-col border border-[#232e3c]"
              >
                <p className="text-base font-semibold text-white mb-2">{id}.</p>
                <p className="text-lg font-bold text-white mb-2">
                  Title: <span className="font-normal">{title}</span>
                </p>
                <p className="text-base text-white mb-6 flex-1">
                  News: <span className="font-normal">{body}</span>
                </p>
                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 px-4 py-2 bg-[#20c997] text-white rounded font-semibold hover:bg-[#17a589] transition-colors duration-150">
                    EDIT
                  </button>
                  <button
                    className="flex-1 px-4 py-2 bg-[#e74c3c] text-white rounded font-semibold hover:bg-[#c0392b] transition-colors duration-150"
                    onClick={() => handleDeletePost(id)}
                  >
                    DELETE
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Posts;
