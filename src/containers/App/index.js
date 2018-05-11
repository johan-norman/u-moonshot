import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import merge from "lodash/merge";
import find from 'lodash/find'

import HomePage from "../HomePage";
import CareerPage from "../CareerPage";
import WorkEnvironmentPage from "../WorkEnvironmentPage";
import ElectedPage from "../ElectedPage";
import BecomeMember from "../BecomeMemberPage";
import Profile from "../ProfilePage";
import ArticlePage from "../ArticlePage";

import PageHeaderModule from "../../modules/PageHeaderModule";
import Footer from '../../modules/Footer'

import State from "../../lib/DataHandlers";
import { default_data } from "../../lib/default_data";
import { cards_data } from "../../lib/default_data";
import { articles_data } from "../../lib/default_data";

import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFinishedCareerEnter: false 
        };
        this.handleSelectTag = tag => {
            if (!this.state.selectedTags.includes(tag)) {
                this.setState({
                    selectedTags: [...this.state.selectedTags, tag]
                });
            } else {
                let index = this.state.selectedTags.indexOf(tag);
                this.setState(prevState => {
                    let newData = prevState.selectedTags.slice();
                    newData.splice(index, 1);
                    return { selectedTags: newData };
                });
            }
        };
        this.data = { user_data: default_data, cards_data: cards_data };
        this.handleDataChange = this.handleDataChange.bind(this);
    }

    handleDataChange(key, payload, preview) {
        console.log(key, payload);
        if (key === "career") {
            if (!this.data.user_data.career.user_entered_data) this.data.user_data.career.user_entered_data = true;
            this.data.user_data.career = merge(
                this.data.user_data.career,
                payload
            );
        }

        if (key === "work_environment") {
            if (!this.data.user_data.work_environment.user_entered_data) this.data.user_data.work_environment.user_entered_data = true;
            let tags = this.data.user_data.work_environment.tags;
            let index = payload;
            tags[index].active = !tags[index].active;
            this.data.user_data.work_environment.tags = tags;
            console.log(this.data.user_data.work_environment.tags);
        }
        if (key === "elected") {
            if (preview == 'preview') {
                this.data.user_data.elected.user_entered_data = false;
            }
            else {
                this.data.user_data.elected.user_entered_data = true;
            }
            this.data.user_data.elected = merge(
                this.data.user_data.elected,
                payload
            );
        }
        if (key === "city") {
            this.data.user_data.location = payload;
        }
        localStorage.setItem("storedData", JSON.stringify(this.data.user_data));

        this.data.cards_data.forEach(card => {
            let career_score = 0;
            const coefficientExperience = 5;
            const coefficientSalary = 1;
            const coefficientCareer = 1;

            const salaryMin = card.salary_range[0];
            const salaryMax = card.salary_range[1];
            const salaryMedian = (salaryMin + salaryMax) / 2;
            const primaryTags = card.work_tags_primary;
            const secondaryTags = card.work_tags_secondary;
            const expectedExperience = card.expected_experience;
            const userJobTitle = this.data.user_data.career.job_title;
            const userSalary = this.data.user_data.career.salary;
            const userExperience = this.data.user_data.career.experience;

            if (primaryTags.includes(userJobTitle)) {
                career_score += 50;
            }
            if (secondaryTags.includes(userJobTitle)) {
                career_score += 20;
            }
            if (userSalary < salaryMin) {
                career_score += (salaryMin - userSalary)/200;
            }
            else if (userSalary > salaryMax) {
                career_score -= (userSalary - salaryMax)/200;
            }
            else {
                if  (userSalary > salaryMedian) {
                    career_score -= (userSalary - salaryMedian)/500;
                }
                else {
                    career_score += (salaryMedian - userSalary)/500;
                }
            }
            if (userExperience < expectedExperience) {
                career_score -= (expectedExperience - userExperience) * coefficientExperience;
            }
            if (userExperience > expectedExperience) {
                career_score += (userExperience - expectedExperience) * coefficientExperience;
            }
            if (userExperience === expectedExperience) career_score += coefficientExperience * 2;

            card.career_score = career_score;
            console.log(career_score);
        });
        console.log(this.data.cards_data);
    }

    handleCardClick(id) {
        let card = find(this.data.cards_data, {id});
        card.click_count++;
    }

    componentWillMount() {
        const storedData = JSON.parse(localStorage.getItem("storedData"));
        if (storedData) {
            console.log(storedData);
            this.data.user_data = storedData;
        }
    }

    isFinished() {
        return true;
    }

    render() {
        return (
            <div>
                <main>
                    <Router forceRefresh={false}>
                        <div>
                            <PageHeaderModule />
                            <Route component={ScrollToTop} />
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => <HomePage />}
                                />
                                <Route
                                    exact
                                    path="/karriar"
                                    render={() =>
                                        this.state.isFinishedCareerEnter ? (
                                            <WorkEnvironmentPage
                                                data={this.data}
                                                onDataChange={
                                                    this.handleDataChange
                                                }
                                                onCardClick={
                                                    this.handleCardClick
                                                }
                                            />
                                        ) : (
                                            <CareerPage
                                                data={this.data}
                                                onDataChange={
                                                    this.handleDataChange
                                                }
                                                onCardClick={
                                                    this.handleCardClick
                                                }
                                            />
                                        )
                                    }
                                />
                                <Route
                                    exact
                                    path="/arbetsmiljo"
                                    render={() => (
                                        <WorkEnvironmentPage
                                            data={this.data}
                                            onDataChange={this.handleDataChange}
                                            onCardClick={this.handleCardClick}
                                        />
                                    )}
                                />
                                <Route
                                    exact
                                    path="/fortroendevald"
                                    render={() => (
                                        <ElectedPage
                                            data={this.data}
                                            onDataChange={this.handleDataChange}
                                            onCardClick={this.handleCardClick}
                                        />
                                    )}
                                />
                                <Route
                                    
                                    path="/articles"
                                    render={(match) => (
                                        <ArticlePage
                                            data={this.data}
                                            match={match.match}
                                            articles_data={articles_data}
                                            onCardClick={this.handleCardClick}
                                        />
                                    )}
                                />
                                <Route
                                    exact
                                    path="/bli-medlem"
                                    component={BecomeMember}
                                />
                                <Route
                                    exact
                                    path="/profil"
                                    render={() => (
                                        <Profile
                                            data={this.data}
                                            onDataChange={this.handleDataChange}
                                            onCardClick={this.handleCardClick}
                                        />
                                    )}
                                />
                            </Switch>
                            <Footer />
                        </div>
                    </Router>
                </main>
            </div>
        );
    }
}

// This isn't a real component
// Hackish solution for fixing the routers scroll behaviour
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

export default App;
