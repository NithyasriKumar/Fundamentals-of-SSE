import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ConceptCard from './components/ConceptCard';
import Footer from './components/Footer';
import TopicDetail from './pages/TopicDetail';
import Flashcards from './pages/Flashcards';
import FunCorner from './pages/FunCorner';


const concepts = [
  {
    id: "http-methods",
    title: "HTTP Methods",
    description: "Understand GET, POST, PUT, DELETE and how they interact with the server.",
    content: `HTTP methods are verbs used to indicate the desired action on a given resource in a RESTful API.

GET – Retrieve data from a server
POST – Send data to the server (usually to create)
PUT – Update existing data
DELETE – Remove data from the server
PATCH – Partially update a resource

Each method is stateless — every request is independent.`,
    image: "https://cdn-icons-png.flaticon.com/512/5956/5956595.png"
  },
  {
    id: "rest-apis",
    title: "REST APIs",
    description: "Learn how RESTful APIs work and how endpoints are structured.",
    content: `REST (Representational State Transfer) is an architecture style for designing APIs.

CLIENT-SERVER MODEL
STATELESS COMMUNICATION
RESOURCE-BASED URLS (e.g., /users/123)
RETURNS JSON OR XML

Great for scalable, modular APIs.`,
    image: "https://cdn-icons-png.flaticon.com/512/2712/2712175.png"
  },
  {
    id: "authentication",
    title: "Authentication",
    description: "Explore login systems using sessions or tokens (JWT).",
    content: `Authentication verifies user identity.

COMMON METHODS:
- Session-based (server memory/DB)
- Token-based (JWT)
- OAuth (Google, GitHub)

Ensure secure login, token storage, and proper token expiry handling.`,
    image: "https://cdn-icons-png.flaticon.com/512/484/484167.png"
  },
  {
    id: "database-connection",
    title: "Database Connection",
    description: "See how servers connect and interact with databases like MySQL and MongoDB.",
    content: `Servers use drivers or ORMs to interact with databases.

SQL: MySQL, PostgreSQL
NOSQL: MongoDB, Firebase

ORMS:
- Sequelize (SQL)
- Mongoose (MongoDB)`,
    image: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png"
  },
  {
    id: "middleware",
    title: "Middleware",
    description: "Logic that runs before the request reaches your route handlers.",
    content: `Middleware functions intercept and process HTTP requests.

USES:
- Auth checks
- Input validation
- Logging
- Error handling

EXAMPLE IN EXPRESS:
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});`,
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
  },
  {
    id: "routing",
    title: "Routing",
    description: "Control how URLs map to server actions.",
    content: `Routes map URLs to backend logic.

STATIC ROUTES: /about, /contact
DYNAMIC ROUTES: /user/:id

IN EXPRESS:
app.get('/profile', handler);
app.post('/login', handler);`,
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
  },
  {
    id: "sessions-cookies",
    title: "Sessions & Cookies",
    description: "Maintaining user login sessions across pages.",
    content: `Cookies store small data in the browser. Sessions store data on the server.

COOKIES: User preferences, tokens
SESSIONS: User login info with session ID

Use express-session and cookie-parser.`,
    image: "https://cdn-icons-png.flaticon.com/512/1086/1086933.png"
  },
  {
    id: "server-rendering",
    title: "Server-Side Rendering (SSR)",
    description: "Improves performance and SEO by rendering on the server.",
    content: `SSR generates HTML on the server.

BENEFITS:
- Faster load time
- SEO optimized

TOOLS:
- Next.js (React)
- Nuxt.js (Vue)`,
    image: "https://cdn-icons-png.flaticon.com/512/906/906334.png"
  },
  {
    id: "load-balancing",
    title: "Load Balancing",
    description: "Distribute incoming traffic across multiple servers.",
    content: `Improves scalability and prevents overload.

TOOLS:
- NGINX
- HAProxy
- AWS ELB

STRATEGIES: Round-robin, Least Connections, IP-hash`,
    image: "https://cdn-icons-png.flaticon.com/512/1865/1865279.png"
  },
  {
    id: "caching",
    title: "Caching",
    description: "Store responses to reduce load and speed up delivery.",
    content: `Caching reduces server load by storing frequent responses.

TYPES:
- Browser
- CDN
- Server (Redis)

Set cache-control headers, use Redis/node-cache for backend.`,
    image: "https://cdn-icons-png.flaticon.com/512/4151/4151405.png"
  },
  {
    id: "api-rate-limiting",
    title: "API Rate Limiting",
    description: "Prevent abuse by controlling how often clients can call your APIs.",
    content: `Limits API requests to prevent abuse.

USE CASE: 100 requests per IP per minute
LIBRARY: express-rate-limit

app.use(rateLimit({ max: 100, windowMs: 60000 }))`,
    image: "https://cdn-icons-png.flaticon.com/512/942/942748.png"
  },
  {
    id: "websockets",
    title: "WebSockets",
    description: "Enable real-time communication like chat apps and live dashboards.",
    content: `Enables persistent, two-way communication.

USE CASES:
- Chat
- Live dashboards
- Online games

LIBRARIES: socket.io, ws`,
    image: "https://cdn-icons-png.flaticon.com/512/2521/2521880.png"
  },
  {
    id: "environment-config",
    title: "Environment Configuration",
    description: "Use .env files to handle secrets and server-specific variables.",
    content: `Store secrets/config outside your code.

IN .ENV:
DB_HOST=localhost
SECRET_KEY=abcd1234

LOAD: require('dotenv').config();`,
    image: "https://cdn-icons-png.flaticon.com/512/2983/2983667.png"
  },
  {
    id: "logging-monitoring",
    title: "Logging & Monitoring",
    description: "Track server activity and errors for debugging and analysis.",
    content: `Logging helps debugging. Monitoring tracks health.

LOGGING TOOLS:
- winston
- morgan

MONITORING:
- New Relic
- Datadog
- Prometheus`,
    image: "https://cdn-icons-png.flaticon.com/512/854/854878.png"
  },
  {
    id: "error-handling",
    title: "Error Handling",
    description: "Handle server failures and unexpected issues gracefully.",
    content: `Handle unexpected errors gracefully.

EXAMPLE:
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

Use try-catch, log errors, and never expose internal messages to users.`,
    image: "https://cdn-icons-png.flaticon.com/512/564/564619.png"
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConcepts = concepts.filter(concept =>
    concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <input
              type="text"
              placeholder="Search server-side topics..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="card-container">
              {filteredConcepts.length > 0 ? (
                filteredConcepts.map(c => (
                  <ConceptCard key={c.id} topic={c} />
                ))
              ) : (
                <p className="no-results">No topics found.</p>
              )}
            </div>
            <Footer />
          </>
        } />
        <Route path="/concept/:id" element={<TopicDetail concepts={concepts} />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/fun" element={<FunCorner />} />

      </Routes>
    </div>
  );
}

export default App;
