import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function ListSalary({ listSalary }) {
  const headers = ['#', 'Salary', 'Date'];

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listSalary.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                {parseInt(item.money, 10).toLocaleString('it-IT', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </td>
              <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {listSalary.length === 0 && (
        <div className="no-data">
          <img
            src="https://cdn.dribbble.com/users/634336/screenshots/2246883/media/7beefb96feac302ee313cf510fca4577.png"
            className="mx-auto mt-8 w-96 object-cover"
            alt="no data"
          />
        </div>
      )}
    </div>
  );
}

ListSalary.propTypes = {
  listSalary: PropTypes.arrayOf(
    PropTypes.shape({
      money: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ListSalary;
