import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/MemberShip';

const Membership = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderPagination = () => (
    <tr className="tfoot-tr">
      <td colSpan={5}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <FaChevronLeft
              onClick={() => handleChangePage(page - 1)}
              style={{ cursor: 'pointer' }}
            />
            Page {page + 1}
            <FaChevronRight
              onClick={() => handleChangePage(page + 1)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div>
            Rows per page:{' '}
            <select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              style={{ marginLeft: '8px' }}
            >
              {[5, 10, 25, 'All'].map((rows) => (
                <option key={rows} value={rows}>
                  {rows}
                </option>
              ))}
            </select>
          </div>
        </div>
      </td>
    </tr>
  );

  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Joined Date</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td style={{ width: 120 }} align="right">
                {row.name}
              </td>
              <td style={{ width: 120, textAlign: 'center' }} align="right">
                {row.gender}
              </td>
              <td style={{ width: 120 }} align="right">
                {row.email}
              </td>
              <td style={{ width: 120 }} align="right">
                {row.joinedDate}
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 34 * emptyRows }}>
              <td colSpan={5} aria-hidden />
            </tr>
          )}
        </tbody>
        <tfoot>{renderPagination()}</tfoot>
      </table>
    </Wrapper>
  );
};

function createData(id, name, gender, email, joinedDate) {
  return { id, name, gender, email, joinedDate };
}

const rows = [
  createData(1, 'John Doe', 'M', 'john@example.com', '2022-01-01'),
  createData(2, 'Jane Smith', 'M', 'jane@example.com', '2022-02-15'),
  createData(3, 'Bob Johnson', 'M', 'bob@example.com', '2022-03-10'),
  createData(4, 'Alice Williams', 'M', 'alice@example.com', '2022-04-20'),
  createData(5, 'Charlie Brown', 'M', 'charlie@example.com', '2022-05-05'),
  createData(6, 'Diana Ross', 'M', 'diana@example.com', '2022-06-18'),
  createData(7, 'Edward Miller', 'M', 'edward@example.com', '2022-07-30'),
  createData(8, 'Fiona Taylor', 'M', 'fiona@example.com', '2022-08-12'),
  createData(9, 'George Davis', 'M', 'george@example.com', '2022-09-25'),
  createData(10, 'Helen Wilson', 'M', 'helen@example.com', '2022-10-08'),
  createData(11, 'Ivan Martin', 'M', 'ivan@example.com', '2022-11-14'),
  createData(12, 'Jessica Brown', 'M', 'jessica@example.com', '2022-12-22'),
  createData(13, 'Kevin Anderson', 'M', 'kevin@example.com', '2023-01-07'),
].sort((a, b) => (a.email < b.email ? -1 : 1));

export default Membership;
