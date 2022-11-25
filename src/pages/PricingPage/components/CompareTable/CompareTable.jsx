import './CompareTable.scss';
import check from '../../../../assets/pricing/desktop/check.svg';

const CompareTable = () => {
  return (
    <div className="compare-table">
      <h2 className="compare-table__title">Compare</h2>
      <table className="compare-table__content">
        <thead>
          <tr>
            <th>The Features</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unlimited Story Posting</td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
          <tr>
            <td>Unlimited Photo Upload</td>

            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
          <tr>
            <td>Embedding Custom Content</td>
            <td></td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
          <tr>
            <td>Customize Metadata</td>
            <td></td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
          <tr>
            <td>Advanced Metrics</td>
            <td></td>
            <td></td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
          <tr>
            <td>Photo Downloads</td>
            <td></td>
            <td></td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
          <tr>
            <td>Search Engine Indexing</td>
            <td></td>
            <td></td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
          <tr>
            <td>Custom Analytics</td>
            <td></td>
            <td></td>
            <td>
              <img className="compare-table__check" src={check} alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
