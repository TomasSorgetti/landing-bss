import React from 'react';
import { useParams } from 'react-router-dom';

const RouteParamsProvider = (props) => {
    const params = useParams();
    return <>{React.cloneElement(props.children, { params })}</>;
};

export default RouteParamsProvider;