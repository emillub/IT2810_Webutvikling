import React, { useState, useEffect } from 'react';
import '../styles/likeButton.css';
interface LikeButtonProps {
  itemId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ itemId }) => {
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const savedLikeStatus = localStorage.getItem(`liked_${itemId}`);
    if (savedLikeStatus) {
      setLiked(JSON.parse(savedLikeStatus));
    } else {
      setLiked(false);
    }
  }, [itemId]);

  const toggleLike = () => {
    const newLikeStatus = !liked;
    setLiked(newLikeStatus);
    localStorage.setItem(`liked_${itemId}`, JSON.stringify(newLikeStatus));
  };

  return (
    <button onClick={toggleLike} className={`like-button ${liked ? 'liked' : 'unliked'}`}>
      {liked ? '❤️' : '🤍'}
    </button>
  );
};

export default LikeButton;