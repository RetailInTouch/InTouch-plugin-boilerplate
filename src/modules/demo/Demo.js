import React, { Component } from 'react';

import { withRouter }       from 'react-router-dom';
import { connect }          from 'react-redux';

import { IntouchContext }   from 'intouch-plugin-bridge';

import Container            from '@material-ui/core/Container';
import Card                 from '@material-ui/core/Card';
import CardHeader           from '@material-ui/core/CardHeader';
import CardContent          from '@material-ui/core/CardContent';
import Button               from '@material-ui/core/Button';

import Typography           from '@material-ui/core/Typography';

import Page                 from '../../components/page/Page';

class Demo extends Component {

    navigateVnext = () => {
        const { bridge } = this.context;
        bridge.navigate('home');
    }

    navigatePlugin = () => {
        const { history } = this.props;

        history.push('/demo2');
    }

    render() {
        const { user, languages=[], orgunits: orgUnits, userGroups } = this.context;
        const { name, email, groups=[], orgunits=[] } = user;

        return (
            <Page>

                <Container maxWidth="sm">

                    <Card style={{marginBottom: 10}}>
                        <CardHeader title="Demo plugin" style={{height: '40px' }} />
                        <CardContent>

                            <div style={{marginBottom: 30}}>
                                <Typography variant="h6">Gebruiker:</Typography>
                                <Typography>{ name }</Typography>
                                <Typography>{ email }</Typography>
                            </div>

                            <div style={{marginBottom: 30}}>
                                <Typography variant="h6">Groepen:</Typography>
                                {
                                    groups.map((group, index) => {
                                        const { name } = userGroups[group];
                            
                                        return <Typography key={index}>{ name }</Typography>
                                    })
                                }
                            </div>

                            <div style={{marginBottom: 30}}>
                                <Typography variant="h6">Organisatie:</Typography>
                                {
                                    orgunits.map((unit, index) => {
                                        const { name } = orgUnits[unit];
                            
                                        return <Typography key={index}>{ name }</Typography>
                                    })
                                }
                            </div>

                            
                            <div style={{marginBottom: 30}}>
                                <Typography variant="h6">Talen:</Typography>
                                {
                                    languages.map((language, index) => {
                                        return <Typography key={index}>{ language }</Typography>
                                    })
                                }
                            </div>

                        </CardContent>
                    </Card>

                    <Card style={{marginBottom: 10}}>
                        <CardHeader title="Navigatie" style={{height: '40px' }} />
                        <CardContent>
                            <Button variant="contained" color="primary" style={{marginRight: 20}} onClick={this.navigateVnext}> vNext naar home </Button>  
                            <Button variant="contained" color="primary" onClick={this.navigatePlugin}> Plugin navigatie </Button> 
                        </CardContent>
                    </Card>

                    <Card style={{marginBottom: 10}}>
                        <CardHeader title="Plugins" style={{height: '40px' }} />
                        <CardContent>

                            <Typography variant="h6">Interface:</Typography>
                            <a href="https://material-ui.com/">Material ui</a><br/><br/>

                            <Typography variant="h6">Navigatie:</Typography>
                            <a href="https://reacttraining.com/react-router/">React router</a><br/><br/>

                            <Typography variant="h6">Data opslag: </Typography>

                            <a href="https://redux.js.org/">Redux</a><br/>
                            <a href="https://github.com/rt2zz/redux-persist">Redux-persist</a><br/>
                            <a href="https://github.com/reduxjs/reselect">Reselect</a><br/>
                            
                            
                        </CardContent>
                    </Card>

                </Container>
                
            </Page> 
        );

    }

}

Demo.contextType = IntouchContext;

export default withRouter(Demo);