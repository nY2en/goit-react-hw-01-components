import styled from '@emotion/styled';

export const Title = styled.h2`
  padding: 24px 0;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;

  background-color: #fff;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const StatsList = styled.ul`
  display: flex;
  margin-bottom: 50px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;

  font-size: 16px;

  color: #fff;

  :nth-of-type(1) {
    border-bottom-left-radius: 5px;
  }

  :last-child {
    border-bottom-right-radius: 5px;
  }
`;

export const FileType = styled.span`
  margin-bottom: 8px;

  font-size: 12px;
`;
