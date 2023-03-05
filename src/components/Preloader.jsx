
import React from 'react';
import { Blocks } from "react-loader-spinner"

import { Image } from '@chakra-ui/react';
export default (props) => {

    const { show } = props;

    return (
        <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
        />
    );
};
