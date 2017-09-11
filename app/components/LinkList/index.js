/**
*
* LinkList
*
*/

import React from 'react';

import styles from './styles.css';

function LinkList({ links }) {
  const linkNodes = links.map(l =>
    <div key={l.id}>
      {l.url} - {l.description}
    </div>
  );

  return (
    <div className={styles.linkList}>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      topicName: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired
    })
  )
};

export default LinkList;
