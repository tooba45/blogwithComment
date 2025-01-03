"use client"
import { useState } from "react";


     

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  // Handle the comment submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input after submission
    }
  };

  return (
    <div className=" lg:-mr-80  lg:ml-72 flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 ">
        <h2 className="mt-2 py-3 block text-xl text-center leading-8 font-bold tracking-tight  text-transparent bg-gradient-to-br from-pink-200
              via-stone-700 to-blue-300 bg-clip-text
             ">Leave a Comment</h2>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            rows={4}
            className="w-full px-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          ></textarea>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-pink-600 to-indigo-500 text-white font-bold rounded-md hover:opacity-80 transition duration-300"
            >
              Submit Comment
            </button>
          </div>
        </form>

        {/* Comment List */}
        <div className="mt-8 space-y-6">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm space-y-2"
              >
                <p className="text-gray-800">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-stone-600">No comments yet, be the first to leave one!</p>
          )}
        </div>
      </div>
      </div>
  );
}

    


