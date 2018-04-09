import React from 'react'
import styled from 'styled-components';
import H2 from '../../components/H2'
import H3 from '../../components/H3'
import ChapterNumberLine from '../../components/ChapterNumberLine'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import Card from '../../components/Card'

const ArticleCardsContainer = styled.section`
  position: relative;
  z-index: 5;
`;

class ArticleSection extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="article-section-container">

        <ArticleCardsContainer>
          <Flex mt={110}>
            <Box width={1/3} m={0}>
              <Card cardType="ArticleCard" title="Hej" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/3} m={0}>
              <Card cardType="ArticleCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
            <Box width={1/3} m={0}>
              <Card cardType="ArticleCard" title="Förtroendevald" bodytext="lorem ipsum" />
            </Box>
          </Flex>
        </ArticleCardsContainer>

      </div>
    )
  }
}

export default ArticleSection;
