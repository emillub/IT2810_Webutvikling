import React, { useState, useEffect } from 'react';
import '../styles/Like.css';
interface LikeButtonProps {
  itemId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ itemId }) => {
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const savedLikeStatus = localStorage.getItem(`liked_${itemId}`);
    if (savedLikeStatus) {
      setLiked(JSON.parse(savedLikeStatus));
    }
  }, [itemId]);

  const toggleLike = () => {
    const newLikeStatus = !liked;
    setLiked(newLikeStatus);
    localStorage.setItem(`liked_${itemId}`, JSON.stringify(newLikeStatus));
  };

  return (
    <button onClick={toggleLike} className={liked ? 'liked' : ''}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;