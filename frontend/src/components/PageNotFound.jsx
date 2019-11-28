import React from 'react';
import { Link } from 'react-router-dom';
import Image404 from '../assets/Image404.gif';
class PageNotFound extends React.Component{
    render(){
        return <div>
            <img src={Image404}  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default PageNotFound;

//https://dribbble.com/shots/8283596-No-results
//https://medium.com/@NaveenDA/creating-a-custom-404-notfound-page-with-react-routers-56af9ad67807