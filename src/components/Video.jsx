import React, { useState} from 'react';
import {AiFillLike, AiOutlineLike, AiOutlineComment, AiOutlineSend, AiOutlineClose } from 'react-icons/ai';

const VideoCard = ({src}) => {
    const [isLiking, setIsLiking] = useState(false);
    const [isCommenting, setIsCommenting] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]); // State to store comments
    const [newComment, setNewComment] = useState(""); // State for the input field

    /*useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-${videoId}`)) || [];
        const savedLikes = JSON.parse(localStorage.getItem(`likes-${videoId}`)) || false;
        const savedLikeCount = JSON.parse(localStorage.getItem(`likeCount-${videoId}`)) || 0;

        setComments(savedComments);
        setIsLiking(savedLikes);
        setLikeCount(savedLikeCount);
    }, [videoId]);

    // Save data to localStorage when likes or comments change
    useEffect(() => {
        localStorage.setItem(`comments-${videoId}`, JSON.stringify(comments));
        localStorage.setItem(`likes-${videoId}`, JSON.stringify(isLiking));
        localStorage.setItem(`likeCount-${videoId}`, JSON.stringify(likeCount));
    }, [comments, isLiking, likeCount, videoId]);*/

    const handleLikeClick = () => {
        if (isLiking) {
            // If already liked, decrease the count
            setLikeCount((prevCount) => prevCount - 1);
        } else {
            // If not liked, increase the count
            setLikeCount((prevCount) => prevCount + 1);
        }
        setIsLiking((prev) => !prev); // Toggle the liking state
    };

    const handleCommentClick = () => {
        setIsCommenting(true);
    };

    const handleCloseComment = () => {
        setIsCommenting(false);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() === "") return;
        setComments((prevComments) => [...prevComments, { id: Date.now(), text: newComment}]);
        setNewComment("");
    };

    return (
        <div>
            {/*Comment Section */}
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isCommenting ? "opacity-100 visible z-30" : "opacity-0 invisible"}`}>
                <div className="absolute inset-0 max-w-[650px] mx-auto w-full flex items-center p-2 justify-center z-40">
                    <div className={`relative h-[300px] md:h-[400px] z-30 w-full border top-0 left-0 bg-white shadow-md rounded-lg p-4 transition-transform duration-300 ${isCommenting ? "translate-y-0" : "-translate-y-20"}`} id="comment-pop-up">
                        {/* Close Button */}
                        <div className="absolute z-30 border p-1 bg-white rounded-md right-0 -top-10 sm:top-0 sm:-right-8 cursor-pointer hover:bg-gray-100 transition"
                            onClick={handleCloseComment}>
                            <AiOutlineClose />
                        </div>
                        <h1 className='font-medium text-lg'>Comment Section</h1>
                        <hr className='rounded-full bg-black' />
                        <div className='w-full h-[175px] md:h-[270px] resize-none border-2 overflow-y-auto my-3 px-2 py-1 outline-none rounded-md' id='comments'>
                            {comments.map((comment) => (
                                <div key={comment.id} id='comment' className='mt-2'>
                                    <p className='text-xs font-bold'>{comment.user}</p> {/* Display the username */}
                                    <h1 className='text-sm text-justify'>{comment.text}</h1>
                                </div>
                            ))}
                        </div>
                        <div className='absolute bottom-0 left-0 px-3 py-2 flex items-center border-t-2 w-full bg-white rounded-b-md'>
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder='Comment'
                                className='w-full bg-white text-base border p-2 border-none outline-none'
                            />
                            <AiOutlineSend onClick={handleCommentSubmit} className="cursor-pointer ml-2 text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Video-Card */}

            <div className="relative z-10 rounded-md border shadow-lg my-4 md:mx-3 hover:scale-[1.02] transition-all ease-in-out duration-300" id="video-card">
                <div id="video">
                    <video autoPlay loop controls className="rounded-t-md w-full">
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
                <div className="hover:translate-y-2 transition-all ease-in-out duration-300">
                    <div className="p-2" id="description">
                        <p className="text-justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat accusamus repellat maiores voluptate quisquam alias blanditiis, totam soluta maxime? Ipsam beatae temporibus nostrum praesentium id? Fugiat, sunt? Quos, ullam.
                        </p>
                    </div>
                    <div className="flex items-center justify-between" id="socials">
                        <div className="px-2 py-4 text-xl cursor-pointer flex items-center" id="icons">
                            <div onClick={handleLikeClick} className="flex items-center">
                                {isLiking ? <AiFillLike className="text-red-500" /> : <AiOutlineLike />}
                                <p className="text-sm ml-2" id="count">{likeCount}</p>
                            </div>
                            <div onClick={handleCommentClick} className="flex items-center ml-4">
                                <AiOutlineComment />
                                <p className="text-sm ml-2" id="c-count">{comments.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
