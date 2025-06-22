
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Engineering Fundamentals: Server Side</h1>
      <p>Explore the core concepts of server-side technologies</p>
      <div className="nav-links">
        
        <Link to="/flashcards" className="nav-btn">Flashcards</Link>
        <Link to="/fun" className="nav-btn">Fun Corner 🤡</Link>
      </div>
    </header>
  );
}

export default Header;
