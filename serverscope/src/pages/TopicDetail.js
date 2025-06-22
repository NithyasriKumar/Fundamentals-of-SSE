
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./TopicDetail.css";

function TopicDetail({ concepts }) {
  const { id } = useParams();
  const topic = concepts.find((t) => t.id === id);

  if (!topic) return <p>Topic not found</p>;

  return (
    <div className="topic-detail-wrapper">
      <div className="topic-detail-container">
        <h2 className="topic-detail-title">{topic.title}</h2>
        <img src={topic.image} alt={topic.title} className="topic-detail-image" />
        <div className="topic-detail-content">
          {topic.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <Link className="back-link" to="/">← Back to all topics</Link>
      </div>
    </div>
  );
}

export default TopicDetail;

