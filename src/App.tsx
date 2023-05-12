import { useContext, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Store } from './Store';

function App() {
  const {
    state: { mode },
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
              <a href="/cart" className="nav-link">
                cart
              </a>
              <a href="/signin" className="nav-link">
                sign in
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
