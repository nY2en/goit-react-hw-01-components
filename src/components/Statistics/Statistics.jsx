import PropTypes from 'prop-types';
import {
  Title,
  StatsList,
  StatsItem,
  FileType,
} from 'components/Statistics/Statistics.styled';
import { getRandomHexColor } from 'utils/randomColor';
export const Statistics = ({ title, statistics }) => {
  return (
    <section>
      <Title>{title}</Title>
      <StatsList>
        {statistics.map(({ label, percentage, id }) => (
          <StatsItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <FileType>{label}</FileType>
            <span>{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
