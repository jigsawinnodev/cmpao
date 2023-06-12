import React, { useState } from "react";

const TreeTable = () => {
    const renderTreeNodes = (nodes) => {
        return Object.values(nodes).map((node) => (
          <tr key={node.data.org_id}>
            <td>{node.data.org_id}</td>
            <td>{node.data.org_name}</td>
            <td>{node.data.org_active}</td>
            <td>{node.data.org_parent || '-'}</td>
          </tr>
          {node.children && renderTreeNodes(node.children)}
        ));
      };
  
  const [treeData, setTreeData] = useState({
    23: {
      // Provided data here
    },
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Organization ID</th>
          <th>Organization Name</th>
          <th>Active</th>
          <th>Parent</th>
        </tr>
      </thead>
      <tbody>
        {/* Render the root level data */}
        {renderTreeNodes(treeData[23].children)}
      </tbody>
    </table>
  );
};


export default TreeTable;
