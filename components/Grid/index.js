import { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Aos from 'aos';
import { Section, Container, Col, Row } from '../Layout';
import theme from '../../constants/theme';
import { fileBaseUrl } from '../../constants/defaultValues';
import { preLoadImage, tooSlowFallback } from '../../helpers';
import Card from './Card';
import LoadingScreen from '../LoadingScreen';
import { filterStyles, gridStyles } from './Grid.styles';

function Grid({ featured, filters, data, ...restProps }) {
  const [filter, setFilter] = useState('all');
  const [imagesReady, setImagesReady] = useState(false);

  const finishLoading = () => {
    setImagesReady(true);
    setTimeout(() => {
      Aos.refresh();
    }, 200);
  };

  const startLoadImage = () => {
    tooSlowFallback(setImagesReady, 1000);
    const filteredData = featured ? data.filter((d) => d.featured) : data;

    Promise.all(
      filteredData.map((p) => preLoadImage(fileBaseUrl + p.thumb.url))
    )
      .then(() => finishLoading())
      .catch(() => finishLoading());
  };

  useEffect(() => {
    startLoadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [filter]);

  return !imagesReady ? (
    <LoadingScreen />
  ) : (
    <Section {...restProps}>
      <Container data-aos="fade-up">
        {filters.length > 0 && (
          <Row>
            <Col>
              <div className="filter-list" css={filterStyles(theme)}>
                {filters.map((f) => (
                  <button
                    type="button"
                    onClick={() => setFilter(f.type)}
                    key={f.type}
                    className={filter === f.type ? 'active' : ''}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        )}
        {data.length && (
          <Row>
            <div className="grid-holder" css={gridStyles(theme)}>
              {data.map((project) => (
                <Fragment key={project.viewOrder}>
                  {(!featured || featured === project.featured) && (
                    <Card
                      visible={filter === 'all' || project.type === filter}
                      data={{
                        title: project.title,
                        featured: project.featured,
                        type: project.type,
                        tools: project.tools,
                        viewOrder: project.viewOrder,
                        thumb: project.thumb,
                        uri: project.uri,
                      }}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </Row>
        )}
      </Container>
    </Section>
  );
}

Grid.propTypes = {
  featured: PropTypes.bool,
  filters: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
};
Grid.defaultProps = {
  featured: false,
  filters: [],
  data: [],
};

export default Grid;
