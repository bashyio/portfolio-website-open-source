import PropTypes from 'prop-types';
import theme from '../../constants/theme';
import skillCloudStyles from './SkillCloud.styles';

function SkillCloud({ skillList, ...restProps }) {
  return (
    <div {...restProps} css={skillCloudStyles(theme)}>
      {skillList.map((skill, index) => (
        <span key={`skill-${index}`}>{skill} </span>
      ))}
    </div>
  );
}

SkillCloud.propTypes = {
  skillList: PropTypes.arrayOf(PropTypes.string),
};
SkillCloud.defaultProps = {
  skillList: [''],
};

export default SkillCloud;
