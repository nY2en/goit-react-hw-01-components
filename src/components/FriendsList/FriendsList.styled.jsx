import styled from '@emotion/styled';

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-right: 4px;

  background-color: green;

  border-radius: 50%;
`;

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 92px 4px 8px;
  margin-bottom: 50px;

  font-size: 16px;
  font-weight: 500;

  background-color: #fff;

  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Img = styled.img`
  margin-right: 4px;
`;
