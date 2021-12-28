import React from 'react';
import {Link as RouterLink} from 'react-router-dom';


const NotFound = () => (
    <div>
        <h3>404! - Not Found</h3>
        <div><RouterLink to="/">Go Home</RouterLink></div>
    </div>
);

export default NotFound