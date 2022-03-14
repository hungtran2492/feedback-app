import { FaTimes, FaEdit } from "react-icons/fa";

import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedBackItem({ item }) {
  const { deleteFeedBack, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedBack(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
