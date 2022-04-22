import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Comment.module.css";
const Comment = () => {
  const [commentText, setCommentText] = useState("");
  const textChanged = (e) => {
    setCommentText((commentText) => e.target.value);
  };
  const sendMessage = async () => {
    try {
      const response = await axios.get(
        `https://api.telegram.org/bot5152376088:AAFcWfvPJw1AW2-SW-PNOeik2ffxRhbVnfY/sendMessage?chat_id=@portfoliocomment&text=${commentText}`
      );
      setCommentText("");
    } catch (err) {
      setCommentText(err.message);
    }
  };
  return (
    <div className={styles.commentDiv} id="comment" data-aos="fade-up">
      <h1 className={styles.mainTitle}>Wanna Talk?</h1>
      <textarea
        value={commentText}
        onChange={(e) => textChanged(e)}
        className={styles.chatBox}
        placeholder="Leave a comment here..."
      />
      <div className={styles.buttonDiv}>
        <button className={styles.sendButton} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Comment;
