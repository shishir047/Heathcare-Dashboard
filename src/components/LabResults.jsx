// import React from "react";
// import DownloadIcon from "../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

// const LabResults = ({ labResults }) => {
//   return (
//     <div className="lab-results">
//       <h3>Lab Results</h3>
//       {labResults.length > 0 ? (
//         <ul className="lab-results-list">
//           {labResults.map((report, index) => (
//             <li key={index}>
//               {report}
//               <button className="download-btn">
//                 <img src={DownloadIcon} alt="Download" />
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="loading-text">No lab results available.</p>
//       )}
//     </div>
//   );
// };

// export default LabResults;


import React from "react";
import DownloadIcon from "../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
import CustomScrollbar from "./CustomScrollbar";

const LabResults = ({ labResults }) => {
  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <table className="lab-result-table">
        
        <CustomScrollbar height={200}>
          <tbody className="lab-result-tbody">
            {labResults.length > 0 ? (
              labResults.map((report, index) => (
                <tr key={index}>
                  <td>{report}</td>
                  <td><img src={DownloadIcon} alt="Download" /></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>No lab results available.</td>
              </tr>
            )}
          </tbody>
        </CustomScrollbar>
      </table>
    </div>
  );
};

export default LabResults;
