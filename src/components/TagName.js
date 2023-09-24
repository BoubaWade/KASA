import React from 'react';

const TagName = ({tag}) => {
    return (
        <li className="tag" key={tag}>{tag}</li>
    );
};

export default TagName;