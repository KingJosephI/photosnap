import './MobileTable.scss';
import check from '../../../../assets/pricing/desktop/check.svg';

const MobileTable = () => {
  return (
    <table className="mobile-table">
      <thead>
        <tr>
          <th className="mobile-table__title" colSpan="3">
            THE FEATURES
          </th>
        </tr>
      </thead>
      <tbody>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td>
              <img src={check} alt="check" />
            </td>
            <td>
              <img src={check} alt="check" />
            </td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td>
              <img src={check} alt="check" />
            </td>
            <td>
              <img src={check} alt="check" />
            </td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td></td>
            <td>
              <img src={check} alt="check" />
            </td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td></td>
            <td>
              <img src={check} alt="check" />
            </td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
        <div>
          <tr>
            <th className="mobile-table__title" colSpan="3">
              UNLIMITED STORY POSTING
            </th>
          </tr>
          <tr>
            <th className="mobile-table__category">Basic</th>
            <th className="mobile-table__category">Pro</th>
            <th className="mobile-table__category">Business</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <img src={check} alt="check" />
            </td>
          </tr>
        </div>
      </tbody>
    </table>
  );
};

export default MobileTable;
