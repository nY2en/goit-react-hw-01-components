import styled from '@emotion/styled';

export const CardContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;

  text-align: center;

  background-color: #ffffff;

  border-radius: 8px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;

  border-radius: 50%;
`;

export const DescriptionContainer = styled.div`
  padding: 32px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 500;

  color: black;
`;

export const Paragraph = styled.p`
  margin-top: 8px;

  font-size: 14px;

  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;

  background-color: #dcdcdc;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;

  font-size: 16px;

  color: grey;

  border-top: 1px solid #d3d3d3;

  :not(:last-child) {
    border-right: 1px solid #d3d3d3;
  }
`;

export const StatsValue = styled.span`
  margin-top: 4px;

  font-weight: 700;

  color: black;
`;
