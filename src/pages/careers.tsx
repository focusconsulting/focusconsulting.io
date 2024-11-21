import Layout from '../layout/Layout'
import React from 'react'
import { Script } from 'gatsby'

const JobBoard = () => (
    <Layout>
        <div id="ashby_embed" style={{ minHeight: '50vh' }} />
        <Script src="https://jobs.ashbyhq.com/focus/embed"></Script>
    </Layout>
)

export default JobBoard
