import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  border-radius: 12px;
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  overflow-x: auto;

  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    border: none;
    margin: -1px;
  }

  th,
  td {
    max-width: 100%;
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid var(--primary-500);
    border: 1px solid var(--primary-500);
  }

  th {
    background-color: var(--primary-100);
  }

  td {
    background-color: var(--background-primary-color);
  }

  .tfoot-tr {
    background-color: var(--primary-100);
  }

  @media (max-width: 768px) {
    table {
      font-size: 0.75rem;
    }
    th,
    td {
      min-width: 100px;
      padding: 8px;
    }
  }
`;

export default Wrapper;
