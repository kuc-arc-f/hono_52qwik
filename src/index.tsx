import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
//
app.get('*', renderer)
//
import About from './pages/About';
import Top from './pages/App';
import Test from './pages/Test';
//
function App(){
  return(<div>func:App!</div>);
}
//
app.get('/', (c) => {
  return c.render(<Top />)
})
app.get('/test', (c) => {
  return c.html(<Test />)
})
app.get('/about', (c) => {
  return c.html(<About />)
})

export default app
