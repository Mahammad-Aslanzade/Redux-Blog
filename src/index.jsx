import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/style.scss'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addBlog, deleteBlog, editBlog } from './action/blogAction';
import BlogDetails from './pages/BlogDetails';
import AdminPass from './auth/Login';
import AdminPanel from './admin/AdminPanel';
import EditElement from './admin/EditElement';
import AddElement from './admin/AddElement';


const store = configureStore();




store.subscribe(() => {
  console.log(store.getState())
})

const blog1 = store.dispatch(
  addBlog({
    title: "WHITNEY MUSEUM OF AMERICAN ART",
    desc: "This exhibition brings together paintings by five artists—Nina Chanel Abney, Mathew Cerletty, Jamian Juliano-Villani, Caitlin Keogh, and Orion Martin. Highlighting an engagement with representation among some emerging artists, the works in this group conjure a sense of space that is dimensionless and airless, like the illusionistic scenery flats used on stage and movie sets.Each of these artists fills their compositions with objects, bodies and places that are based on reality, yet are exaggerated, recontextualized, simplified or flattened. The individual works are imbued with both the uncertainty of our sociopolitical moment as well as the seductive quality of consumerism and physical attraction. The paintings in Flatlandsinvite the viewer to reflect on this ever-present polarity and ambivalence of contemporary life.Flatlands is organized by assistant curators Laura Phipps and Elisabeth Sherman.The exhibition will be on view through April 17, 2016 in the John R. Eckel, Jr. Foundation Gallery, on the Museum’s first floor, which is accessible to the public free-of-charge.",
    img: "http://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/04/blog-1.jpg",
  }));
const blog2 = store.dispatch(
  addBlog({
    title: "POST FORMAT GALLERY",
    img: "http://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/04/blog-2.jpg",
    desc: "Aliquam vitae fermentum ante. Nam dapibus odio ut aliquam dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat elementum diam ac sagittis. Phasellus gravida sem elit, at porttitor felis gravida a. Curabitur sed blandit diam."
  }));

store.dispatch(
  addBlog({
    title: "POST FORMAT AUDIO",
    img: "http://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/04/blog-3.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa eget ante tincidunt vestibulum. Aenean vel metus magna. Mauris nec velit tortor, quis euismod lectus. Nulla et arcu libero. Cras pretium, ipsum quis adipiscing condimentum, turpis urna lobortis neque, nec dignissim ipsum mauris sed nunc."
  })
)
store.dispatch(
  addBlog({
    title: "Post Format Video",
    img: "http://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/04/blog-4.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa eget ante tincidunt vestibulum. Aenean vel metus magna. Mauris nec velit tortor, quis euismod lectus. Nulla et arcu libero. Cras pretium, ipsum quis adipiscing condimentum, turpis urna lobortis neque, nec dignissim ipsum mauris sed nunc."
  })
)

store.dispatch(
  addBlog({
    title: "Post Format Video",
    img: "http://wpbingosite.com/wordpress/oritina/wp-content/uploads/2017/04/blog-4.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa eget ante tincidunt vestibulum. Aenean vel metus magna. Mauris nec velit tortor, quis euismod lectus. Nulla et arcu libero. Cras pretium, ipsum quis adipiscing condimentum, turpis urna lobortis neque, nec dignissim ipsum mauris sed nunc."
  })
) 





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/blog/:url' element={<BlogDetails />}></Route>
            <Route path='/adminAuth' element={<AdminPass />}></Route>            
            <Route path='/adminPanel' element={<AdminPanel />}></Route>            
            <Route path='/adminPanel/addElement' element={<AddElement />}></Route>            
            <Route path='/adminPanel/edit/:id'   element={<EditElement   />}></Route>            

          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  </React.StrictMode>
);

