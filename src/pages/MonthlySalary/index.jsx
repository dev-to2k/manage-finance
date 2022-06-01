import Button from '@components/Button';
import Input from '@components/Input';
import React, { useState } from 'react';
import { randomId } from '@utils/functions';
import ListSalary from './components/ListSalary';
import Pagination from './components/Pagination';

function Deposit() {
  const [salary, setSalary] = useState({
    id: randomId(),
    money: '',
    createdAt: Date.now(),
  });

  const [listSalary, setListSalary] = useState([]);

  const [page, setPage] = useState({
    currentPage: 1,
    salariesPerPage: 10,
  });

  const { currentPage, salariesPerPage } = page;

  // Logic for displaying orders
  const indexOfLastSalary = currentPage * salariesPerPage;
  const indexOfFirstSalary = indexOfLastSalary - salariesPerPage;

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(listSalary.length / salariesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const currentSalaries = listSalary?.slice(
    indexOfFirstSalary,
    indexOfLastSalary,
  );

  const clearText = () => {
    setSalary({
      ...salary,
      money: '',
    });
  };

  const handleChange = ({ value }) => {
    setSalary({
      ...salary,
      money: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListSalary([...listSalary, salary]);
    clearText();
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setPage({
        ...page,
        currentPage: currentPage - 1,
      });
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setPage({
        ...page,
        currentPage: currentPage + 1,
      });
    }
  };

  return (
    <div className="monthly-salary p-4">
      <h1 className="mb-4 text-4xl font-bold text-indigo-600">Manage Salary</h1>
      <div className="mb-4 flex items-center justify-between">
        <form
          onSubmit={handleSubmit}
          className="flex w-1/2 items-center space-x-4"
        >
          <Input
            type="text"
            value={salary.money}
            onChange={(e) => handleChange(e.target)}
            placeholder="Enter salary"
          />
          <Button type="submit" className="btn btn-primary">
            Add
          </Button>
        </form>
        <Pagination
          onHandlePrev={handlePrev}
          onHandleNext={handleNext}
          currentPage={currentPage}
        />
      </div>
      <ListSalary listSalary={currentSalaries} />
    </div>
  );
}

export default Deposit;
