import React, {Component} from 'react';
import { Link } from "react-router-dom";
import DelayedComponent from '../../components/DelayedComponent';
import StyledCard from '../../components/StyledCard';
import { Flex, Box } from 'grid-styled'
import orderBy from 'lodash/orderBy'

export class RecommendationCards extends Component {
	static defaultProps = {
		columns: 4,
		rows: 2,
		sortBy: 'environment'
	}
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(id) {
		this.props.onCardClick(id);
	}
	renderRows() {
		const columnsCount = this.props.columns;
		const totalCards = columnsCount * this.props.rows;
		const CardsData = this.props.data.cards_data;
		const UserData = Object.assign({}, this.props.data.user_data.elected);
		const UserCareerData = Object.assign({}, this.props.data.user_data.career);
		const tags =  this.props.data.user_data.work_environment.tags;
		const sortBy = this.props.sortBy;
		let SelectedTags = tags.map(tag => {
		  if (tag.active) return tag.title;
		});
		let CardsDataScored = CardsData.map(function(card) {
		  let score = 0;
		  if (sortBy === 'career' || sortBy === 'all') {
		  	//if (card.work_tags_primary.includes(UserCareerData.job_title)) score+=40;
		  	//if (card.work_tags_secondary.includes(UserCareerData.job_title)) score+=20;
		  	score += card.career_score;
		  }
		  if (sortBy === 'environment' || sortBy === 'all') {
			card.tags.forEach(tag => {
				if (SelectedTags.includes(tag)) score+=10;
			})
		  }
		  if (sortBy === 'elected' || sortBy === 'all') {
			score += UserData.work_environment_value * card.scores.work_environment_value;
			score += UserData.equality_value * card.scores.equality_value;
			score += UserData.workplace_interest_value * card.scores.workplace_interest_value;
			score += UserData.impact_value * card.scores.impact_value;
			score += UserData.safe_workspace_value * card.scores.safe_workspace_value;
		  }
		  if (sortBy === 'click') {
			score += card.click_count;
		  }
		  //console.log(score);
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
		            <Link to={`/articles/${card.id}`}  onClick={() => this.handleClick(card.id)} className="card-image" style={ { backgroundImage: `url(${ card.imgsrc })` } }></Link>
		            <a className="card-text-container" >
		              <p className="category-text">{card.category}</p>
		              <h3>{card.title}</h3>
		            </a>
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

