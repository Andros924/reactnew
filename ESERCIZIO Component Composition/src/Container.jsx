import React, { useState } from 'react';

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`container ${collapsed ? 'collapsed' : ''}`}>
      <h3 onClick={handleClick}>{title}</h3>
      {!collapsed && <div className="content">{children}</div>}
    </div>
  );
};

export default Container;


const styles = {
    container: {
      backgroundColor: 'white',
      border: '1px solid red',
      padding: '1rem',
      marginBottom: '1rem',
    },
    content: {
      display: 'none',
    },
    '.container.collapsed .content': {
      display: 'block',
    },
  };