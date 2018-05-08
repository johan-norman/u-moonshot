import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import merge from "lodash/merge";

import HomePage from "../HomePage";
import CareerPage from "../CareerPage";
import WorkEnvironmentPage from "../WorkEnvironmentPage";
import ElectedPage from "../ElectedPage";
import BecomeMember from "../BecomeMemberPage";
import Profile from "../ProfilePage";
import ArticlePage from "../ArticlePage";

import PageHeaderModule from "../../modules/PageHeaderModule";

import State from "../../lib/DataHandlers";
import { default_data } from "../../lib/default_data";
import { cards_data } from "../../lib/default_data";
import { articles_data } from "../../lib/default_data";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFinishedCareerEnter: false,
            data: {
                user_data: default_data, 
                cards_data: cards_data
            }
            
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

        this.handleDataChange = this.handleDataChange.bind(this);
    }

    handleDataChange(key, payload) {
        console.log(key, payload);
        if (key === "career") {
            let newState = Object.assign({}, this.state);
            newState.data.user_data.career = merge(
                this.state.data.user_data.career,
                payload
            );
            this.setState(newState);
        }

        if (key === "work_environment") {
            let tags = this.state.data.user_data.work_environment.tags;
            let index = payload;
            tags[index].active = !tags[index].active;
            let newState = Object.assign({}, this.state);
            newState.data.user_data.work_environment.tags = tags;
            this.setState(newState);
            console.log(this.state.data.user_data.work_environment.tags);
        }
        if (key === "elected") {
            let newState = Object.assign({}, this.state);
            newState.data.user_data.elected = merge(
                this.state.data.user_data.elected,
                payload
            );
            this.setState(newState);
        }
        localStorage.setItem("storedData", JSON.stringify(this.state.data.user_data));

        this.state.data.cards_data.forEach(card => {
            let career_score = 0;
            const salaryMin = card.salary_range[0];
            const salaryMax = card.salary_range[1];
            const primaryTags = card.work_tags_primary;
            const secondaryTags = card.work_tags_secondary;
            if (primaryTags.includes(this.state.data.user_data.career.job_title)) {
                career_score += 50;
            }
            if (secondaryTags.includes(this.state.data.user_data.career.job_title)) {
                career_score += 20;
            }
            card.career_score = career_score;
        });
        console.log(this.state.data.cards_data);
    }

    componentWillMount() {
        const storedData = JSON.parse(localStorage.getItem("storedData"));
        if (storedData) {
            console.log(storedData);
            //this.data.user_data = storedData;
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
                                                data={this.state.data}
                                                onDataChange={
                                                    this.handleDataChange
                                                }
                                            />
                                        ) : (
                                            <CareerPage
                                                data={this.state.data}
                                                onDataChange={
                                                    this.handleDataChange
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
                                            data={this.state.data}
                                            onDataChange={this.handleDataChange}
                                        />
                                    )}
                                />
                                <Route
                                    exact
                                    path="/fortroendevald"
                                    render={() => (
                                        <ElectedPage
                                            data={this.state.data}
                                            onDataChange={this.handleDataChange}
                                        />
                                    )}
                                />
                                <Route
                                    
                                    path="/articles"
                                    render={(match) => (
                                        <ArticlePage
                                            data={this.state.data}
                                            match={match.match}
                                            articles_data={articles_data}
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
                                            data={this.state.data}
                                            onDataChange={this.handleDataChange}
                                        />
                                    )}
                                />
                            </Switch>
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
