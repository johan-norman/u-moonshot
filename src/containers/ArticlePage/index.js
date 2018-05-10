import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderImage from '../../modules/HeaderImage'
import NewMemberModule from '../../modules/NewMemberModule'
import CrossSiteLinks from '../../modules/CrossSiteLinksModule'
import CardSlider from '../../modules/CardSlider'
import FullSizeSlider from '../../modules/FullSizeSlider'
import RecommendationCards from '../../modules/RecommendationCards'
import PageTitle from '../../components/PageTitle'
import H2 from '../../components/H2'
import Container from '../../components/Container'
import { Flex, Box } from 'grid-styled'
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

import './style.css'

const ArticleSingle = (props) => {
	const id = props.match.match.params.articleId;
	const data = props.data;
	const selected = data.find(function (selected) { return selected.id == id; });
	const video = selected.video ? <Player
      playsInline

      src={selected.video}
    /> : null;
	return (
	  <div className="article-content">
	    <H2>{selected.title}</H2>
	    <Flex pl={[0, 40, 100]} flexDirection={['column', 'unset']}>
			<Box width={[1, 4/5, 7/10]}>
			    {video}
			    <div className="content" dangerouslySetInnerHTML={{__html: selected.content}}>
			    </div>
	    	</Box>
	    </Flex>
	  </div>
	);
}

const ArticlePage = (props) => (
	<div>
		<HeaderImage img='/x0279.jpg'>
	        <Container>
	          <PageTitle pageNumber="">Articles</PageTitle>
	          <Route path={`${props.match.url}/:articleId`} render={(match) => (
	                    <ArticleSingle
	                        data={props.articles_data}
	                        match={match}
	                    />
	            )} />
	          <RecommendationCards rows={1} columns={4} data={props.data} onCardClick={props.onCardClick}></RecommendationCards>
	        </Container>
      </HeaderImage>
      <NewMemberModule title="Bli medlem och skapa förändring" subtext="Tar du steget till att bli förtroendevald får du coaching, verktyg och utbildningar. Bli medlem idag så bjuder på avgiften i tre månader." />   
  		
      
        <CrossSiteLinks />
  </div>
);

export default ArticlePage;
