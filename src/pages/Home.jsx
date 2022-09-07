import NavMain from '../components/NavMain';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions';
import { history } from '../App'

function Home() {

  const dispatch = useDispatch()

  const status = useSelector(state => state.userReducer.status);
  const user = useSelector(state => state.userReducer.firstName);
  const id = useSelector(state => state.userReducer.id);
  const url = window.location.href
  const rmb = useSelector(state => state.showRememberMeReducer)

  if (url === `http://localhost:3000/user/${user}` && status === 200 && rmb === true) {
    const email = JSON.parse(localStorage.getItem('user').email)
    const password = JSON.parse(localStorage.getItem('user').password)
    dispatch(loginUser(email, password, rmb))
    history.push(`/user/${id}/${user}`)
  }

  useEffect(() => {
    document.title = "Argent Bank - Home Page"
  }, []);

  return (
    <>
      <NavMain />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <img
              src="http://127.0.0.1:3000/img/icon-chat.png"
              alt="Chat Icon"
              className="feature-icon" />
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img
              src="http://127.0.0.1:3000/img/icon-money.png"
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img
              src="http://127.0.0.1:3000/img/icon-security.png"
              alt="Chat Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Home;