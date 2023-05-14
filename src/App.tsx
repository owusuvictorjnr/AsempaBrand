import { useContext, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Store } from './Store';

function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' });
  };

  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand>asempaBrand</Navbar.Brand>
            </Container>

            <Nav>
              <Button variant={mode} onClick={switchModeHandler}>
                <i className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'} />
              </Button>

              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              <a href="/signin" className="nav-link">
                Sign in
              </a>
            </Nav>
          </Navbar>
        </header>
        <Container className="mt-3">
          <Outlet />
        </Container>
        <footer>
          <div className="text-center">all right reserved</div>
        </footer>
      </div>
    </>
  );
}

export default App;
