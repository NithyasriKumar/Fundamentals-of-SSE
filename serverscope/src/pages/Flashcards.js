import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Flashcards.css';

const flashcards = [
  { term: "GET", definition: "Retrieves data from the server." },
  { term: "POST", definition: "Submits data to be processed to a specified resource." },
  { term: "PUT", definition: "Updates a current resource with new data." },
  { term: "DELETE", definition: "Removes a resource from the server." },
  { term: "PATCH", definition: "Partially updates a resource on the server." },
  { term: "Middleware", definition: "Functions that run before the route handler processes the request." },
  { term: "Status Code 200", definition: "OK – The request was successful." },
  { term: "Status Code 404", definition: "Not Found – The requested resource was not found." },
  { term: "Status Code 500", definition: "Internal Server Error – Server encountered an error." },
  { term: "JWT", definition: "JSON Web Token used for securely transmitting information." },
  { term: "Session", definition: "Stores user data on the server between requests." },
  { term: "Cookie", definition: "Data stored on the client to maintain user sessions." },
  { term: "Express.js", definition: "Minimal and flexible Node.js web application framework." },
  { term: "REST API", definition: "A way to structure web APIs using HTTP methods." },
  { term: "Route", definition: "Path to a resource defined by an endpoint in a web server." },
  { term: "MongoDB", definition: "NoSQL database using JSON-like documents." },
  { term: "SQL", definition: "Structured Query Language for managing relational databases." },
  { term: ".env", definition: "File used to store environment variables securely." },
  { term: "CORS", definition: "Cross-Origin Resource Sharing – controls access to resources from different domains." },
  { term: "Load Balancing", definition: "Evenly distributes traffic across multiple servers." },
  { term: "Nodemon", definition: "Tool that automatically restarts the server on file changes." },
  { term: "Bcrypt", definition: "Library to hash and salt passwords securely." },
  { term: "Helmet", definition: "Helps secure Express apps by setting various HTTP headers." },
  { term: "Rate Limiting", definition: "Restricts the number of requests a user can make in a given time." },
  { term: "API Key", definition: "Unique token to identify and authorize API usage." },
  { term: "WebSocket", definition: "Protocol for real-time two-way communication between client and server." },
  { term: "Proxy", definition: "Server that sits between client and actual server to modify requests or responses." },
  { term: "SSL/TLS", definition: "Protocols to encrypt communication over the web." },
  { term: "Logging", definition: "Recording information about server behavior or errors." },
  { term: "Database Index", definition: "Data structure that improves query performance in databases." },
  { term: "OAuth", definition: "Authorization protocol that allows third-party apps to access user resources without exposing credentials." },
{ term: "Axios", definition: "Promise-based HTTP client for making API requests in JavaScript." },
{ term: "Fetch API", definition: "Modern JavaScript API used to make HTTP requests." },
{ term: "Rate Limiter", definition: "Middleware to limit repeated requests to public APIs." },
{ term: "Redis", definition: "In-memory data store used for caching and session storage." },
{ term: "Cluster", definition: "Module in Node.js to utilize multiple CPU cores for performance." },
{ term: "CSRF", definition: "Cross-Site Request Forgery – attack that tricks the user into performing unwanted actions." },
{ term: "XSS", definition: "Cross-Site Scripting – injecting malicious scripts into web pages." },
{ term: "GraphQL", definition: "A query language for APIs that gives clients exactly the data they request." },
{ term: "API Gateway", definition: "Manages API traffic between client and backend services." },
{ term: "Docker", definition: "Platform for developing, shipping, and running applications in containers." },
{ term: "Container", definition: "Lightweight, standalone, executable software package." },
{ term: "CI/CD", definition: "Continuous Integration and Continuous Deployment – automates testing and deployment." },
{ term: "GitHub Actions", definition: "Automates workflows like testing and deployment from your GitHub repo." },
{ term: "PM2", definition: "Advanced, production process manager for Node.js applications." },
{ term: "Swagger", definition: "Tool for documenting and testing RESTful APIs." },
{ term: "Reverse Proxy", definition: "Forwards client requests to another server and returns the response." },
{ term: "Database Migration", definition: "Process of managing and versioning database schema changes." },
{ term: "Sequelize", definition: "ORM for Node.js that supports MySQL, PostgreSQL, and other SQL databases." },
{ term: "Mongoose", definition: "ODM library for MongoDB and Node.js." }

];

function Flashcards() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const navigate = useNavigate();

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="flashcards-page">
      <button className="back-home-button" onClick={() => navigate('/')}>← Back to Home</button>
      <h2 className="flashcards-title">Flashcards</h2>
      <div className="flashcard-grid">
        {flashcards.map((card, index) => (
          <div
            key={index}
            className={`flashcard ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">{card.term}</div>
              <div className="flashcard-back">{card.definition}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flashcards;
