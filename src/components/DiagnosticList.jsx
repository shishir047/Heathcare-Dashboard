import React from "react";
import CustomScrollbar from "./CustomScrollbar";

const DiagnosticList = ({ diagnostics }) => {
  return (
    <div className="diagnostic-list-container">
      <h2>Diagnostic List</h2>
      <table className="diagnostic-table">
        <div className="table-header">
          <div>Problem/Diagnosis</div>
          <div>Description</div>
          <div>Status</div>
        </div>
        <CustomScrollbar height={150}>
          <tbody>
            {diagnostics.length > 0 ? (
              diagnostics.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>No diagnostic data available</td>
              </tr>
            )}
          </tbody>
        </CustomScrollbar>
      </table>
    </div>
  );
};

export default DiagnosticList;