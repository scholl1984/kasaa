import React from 'react';
import './tagNameStyle.css';

const TagName = (name) => (
    <button className="tagname">
        {`${name.name}`}
    </button>
 );

export default TagName;
