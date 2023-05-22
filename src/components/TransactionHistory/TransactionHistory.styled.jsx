import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  margin-bottom: 50px;

  text-align: center;

  border-collapse: collapse;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Th = styled.th`
  padding: 20px 10px;

  text-transform: uppercase;

  background-color: #ff69b4;
  color: #fff;

  :first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  :last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const Tr = styled.tr`
  text-transform: capitalize;

  background-color: #ffffff;

  :nth-of-type(2n) {
    background-color: #fff0f5;
  }

  :last-child {
    Td {
      :nth-last-of-type(3) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 5px;
      }
      :last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 0;
      }
    }
  }
`;

export const Td = styled.td`
  padding: 20px 10px;

  :first-of-type {
    border: 1px solid #d3d3d3;
    border-left: none;
  }

  :nth-of-type(2n) {
    border: 1px solid #d3d3d3;
  }

  :last-child {
    border: 1px solid #d3d3d3;
    border-right: none;
  }
`;
