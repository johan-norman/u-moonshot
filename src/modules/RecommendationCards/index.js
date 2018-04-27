import React, {Component} from 'react';
import DelayedComponent from '../../components/DelayedComponent';
import StyledCard from '../../components/StyledCard';
import { Flex, Box } from 'grid-styled'
import orderBy from 'lodash/orderBy'

export class RecommendationCards extends Component {
	static defaultProps = {
		columns: 4,
		rows: 2,
		sortBy: 'work_environment'
	}
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(id) {
		console.log(id);
	}
	renderRows() {
		const columnsCount = this.props.columns;
		const totalCards = columnsCount * this.props.rows;
		const CardsData = this.props.data.cards_data;
		const tags =  this.props.data.user_data.work_environment.tags;
		let SelectedTags = tags.map(tag => {
		  if (tag.active) return tag.title;
		});
		let CardsDataScored = CardsData.map(function(card) {
		  let score = 0;
		  card.tags.forEach(tag => {
		    if (SelectedTags.includes(tag)) score++;
		  })
		  let ScoredCard = Object.assign({}, card);
		  ScoredCard.score = score;
		  return ScoredCard;
		});
		CardsDataScored = orderBy(CardsDataScored, 'score', 'desc')
		let waitCounter = 1;
		const rows = CardsDataScored.map((card, index) => {
		    waitCounter++;
		    // map content to html elements
		    if (index < totalCards) {
		    return(
		      <DelayedComponent wait={waitCounter*110} key={card.title + index}>
		      <Box width={300} mx={"8px"} className="show animated-box">
		        <StyledCard key={card.title + index}>
		            <div onClick={() => this.handleClick(card.id)} className="card-image" style={ { backgroundImage: `url(${ card.imgsrc })` } }></div>
		            <div className="card-text-container">
		              <p className="category-text">{card.category}</p>
		              <h3>{card.title}</h3>
		            </div>
		        </StyledCard>
		      </Box>
		      </DelayedComponent>
		    )
		    }
		}).reduce(function(r, element, index) {
		    // create element groups with size 3, result looks like:
		    // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
		    index % columnsCount === 0 && r.push([]);
		    r[r.length - 1].push(element);
		    return r;
		}, []).map(function(rowContent, index) {
		    // surround every group with 'row'
		    return <Flex key={index}>{rowContent}</Flex>;
		});
		return ( <div className="cards-container">{rows}</div> );
	}
	render() {
		return (
			<div>
			{ this.renderRows() }
			</div>
		);
	}
}

export default RecommendationCards;

