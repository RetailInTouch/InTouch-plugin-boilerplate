import React, { Component } from 'react';

import { withRouter }       from 'react-router-dom';
import { connect }          from 'react-redux';

import Container            from '@material-ui/core/Container';
import Card                 from '@material-ui/core/Card';
import CardActionArea       from '@material-ui/core/CardActionArea';
import CardHeader           from '@material-ui/core/CardHeader';
import CardContent          from '@material-ui/core/CardContent';

import ChevronRight         from '@material-ui/icons/ChevronRight';
import Typography           from '@material-ui/core/Typography';

import Page                 from '../../components/page/Page';

class Demo extends Component {

    render() {
        return (
            <Page>

                <Container maxWidth="sm">

                    <Card style={{marginBottom: 10}}>
                        <CardHeader title="Demo plugin" style={{height: '40px' }} />
                        <CardContent><Typography>Text</Typography></CardContent>
                    </Card>

                </Container>
                
            </Page> 
        );

    }

}

export default Demo;