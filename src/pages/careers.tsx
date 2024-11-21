import { FaSpinner } from 'react-icons/fa'
import Layout from '../layout/Layout'
import React from 'react'
import { Script } from 'gatsby'

const JobBoard = () => (
    <Layout>
        <div id="ashby_embed" style={{ minHeight: '55vh' }}>
            <FaSpinner />
        </div>
        <Script src="https://jobs.ashbyhq.com/focus/embed"></Script>
    </Layout>
)

export default JobBoard
