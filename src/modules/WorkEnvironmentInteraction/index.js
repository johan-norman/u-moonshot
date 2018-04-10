import React from 'react'
import styled from 'styled-components';
import Charming from 'react-charming'
import { TimelineMax, TweenMax, Elastic } from 'gsap';
import { Flex, Box } from 'grid-styled'
import H2 from '../../components/H2'

const WorkPlaceTags = [
  {id: 0, title: "Jämlikhet", active: false},
  {id: 1, title: "Hög ljudnivå", active: false},
  {id: 2, title: "Toppstyrt", active: false},
  {id: 3, title: "Övertid", active: false},
  {id: 4, title: "Transparens", active: false},
  {id: 5, title: "Miljöansvar", active: false},
  {id: 6, title: "Stor arbetsplats", active: false},
  {id: 7, title: "Hierarkiskt", active: false},
  {id: 8, title: "Mycket möten", active: false},
  {id: 9, title: "Bra löneläge", active: false},
  {id: 10, title: "God stämning", active: false},
  {id: 11, title: "Stressigt", active: false},
  {id: 12, title: "Konfliktfylld", active: false},
  {id: 13, title: "Utbildningsmöjligheter", active: false},
  {id: 14, title: "Öppetlandskap", active: false},
  {id: 15, title: "Mycket resor", active: false},
  {id: 16, title: "Liten arbetsplats", active: false},
  {id: 17, title: "Riskfyllt", active: false},
  {id: 18, title: "Kollektivavtal", active: false},
  {id: 19, title: "Hög sjukfrånvaro", active: false},
  {id: 20, title: "Många konsulter", active: false},
  {id: 21, title: "Fritidsaktiviteter", active: false},
  {id: 22, title: "Svår att ta föräldraledigt", active: false},
  {id: 23, title: "Utomhusarbete", active: false},
  {id: 24, title: "Inkluderande", active: false},
  {id: 25, title: "Träningsmöjligheter", active: false},
  {id: 26, title: "Samhällsansvar", active: false}
];

const CardsData = [
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Löneförhandling", title: "Så lyckas du", imgsrc: "google.se"},
  {category: "Seminarium", title: "LinkedIn-granskning", imgsrc: "google.se"},
  {category: "Senaste på Unionen-bloggen", title: '"Så blir du redo för det nya arbetslivet"', imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering5", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"},
  {category: "Kurser & Aktiviteter", title: "Kompetensinventering", imgsrc: "google.se"}
];

const StyledTagItem = styled.button`
    background: transparent;
    padding: .4em .5em;
    margin: 0 .3em .3em 0;
    border: 1px solid #979797;
    font-size: 15px;
    color: #434343;
    outline: 0;
    cursor: pointer;
    opacity: .8;

    &:hover {
      border: 1px solid #000;
      opacity: 1;
    }


    &.active {
      background: #484848;
      color: #fff;
      border: 1px solid #484848;
      opacity: 1;
    }
`;

const Container = styled(Box)`
  max-width: 1248px;
  margin: 0 auto;

  .cards-container {
    margin-left: -8px;
  }
`

const StyledCard = styled.div`
  margin-bottom: 15px;

  .card-image {
    background: #EAEAEA;
    height: 320px;
  }

  .card-text-container {
    p {
      font-size: 15px;
      color: #9C9C9C;
      margin-bottom: 0;
    }
    h3 {
      font-size: 18px;
      color: #595959;
      letter-spacing: 0;
      margin: 0;
    }
  }

`;

const RecommendedTag = styled.p`
  color: #AAAAAA;
  font-size: 18px;
`;

const renderCards = function() {
    var groupSize = 4;
    var rows = CardsData.map(function(card, index) {
        // map content to html elements
        return(
          <Box width={300} mx={"8px"}>
            <StyledCard key={card.title + index}>
                <div className="card-image"></div>
                <div className="card-text-container">
                  <p className="category-text">{card.category}</p>
                  <h3>{card.title}</h3>
                </div>
            </StyledCard>
          </Box>
        )
    }).reduce(function(r, element, index) {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map(function(rowContent) {
        // surround every group with 'row'
        return <Flex>{rowContent}</Flex>;
    });
    return <div className="cards-container">{rows}</div>;
}

class WorkEnvironmentInteraction extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      tagsData: WorkPlaceTags
    };

  }

  componentDidMount() {
  }

  handleClick = index => {
    WorkPlaceTags[index].active = !WorkPlaceTags[index].active
    this.setState(prevState => ({
      tagsData: WorkPlaceTags
    }));
  }

  render() {

    const renderTags = this.state.tagsData.map((tag, index) => {
      return (
        <StyledTagItem key={tag.title + index} className={tag.active ? "active" : ""} onClick={this.handleClick.bind(this, index)}>
          {tag.title}
        </StyledTagItem>
      );
    })



    return(
      <Container>

        <Flex>
          <Box width={2/3}>
              <H2>Vad passar in på<br/>din arbetsplats?</H2>
          </Box>
          <Box width={1/3}>
            <div>
              <p>lorem ipsum</p>
            </div>
          </Box>
        </Flex>

        <Flex mb={20}>
          <Box width={1/1}>
            {renderTags}
          </Box>
        </Flex>

        <RecommendedTag>Rekommenderas för dig:</RecommendedTag>
        {renderCards()}

      </Container>
    )
  }
}

export default WorkEnvironmentInteraction;
