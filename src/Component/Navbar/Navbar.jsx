import '../../App.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link class="nav-link" to="/counter">Counter</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Form</Link>
        </li>
        </ul>
     
    </div>
  </div>
</nav>

      </div>
  );
}

export default Navbar;
