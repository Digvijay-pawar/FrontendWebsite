import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function MyComponent() {
    return (
        <div className="d-flex justify-content-center ">
            <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden"></span>
            </Spinner>
        </div>
    );
}

export default MyComponent;
